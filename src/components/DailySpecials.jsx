import { motion } from 'framer-motion';
import { dailySpecials } from '../data/menu';
import FlameText from './FlameText';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = DAYS[new Date().getDay()];

function SpecialCard({ special, isToday, index }) {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden"
      style={{
        background: isToday
          ? 'linear-gradient(135deg, rgba(212,160,23,0.12) 0%, rgba(232,101,10,0.08) 100%)'
          : 'var(--bg-card)',
        border: isToday
          ? '1px solid rgba(212, 160, 23, 0.4)'
          : '1px solid rgba(212, 160, 23, 0.08)',
        boxShadow: isToday ? '0 0 30px rgba(212, 160, 23, 0.12)' : 'none',
      }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{
        borderColor: 'rgba(212, 160, 23, 0.3)',
        transition: { duration: 0.2 },
      }}
    >
      {/* "TODAY" badge */}
      {isToday && (
        <div
          className="absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] rounded-bl-lg"
          style={{
            background: 'var(--gold-primary)',
            color: 'var(--bg-primary)',
          }}
        >
          Today
        </div>
      )}

      <div className="p-5">
        {/* Day */}
        <p
          className="font-display text-sm tracking-[0.2em] uppercase mb-1"
          style={{ color: isToday ? 'var(--gold-light)' : 'var(--text-secondary)' }}
        >
          {special.day}
        </p>

        {/* Dish name */}
        <h4
          className="font-display text-xl md:text-2xl mb-2"
          style={{ color: 'var(--gold-primary)' }}
        >
          {special.name}
        </h4>

        {/* Price or sizes */}
        {special.price ? (
          <span
            className="font-display text-lg"
            style={{ color: 'var(--orange-fire)' }}
          >
            ${special.price.toFixed(2)}
          </span>
        ) : special.sizes ? (
          <p
            className="text-xs font-semibold tracking-wide"
            style={{ color: 'var(--orange-fire)' }}
          >
            {special.sizes}
          </p>
        ) : null}

        {/* Description */}
        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {special.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function DailySpecials() {
  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FlameText
            text="DAILY SPECIALS"
            as="h2"
            className="font-display text-5xl md:text-7xl"
            style={{ color: 'var(--gold-primary)' }}
          />
          <motion.p
            className="mt-4 text-sm uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A different chef-crafted special every day of the week
          </motion.p>
        </div>

        {/* Specials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dailySpecials.map((special, i) => (
            <SpecialCard
              key={special.day}
              special={special}
              isToday={special.day === today}
              index={i}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="mt-8 text-center text-xs uppercase tracking-[0.15em]"
          style={{ color: 'var(--text-secondary)', opacity: 0.6 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
        >
          *Daily specials subject to change at chef&rsquo;s discretion
        </motion.p>
      </div>
    </section>
  );
}
