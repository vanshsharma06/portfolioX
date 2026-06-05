import { useMemo } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaWhatsapp
} from 'react-icons/fa';

import { profile } from '../data/profile.js';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';

function Contact() {
  const [state, handleSubmit] = useForm('mykvqgqy');

  const contactLinks = useMemo(
    () => [
      { label: 'Email', href: profile.links.gmail, icon: FaEnvelope },
      { label: 'GitHub', href: profile.links.github, icon: FaGithub },
      { label: 'LinkedIn', href: profile.links.linkedin, icon: FaLinkedinIn },
      { label: 'WhatsApp', href: profile.links.whatsapp, icon: FaWhatsapp }
    ],
    []
  );

  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="Contact"
          title="Make the next step effortless."
          copy="Recruiters, clients, and teams can use the form or jump directly to email, GitHub, LinkedIn, and WhatsApp."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="glass-panel-strong p-6">
            <h3 className="text-2xl font-black text-white">
              Let us build something useful.
            </h3>

            <p className="muted-copy mt-4">
              Send a role, project brief, collaboration idea, or interview
              invite. The form delivers messages directly to my inbox.
            </p>

            <div className="mt-6 grid gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex min-h-14 items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-mint/50 hover:bg-mint/10 hover:text-mint"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <Icon className="text-lg" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </aside>

          <form
            className="glass-panel p-5 sm:p-6"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="text-sm font-bold text-white">Name</span>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black/20 px-4 text-sm text-white outline-none focus:border-mint focus:ring-2 focus:ring-mint/30"
                />

                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </label>

              <label>
                <span className="text-sm font-bold text-white">Email</span>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black/20 px-4 text-sm text-white outline-none focus:border-mint focus:ring-2 focus:ring-mint/30"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-white">Subject</span>

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black/20 px-4 text-sm text-white outline-none focus:border-mint focus:ring-2 focus:ring-mint/30"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-white">Message</span>

              <textarea
                name="message"
                rows="7"
                required
                placeholder="Tell me about your project, role, or collaboration."
                className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none focus:border-mint focus:ring-2 focus:ring-mint/30"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>

            {state.succeeded && (
              <div className="mt-4 rounded-lg border border-mint/40 bg-mint/10 p-4 text-sm font-semibold text-mint">
                Message sent successfully. I will get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={state.submitting}
              className="primary-button mt-5 w-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaPaperPlane />
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Contact;