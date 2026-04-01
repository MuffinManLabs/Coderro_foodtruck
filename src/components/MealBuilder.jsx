import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menu';
import FlameText from './FlameText';

// Gather all main items (burgers + chicken) and sides
const mains = [
  ...menuData.categories.find((c) => c.id === 'burgers').items,
  ...menuData.categories.find((c) => c.id === 'chicken').items,
];
const sides = menuData.categories.find((c) => c.id === 'extras').items;

function AnimatedPrice({ value }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    if (value === prevRef.current) return;
    const start = prevRef.current;
    const diff = value - start;
    const duration = 400;
    let startTime;

    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + diff * eased);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
    prevRef.current = value;
  }, [value]);

  return display > 0 ? `$${display.toFixed(2)}` : '$0.00';
}

function SelectCard({ item, isSelected, onClick, type }) {
  return (
    <motion.button
      className="text-left w-full p-3 rounded-lg transition-colors"
      style={{
        background: isSelected ? 'rgba(212, 160, 23, 0.12)' : 'rgba(26, 26, 26, 0.6)',
        border: isSelected ? '2px solid var(--gold-primary)' : '2px solid rgba(255,255,255,0.05)',
        cursor: 'pointer',
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Selection indicator */}
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{
              border: isSelected ? '2px solid var(--gold-primary)' : '2px solid rgba(255,255,255,0.15)',
              background: isSelected ? 'var(--gold-primary)' : 'transparent',
            }}
          >
            {isSelected && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--bg-primary)" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <div>
            <span
              className="font-menu-item text-sm"
              style={{ color: isSelected ? 'var(--gold-primary)' : 'var(--text-primary)' }}
            >
              {item.name}
            </span>
            {item.badge && !item.badge.startsWith('+') && (
              <span className="ml-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                {item.badge}
              </span>
            )}
          </div>
        </div>
        <span
          className="font-display text-lg shrink-0"
          style={{ color: isSelected ? 'var(--gold-light)' : 'var(--text-secondary)' }}
        >
          {item.price ? `$${item.price.toFixed(2)}` : item.badge || 'Included'}
        </span>
      </div>
    </motion.button>
  );
}

export default function MealBuilder() {
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedSide, setSelectedSide] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const mainItem = mains.find((m) => m.name === selectedMain);
  const sideItem = sides.find((s) => s.name === selectedSide);

  const basePrice = mainItem?.price || 0;
  const sideExtra = sideItem?.badge === '+$2' ? 2 : 0;
  const total = basePrice + sideExtra;

  useEffect(() => {
    setShowResult(selectedMain !== null);
  }, [selectedMain, selectedSide]);

  return (
    <section className="relative py-16 md:py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <FlameText
            text="BUILD YOUR MEAL"
            as="h2"
            className="font-display text-4xl md:text-6xl lg:text-7xl"
            style={{ color: 'var(--gold-primary)' }}
          />
          <motion.p
            className="mt-3 text-base md:text-lg max-w-md mx-auto"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Pick your main + upgrade your side. See your total instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Step 1: Pick a main */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Mains */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center font-display text-sm"
                  style={{ background: 'var(--gold-primary)', color: 'var(--bg-primary)' }}
                >
                  1
                </span>
                <h3 className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>
                  CHOOSE YOUR MAIN
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {mains.map((item) => (
                  <SelectCard
                    key={item.name}
                    item={item}
                    type="main"
                    isSelected={selectedMain === item.name}
                    onClick={() => setSelectedMain(selectedMain === item.name ? null : item.name)}
                  />
                ))}
              </div>
            </div>

            {/* Sides */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center font-display text-sm"
                  style={{ background: 'var(--gold-primary)', color: 'var(--bg-primary)' }}
                >
                  2
                </span>
                <h3 className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>
                  PICK YOUR SIDE
                </h3>
                <span className="text-xs ml-auto" style={{ color: 'var(--text-secondary)' }}>
                  Fries & drink included!
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sides.map((item) => (
                  <SelectCard
                    key={item.name}
                    item={item}
                    type="side"
                    isSelected={selectedSide === item.name}
                    onClick={() => setSelectedSide(selectedSide === item.name ? null : item.name)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="sticky top-28 rounded-xl p-6"
              style={{
                background: 'rgba(10, 10, 10, 0.7)',
                border: '1px solid rgba(212, 160, 23, 0.15)',
                boxShadow: total > 0 ? '0 0 40px rgba(212, 160, 23, 0.08)' : 'none',
              }}
            >
              <h3
                className="font-display text-xl mb-4 text-center"
                style={{ color: 'var(--gold-primary)' }}
              >
                YOUR MEAL
              </h3>

              {/* Summary items */}
              <div className="space-y-3 mb-5">
                <div
                  className="flex justify-between items-center py-2 px-3 rounded-md"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Main</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={selectedMain || 'none'}
                      className="text-sm font-semibold"
                      style={{ color: selectedMain ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {selectedMain || '—'}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div
                  className="flex justify-between items-center py-2 px-3 rounded-md"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Side</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={selectedSide || 'none'}
                      className="text-sm font-semibold"
                      style={{ color: selectedSide ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {selectedSide || 'Included fries'}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div
                  className="flex justify-between items-center py-2 px-3 rounded-md text-xs"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span>Drink</span>
                  <span>Included</span>
                </div>

                {sideExtra > 0 && (
                  <motion.div
                    className="flex justify-between items-center py-2 px-3 rounded-md text-xs"
                    style={{ color: 'var(--orange-fire)' }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <span>Loaded upgrade</span>
                    <span>+$2.00</span>
                  </motion.div>
                )}
              </div>

              {/* Divider */}
              <div
                className="h-[1px] mb-4"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)' }}
              />

              {/* Total */}
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest block mb-1" style={{ color: 'var(--text-secondary)' }}>
                  Meal Total
                </span>
                <motion.span
                  className="font-display text-4xl md:text-5xl block"
                  style={{
                    color: total > 0 ? 'var(--gold-primary)' : 'var(--text-secondary)',
                    textShadow: total > 0 ? '0 0 20px rgba(212, 160, 23, 0.3)' : 'none',
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  key={total}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedPrice value={total} />
                </motion.span>
                {total > 0 && (
                  <motion.span
                    className="text-xs block mt-1"
                    style={{ color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Fries & drink included
                  </motion.span>
                )}
              </div>

              {/* Reset */}
              {(selectedMain || selectedSide) && (
                <motion.button
                  className="mt-5 w-full py-2 rounded-md text-sm font-semibold uppercase tracking-wider"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer',
                  }}
                  onClick={() => { setSelectedMain(null); setSelectedSide(null); }}
                  whileHover={{ background: 'rgba(255,255,255,0.08)' }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Start Over
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
