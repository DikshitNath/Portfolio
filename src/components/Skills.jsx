import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Portal from './Portal';

const skillsData = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", level: 85 },
            { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4", level: 95 },
            { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26", level: 90 },
            { name: "CSS3", logo: "https://cdn.simpleicons.org/css/663399", level: 90 },
            { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E", level: 80 },
        ]
    },
    {
        title: "Backend Development",
        skills: [
            { name: "Express", logo: "https://cdn.simpleicons.org/express/000000/black", level: 85 },
            { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933", level: 85 },
            { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248", level: 80 },
            { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/F15432", level: 65 },
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", level: 90 },
            { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C", level: 80 },
            { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", level: 80 },
            { name: "Kotlin", logo: "https://cdn.simpleicons.org/kotlin/7F52FF", level: 75 },
            { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/5382a1", level: 70 },
            { name: "C", logo: "https://cdn.simpleicons.org/c/A8B9CC", level: 70 },
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032", level: 90 },
            { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717/black", level: 90 },
            { name: "Android Studio", logo: "https://cdn.simpleicons.org/androidstudio/3DDC84", level: 75 },
            { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000/black", level: 85 },
            { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B", level: 60 },
        ]
    }
];

const SectionLabel = ({ children, inView }) => (
    <motion.p
        className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
    >
        {children}
    </motion.p>
);

const FolderCard = ({ category, index, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: '0px 0px -60px 0px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 48, filter: 'blur(10px)' }}
            animate={inView
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : {}
            }
            transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: (index % 2) * 0.1 + Math.floor(index / 2) * 0.15,
            }}
            onClick={onClick}
            className="group relative h-80 flex flex-col items-center justify-end cursor-pointer "
        >
            {/* FOLDER CONTAINER */}
            <div className="relative w-64 h-52 transition-all duration-500 group-hover:scale-105 hover:border-pink-500/20 hover:shadow-[0_0_60px_rgba(236,72,153,0.08)]">
                {/* Folder back */}
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-xl transition-colors duration-300">
                    <div className="absolute -top-5 left-0 w-24 h-8 bg-gray-200 dark:bg-gray-800 rounded-t-xl transition-colors duration-300" />
                </div>

                {/* Icon grid — icons stagger in after the card itself arrives */}
                <div className="absolute inset-x-4 top-4 bottom-4 z-10 grid grid-cols-3 gap-3 content-start transition-all duration-500 ease-out group-hover:-translate-y-16 group-hover:gap-4">
                    {category.skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                                // icons start appearing after the card lands
                                delay: (index % 2) * 0.1 + Math.floor(index / 2) * 0.15 + 0.35 + i * 0.05,
                            }}
                            className="group/icon relative aspect-square bg-white dark:bg-gray-900/50 rounded-lg p-2 flex items-center justify-center border border-black/5 dark:border-white/10 shadow-sm transition-transform duration-300 hover:scale-110 hover:z-50 cursor-pointer"
                        >
                            {/* Tooltip */}
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] font-bold rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
                                {skill.name}
                                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                            </span>
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className={`w-full h-full object-contain ${["Express", "GitHub", "Vercel"].includes(skill.name) ? "dark:invert" : ""}`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Folder flap / glass bottom */}
                <div className="absolute bottom-0 w-full h-[60%] bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-b-2xl rounded-tr-2xl border-t border-l border-r border-white/40 dark:border-white/10 z-20 shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:h-[40%] group-hover:opacity-80">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-b-2xl opacity-100 dark:opacity-20 pointer-events-none" />
                </div>
            </div>

            {/* Category label */}
            <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{
                    duration: 0.5,
                    delay: (index % 2) * 0.1 + Math.floor(index / 2) * 0.15 + 0.5,
                }}
                className="relative z-30 text-xl font-bold text-gray-800 dark:text-white mt-4 group-hover:text-pink-500 transition-colors duration-300 uppercase tracking-tighter"
            >
                {category.title}
            </motion.h3>
        </motion.div>
    );
};

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showProgress, setShowProgress] = useState(false);

    // Ref for the header block
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: false, margin: '0px 0px -40px 0px' });

    useEffect(() => {
        if (selectedCategory) {
            const timer = setTimeout(() => setShowProgress(true), 300);
            return () => clearTimeout(timer);
        } else {
            setShowProgress(false);
        }
    }, [selectedCategory]);

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center items-center pt-30 relative z-10">

            {/* ── HEADER ── */}
            <div ref={headerRef} className="text-center mb-7">

                {/* Main heading */}
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-1 tracking-tighter uppercase">
                    <motion.span
                        className="text-pink-500 pt-1 font-light mr-4 inline-block"
                        style={{ verticalAlign: 'top' }}
                        initial={{ opacity: 0, y: 16 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        &gt;
                    </motion.span>
                    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.18em' }}>
                        <motion.span
                            className="inline-block"
                            initial={{ y: '110%', opacity: 0 }}
                            animate={headerInView ? { y: '0%', opacity: 1 } : {}}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                        >
                            Technical
                        </motion.span>
                    </span>
                    {' '}
                    <span style={{ display: 'inline-block', verticalAlign: 'bottom', paddingBottom: '0.12em' }}>
                        <motion.span
                            className="italic font-serif text-gray-400 lowercase inline-block"
                            initial={{ y: '110%', opacity: 0 }}
                            animate={headerInView ? { y: '0%', opacity: 1 } : {}}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
                        >
                            Skills
                        </motion.span>
                    </span>
                </h2>

                <SectionLabel inView={headerInView}>
                    Click on a folder to view detailed proficiency.
                </SectionLabel>
            </div>

            {/* ── FOLDER GRID ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl w-full px-6">
                {skillsData.map((category, index) => (
                    <FolderCard
                        key={index}
                        category={category}
                        index={index}
                        onClick={() => setSelectedCategory(category)}
                    />
                ))}
            </div>

            <Portal>
                <AnimatePresence>
                    {selectedCategory && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCategory(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-zoom-out"
                            />

                            {/* Modal */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.3, y: 100 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.3, y: 100 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-xl bg-white dark:bg-[#0c0c0c] rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden relative z-[10000]"
                            >
                                {/* Header */}
                                <div className="relative p-8 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[50px] rounded-full -mr-10 -mt-10" />
                                    <div className="flex justify-between items-start relative z-10">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                                                <p className="text-[10px] font-black text-pink-500 uppercase tracking-[0.3em]">Skill Matrix</p>
                                            </div>
                                            <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter italic">
                                                {selectedCategory.title}
                                            </h3>
                                        </div>
                                        <button onClick={() => setSelectedCategory(null)} className="p-3 cursor-pointer rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-pink-500 transition-all">
                                            <X size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Progress bars */}
                                <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                    {selectedCategory.skills.map((skill, index) => (
                                        <div key={index} className="group/skill">
                                            <div className="flex justify-between items-end mb-3">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 p-2.5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 group-hover/skill:border-pink-500/30 transition-colors shadow-sm">
                                                        <img src={skill.logo} alt={skill.name} className={`w-full h-full object-contain ${["Express", "GitHub", "Vercel", "Express.js"].includes(skill.name) ? "dark:invert" : ""}`} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-base font-bold text-gray-900 dark:text-white leading-none">{skill.name}</h4>
                                                        <p className="text-[10px] text-gray-500 font-bold uppercase mt-1 tracking-widest">Expertise Level</p>
                                                    </div>
                                                </div>
                                                <span className="text-lg font-black font-mono text-gray-900 dark:text-white tracking-tighter">{skill.level}%</span>
                                            </div>

                                            <div className="relative w-full h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden border border-gray-200/50 dark:border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: showProgress ? `${skill.level}%` : '0%' }}
                                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                                    className="absolute top-0 left-0 h-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] z-10"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-6 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-100 dark:border-white/5 flex items-center justify-between px-8">
                                    <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest italic">Based on my projects & certifications</p>
                                    <span className="text-[10px] font-black text-pink-500/50 uppercase">Dikshit Nath Portfolio</span>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </Portal>
        </section>
    );
};

export default Skills;