'use client';
import { useEffect, useRef } from 'react';

const SmokyCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 5;
        this.color = ['#6366f1', '#a855f7', '#ec4899'][Math.floor(Math.random() * 3)];
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // CRITICAL FIX: Math.max(0, ...) prevents the negative radius crash
        ctx.arc(this.x, this.y, Math.max(0, this.size), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(e.x, e.y));
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.filter = 'blur(8px)'; 
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.3) {
          particles.splice(i, 1);
          i--;
        }
      }
      ctx.filter = 'none';
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 mix-blend-screen opacity-60" />;
};

export default SmokyCursor;