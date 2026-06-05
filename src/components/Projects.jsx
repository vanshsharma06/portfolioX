import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects.js';
import AnimatedSection from './AnimatedSection.jsx';
import ProjectVisual from './ProjectVisual.jsx';
import SectionHeading from './SectionHeading.jsx';

function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Project cards built for quick recruiter scanning."
          copy="Each card keeps the story crisp: what it does, what it uses, and where to inspect the code or live experience."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="glass-panel overflow-hidden p-4"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectVisual project={project} />
              <div className="p-2 pt-5 sm:p-4">
                <h3 className="text-2xl font-black text-white">{project.title}</h3>
                <p className="muted-copy mt-3 text-sm">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-smoke"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    className="secondary-button px-4 py-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub aria-hidden="true" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="primary-button px-4 py-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Projects;
