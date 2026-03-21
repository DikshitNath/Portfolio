import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, X, Send, Sparkles, Bot } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Dikshit's AI clone. Ask me about his tech stack, projects, or how to hire him!", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom when new messages appear
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Fully Mapped Auto-Scrolling Response Engine
    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage = { text: inputValue, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate network delay
        setTimeout(() => {
            let botResponse = "I'm not quite sure about that one! Try asking me about Dikshit's skills, projects, achievements, or how to hire him.";
            const lowerInput = userMessage.text.toLowerCase();
            let sectionToScroll = null;

            // --- 1. THE NAVIGATION & KEYWORD ENGINE ---

            if (lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('skills') || lowerInput.includes('framework')) {
                botResponse = "Dikshit specializes in the MERN stack, Java, and modern UI/UX design. Let me take you to his Skills section!";
                sectionToScroll = 'skills';
            }
            else if (lowerInput.includes('hire') || lowerInput.includes('contact') || lowerInput.includes('job') || lowerInput.includes('interview')) {
                botResponse = "He is actively looking for professional software engineering roles! Scrolling you down to his contact form right now.";
                sectionToScroll = 'contact';
            }
            else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('portfolio')) {
                botResponse = "He's built some serious architecture, including AI tools and real-time multiplayer games. Let's look at his Projects section!";
                sectionToScroll = 'projects';
            }
            // NEW: Achievements Navigation
            else if (lowerInput.includes('achievement') || lowerInput.includes('award') || lowerInput.includes('win') || lowerInput.includes('hackathon')) {
                botResponse = "He has some great wins under his belt, including his strong competitive programming record. Taking you to Achievements!";
                sectionToScroll = 'achievements';
            }
            // NEW: Certifications Navigation
            else if (lowerInput.includes('certificat') || lowerInput.includes('course') || lowerInput.includes('credential')) {
                botResponse = "Dikshit believes in continuous learning. Let's scroll to his Certifications section so you can see his verified credentials.";
                sectionToScroll = 'certifications';
            }
            // NEW: Resume Navigation
            else if (lowerInput.includes('resume') || lowerInput.includes('cv') || lowerInput.includes('download')) {
                botResponse = "You can grab a PDF copy of his resume right here. Scrolling to the Resume section!";
                sectionToScroll = 'resume';
            }
            // NEW: Home Navigation
            else if (lowerInput.includes('home') || lowerInput.includes('top') || lowerInput.includes('hero')) {
                botResponse = "Taking you right back to the top of the page!";
                sectionToScroll = 'home';
            }

            // --- 2. SPECIFIC PROJECT DETAILS (No scrolling, just info) ---

            else if (lowerInput.includes('hireeye')) {
                botResponse = "HireEye is an impressive AI-powered recruitment platform he developed to streamline the hiring process.";
            }
            else if (lowerInput.includes('devkit')) {
                botResponse = "DevKit is his AI-powered developer toolbox. It features a custom API tester, a JWT decoder, and a robust snippet manager.";
            }
            else if (lowerInput.includes('chess') || lowerInput.includes('game')) {
                botResponse = "He built a fully real-time multiplayer chess game using Node.js and Socket.io. Perfect for demonstrating WebSocket architecture!";
            }
            else if (lowerInput.includes('education') || lowerInput.includes('student') || lowerInput.includes('college')) {
                botResponse = "He is a 3rd-year B.Tech IT student, combining his academic foundation with bleeding-edge modern web development.";
            }

            setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
            setIsTyping(false);

            // --- 3. THE SCROLL TRIGGER ---

            if (sectionToScroll) {
                setTimeout(() => {
                    const element = document.getElementById(sectionToScroll);
                    if (element) {
                        // Adding a slight offset calculation so the section header isn't hidden under your fixed Navbar
                        const yOffset = 0; // Adjust this number if the section goes too far up under the nav
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 500);
            }

        }, 1200);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            {/* 1. THE FLOATING TRIGGER BUTTON */}
            <div className="fixed bottom-6 right-6 z-[100]">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full shadow-2xl flex items-center justify-center relative group overflow-hidden"
                >
                    {/* Subtle gradient hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="relative z-10 text-white group-hover:text-white dark:text-black">
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div key="open" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="relative z-10 text-white group-hover:text-white dark:text-black">
                                {/* CHANGED: Replaced MessageSquareText with Bot */}
                                <Bot size={26} className="animate-pulse" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Notification Dot */}
                    {!isOpen && messages.length === 1 && (
                        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-pink-500 border-2 border-white dark:border-black rounded-full animate-bounce" />
                    )}
                </motion.button>

                {/* 2. THE CHAT WINDOW */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="absolute bottom-20 right-0 w-[350px] h-[500px] max-h-[70vh] bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="px-5 py-4 border-b border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 flex items-center justify-center text-white">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-none">DikshitBot</h3>
                                    <p className="text-[10px] text-pink-500 font-black uppercase tracking-widest mt-1">AI Assistant</p>
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
                                {messages.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[80%] p-3 text-sm rounded-2xl ${msg.sender === 'user'
                                            ? 'bg-gray-900 dark:bg-white text-white dark:text-black rounded-br-sm'
                                            : 'bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/5 rounded-bl-sm'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing Indicator */}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 p-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
                                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-gray-50/50 dark:bg-[#111] border-t border-gray-200 dark:border-white/5">
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Ask about my skills..."
                                        className="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-sm rounded-full pl-4 pr-12 py-3 outline-none focus:border-pink-500/50 transition-colors placeholder:text-gray-400"
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={!inputValue.trim()}
                                        className="absolute right-2 p-1.5 bg-pink-500 hover:bg-pink-400 disabled:bg-gray-300 disabled:dark:bg-white/10 text-white disabled:text-gray-500 rounded-full transition-colors"
                                    >
                                        <Send size={16} className="ml-0.5" />
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Chatbot;