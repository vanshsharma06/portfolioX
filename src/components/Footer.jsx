import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data/profile.js';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' }
];

const socials = [
  { href: profile.links.github, label: 'GitHub', icon: FaGithub },
  { href: profile.links.linkedin, label: 'LinkedIn', icon: FaLinkedinIn },
  { href: profile.links.gmail, label: 'Gmail', icon: FaEnvelope },
  { href: profile.links.whatsapp, label: 'WhatsApp', icon: FaWhatsapp }
];

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-premium-line text-sm font-black text-white">
              VS
            </span>
            <span className="font-black text-white">{profile.name}</span>
          </a>
          <p className="muted-copy mt-3 max-w-md text-sm">
            Full Stack Developer focused on polished interfaces, strong APIs, and recruiter-friendly
            product storytelling.
          </p>
          <p className="mt-4 text-xs font-semibold text-smoke">
            Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-smoke transition hover:border-mint/40 hover:text-mint"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="icon-button"
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                title={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
