import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaDownload, FaTimes } from 'react-icons/fa';
import { profile } from '../data/profile.js';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-1 z-50 transition duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav className="site-container">
        <div className="glass-panel flex min-h-16 items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-premium-line text-sm font-black text-white">
              VS
            </span>
            <span className="hidden text-sm font-bold text-white sm:block">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-smoke transition hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={profile.resumeUrl} className="secondary-button px-4 py-2" download>
              <FaDownload aria-hidden="true" />
              Resume
            </a>
          </div>

          <button
            type="button"
            className="icon-button lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="glass-panel mt-3 grid gap-2 p-3 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-smoke transition hover:bg-white/[0.06] hover:text-white"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              className="secondary-button mt-2 w-full"
              download
              onClick={closeMenu}
            >
              <FaDownload aria-hidden="true" />
              Resume
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
