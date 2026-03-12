import { ArrowUpRight, Terminal, Layers } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Portal from './Portal';

const WordReveal = ({ children, delay = 0, className = '' }) => {
  const words = children.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            marginRight: '0.22em',
            lineHeight: 1.15,
          }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '108%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.07,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(t);
  }, []);


  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.96]);

  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const tags = ['React', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-[100dvh] flex flex-col justify-center items-center px-4 relative z-10 pt-20 overflow-hidden"
    > 

      <motion.div
        style={{ y: cardY, opacity: cardOpacity, scale: cardScale }}
        className="w-full max-w-5xl mb-10 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="bg-white dark:bg-[#0a0a0a]/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden hover:border-pink-500/20 hover:shadow-[0_0_60px_rgba(236,72,153,0.08)] transition-all duration-300"
        >
          <div className="bg-gray-100 dark:bg-[#111] px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-white/5">
            <div className="flex gap-2">
              {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full ${color}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.08, type: 'spring', stiffness: 400, damping: 14 }}
                />
              ))}
            </div>
            <motion.div
              className="text-xs text-gray-400 font-mono flex items-center gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Terminal size={12} />
              dikshit@portfolio: ~
            </motion.div>
            <div className="w-10" />
          </div>

          <div className="p-8 md:p-16 font-mono">

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.35 }}
              className="text-sm md:text-lg mb-8 text-gray-500 dark:text-gray-400 font-medium"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span className="text-green-600 dark:text-green-400" style={{ flexShrink: 0 }}>➜</span>
              <span className="text-blue-500" style={{ flexShrink: 0 }}>~</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <motion.span
                  className="text-gray-400"
                  style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  git commit -m &quot;Initial commit&quot;
                </motion.span>
                <motion.span
                  style={{ display: 'inline-block', width: '2px', height: '1em', background: '#4ade80', flexShrink: 0 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-gray-100 tracking-tight">

              <div>
                <WordReveal delay={0.5}>Transforming</WordReveal>
                <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginLeft: '0.22em' }}>
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"
                    style={{ display: 'inline-block', backgroundSize: '200% 100%' }}
                    initial={{ y: '108%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1, backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{
                      y: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.62 },
                      opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.62 },
                      backgroundPosition: { duration: 4, repeat: Infinity, ease: 'linear', delay: 1.3 },
                    }}
                  >
                    ideas
                  </motion.span>
                </span>
              </div>

              <div>
                <WordReveal delay={0.72}>into</WordReveal>
                <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginLeft: '0.22em', marginRight: '0.22em' }}>
                  <motion.span
                    className="italic font-serif font-light text-gray-500 dark:text-gray-400"
                    style={{ display: 'inline-block' }}
                    initial={{ y: '108%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.83 }}
                  >
                    intelligent
                  </motion.span>
                </span>
                <WordReveal delay={0.94}>code.</WordReveal>
              </div>
            </h1>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-500">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 1.1 + i * 0.07 }}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(236,72,153,0.5)', color: '#ec4899' }}
                  className="bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-md border border-gray-200 dark:border-white/5 cursor-default transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-5 mb-12 w-full max-w-5xl relative z-10"
        style={{ opacity: buttonsOpacity }}
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 1.2 } } }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          className="flex-1 sm:flex-none"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer group w-full text-center px-8 py-4 bg-pink-300 dark:bg-pink-400 text-black font-semibold text-lg rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,114,182,0.3)] hover:shadow-[0_0_40px_rgba(244,114,182,0.5)] hover:brightness-105 active:brightness-95 transition-all duration-200"
          >
            About me
            <ArrowUpRight size={22} className="transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 24, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          className="flex-1 sm:flex-none"
        >
          <a
            href="#projects"
            className="block w-full text-center px-8 py-4 bg-white dark:bg-white/10 text-gray-900 dark:text-white font-semibold text-lg rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-md hover:bg-gray-50 dark:hover:bg-white/15 active:brightness-95 transition-all duration-200"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-0 w-full flex justify-center text-xs md:text-sm text-gray-500 dark:text-gray-500 font-mono z-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.p animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }}>
          [ Local Time: {time} ] — Based in India
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-8 flex-col items-center gap-2 hidden md:flex z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
        transition={{ delay: 1.9, duration: 1 }}
      >
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="text-[9px] font-mono text-gray-400 uppercase tracking-[0.3em] rotate-90 origin-center mt-2">scroll</span>
      </motion.div>

      <Portal>
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl bg-white dark:bg-[#080808] rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative z-[1010]"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 bg-gray-50 dark:bg-white/5 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/5">
                    <div>
                      <div className="relative aspect-[9/10] w-full rounded-[2rem] overflow-hidden mb-8 shadow-2xl border border-white/10 group/img">
                        <img src="/profile-pic.png" alt="Dikshit Nath" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter italic leading-none">Dikshit Nath</h3>
                        <p className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em]">Full Stack Developer</p>
                      </div>
                    </div>
                    <div className="hidden md:block pt-8 border-t border-gray-200 dark:border-white/5">
                      <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest leading-loose">Based in India <br /> B.Tech IT @ LPU</p>
                    </div>
                  </div>

                  <div className="w-full md:w-3/5 p-10 md:p-14">
                    <div className="space-y-10">
                      <section>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4">The Narrative</h4>
                        <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-tight tracking-tight">
                          I architect <span className="italic font-serif text-gray-400">scalable web ecosystems</span> using the MERN stack, bridging the gap between robust server-side data pipelines and <span className="text-pink-500">dynamic, high-fidelity interfaces</span>.
                        </p>
                      </section>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-6 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group hover:border-pink-500/30 transition-colors">
                          <Terminal size={20} className="text-pink-500 mb-4" />
                          <h5 className="text-sm font-black dark:text-white uppercase tracking-tighter mb-1">Problem Solver</h5>
                          <p className="text-xs text-gray-500 leading-relaxed">350+ solved problems across LeetCode, GFG, Code360 & HackerRank.</p>
                        </div>

                        <div className="p-6 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group hover:border-pink-500/30 transition-colors">
                          <Layers size={20} className="text-pink-500 mb-4" />
                          <h5 className="text-sm font-black dark:text-white uppercase tracking-tighter mb-1">MERN Stack</h5>
                          <p className="text-xs text-gray-500 leading-relaxed">End-to-end architecture, from secure Node/Express APIs to reactive React frontends.</p>
                        </div>
                      </div>
                      <section>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'].map((skill) => (
                            <span key={skill} className="px-4 py-1.5 bg-gray-100 dark:bg-white/10 rounded-full text-[10px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest border border-transparent hover:border-pink-500/50 transition-all cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </section>
                      <div className="pt-4 flex justify-between items-center">
                        <button onClick={() => setIsModalOpen(false)} className="cursor-pointer text-[10px] font-black text-gray-400 hover:text-pink-500 uppercase tracking-[0.3em] transition-colors">
                          [ Close Profile ]
                        </button>
                        <a href="#contact" onClick={() => setIsModalOpen(false)} className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                          Hire Me <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Portal>
    </section>
  );
};

export default Hero;