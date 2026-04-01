import { motion } from 'framer-motion';

export default function FlameText({ text, className = '', as: Tag = 'h2', style = {} }) {
  const letters = text.split('');

  return (
    <Tag className={className} style={{ ...style, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
          className="flame-letter"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Tag>
  );
}
