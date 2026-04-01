import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ─── Stylized SVG food illustrations ─── */

function BurgerSVG() {
  return (
    <svg viewBox="0 0 200 180" className="w-40 h-36 md:w-52 md:h-44">
      {/* Top bun */}
      <path d="M 40,70 Q 40,30 100,28 Q 160,30 160,70 Z" fill="#B87333" />
      <path d="M 40,70 Q 40,30 100,28 Q 160,30 160,70 Z" fill="url(#bunHighlight)" />
      {/* Sesame seeds */}
      <ellipse cx="75" cy="46" rx="5" ry="3" fill="#F5E6C8" opacity="0.8" transform="rotate(-15 75 46)" />
      <ellipse cx="105" cy="40" rx="5" ry="3" fill="#F5E6C8" opacity="0.8" transform="rotate(10 105 40)" />
      <ellipse cx="130" cy="48" rx="5" ry="3" fill="#F5E6C8" opacity="0.8" transform="rotate(-5 130 48)" />
      {/* Lettuce — wavy edge */}
      <path d="M 32,74 Q 48,66 64,74 Q 80,66 96,74 Q 112,66 128,74 Q 144,66 160,74 Q 168,74 168,80 L 32,80 Z" fill="#4CAF50" />
      {/* Cheese slice — draped over edges */}
      <path d="M 30,80 L 170,80 L 175,92 Q 168,98 165,92 L 35,92 Q 32,98 25,92 Z" fill="#FFD700" />
      {/* Patty */}
      <rect x="34" y="92" width="132" height="22" rx="4" fill="#5D3A1A" />
      <rect x="34" y="92" width="132" height="8" rx="2" fill="#7B4F2A" opacity="0.6" />
      {/* Tomato */}
      <rect x="38" y="114" width="124" height="10" rx="5" fill="#D32F2F" opacity="0.85" />
      {/* Bottom bun */}
      <path d="M 38,124 L 162,124 Q 168,148 100,150 Q 32,148 38,124 Z" fill="#B87333" />
      {/* Plate shadow */}
      <ellipse cx="100" cy="158" rx="80" ry="10" fill="rgba(212, 160, 23, 0.08)" />
      <defs>
        <linearGradient id="bunHighlight" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FriesSVG() {
  return (
    <svg viewBox="0 0 180 200" className="w-36 h-40 md:w-44 md:h-48">
      {/* Fries sticking out of container */}
      <rect x="58" y="28" width="9" height="58" rx="3" fill="#F5C842" transform="rotate(-10 62 57)" />
      <rect x="72" y="20" width="9" height="65" rx="3" fill="#FFD700" transform="rotate(4 76 52)" />
      <rect x="86" y="24" width="9" height="62" rx="3" fill="#E8A020" transform="rotate(-4 90 55)" />
      <rect x="100" y="22" width="9" height="64" rx="3" fill="#F5C842" transform="rotate(6 104 54)" />
      <rect x="114" y="26" width="9" height="60" rx="3" fill="#FFD700" transform="rotate(-7 118 56)" />
      <rect x="65" y="32" width="8" height="52" rx="3" fill="#E8A020" transform="rotate(6 69 58)" />
      <rect x="107" y="30" width="8" height="54" rx="3" fill="#F5C842" transform="rotate(-3 111 57)" />
      {/* Container */}
      <path d="M 48,82 L 42,172 Q 42,180 90,180 Q 138,180 138,172 L 132,82 Z" fill="#C44D04" />
      <path d="M 48,82 L 42,172 L 52,172 L 58,82 Z" fill="#9A2000" />
      {/* Container rim */}
      <rect x="45" y="78" width="90" height="8" rx="2" fill="#E8650A" />
      {/* Brand text */}
      <text x="90" y="138" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="18" fill="#FFD700" letterSpacing="3" opacity="0.9">TRU</text>
      {/* Diamond pattern */}
      <path d="M 56,150 L 62,145 L 68,150 L 62,155 Z" fill="rgba(255,215,0,0.2)" />
      <path d="M 76,150 L 82,145 L 88,150 L 82,155 Z" fill="rgba(255,215,0,0.2)" />
      <path d="M 96,150 L 102,145 L 108,150 L 102,155 Z" fill="rgba(255,215,0,0.2)" />
      <path d="M 116,150 L 122,145 L 128,150 L 122,155 Z" fill="rgba(255,215,0,0.2)" />
    </svg>
  );
}

function DrinkSVG() {
  return (
    <svg viewBox="0 0 160 210" className="w-32 h-42 md:w-40 md:h-52">
      {/* Straw */}
      <rect x="92" y="10" width="5" height="70" rx="2" fill="#E8650A" transform="rotate(6 94 45)" />
      <rect x="90" y="6" width="20" height="5" rx="2" fill="#C44D04" transform="rotate(6 100 8)" />
      {/* Lid */}
      <ellipse cx="80" cy="58" rx="38" ry="7" fill="#333" />
      <rect x="42" y="52" width="76" height="10" rx="3" fill="#444" />
      {/* Cup body */}
      <path d="M 46,60 L 40,180 Q 40,195 80,195 Q 120,195 120,180 L 114,60 Z" fill="#1a1a1a" />
      {/* Cup highlight */}
      <path d="M 50,64 L 46,176 L 52,176 L 56,64 Z" fill="rgba(255,255,255,0.06)" />
      {/* Brand stripe */}
      <path d="M 44,105 L 116,105 L 115,130 L 45,130 Z" fill="#D4A017" />
      <text x="80" y="123" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="16" fill="#0a0a0a" fontWeight="bold" letterSpacing="2">TRU</text>
      {/* Lower accent line */}
      <path d="M 43,140 L 117,140 L 117,143 L 43,143 Z" fill="rgba(212, 160, 23, 0.3)" />
      {/* Ice cubes visible through cup */}
      <rect x="55" y="145" width="14" height="12" rx="3" fill="rgba(255,255,255,0.06)" transform="rotate(8 62 151)" />
      <rect x="72" y="150" width="14" height="12" rx="3" fill="rgba(255,255,255,0.05)" transform="rotate(-5 79 156)" />
      <rect x="90" y="148" width="12" height="10" rx="3" fill="rgba(255,255,255,0.04)" transform="rotate(3 96 153)" />
    </svg>
  );
}

/* ─── Parallax section ─── */

export default function ParallaxPlates() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Each plate moves at a different speed + slight rotation
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const y3 = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const r1 = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const r2 = useTransform(scrollYProgress, [0, 1], [4, -4]);
  const r3 = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center items-end gap-6 md:gap-16 lg:gap-24">
          {/* Burger */}
          <motion.div
            className="flex flex-col items-center"
            style={{ y: y1, rotate: r1 }}
          >
            <motion.div
              className="opacity-50 hover:opacity-90 transition-opacity duration-500"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <BurgerSVG />
            </motion.div>
            <span
              className="mt-2 text-[10px] uppercase tracking-[0.25em] font-bold"
              style={{ color: 'var(--text-secondary)', opacity: 0.5 }}
            >
              Burgers
            </span>
          </motion.div>

          {/* Fries — slightly larger and higher */}
          <motion.div
            className="flex flex-col items-center -mt-6"
            style={{ y: y2, rotate: r2 }}
          >
            <motion.div
              className="opacity-50 hover:opacity-90 transition-opacity duration-500"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <FriesSVG />
            </motion.div>
            <span
              className="mt-2 text-[10px] uppercase tracking-[0.25em] font-bold"
              style={{ color: 'var(--text-secondary)', opacity: 0.5 }}
            >
              Sides
            </span>
          </motion.div>

          {/* Drink */}
          <motion.div
            className="flex flex-col items-center"
            style={{ y: y3, rotate: r3 }}
          >
            <motion.div
              className="opacity-50 hover:opacity-90 transition-opacity duration-500"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <DrinkSVG />
            </motion.div>
            <span
              className="mt-2 text-[10px] uppercase tracking-[0.25em] font-bold"
              style={{ color: 'var(--text-secondary)', opacity: 0.5 }}
            >
              Drinks
            </span>
          </motion.div>
        </div>

        {/* Centered caption */}
        <motion.p
          className="text-center mt-8 text-xs uppercase tracking-[0.3em]"
          style={{ color: 'var(--gold-dark)', opacity: 0.4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
        >
          Every meal includes fries &amp; a drink
        </motion.p>
      </div>
    </section>
  );
}
