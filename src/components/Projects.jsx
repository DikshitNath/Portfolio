import { useState, useRef } from 'react';
import { Github, ArrowUpRight, Figma } from 'lucide-react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { title } from 'framer-motion/client';

const projects = [
    {
        id: 1,
        title: "HireEye",
        subtitle: "AI Recruitment",
        year: "2026",
        category: "Full Stack",
        image: "/projects/hireeye.png",
        description: "Architected a multi-service ecosystem using Express.js and FastAPI. Features AI Voice Interviewer & Vision Proctoring.",
        techStack: ["React", "Node.js", "FastAPI", "Groq AI"],
        links: {
            github: "https://github.com/DikshitNath/HireEye",
            live: "https://hire-eye.vercel.app/",
        }
    },
    {
        id: 2,
        title: "DevKit",
        subtitle: "Developer Toolkit",
        year: "2026",
        category: "Full Stack",
        image: "/projects/devkit.png",
        description: "A multi-utility developer toolkit integrating a API tester, an snippet vault, a dynamic color palette engine and more with AI assistance.",
        techStack: ["React", "Node.js", "MongoDB", "Gen AI"],
        links: {
            github: "https://github.com/DikshitNath/DevKit",
            live: "https://dev-kit-sepia.vercel.app/"
        }
    },
    {
        id: 3,
        title: "MAC-OS Portfolio",
        subtitle: "OS Recreation",
        year: "2026",
        category: "Frontend",
        image: "/projects/macos.png",
        description: "A high-fidelity macOS Ventura desktop recreation. Implements draggable multi-window logic, functional terminal emulator.",
        techStack: ["React", "SCSS"],
        links: {
            github: "https://github.com/DikshitNath/MAC-OS",
            live: "https://dikshitnath-mac-os.vercel.app/"
        }
    },
    {
        id: 4,
        title: "CurrencyX",
        subtitle: "Finance Tool",
        year: "2025",
        category: "Frontend",
        image: "/projects/currencyX.png",
        description: "A sleek currency converter featuring real-time exchange rates, interactive charts, and a responsive glassmorphism interface.",
        techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
        links: {
            github: "https://github.com/DikshitNath/CurrencyX",
            live: "https://currency-x-psi.vercel.app/"
        }
    },
    {
        id: 5,
        title: "Chess",
        subtitle: "Real-time Game",
        year: "2025",
        category: "Backend",
        image: "/projects/chess.png",
        description: "Real-time multiplayer engine using Socket.io with drag-and-drop mechanics and synchronized states.",
        techStack: ["Node.js", "Socket.io", "Chess.js"],
        links: {
            github: "https://github.com/DikshitNath/Chess",
            live: "https://chess-f24f.onrender.com/"
        }
    },
    {
        id: 6,
        title: "Includemy",
        subtitle: "Web Design",
        year: "2025",
        category: "UI/UX",
        image: "/projects/includemy.png",
        description: "A Figma web design for an inclusive learning ecosystem, featuring reusable components, auto-layout and high-fidelity prototyping.",
        techStack: ["Figma", "Design Systems", "Prototyping"],
        links: {
            github: "https://www.figma.com/design/JYALgErs6JSDDH5PxyY7ca/Includemy?node-id=0-1&p=f&t=HBzfcvRpmL3ThehG-0",
            live: "https://www.figma.com/proto/JYALgErs6JSDDH5PxyY7ca/Includemy?node-id=15-6&starting-point-node-id=15%3A6&t=T8QQhW5IXWK1wE1T-1"
        }
    },
    {
        id: 7,
        title: "SmartHealth+",
        subtitle: "Digital Healthcare",
        year: "2025",
        category: "UI/UX",
        image: "/projects/smarthealth.png",
        description: "Patient-centric healthcare app design featuring activity summary, check-up tracker, and a personalized health plan.",
        techStack: ["Figma", "Mobile UI", "Prototyping"],
        links: {
            github: "https://www.figma.com/design/ZMSuN469rl2H1GTYMqCEpy/Untitled?node-id=0-1&p=f&t=vvdcuFP1aGD38TXb-0",
            live: "https://www.figma.com/proto/ZMSuN469rl2H1GTYMqCEpy/Untitled?node-id=96-30&t=4ogYZ8LDFARQ8i4O-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3"
        }
    },
    {
        id: 8,
        title: "Poliform",
        subtitle: "Web Design",
        year: "2025",
        category: "UI/UX",
        image: "/projects/poliform.png",
        description: "A high-fidelity Figma prototype for a luxury interior design brand, featuring editorial layouts and premium design systems.",
        techStack: ["Figma", "Web Design", "Prototyping"],
        links: {
            github: "https://www.figma.com/design/fIE9SrcmyH5HPnq8OgBWwT/Untitled?node-id=0-1&p=f&t=vvdcuFP1aGD38TXb-0",
            live: "https://www.figma.com/proto/fIE9SrcmyH5HPnq8OgBWwT/Untitled?node-id=2-3&p=f&t=RUQUS2IdtikWDNlV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3"
        }
    },
    {
        id: 9,
        title: "DrumKit",
        subtitle: "Fun Game",
        year: "2023",
        category: "Frontend",
        image: "/projects/drum.png",
        description: "A simple drum kit game built with HTML, CSS, and JavaScript. It features a responsive design and smooth animations.",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/DikshitNath/DrumKit",
            live: "https://dikshitnath.github.io/DrumKit/"
        }
    },
    {
        id: 10,
        title: "Simon Game",
        subtitle: "Fun Game",
        year: "2023",
        category: "Frontend",
        image: "/projects/simon.png",
        description: "A simple pattern remembering game built with HTML, CSS, and JavaScript. It features a responsive design and smooth animations.",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/DikshitNath/SimonGame",
            live: "https://dikshitnath.github.io/SimonGame/"
        }
    }
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "UI/UX"];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: '0px 0px -80px 0px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 52, filter: 'blur(10px)' }}
            animate={inView
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 52, filter: 'blur(10px)' }
            }
            transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: (index % 2) * 0.12,
            }}
            layout
            exit={{ opacity: 0, scale: 0.92, filter: 'blur(6px)', transition: { duration: 0.25 } }}
            className="group relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-[#0c0c0c] border border-white/5 cursor-default hover:border-pink-500/20 hover:shadow-[0_0_60px_rgba(236,72,153,0.08)]"
        >
            <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-70 transition-opacity duration-500"
            />

            <motion.div
                initial={{ height: "100px" }}
                whileHover={{ height: "280px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 bg-black/30 dark:bg-black/50 backdrop-blur-2xl border-t border-white/10 py-5 px-7 flex flex-col justify-start overflow-hidden z-20"
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-black text-white tracking-tighter italic leading-none">
                                {project.title}
                            </h3>
                            <span className="px-2 py-0.5 bg-pink-500/20 border border-pink-500/30 text-pink-400 text-[8px] font-black uppercase tracking-widest rounded">
                                {project.category}
                            </span>
                        </div>
                        <p className="text-gray-200 text-xs font-bold uppercase tracking-[0.2em] opacity-90">
                            {project.subtitle} | {project.year}
                        </p>
                    </div>

                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="w-14 h-14 rounded-full bg-pink-200 hover:bg-pink-400 flex items-center justify-center text-black transition-all duration-300 transform group-hover:rotate-45 shadow-xl shadow-black/20"
                    >
                        <ArrowUpRight size={28} strokeWidth={2.5} />
                    </a>
                </div>

                <div className="space-y-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="h-[1px] w-full bg-white/10" />
                    <p className="text-gray-300 text-sm leading-relaxed font-medium line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white uppercase tracking-widest"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="pt-2">
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/5 border border-white/10 rounded-[2rem] py-2 px-4 inline-flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest hover:bg-pink-400 transition-colors"
                        >
                            {project.category === "UI/UX" ? (
                                <><Figma size={14} /> View Design File</>
                            ) : (
                                <><Github size={14} /> View Source Code</>
                            )}
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: false, margin: '0px 0px -40px 0px' });

    const filterRef = useRef(null);
    const filterInView = useInView(filterRef, { once: false, margin: '0px 0px -20px 0px' });

    const filteredProjects = projects.filter(project =>
        activeCategory === "All" || project.category === activeCategory
    );

    return (
        <section id="projects" className="min-h-screen pt-30 pb-16 relative z-10 px-4">

            <div ref={headerRef} className="text-center mb-14">

                <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-1 tracking-tighter uppercase">
                    <motion.span
                        className="text-pink-500 pt-1 font-light mr-4 inline-block"
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
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                        >
                            Featured
                        </motion.span>
                    </span>
                    {' '}
                    <span style={{ display: 'inline-block', verticalAlign: 'bottom', paddingBottom: '0.16em' }}>
                        <motion.span
                            className="italic font-serif text-gray-400 lowercase inline-block"
                            initial={{ y: '110%', opacity: 0 }}
                            animate={headerInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
                        >
                            projects
                        </motion.span>
                    </span>
                </h2>

                <motion.p
                    className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black"
                    initial={{ opacity: 0, y: 10 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                    A collection of proudly selected works
                </motion.p>
            </div>

            <div ref={filterRef} className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat, i) => (
                    <motion.button
                        key={cat}
                        initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                        animate={filterInView
                            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                            : { opacity: 0, y: 16, filter: 'blur(4px)' }
                        }
                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                            delay: i * 0.07,
                        }}
                        onClick={() => setActiveCategory(cat)}
                        className={`cursor-pointer px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                            activeCategory === cat
                                ? "bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/20"
                                : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                        }`}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </AnimatePresence>
            </div>

        </section>
    );
};

export default Projects;