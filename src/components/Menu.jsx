import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menu';
import FlameText from './FlameText';
import SpiceOMeter from './SpiceOMeter';

function Badge({ badge }) {
  if (!badge) return null;
  const isSpicy = badge.includes('Spicy');
  const isFav = badge.includes('Fan Favorite');
  const isPrice = badge.startsWith('+');

  let classes = 'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ';
  if (isSpicy) classes += 'bg-[rgba(232,101,10,0.15)] text-[var(--orange-fire)]';
  else if (isFav) classes += 'bg-[rgba(212,160,23,0.15)] text-[var(--gold-primary)]';
  else if (isPrice) classes += 'bg-[rgba(212,160,23,0.1)] text-[var(--gold-light)]';
  else classes += 'text-[var(--gold-primary)]';

  return <span className={classes}>{badge}</span>;
}

function MenuCard({ item, index, isFeatured }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className={`relative rounded-lg overflow-hidden ${isFeatured ? 'featured-card' : 'menu-card'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
    >
      {/* Animated gradient border for featured items */}
      {isFeatured && <div className="animated-border" />}

      <div className="relative z-10 p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-menu-item text-base md:text-lg" style={{ color: 'var(--gold-primary)' }}>
              {item.name}
            </h3>
            {item.badge && !item.badge.startsWith('+') && (
              <div className="mt-1.5">
                <Badge badge={item.badge} />
              </div>
            )}
          </div>
          {item.price ? (
            <div className="text-right shrink-0">
              <span className="font-display text-2xl md:text-3xl" style={{ color: 'var(--gold-primary)' }}>
                ${item.price.toFixed(2)}
              </span>
            </div>
          ) : item.badge?.startsWith('+') ? (
            <span className="font-display text-xl shrink-0" style={{ color: 'var(--gold-light)' }}>
              {item.badge}
            </span>
          ) : null}
        </div>

        {/* Ingredients — expand on hover for spicier effect */}
        {item.ingredients.length > 0 && (
          <motion.div
            className="mt-3 flex flex-wrap gap-1.5"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.2 }}
          >
            {item.ingredients.map((ing, i) => (
              <motion.span
                key={ing}
                className="ingredient-chip"
                initial={false}
                animate={{
                  borderColor: isHovered
                    ? 'rgba(212, 160, 23, 0.3)'
                    : 'rgba(184, 168, 138, 0.2)',
                }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
              >
                {ing}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Spice-o-meter for spicy items */}
        {item.heat && <SpiceOMeter heat={item.heat} isVisible={true} />}
      </div>
    </motion.article>
  );
}

const tabVariants = {
  inactive: { scale: 1 },
  active: { scale: 1.05 },
};

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? menuData.categories
      : menuData.categories.filter((c) => c.id === activeFilter);

  const categoryLabels = { burgers: 'Burgers', chicken: 'Chicken', kids: 'Kids', extras: 'Extras' };

  return (
    <section id="menu" className="relative py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <FlameText
            text="TRU MEAL DEALS"
            as="h2"
            className="font-display text-5xl md:text-7xl lg:text-8xl"
            style={{ color: 'var(--gold-primary)' }}
          />

          <motion.div
            className="mt-5 inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-sm md:text-base font-semibold tracking-wide"
            style={{
              background: 'linear-gradient(135deg, rgba(212,160,23,0.1) 0%, rgba(232,101,10,0.08) 100%)',
              color: 'var(--text-primary)',
              border: '1px solid rgba(212, 160, 23, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-lg">🍟</span>
            {menuData.note}
            <span className="text-lg">🥤</span>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div
          className="sticky top-16 md:top-20 z-30 py-3 mb-10 -mx-4 px-4 overflow-x-auto flex gap-2 md:gap-3 justify-center"
          style={{
            background: 'rgba(10, 10, 10, 0.85)',
            backdropFilter: 'blur(12px)',
            scrollbarWidth: 'none',
          }}
        >
          <motion.button
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            variants={tabVariants}
            animate={activeFilter === 'all' ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Show all categories"
          >
            🍽️ All
          </motion.button>
          {menuData.categories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
              variants={tabVariants}
              animate={activeFilter === cat.id ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Show ${cat.name}`}
            >
              {cat.icon} {categoryLabels[cat.id]}
            </motion.button>
          ))}
        </div>

        {/* Menu Categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((category) => (
              <div key={category.id} className="mb-14">
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-display text-2xl md:text-3xl" style={{ color: 'var(--text-primary)' }}>
                    {category.name}
                  </h3>
                  <div className="flex-1 h-[1px] ml-4" style={{ background: 'linear-gradient(90deg, rgba(212,160,23,0.2), transparent)' }} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, i) => (
                    <MenuCard
                      key={item.name}
                      item={item}
                      index={i}
                      isFeatured={item.badge?.includes('Fan Favorite')}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dietary Footer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <hr className="section-divider mb-6 mx-auto max-w-xs" />
          <p className="text-sm flex items-center justify-center gap-3 flex-wrap" style={{ color: 'var(--text-secondary)' }}>
            {menuData.dietary.map((d, i) => (
              <span key={d} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[var(--gold-dark)]">&bull;</span>}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--gold-primary)">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                {d}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
