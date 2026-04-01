import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Loyalty', href: '#loyalty' },
  { label: 'Find Us', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
    if (latest > lastY && latest > 200 && !mobileOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(latest);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Gold line at very top when scrolled */}
      <motion.div
        className="h-[1px] w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--gold-primary), transparent)',
          opacity: scrolled ? 0.3 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <a
          href="#hero"
          className="font-brand text-xl md:text-2xl tracking-wide flex items-center gap-2 group"
          style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ rotate: 20, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            &#9876;&#65039;
          </motion.span>
          <span className="group-hover:text-[var(--gold-light)] transition-colors">TRU AMBITIONZ</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-body text-sm uppercase tracking-widest px-4 py-2 rounded-md transition-all duration-200 hover:bg-[rgba(212,160,23,0.08)] hover:text-[var(--gold-light)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--gold-primary)] transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--gold-primary)] transition-all duration-300 ${
              mobileOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--gold-primary)] transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 md:hidden flex flex-col items-center justify-center gap-6"
            style={{ background: 'rgba(10, 10, 10, 0.98)', backdropFilter: 'blur(16px)' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="font-display text-4xl tracking-widest"
                style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile-only: contact info */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a href="tel:+14343164406" className="text-sm block mb-2" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                (434) 316-4406
              </a>
              <p className="text-xs" style={{ color: 'var(--gold-dark)' }}>
                Lynchburg, VA
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
