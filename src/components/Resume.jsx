import { useRef } from 'react';
import { FileText, Download, Eye, GraduationCap, Mail, MapPin, Award, Cpu } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import toast from 'react-hot-toast';

const ease = [0.22, 1, 0.36, 1];

const AnimatedCard = ({ children, delay = 0, className = '', fromX = 0, fromY = 48 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '0px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: fromY, x: fromX, filter: 'blur(10px)' }}
      animate={inView
        ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
        : { opacity: 0, y: fromY, x: fromX, filter: 'blur(10px)' }
      }
      transition={{ duration: 0.75, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Resume = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: '0px 0px -40px 0px' });

  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: false, margin: '0px 0px -40px 0px' });

  const chipsRef = useRef(null);
  const chipsInView = useInView(chipsRef, { once: false, margin: '0px 0px -40px 0px' });

  const bannerRef = useRef(null);
  const bannerInView = useInView(bannerRef, { once: false, margin: '0px 0px -40px 0px' });

  const education = [
    { school: "Lovely Professional University", deg: "B.Tech - IT", score: "7.32 CGPA", year: "2023-Present" },
    { school: "Concept Sr. Secondary", deg: "Intermediate", score: "64.8%", year: "2021-2022" },
    { school: "Rangadaria H.S School", deg: "Matriculation", score: "85%", year: "2019-2020" }
  ];

  const languages = ["JavaScript", "C++", "Python", "Java", "C"];
  const technologies = ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"];

  const handleDownload = () => {
    toast('Downloading CV...', { icon: '📄' });
  };

  return (
    <section id="resume" className="min-h-screen pt-32 pb-8 relative z-10 px-4 flex flex-col items-center">

      <div ref={headerRef} className="text-center mb-8">

        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-1 tracking-tighter uppercase">
          <motion.span
            className="text-pink-500 pt-1 font-light mr-4 inline-block"
            style={{ verticalAlign: 'top' }}
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
          >
            &gt;
          </motion.span>
          <span style={{ display: 'inline-block', verticalAlign: 'bottom', paddingBottom: '0.18em' }}>
            <motion.span
              className="inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={headerInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.28 }}
            >
              Resume
            </motion.span>
          </span>
          {' '}
          <span style={{ display: 'inline-block', verticalAlign: 'bottom', paddingBottom: '0.12em' }}>
            <motion.span
              className="italic font-serif text-gray-400 lowercase inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={headerInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.38 }}
            >
              Dashboard
            </motion.span>
          </span>
        </h2>

        <motion.p
          className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black"
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
        >
          Professional Journey & Technical Background
        </motion.p>
      </div>

      {/* ── BENTO GRID ── */}
      <div className="max-w-5xl mt-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

        {/* ── LEFT: Profile Sidebar — slides in from left ── */}
        <AnimatedCard
          fromX={-40}
          fromY={0}
          delay={0.05}
          className="lg:col-span-4 space-y-6 flex flex-col"
        >
          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 flex-1 flex flex-col shadow-sm">

            {/* Avatar */}
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="w-24 h-24 mb-6 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-500 border border-pink-500/20 ring-8 ring-pink-500/5"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.3 }}
              >
                <FileText size={44} />
              </motion.div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-none">Dikshit Nath</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-3">Software Engineer</p>
            </div>

            {/* Contact rows */}
            <div className="mt-10 space-y-4">
              {[
                { icon: <Mail size={18} className="text-pink-500" />, text: 'dikshitnath36@gmail.com', mono: true },
                { icon: <MapPin size={18} className="text-pink-500" />, text: 'Phagwara, Punjab (LPU)', mono: false },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.45 + i * 0.1 }}
                >
                  {item.icon}
                  <span className={`text-xs font-bold dark:text-gray-300 ${item.mono ? 'font-mono italic' : 'font-mono'}`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-auto pt-8 space-y-3">
              <motion.a
                href="/Dikshit_Nath_CV.pdf"
                download="Dikshit_Nath_CV.pdf"
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 w-full py-4 bg-pink-500 hover:bg-pink-600 text-white font-black uppercase text-xs rounded-2xl transition-all shadow-[0_10px_30px_rgba(236,72,153,0.3)]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.65 }}
              >
                <Download size={18} /> Download CV
              </motion.a>
              <motion.a
                href="/Dikshit_Nath_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-black uppercase text-xs rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.75 }}
              >
                <Eye size={18} /> Preview PDF
              </motion.a>
            </div>
          </div>
        </AnimatedCard>

        {/* ── RIGHT: Bento Cards ── */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Education Timeline */}
          <AnimatedCard delay={0.15} className="p-8 rounded-[2.5rem] bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 flex flex-col shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-sm font-black dark:text-white uppercase tracking-widest">Education History</h4>
            </div>

            <div
              ref={timelineRef}
              className="space-y-8 relative flex-1 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100 dark:before:bg-white/5"
            >
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-10 group/edu"
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.55, ease, delay: idx * 0.13 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-[#0c0c0c] border-2 border-gray-200 dark:border-white/10 flex items-center justify-center z-10 group-hover/edu:border-pink-500 group-hover/edu:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300"
                    initial={{ scale: 0 }}
                    animate={timelineInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.35, ease, delay: idx * 0.13 + 0.1, type: 'spring', stiffness: 300, damping: 18 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 group-hover/edu:bg-pink-500 transition-colors" />
                  </motion.div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-pink-500 uppercase font-mono tracking-wider">{edu.year}</span>
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white mt-1 leading-tight group-hover/edu:text-pink-500 transition-colors duration-300">
                      {edu.school}
                    </h5>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-[11px] text-gray-500 font-medium italic">{edu.deg}</p>
                      <span className="text-[11px] font-mono font-bold text-blue-500">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>

          {/* Tech Summary */}
          <AnimatedCard delay={0.22} className="p-8 rounded-[2.5rem] bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 flex flex-col shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <Cpu size={24} />
              </div>
              <h4 className="text-sm font-black dark:text-white uppercase tracking-widest">Tech Summary</h4>
            </div>

            <div ref={chipsRef} className="space-y-6">
              <div>
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-widest">Core Languages</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l, i) => (
                    <motion.span
                      key={l}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={chipsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.35, ease, delay: i * 0.06 }}
                      className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg text-[10px] font-bold dark:text-gray-300 font-mono italic"
                    >
                      {l}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-widest">Main Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={chipsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.35, ease, delay: languages.length * 0.06 + i * 0.06 }}
                      className="px-3 py-1.5 bg-pink-500/5 border border-pink-500/10 rounded-lg text-[10px] font-bold text-pink-500 font-mono"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Achievement Banner */}
          <AnimatedCard
            delay={0.3}
            className="md:col-span-2 p-8 rounded-[2.5rem] bg-gradient-to-r from-pink-500/5 via-transparent to-transparent border border-pink-500/10 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div ref={bannerRef} className="flex items-center gap-6">
              <motion.div
                className="p-5 bg-pink-500 rounded-3xl text-white shadow-[0_10px_20px_rgba(236,72,153,0.3)]"
                initial={{ scale: 0.5, rotate: -12, opacity: 0 }}
                animate={bannerInView
                  ? { scale: 1, rotate: 0, opacity: 1 }
                  : { scale: 0.5, rotate: -12, opacity: 0 }
                }
                transition={{ duration: 0.55, ease, delay: 0.1, type: 'spring', stiffness: 250, damping: 18 }}
              >
                <Award size={32} />
              </motion.div>
              <div>
                <h4 className="text-xl font-black dark:text-white uppercase tracking-tighter">Coding Milestone</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium max-w-xs">
                  Solved 350+ problems across LeetCode, GFG, & Code360 with Top Badges.
                </p>
              </div>
            </div>

            {/* Count-up number */}
            <motion.div
              className="flex items-baseline gap-2"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={bannerInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.6 }
              }
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              <CountUp to={350} inView={bannerInView} />
              <span className="text-2xl font-black text-pink-500 uppercase font-mono">+</span>
            </motion.div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  );
};

const CountUp = ({ to, inView }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) { setCount(0); return; }
    let start = 0;
    const duration = 1400; // ms
    const step = 16;        // ~60fps
    const increment = (to / (duration / step));
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span className="text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
      {count}
    </span>
  );
};

// React needs to be imported for CountUp
import React from 'react';

export default Resume;