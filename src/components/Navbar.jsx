import {
  Home,
  Code,
  Briefcase,
  Award,
  Trophy,
  FileText,
  Mail,
  Sun,
  Moon,
  MapPin
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -69% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sectionIds = ['home', 'skills', 'projects', 'certifications', 'achievements', 'resume', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: 'Home', icon: <Home size={18} />, href: '#home' },
    { name: 'Skills', icon: <Code size={18} />, href: '#skills' },
    { name: 'Projects', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'Certifications', icon: <Award size={18} />, href: '#certifications' },
    { name: 'Achievements', icon: <Trophy size={18} />, href: '#achievements' },
    { name: 'Resume', icon: <FileText size={18} />, href: '#resume' },
    { name: 'Contact', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[50] pt-6 px-4 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <nav className="flex items-center justify-between px-3 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md shadow-lg transition-colors duration-300 relative">

          <div className="relative group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 overflow-hidden shadow-sm cursor-pointer">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                <img
                  src="/profile-pic.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-[#121212] rounded-full"></span>

            <div className="absolute top-12 left-0 w-64 bg-white dark:bg-[#18181b] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 z-[70]">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src="/profile-pic.png"
                  alt="Large Profile"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-none">Dikshit Nath</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Full Stack Developer</p>
                <div className="pt-2 flex items-center gap-2 text-xs text-gray-400">
                  <MapPin size={12} />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {navItems.map((item, index) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`group relative p-2.5 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 ${isActive ? 'text-pink-500 dark:text-pink-400' : 'text-gray-500 dark:text-gray-400'
                    }`}
                >
                  <span className={`absolute top-12 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-lg z-[60]
                    ${index === 0 ? 'left-0' : ''} 
                    ${index === navItems.length - 1 ? 'right-0' : ''}
                    ${index > 0 && index < navItems.length - 1 ? 'left-1/2 -translate-x-1/2' : ''}
                  `}>
                    {item.name}
                    <span className={`absolute bottom-full border-4 border-transparent border-b-gray-900 dark:border-b-white
                      ${index === 0 ? 'left-3' : ''}
                      ${index === navItems.length - 1 ? 'right-3' : ''}
                      ${index > 0 && index < navItems.length - 1 ? 'left-1/2 -translate-x-1/2' : ''}
                    `}></span>
                  </span>

                  <div className="transition-transform duration-200 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-pink-500 rounded-full transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}></span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="group cursor-pointer relative p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              onClick={() => setActiveSection('contact')}
              className="hidden sm:block bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-xs font-bold hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Hire me
            </a>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;