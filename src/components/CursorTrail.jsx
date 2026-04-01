import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const trail = useRef([]);
  const sparks = useRef([]);
  const animRef = useRef(null);
  const hasMovedMouse = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      hasMovedMouse.current = true;
    };
    window.addEventListener('mousemove', onMove);

    let frame = 0;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Don't draw anything until the mouse has actually moved
      if (!hasMovedMouse.current) {
        animRef.current = requestAnimationFrame(loop);
        return;
      }

      const { x, y } = mouse.current;
      frame++;

      // Add trail point
      trail.current.push({ x, y });
      if (trail.current.length > 20) trail.current.shift();

      // Spawn ember sparks every few frames
      if (frame % 2 === 0) {
        sparks.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 3,
          vy: -Math.random() * 3 - 1,
          life: 1,
          size: 1.5 + Math.random() * 3,
          color: ['#D4A017', '#F5C842', '#E8650A', '#FFD700', '#C44D04'][
            Math.floor(Math.random() * 5)
          ],
        });
      }

      // Warm radial glow at cursor — like holding a match
      const grad = ctx.createRadialGradient(x, y, 0, x, y, 100);
      grad.addColorStop(0, 'rgba(212, 160, 23, 0.18)');
      grad.addColorStop(0.3, 'rgba(232, 101, 10, 0.08)');
      grad.addColorStop(0.7, 'rgba(196, 77, 4, 0.03)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, 100, 0, Math.PI * 2);
      ctx.fill();

      // Draw trailing dots (fading gold)
      for (let i = 1; i < trail.current.length; i++) {
        const p = trail.current[i];
        const progress = i / trail.current.length;
        const size = 1.5 + progress * 5;

        ctx.save();
        ctx.globalAlpha = progress * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = '#D4A017';
        ctx.shadowColor = '#F5C842';
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.restore();
      }

      // Update & draw ember sparks
      sparks.current = sparks.current.filter((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.04;
        s.vx *= 0.98;
        s.life -= 0.02;
        if (s.life <= 0) return false;

        ctx.save();
        ctx.globalAlpha = s.life * 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
        return true;
      });

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    />
  );
}
