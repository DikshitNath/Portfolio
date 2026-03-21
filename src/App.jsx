import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import BackgroundPattern from './components/BackgroundPattern';
import CustomScrollbar from './components/Scrollbar';
import { Toaster } from 'react-hot-toast';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-[#050505] min-h-screen transition-colors duration-700">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundPattern />
      </div>

      <CustomScrollbar />

      <div className="relative z-[50]">
        <Navbar />
      </div>

      <Toaster position="bottom-center" />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Chatbot />

      <footer className="relative z-10 py-8 text-center border-t border-gray-200 dark:border-white/5 bg-transparent">
        <p className="text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.4em]">
          Handcrafted by Dikshit Nath © 2026
        </p>
      </footer>
    </div>
  );
}

export default App;