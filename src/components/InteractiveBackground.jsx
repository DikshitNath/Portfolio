import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from './BackgroundPattern'; // Make sure this path is correct

const InteractiveBackground = () => {
  // Start the cursor way off-screen so it doesn't flash in the corner on load
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const onMove = (e) => {
      // Because this container is fixed to the viewport, we just use clientX/clientY directly!
      // We wrap it in requestAnimationFrame for buttery smooth performance.
      requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };
    
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* 1. Your existing static grid/dots */}
      <BackgroundPattern />

      {/* 2. The Global Cursor Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(236,72,153,0.05), transparent 60%)`,
        }}
      />

      {/* 3. The Global Pulsing Orb (Centered to the screen) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] max-w-[1200px] max-h-[1200px] rounded-full mix-blend-screen"
        style={{ 
          background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)', 
          filter: 'blur(80px)' 
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
    </div>
  );
};

export default InteractiveBackground;