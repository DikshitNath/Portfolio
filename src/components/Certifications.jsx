import { useRef } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const certifications = [
  {
    id: 1,
    title: "Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "Sep '25",
    image: "/certificates/fullstack.png",
    link: "https://www.udemy.com/certificate/UC-0735d619-c914-4ce8-af32-11ab37903beb/",
    tags: ["Full Stack", "Web Development"]
  },
  {
    id: 2,
    title: "Mobile Application Development using Flutter",
    issuer: "CipherSchools",
    date: "Jul '25",
    image: "/certificates/flutter.png",
    link: "https://www.cipherschools.com/certificate/preview?id=687e36ad7efd6d5090703d5b",
    tags: ["Mobile App", "Flutter"]
  },
  {
    id: 3,
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    date: "May '25",
    image: "/certificates/nptel.png",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS17S124750057204284803",
    tags: ["Data Science", "Python"]
  },
  {
    id: 4,
    title: "Programming with JavaScript by Meta",
    issuer: "Coursera",
    date: "DEC '23",
    image: "/certificates/js.png",
    link: "https://coursera.org/share/034f302c3d4d37e011e740f2e43ca41a",
    tags: ["JavaScript", "Programming"]
  },
  {
    id: 5,
    title: "Crash Course on Python by Google",
    issuer: "Coursera",
    date: "NOV '23",
    image: "/certificates/python.png",
    link: "https://coursera.org/share/7915c8635485d010295819028a4e4732",
    tags: ["Python", "Programming"]
  },
];

const CertCard = ({ cert, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '0px 0px -60px 0px' });

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
        delay: index * 0.12,
      }}
      className="group relative h-[420px] w-full rounded-[1.5rem] bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Background image */}
      <img
        src={cert.image}
        alt={cert.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />


      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent dark:from-black/95 dark:via-transparent dark:to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      <motion.div
        className="absolute top-6 left-6"
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 + 0.35 }}
      >
        <span className="px-4 py-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
          {cert.issuer}
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 right-4 p-5 bg-black/5 dark:bg-black/60 backdrop-blur-xl border border-white/5 dark:border-white/10 rounded-[1.5rem] shadow-lg group-hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 + 0.25 }}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1 pr-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight uppercase tracking-tight">
              {cert.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-[10px] font-bold">
              <Calendar size={12} className="text-pink-500" />
              <span>{cert.date}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-white/10">
          <div className="flex gap-2 flex-wrap">
            {cert.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[9px] px-2 py-0.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded text-gray-500 dark:text-gray-400 font-bold uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all duration-300 transform group-hover:rotate-45 shadow-lg shadow-pink-500/30"
          >
            <ArrowUpRight size={20} strokeWidth={3} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: '0px 0px -40px 0px' });

  return (
    <section id="certifications" className="min-h-screen pt-32 pb-8 relative z-10 px-4">

      <div ref={headerRef} className="text-center mb-16 px-4">

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
              Certifications
            </motion.span>
          </span>
        </h2>

        <motion.p
          className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black"
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          Professional credentials and verified technical expertise
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>

    </section>
  );
};

export default Certifications;