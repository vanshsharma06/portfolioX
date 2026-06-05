import profilePhoto from '../assets/profile-photo-optimized.png';
import { profile } from '../data/profile.js';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';

function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="About"
          title="A full stack developer with product sense."
          copy="Building scalable web applications with a focus on user experience, performance, and business impact."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel-strong p-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-graphite">
              <img
                src={profilePhoto}
                alt={`${profile.name} avatar`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-bold uppercase text-mint">Location</p>
                <p className="mt-1 font-semibold text-white">{profile.location}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-bold uppercase text-aqua">Availability</p>
                <p className="mt-1 font-semibold text-white">{profile.availability}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <article className="glass-panel p-6 sm:p-8">
              <h3 className="text-2xl font-black text-white">Professional Summary</h3>
              <p className="muted-copy mt-4">{profile.summary}</p>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="glass-panel p-6">
                <h3 className="text-xl font-black text-white">Education</h3>
                {profile.education.map((item) => (
                  <div key={item.title} className="mt-4">
                    <p className="font-bold text-mint">{item.title}</p>
                    <p className="muted-copy mt-2 text-sm">{item.detail}</p>
                  </div>
                ))}
              </article>

              <article className="glass-panel p-6">
                <h3 className="text-xl font-black text-white">Internship Experience</h3>
                <p className="muted-copy mt-4 text-sm">{profile.internship}</p>
              </article>
            </div>

            <article className="glass-panel p-6">
              <h3 className="text-xl font-black text-white">Career Objective</h3>
              <p className="muted-copy mt-4 text-sm">{profile.objective}</p>
            </article>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default About;
