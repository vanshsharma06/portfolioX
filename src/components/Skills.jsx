import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills.js';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';

function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="Skills"
          title="Modern stack, practical delivery habits."
          copy="Grouped skill cards make the core technology profile easy to scan from frontend craft to backend structure."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.category} className="glass-panel p-5 sm:p-6">
              <div className="mb-5">
                <h3 className="text-2xl font-black text-white">{group.category}</h3>
                <p className="muted-copy mt-2 text-sm">{group.summary}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-mint/40 hover:bg-mint/[0.06]"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-xl text-mint">
                            <Icon aria-hidden="true" />
                          </span>
                          <p className="truncate font-bold text-white">{skill.name}</p>
                        </div>
                        <span className="text-sm font-bold text-aqua">{skill.level}%</span>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-mint via-aqua to-amber"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Skills;
