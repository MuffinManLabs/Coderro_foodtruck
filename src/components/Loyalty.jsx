import { motion } from 'framer-motion';
import FlameText from './FlameText';
import SparkBurst from './SparkBurst';

function StampCircle({ index, isFree }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: index * 0.12,
      }}
    >
      <div className={`loyalty-circle ${isFree ? 'free' : ''}`}>
        {isFree ? (
          <span className="text-xs font-bold tracking-wider">FREE</span>
        ) : (
          <>
            {/* Stamp mark — filled circles */}
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.3, type: 'spring', stiffness: 300 }}
            >
              <circle cx="12" cy="12" r="8" fill="var(--gold-dark)" opacity="0.4" />
              <text x="12" y="16" textAnchor="middle" fontSize="12" fontFamily="'Bebas Neue', sans-serif" fill="var(--gold-primary)">
                {index + 1}
              </text>
            </motion.svg>
          </>
        )}
      </div>

      {/* Connector line between circles */}
      {!isFree && (
        <motion.div
          className="absolute top-1/2 -right-2 md:-right-3.5 w-2 md:w-4 h-[2px]"
          style={{ background: 'var(--gold-dark)', opacity: 0.3 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2 }}
        />
      )}
    </motion.div>
  );
}

export default function Loyalty() {
  return (
    <section
      id="loyalty"
      className="relative py-16 md:py-24 px-4 ember-glow-bottom overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Decorative background flame shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -left-20 top-1/4 w-40 h-40 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,101,10,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FlameText
          text="BUY 5 MEALS, GET 1 FREE"
          as="h2"
          className="font-display text-3xl md:text-5xl lg:text-6xl mb-4"
          style={{ color: 'var(--gold-primary)' }}
        />

        <motion.p
          className="text-base md:text-lg mb-12 max-w-md mx-auto"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Loyalty has its rewards. One stamp per visit — the 6th meal is on us.
        </motion.p>

        {/* Punch card visual */}
        <motion.div
          className="inline-block px-8 py-8 rounded-xl mb-10"
          style={{
            background: 'rgba(10, 10, 10, 0.6)',
            border: '1px solid rgba(212, 160, 23, 0.15)',
            boxShadow: '0 0 60px rgba(232, 101, 10, 0.06)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--gold-dark)' }}>
            Tru Ambitionz Loyalty Card
          </p>

          <div className="flex justify-center gap-3 md:gap-5 flex-wrap">
            {[0, 1, 2, 3, 4].map((i) => (
              <StampCircle key={i} index={i} isFree={false} />
            ))}
            <SparkBurst>
              <StampCircle index={5} isFree={true} />
            </SparkBurst>
          </div>

          <motion.div
            className="mt-6 h-[1px] w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.2), transparent)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
          <motion.p
            className="mt-4 text-sm italic"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            &#x201C;6th Meal is on us!&#x201D;
          </motion.p>
        </motion.div>

        <motion.p
          className="text-base"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Ask about our loyalty card next time you visit!
        </motion.p>
      </div>
    </section>
  );
}
