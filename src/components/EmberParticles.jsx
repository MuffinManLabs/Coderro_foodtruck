import { useEffect, useRef } from 'react';

class Ember {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = this.canvas.height + 10;
    this.size = Math.random() * 3 + 1;
    this.speedY = Math.random() * 1.5 + 0.4;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.fadeRate = Math.random() * 0.003 + 0.001;
    this.wobbleSpeed = Math.random() * 0.02 + 0.01;
    this.wobbleAmp = Math.random() * 30 + 10;
    this.age = 0;
    this.maxAge = Math.random() * 300 + 200;
    // Color varies between deep orange and bright gold
    const t = Math.random();
    this.r = Math.floor(200 + t * 55);
    this.g = Math.floor(80 + t * 80);
    this.b = Math.floor(4 + t * 15);
  }

  update() {
    this.age++;
    this.y -= this.speedY;
    this.x += this.speedX + Math.sin(this.age * this.wobbleSpeed) * 0.3;
    this.opacity -= this.fadeRate;
    this.size *= 0.999;

    if (this.opacity <= 0 || this.age > this.maxAge || this.y < -20) {
      this.reset();
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.opacity})`;
    ctx.fill();

    // Glow effect
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.opacity * 0.15})`;
    ctx.fill();
  }
}

export default function EmberParticles({ density = 60 }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let embers = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Check reduced motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    for (let i = 0; i < density; i++) {
      const ember = new Ember(canvas);
      ember.y = Math.random() * canvas.height; // spread initial positions
      embers.push(ember);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      embers.forEach((e) => {
        e.update();
        e.draw(ctx);
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
