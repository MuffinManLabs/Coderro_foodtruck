import { motion } from 'framer-motion';

const levels = [
  { label: 'MILD', color: '#F5C842' },
  { label: 'WARM', color: '#E8A020' },
  { label: 'HOT', color: '#E8650A' },
  { label: 'FIRE', color: '#C44D04' },
  { label: 'INFERNO', color: '#9A2000' },
];

export default function SpiceOMeter({ heat = 3, isVisible = true }) {
  return (
    <div className="mt-3">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--orange-fire)' }}>
          Heat Level
        </span>
        <span className="text-sm">🌶️</span>
      </div>
      <div className="flex gap-1 items-end">
        {levels.map((level, i) => {
          const isActive = i < heat;
          const barHeight = 8 + i * 4;
          return (
            <div key={level.label} className="flex flex-col items-center gap-0.5">
              <motion.div
                className="rounded-sm"
                style={{
                  width: 18,
                  height: barHeight,
                  backgroundColor: isActive ? level.color : 'rgba(255,255,255,0.08)',
                  boxShadow: isActive ? `0 0 8px ${level.color}40` : 'none',
                  transformOrigin: 'bottom',
                }}
                initial={{ scaleY: 0 }}
                animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>
          );
        })}
        <motion.span
          className="text-[10px] font-bold uppercase tracking-wider ml-1"
          style={{ color: levels[heat - 1]?.color || levels[0].color }}
          initial={{ opacity: 0, x: -5 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: heat * 0.1 + 0.2 }}
        >
          {levels[heat - 1]?.label}
        </motion.span>
      </div>
    </div>
  );
}
