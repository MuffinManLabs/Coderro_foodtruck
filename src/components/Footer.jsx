import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer id="contact" className="relative pt-0 pb-8 px-4">
      <hr className="section-divider mb-12" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Brand with subtle glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="font-brand text-3xl md:text-4xl mb-2"
            style={{
              color: 'var(--gold-primary)',
              textShadow: '0 0 30px rgba(212, 160, 23, 0.2)',
            }}
          >
            TRU AMBITIONZ
          </p>
          <p className="italic text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
            Real Flavor. Real Hustle.
          </p>
          <p className="text-xs mb-10 flex items-center justify-center gap-1.5" style={{ color: 'var(--gold-dark)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Lynchburg, Virginia
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Phone */}
          <a
            href="tel:+14343164406"
            className="flex-1 flex items-center justify-center gap-3 py-3 px-5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: 'rgba(26, 26, 26, 0.5)',
              border: '1px solid rgba(212, 160, 23, 0.1)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
            }}
            aria-label="Call (434) 316-4406"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="text-sm font-medium">(434) 316-4406</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@truambitionz.com"
            className="flex-1 flex items-center justify-center gap-3 py-3 px-5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: 'rgba(26, 26, 26, 0.5)',
              border: '1px solid rgba(212, 160, 23, 0.1)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
            }}
            aria-label="Email info@truambitionz.com"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span className="text-sm font-medium">info@truambitionz.com</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/TruAmbitionz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 py-3 px-5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: 'rgba(26, 26, 26, 0.5)',
              border: '1px solid rgba(212, 160, 23, 0.1)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
            }}
            aria-label="Visit TruAmbitionz on Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold-primary)">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span className="text-sm font-medium">@TruAmbitionz</span>
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span>&copy; 2025 Tru Ambitionz. All rights reserved.</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Kosher &bull; Halal &bull; Gluten Friendly</span>
        </div>
      </div>

      {/* Back to top */}
      <motion.a
        href="#hero"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center z-40"
        style={{
          background: 'var(--gold-primary)',
          color: 'var(--bg-primary)',
          boxShadow: '0 0 20px rgba(212, 160, 23, 0.3), 0 4px 12px rgba(0,0,0,0.3)',
        }}
        aria-label="Back to top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showTop ? 1 : 0,
          scale: showTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(212, 160, 23, 0.5), 0 4px 16px rgba(0,0,0,0.4)' }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </motion.a>
    </footer>
  );
}
