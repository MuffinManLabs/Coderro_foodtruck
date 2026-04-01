import { useRef, useCallback } from 'react';

const SPARK_COUNT = 30;
const COLORS = ['#D4A017', '#F5C842', '#E8650A', '#C44D04', '#FFD700', '#FF8C00'];

export default function SparkBurst({ children, className = '' }) {
  const containerRef = useRef(null);

  const burst = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < SPARK_COUNT; i++) {
      const spark = document.createElement('div');
      const angle = (Math.PI * 2 * i) / SPARK_COUNT + (Math.random() - 0.5) * 0.5;
      const velocity = 40 + Math.random() * 80;
      const size = 3 + Math.random() * 5;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const duration = 600 + Math.random() * 500;

      spark.style.cssText = `
        position: fixed;
        left: ${centerX}px;
        top: ${centerY}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
        pointer-events: none;
        z-index: 10000;
      `;

      document.body.appendChild(spark);

      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity;

      spark.animate(
        [
          { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy + 30}px) scale(0)`, opacity: 0 },
        ],
        { duration, easing: 'cubic-bezier(0, 0.5, 0.5, 1)', fill: 'forwards' }
      );

      setTimeout(() => spark.remove(), duration);
    }

    // Also do a few bigger "star" shapes
    for (let i = 0; i < 6; i++) {
      const star = document.createElement('div');
      const angle = (Math.PI * 2 * i) / 6;
      const velocity = 20 + Math.random() * 40;
      const duration = 800 + Math.random() * 400;

      star.style.cssText = `
        position: fixed;
        left: ${centerX - 4}px;
        top: ${centerY - 4}px;
        width: 8px;
        height: 8px;
        pointer-events: none;
        z-index: 10000;
        font-size: 14px;
        line-height: 1;
      `;
      star.textContent = '✦';
      star.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      star.style.textShadow = `0 0 8px ${star.style.color}`;

      document.body.appendChild(star);

      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity;

      star.animate(
        [
          { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy + 20}px) scale(0) rotate(180deg)`, opacity: 0 },
        ],
        { duration, easing: 'ease-out', fill: 'forwards' }
      );

      setTimeout(() => star.remove(), duration);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      onClick={burst}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  );
}
