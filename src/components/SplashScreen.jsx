import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('enter'); // enter -> reveal -> exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 600);
    const t2 = setTimeout(() => setPhase('exit'), 2200);
    const t3 = setTimeout(() => onComplete(), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#0a0a0a' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* Background fire pulse */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'reveal' ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(232,101,10,0.15) 0%, rgba(196,77,4,0.05) 40%, transparent 70%)',
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Crossed knives */}
            <motion.div
              className="text-5xl md:text-7xl mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: phase === 'enter' ? 0 : 1,
                rotate: phase === 'enter' ? -180 : 0,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              ⚔️
            </motion.div>

            {/* Brand name — each letter staggers in */}
            <div className="overflow-hidden">
              <motion.h1
                className="font-brand text-4xl md:text-6xl tracking-wider"
                style={{ color: 'var(--gold-primary)' }}
                initial={{ y: 80, opacity: 0 }}
                animate={{
                  y: phase !== 'enter' ? 0 : 80,
                  opacity: phase !== 'enter' ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                TRU AMBITIONZ
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              className="mt-3 text-sm md:text-base tracking-[0.3em] uppercase"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, letterSpacing: '0.6em' }}
              animate={{
                opacity: phase === 'reveal' ? 1 : 0,
                letterSpacing: phase === 'reveal' ? '0.3em' : '0.6em',
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Urban Street Food
            </motion.p>

            {/* Underline fire bar */}
            <motion.div
              className="mt-4 h-[2px] rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, var(--orange-fire), var(--gold-primary), var(--orange-fire), transparent)',
              }}
              initial={{ width: 0 }}
              animate={{ width: phase !== 'enter' ? 200 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
