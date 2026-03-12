import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Target, Code2, Globe } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { text } from 'framer-motion/client';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: '0px 0px -40px 0px' });

  const tabletRef = useRef(null);
  const tabletInView = useInView(tabletRef, { once: false, margin: '0px 0px -80px 0px' });

  const achievements = [
    {
      id: 1,
      icon: <Target className="text-pink-500" size={36} />,
      title: "350+ Problems Solved",
      subtitle: "LeetCode, GFG, & HackerRank",
      description: "Mastered Data Structures & Algorithms by tackling 350+ complex challenges across major platforms.",
      date: "Feb 2026",
      buttons: [
        { text: "Leetcode", icon: <Code2 className="text-pink-500" size={18} />, href: "https://leetcode.com/dikshitnath36/" },
        { text: "GFG", icon: <Code2 className="text-pink-500" size={18} />, href: "https://www.geeksforgeeks.org/profile/dikshitq091" },
      ]
    },
    {
      id: 2,
      icon: <Star className="text-pink-500" size={36} />,
      title: "50-Day Coding Streak",
      subtitle: "LeetCode Consistency",
      description: "Maintained an unstoppable 50-day streak, solving medium-to-hard problems daily.",
      date: "Jan 2026",
      buttons: [
        { text: "View Profile", icon: <Star className="text-pink-500" size={18} />, href: "https://leetcode.com/dikshitnath36/" },
      ]
    },
    {
      id: 3,
      icon: <Code2 className="text-pink-500" size={36} />,
      title: "Top Proficiency Badges",
      subtitle: "Verified Technical Skills",
      description: "Earned gold-level badges in C++, Java, Python and Problem Solving on HackerRank.",
      date: "Feb 2026",
      buttons: [
        { text: "View Profile", icon: <Star className="text-pink-500" size={18} />, href: "https://www.hackerrank.com/profile/dikshitnath36" },
      ]
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, achievements.length]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const goTo = (i) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
      filter: 'blur(6px)',
      scale: 0.97,
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      scale: 1,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
      filter: 'blur(6px)',
      scale: 0.97,
    }),
  };

  return (
    <section
      id="achievements"
      className="min-h-screen pt-30 pb-8 relative z-10 px-4 flex flex-col items-center justify-center"
    >

      <div ref={headerRef} className="text-center mb-12">

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-1 tracking-tighter uppercase">
          <motion.span
            className="text-pink-500 font-light mr-4 inline-block"
            style={{ verticalAlign: 'top' }}
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            &gt;
          </motion.span>
          <span style={{ display: 'inline-block', verticalAlign: 'bottom', paddingBottom: '0.12em' }}>
            <motion.span
              className="inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={headerInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            >
              Achievements
            </motion.span>
          </span>
        </h2>

        <motion.p
          className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black"
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          Digital Proof of Work
        </motion.p>
      </div>

      {/* ── TABLET MOCKUP ── */}
      <motion.div
        ref={tabletRef}
        className="relative w-full max-w-5xl mx-auto hover:border-pink-500/20 hover:shadow-[0_0_60px_rgba(236,72,153,0.08)]"
        initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
        animate={tabletInView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: 60, filter: 'blur(12px)' }
        }
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        // Pause auto-scroll while hovering the tablet
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* PHYSICAL TABLET FRAME */}
        <div className="relative aspect-[4/3] md:aspect-[16/10] bg-gray-200 dark:bg-[#1a1a1a] p-[12px] md:p-[18px] rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-black/5 dark:border-white/10 transition-all duration-500">

          {/* Side buttons */}
          <div className="absolute top-20 -right-[2px] w-[3px] h-12 bg-gray-400 dark:bg-gray-700 rounded-l-md" />
          <div className="absolute top-40 -right-[2px] w-[3px] h-8 bg-gray-400 dark:bg-gray-700 rounded-l-md" />

          {/* SCREEN BEZEL */}
          <div className="relative h-full w-full bg-white dark:bg-[#0c0c0c] rounded-[1.8rem] md:rounded-[2.8rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-inner">

            {/* Glass glare */}
            <div className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent" />

            {/* ── AUTO-SCROLL PROGRESS BAR at top of screen ── */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-100 dark:bg-white/5 z-40">
              {!isPaused && (
                <motion.div
                  key={`progress-${currentIndex}`}
                  className="h-full bg-pink-500/60"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: 'linear' }}
                />
              )}
            </div>

            {/* SCREEN CONTENT */}
            <div className="relative h-full w-full flex flex-col items-center justify-center p-8 md:p-20 text-center z-20">

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-8 p-6 rounded-3xl bg-pink-500/5 dark:bg-pink-500/[0.03] border border-pink-500/10 shadow-sm"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  >
                    {achievements[currentIndex].icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight uppercase max-w-2xl">
                    {achievements[currentIndex].title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg font-medium max-w-md mb-6 leading-relaxed">
                    {achievements[currentIndex].description}
                  </p>

                  <div className='flex items-center gap-3'>
                    {/* Date pill */}
                    <div className="flex items-center gap-3 py-2 px-5 bg-gray-100 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/5">
                      <Globe size={14} className="text-pink-500" />
                      <span className="text-gray-600 dark:text-gray-300 font-mono text-xs font-bold tracking-widest uppercase">
                        {achievements[currentIndex].date}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {achievements[currentIndex].buttons.map((button, i) => (
                        <a
                          key={i}
                          href={button.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 py-2 px-5 bg-gray-100 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/5 rounded-full text-xs font-bold hover:border-pink-400 transition-all 300"
                        >
                          {button.icon}
                          <span className="text-xs text-gray-600 font-mono font-bold dark:text-gray-300">{button.text}</span>
                        </a>
                      ))}
                    </div>
                  </div>



                </motion.div>
              </AnimatePresence>

              {/* NAV BUTTONS */}
              <button
                onClick={prev}
                className="absolute cursor-pointer left-4 md:left-8 p-3 rounded-2xl bg-gray-100/50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-400 hover:text-gray-900 dark:hover:text-white backdrop-blur-md transition-all border border-black/5 dark:border-white/5"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute cursor-pointer right-4 md:right-8 p-3 rounded-2xl bg-gray-100/50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-400 hover:text-gray-900 dark:hover:text-white backdrop-blur-md transition-all border border-black/5 dark:border-white/5"
              >
                <ChevronRight size={24} />
              </button>

              {/* PAGINATION DOTS */}
              <div className="absolute bottom-10 flex gap-2.5">
                {achievements.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex
                        ? 'w-10 bg-pink-500'
                        : 'w-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Floating shadow beneath tablet */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-black/20 dark:bg-black/40 blur-[50px] rounded-[100%] -z-10" />
      </motion.div>

    </section>
  );
};

export default Achievements;