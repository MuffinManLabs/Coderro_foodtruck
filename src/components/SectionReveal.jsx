import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Wraps a section so it "burns in" from the center outward.
 * The content expands via clip-path while a bright ember ring
 * and center flash make the effect dramatically visible.
 */
export default function SectionReveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative">
      {/* Content with expanding circular clip */}
      <motion.div
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={isInView ? { clipPath: 'circle(100% at 50% 50%)' } : {}}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

      {/* Thick, bright expanding ember ring */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: '300vmax',
            height: '300vmax',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle,
              transparent 45%,
              rgba(232, 101, 10, 0.7) 47%,
              rgba(245, 200, 66, 0.6) 48.5%,
              rgba(212, 160, 23, 0.8) 49.5%,
              rgba(245, 200, 66, 0.6) 50.5%,
              rgba(232, 101, 10, 0.7) 52%,
              rgba(196, 77, 4, 0.3) 54%,
              transparent 57%
            )`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: [0, 1], opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], opacity: { duration: 2.0 } }}
        />
      </div>

      {/* Bright flash at center — ignition point */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          top: '50%',
          left: '50%',
          width: 400,
          height: 400,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(245, 200, 66, 0.6) 0%, rgba(232, 101, 10, 0.3) 30%, rgba(212, 160, 23, 0.1) 55%, transparent 75%)',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: [0, 2.5, 4], opacity: [0, 1, 0] } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Secondary outer glow wave */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: '300vmax',
            height: '300vmax',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle,
              transparent 46%,
              rgba(212, 160, 23, 0.15) 49%,
              rgba(232, 101, 10, 0.1) 51%,
              transparent 55%
            )`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: [0, 1.1], opacity: [0, 0.8, 0] } : {}}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
      </div>
    </div>
  );
}
