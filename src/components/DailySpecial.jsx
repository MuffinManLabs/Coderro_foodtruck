import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dailySpecials } from '../data/menu';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const todaySpecial = dailySpecials[new Date().getDay()];

const specials = [
  { icon: '🔥', text: `TODAY\u2019S SPECIAL: ${todaySpecial.name}${todaySpecial.price ? ` \u2014 $${todaySpecial.price.toFixed(2)}` : ''}` },
  { icon: '⭐', text: 'FAN FAVORITE: The Tru Burger \u2014 Lettuce, Tomato, Turkey Bacon, Cheddar & Tru Sauce' },
  { icon: '🍗', text: 'TRY THE Mother Clucker \u2014 Crispy Chicken Perfection' },
  { icon: '🥤', text: 'EVERY MEAL INCLUDES FRIES & A DRINK \u2014 No extra charge!' },
  { icon: '🎉', text: 'BUY 5 MEALS, GET THE 6TH FREE \u2014 Ask for a loyalty card!' },
];

export default function DailySpecial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % specials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative overflow-hidden py-3 px-4"
      style={{
        background: 'linear-gradient(90deg, rgba(232,101,10,0.1) 0%, rgba(212,160,23,0.12) 50%, rgba(232,101,10,0.1) 100%)',
        borderTop: '1px solid rgba(212, 160, 23, 0.15)',
        borderBottom: '1px solid rgba(212, 160, 23, 0.15)',
      }}
    >
      {/* Animated background shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.06) 50%, transparent 100%)',
          animation: 'shimmer 3s ease-in-out infinite',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-sm md:text-base font-semibold tracking-wide"
            style={{ color: 'var(--gold-light)' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="mr-2">{specials[index].icon}</span>
            {specials[index].text}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
