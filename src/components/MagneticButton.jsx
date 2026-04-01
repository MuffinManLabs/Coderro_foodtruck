import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, href, className = '', style = {} }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={style}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.a>
  );
}
