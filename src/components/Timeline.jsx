import { timeline } from '../data/timeline.js';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';

function Timeline() {
  return (
    <AnimatedSection id="timeline" className="section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="Experience"
          title="A clear path through education, projects, and growth."
          copy="The vertical timeline gives recruiters a fast narrative of learning, internships, projects, and milestone achievements."
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative grid gap-6 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/12 md:before:left-1/2" role="list" aria-label="Timeline progression">
            {timeline.map((item, index) => (
              <article
                key={`${item.year}-${item.title}`}
                className={`relative grid gap-4 md:grid-cols-2 ${
                  index % 2 === 0 ? '' : 'md:[&>div:first-child]:col-start-2'
                }`}
                role="listitem"
              >
                <div className="glass-panel ml-10 p-5 md:ml-0">
                  <span className="text-sm font-black text-mint">{item.year}</span>
                  <p className="mt-1 text-xs font-bold uppercase text-aqua">{item.type}</p>
                  <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                  <p className="muted-copy mt-3 text-sm">{item.description}</p>
                </div>
                <span className="absolute left-1 top-6 h-7 w-7 rounded-full border border-mint/50 bg-ink shadow-glow md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Timeline;
