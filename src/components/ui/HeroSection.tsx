
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let canvas: HTMLCanvasElement | null = null;
    let ctx: CanvasRenderingContext2D | null = null;
    let width = 0;
    let height = 0;
    let particles: any[] = [];
    let animationFrameId: number | null = null;

    const initCanvas = () => {
      if (!containerRef.current || !canvasRef.current) return;
      
      canvas = canvasRef.current;
      ctx = canvas.getContext('2d');
      
      const updateSize = () => {
        if (!canvas || !containerRef.current) return;
        width = containerRef.current.offsetWidth;
        height = containerRef.current.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        
        // Reinitialize particles when size changes
        initParticles();
      };
      
      updateSize();
      window.addEventListener('resize', updateSize);
      
      return () => {
        window.removeEventListener('resize', updateSize);
      };
    };
    
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.5,
          color: `rgba(100, 149, 237, ${Math.random() * 0.5 + 0.25})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25
        });
      }
    };
    
    const draw = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        ctx!.beginPath();
        ctx!.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx!.fillStyle = particle.color;
        ctx!.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
      });
      
      // Connect particles with lines if they're close enough
      const maxDistance = 120;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 149, 237, ${0.2 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    const cleanup = initCanvas();
    
    if (canvas && ctx) {
      initParticles();
      draw();
    }
    
    return () => {
      if (cleanup) cleanup();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
      />
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block overflow-hidden rounded-full border-2 border-primary/20 p-1.5"
        >
          <div className="overflow-hidden rounded-full bg-primary/10 p-1.5">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/50" />
          </div>
        </motion.div>
        
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <AnimatedText text="Adrian Liu" delay={500} className="inline-block" />
        </h1>
        
        <div className="mb-8 text-xl sm:text-2xl md:text-3xl text-muted-foreground">
          <AnimatedText text="Full Stack Developer" delay={1000} className="inline-block" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mb-12 max-w-xl text-center text-muted-foreground"
        >
          <p>
            Experienced Full Stack Developer with 10+ years of expertise in building scalable, 
            high-performance web and mobile applications. Passionate about clean code, 
            intuitive user interfaces, and solving complex problems.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Button
            asChild
            variant="outline"
            className="group flex items-center gap-2 rounded-full px-6 py-6 border-primary/20 hover:bg-primary/5"
          >
            <a href="#experience">
              <span>View My Work</span>
              <ArrowDownIcon 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-y-1" 
              />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
