import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import FlameText from './FlameText';

function StatCard({ value, suffix, label }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl md:text-5xl block" style={{ color: 'var(--gold-primary)' }}>
        {count}{suffix}
      </span>
      <span className="text-xs uppercase tracking-widest mt-1 block" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </span>
    </div>
  );
}

function KnivesSVG() {
  return (
    <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-52 md:h-52 mx-auto" fill="none">
      <defs>
        <filter id="knivesGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#E8650A" />
        </linearGradient>
      </defs>
      <g filter="url(#knivesGlow)" opacity="0.9">
        <rect x="70" y="30" width="8" height="90" rx="2" fill="url(#bladeGrad)" transform="rotate(-25 100 100)" />
        <rect x="68" y="120" width="12" height="30" rx="3" fill="#A67C00" transform="rotate(-25 100 100)" />
      </g>
      <g filter="url(#knivesGlow)" opacity="0.9">
        <rect x="122" y="30" width="8" height="90" rx="2" fill="url(#bladeGrad)" transform="rotate(25 100 100)" />
        <rect x="120" y="120" width="12" height="30" rx="3" fill="#A67C00" transform="rotate(25 100 100)" />
      </g>
      <circle cx="100" cy="100" r="24" stroke="#D4A017" strokeWidth="2" fill="none" opacity="0.5" />
      <text x="100" y="106" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="18" fill="#D4A017">T A</text>
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-4 ember-glow-top overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 px-4 rounded-xl"
          style={{
            background: 'rgba(26, 26, 26, 0.6)',
            border: '1px solid rgba(212, 160, 23, 0.1)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StatCard value={1} suffix="/2 LB" label="Burger Patties" />
          <StatCard value={15} suffix="+" label="Menu Items" />
          <StatCard value={5} suffix="" label="Meals to Free One" />
          <StatCard value={100} suffix="%" label="Halal & Kosher" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FlameText
              text="THE TRU STORY"
              as="h2"
              className="font-display text-4xl md:text-6xl mb-6"
              style={{ color: 'var(--gold-primary)', justifyContent: 'flex-start' }}
            />

            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                Born from a love of bold flavors and an even bolder hustle, Tru
                Ambitionz brings premium street food to the streets of Lynchburg.
                Every burger is a half-pound of hand-seasoned, flat-top grilled
                perfection.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Every chicken sandwich is crispy, craveable, and crafted
                with purpose. We&rsquo;re not just serving food &mdash; we&rsquo;re building
                something real.
              </p>
            </div>

            {/* Dietary badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Kosher', 'Halal', 'Gluten Friendly'].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full"
                  style={{
                    color: 'var(--gold-primary)',
                    border: '1px solid rgba(212, 160, 23, 0.2)',
                    background: 'rgba(212, 160, 23, 0.05)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold-primary)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <KnivesSVG />
            </motion.div>
            <div className="mt-6 text-center">
              <span className="font-brand text-2xl md:text-3xl block" style={{ color: 'var(--gold-primary)' }}>
                &ldquo;Real Flavor.
              </span>
              <span className="font-brand text-2xl md:text-3xl block" style={{ color: 'var(--orange-fire)' }}>
                Real Hustle.&rdquo;
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
