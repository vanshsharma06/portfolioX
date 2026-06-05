import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profilePhoto from '../assets/profile-photo-optimized.png';
import { profile } from '../data/profile.js';

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88svh] items-center overflow-hidden pt-32">
      <div className="site-container grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Available for opportunities</span>
          <h1 className="mt-6 text-balance text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="block gradient-text">{profile.role}</span>
          </h1>
          <p className="muted-copy mt-6 max-w-2xl text-lg sm:text-xl">{profile.shortIntro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumeUrl} className="primary-button" download aria-label="Download resume">
              <FaDownload aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="secondary-button" aria-label="Contact me">
              <FaEnvelope aria-hidden="true" />
              Contact Me
            </a>
            <a
              href={profile.links.github}
              className="icon-button"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={profile.links.linkedin}
              className="icon-button"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {profile.metrics.map((metric) => (
              <div key={metric.label} className="glass-panel p-4">
                <p className="text-2xl font-black text-white">{metric.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase text-smoke">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-3 rounded-lg bg-premium-line blur-2xl" aria-hidden="true" />
          <div className="glass-panel-strong relative overflow-hidden p-3">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-graphite">
              <img
                src={profilePhoto}
                alt={`${profile.name} professional portrait`}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 glass-panel px-4 py-3">
              <p className="text-sm font-bold text-white">Building full stack products</p>
              <p className="mt-1 text-xs text-smoke">React, Node.js, databases, APIs, deployment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
