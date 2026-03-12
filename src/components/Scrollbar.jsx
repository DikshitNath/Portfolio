import { motion, useScroll, useSpring } from "framer-motion";

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <div className="fixed right-2 top-1/2 -translate-y-1/2 h-[70vh] w-[2px] bg-gray-200 dark:bg-white/5 rounded-full z-[9998] pointer-events-none hidden md:block">
        <motion.div
          style={{ 
            scaleY, 
            transformOrigin: "top"
          }}
          className="absolute inset-0 w-full bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)]"
        />
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-white/20" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-white/20" />
      </div>
    </>
  );
};

export default CustomScrollbar;