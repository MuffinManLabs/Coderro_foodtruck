import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';
import AnimatedFlames from './AnimatedFlames';

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.3 + i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax — different speeds for different layers
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const buttonY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* SVG flames with path morphing — licking flames behind the text */}
      <AnimatedFlames />

      {/* Fire glow — fades as you scroll */}
      <motion.div className="hero-fire-glow" style={{ opacity: bgOpacity }} />

      {/* Radial rings — decorative background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="rounded-full border border-[rgba(212,160,23,0.06)]"
          style={{ width: '50vmax', height: '50vmax' }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full border border-[rgba(232,101,10,0.04)]"
          style={{ width: '70vmax', height: '70vmax' }}
          animate={{ scale: [1, 1.03, 1], rotate: [0, -2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* Small badge above headline */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em]"
          style={{
            border: '1px solid rgba(212, 160, 23, 0.25)',
            color: 'var(--gold-primary)',
            background: 'rgba(212, 160, 23, 0.05)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange-fire)] animate-pulse" />
          Now Serving Lynchburg, VA
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display leading-[0.9]"
          style={{
            color: 'var(--gold-primary)',
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            letterSpacing: '0.04em',
            y: titleY,
          }}
        >
          URBAN
          <br />
          <span style={{
            background: 'linear-gradient(90deg, var(--gold-primary), var(--orange-fire), var(--gold-light))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto',
            animation: 'gradientShift 4s ease-in-out infinite',
          }}>
            STREET FOOD
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-5 text-xl md:text-2xl"
          style={{ color: 'var(--text-primary)', y: taglineY }}
        >
          <span className="italic">Real Flavor.</span>
          <span className="mx-3 inline-block w-8 h-[1px] bg-[var(--gold-dark)] align-middle" />
          <span className="italic">Real Hustle.</span>
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ y: buttonY }}
        >
          <MagneticButton href="#menu" className="btn-gold">
            SEE THE MENU
          </MagneticButton>
          <MagneticButton
            href="#location"
            className="btn-gold"
            style={{
              borderColor: 'var(--text-secondary)',
              color: 'var(--text-secondary)',
            }}
          >
            FIND THE TRUCK
          </MagneticButton>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-secondary)' }}>
              Scroll
            </span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="var(--gold-dark)" strokeWidth="1.5">
              <rect x="1" y="1" width="14" height="22" rx="7" />
              <motion.circle
                cx="8" cy="8" r="2"
                fill="var(--gold-primary)"
                animate={{ cy: [8, 14, 8] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
