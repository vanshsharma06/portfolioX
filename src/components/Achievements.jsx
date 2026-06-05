import { achievements } from '../data/achievements.js';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';

function Achievements() {
  return (
    <AnimatedSection id="achievements" className="section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="Achievements"
          title="Signals that support the developer story."
          copy="Certifications, internship work, academic foundations, and technical accomplishments are grouped for fast review."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <article key={achievement.title} className="glass-panel p-5 transition duration-300 hover:-translate-y-1">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-xl text-ink"
                  style={{ backgroundColor: achievement.accent }}
                >
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-black text-white">{achievement.title}</h3>
                <p className="muted-copy mt-3 text-sm">{achievement.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Achievements;
