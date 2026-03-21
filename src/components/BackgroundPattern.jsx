import { useEffect, useRef } from 'react';

const BackgroundPattern = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let mouse = { x: null, y: null, radius: 150 };
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5; 
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        
        const types = ['primary', 'secondary', 'neutral'];
        this.colorType = types[Math.floor(Math.random() * types.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }
      
      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (this.colorType === 'primary') {
          ctx.fillStyle = '#ec4899'; // Pink
        } else if (this.colorType === 'secondary') {
          ctx.fillStyle = '#8b5cf6'; // Violet
        } else {
          // White in dark mode, Slate in light mode
          ctx.fillStyle = isDark ? '#ffffff' : '#334155'; 
        }
        
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 12000; 
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    init();

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(isDark);

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            const opacity = 0.1 - distance / 1000;
            ctx.strokeStyle = isDark 
              ? `rgba(255, 255, 255, ${opacity})` 
              : `rgba(0, 0, 0, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        if (mouse.x != null && mouse.y != null) {
          const dxMouse = particles[i].x - mouse.x;
          const dyMouse = particles[i].y - mouse.y;
          const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distanceMouse < mouse.radius) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(236, 72, 153, ${0.4 - distanceMouse / 400})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden bg-gray-50 dark:bg-[#050505] transition-colors duration-700">
      
      {/* 1. THE STATIC FINGERPRINT PATTERN (Base Layer) */}
      <svg
        className="absolute w-full h-full opacity-50 dark:opacity-30 transition-opacity duration-700" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="fingerprint" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(0)">
            <path d="M0 20 Q10 10 20 20 T40 20" className="stroke-gray-300 dark:stroke-[#222]" strokeWidth="1.5" fill="none" />
            <path d="M0 40 Q10 30 20 40 T40 40" className="stroke-gray-300 dark:stroke-[#222]" strokeWidth="1.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fingerprint)" />
      </svg>

      {/* 2. THE DYNAMIC NEURAL MESH (Interactive Layer) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full dark:mix-blend-screen opacity-70 transition-opacity duration-700" 
      />

      {/* 3. EDGE FADING GRADIENT (Blends the top and bottom into the site) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-gray-50 dark:from-[#050505] dark:via-transparent dark:to-[#050505] opacity-90 transition-colors duration-700" />

      {/* 4. PREMIUM FILM GRAIN (Adds texture to prevent color banding) */}
      <div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default BackgroundPattern;