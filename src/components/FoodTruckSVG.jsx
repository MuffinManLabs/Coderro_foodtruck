import { motion } from 'framer-motion';

export default function FoodTruckSVG() {
  return (
    <motion.svg
      viewBox="0 0 320 160"
      className="w-full max-w-md mx-auto"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <defs>
        <linearGradient id="truckBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="truckAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#E8650A" />
        </linearGradient>
        <filter id="truckGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Road */}
      <rect x="0" y="135" width="320" height="25" fill="#111" rx="2" />
      <line x1="10" y1="148" x2="50" y2="148" stroke="#333" strokeWidth="2" strokeDasharray="8 8" />
      <line x1="70" y1="148" x2="130" y2="148" stroke="#333" strokeWidth="2" strokeDasharray="8 8" />
      <line x1="150" y1="148" x2="210" y2="148" stroke="#333" strokeWidth="2" strokeDasharray="8 8" />
      <line x1="230" y1="148" x2="310" y2="148" stroke="#333" strokeWidth="2" strokeDasharray="8 8" />

      {/* Truck body */}
      <rect x="60" y="55" width="200" height="80" rx="6" fill="url(#truckBody)" stroke="#333" strokeWidth="1.5" />

      {/* Cab */}
      <path d="M240 65 L280 65 Q290 65 290 75 L290 135 L240 135 Z" fill="url(#truckBody)" stroke="#333" strokeWidth="1.5" />

      {/* Windshield */}
      <path d="M248 70 L278 70 Q285 70 285 78 L285 105 L248 105 Z" fill="#1a2a3a" opacity="0.8" stroke="#444" strokeWidth="1" />
      <line x1="266" y1="70" x2="266" y2="105" stroke="#333" strokeWidth="0.5" />

      {/* Serving window */}
      <rect x="100" y="65" width="70" height="40" rx="4" fill="#1a1a1a" stroke="#D4A017" strokeWidth="1.5" />
      {/* Window awning */}
      <path d="M95 63 L175 63 L170 55 L100 55 Z" fill="#D4A017" opacity="0.9" />

      {/* Gold accent stripe */}
      <rect x="60" y="100" width="180" height="4" rx="2" fill="url(#truckAccent)" filter="url(#truckGlow)" />

      {/* Brand text on truck */}
      <text x="135" y="125" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="14" fill="#D4A017" letterSpacing="2">
        TRU AMBITIONZ
      </text>

      {/* Wheels */}
      <g>
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '105px 135px' }}
        >
          <circle cx="105" cy="135" r="14" fill="#222" stroke="#444" strokeWidth="2" />
          <circle cx="105" cy="135" r="6" fill="#333" />
          <line x1="105" y1="121" x2="105" y2="149" stroke="#555" strokeWidth="1" />
          <line x1="91" y1="135" x2="119" y2="135" stroke="#555" strokeWidth="1" />
        </motion.g>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '265px 135px' }}
        >
          <circle cx="265" cy="135" r="14" fill="#222" stroke="#444" strokeWidth="2" />
          <circle cx="265" cy="135" r="6" fill="#333" />
          <line x1="265" y1="121" x2="265" y2="149" stroke="#555" strokeWidth="1" />
          <line x1="251" y1="135" x2="279" y2="135" stroke="#555" strokeWidth="1" />
        </motion.g>
      </g>

      {/* Steam from serving window */}
      <motion.g opacity="0.4">
        <motion.path
          d="M120 60 Q125 45 120 35"
          stroke="#888"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [0, -8, 0], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M135 58 Q140 42 135 30"
          stroke="#888"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.path
          d="M150 60 Q155 48 150 38"
          stroke="#888"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [0, -6, 0], opacity: [0.35, 0.1, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </motion.g>

      {/* Headlight glow */}
      <circle cx="290" cy="110" r="4" fill="#F5C842" opacity="0.8" />
      <circle cx="290" cy="110" r="8" fill="#F5C842" opacity="0.15" />
    </motion.svg>
  );
}
