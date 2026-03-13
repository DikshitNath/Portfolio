import { Mail, Phone, MessageSquare, Send, Github, Linkedin, ExternalLink, CheckCircle2, XCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ease = [0.22, 1, 0.36, 1];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const headerInView = useInView(headerRef, { once: false, margin: '0px 0px -40px 0px' });
  const leftInView = useInView(leftRef, { once: false, margin: '0px 0px -60px 0px' });
  const rightInView = useInView(rightRef, { once: false, margin: '0px 0px -60px 0px' });

  const whatsappNumber = "919101195664";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi Dikshit, I saw your portfolio and wanted to connect!`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_name: "Dikshit Nath"
    };
    try {
      await emailjs.send('service_2jb4bjr', 'template_dy4cu0j', templateParams, 'Tu_8N-Gbyzj2nzBat');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputBase = "w-full p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border text-sm focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300";

  return (
    <section id="contact" className="min-h-[80vh] pt-4 relative z-10 px-4 flex flex-col items-center">

      <div ref={headerRef} className="text-center mb-10">

        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-1 tracking-tighter uppercase">
          <motion.span
            className="text-pink-500 font-light mr-4 inline-block"
            style={{ verticalAlign: 'top' }}
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
          >
            &gt;
          </motion.span>
          <span style={{ display: 'inline-block', verticalAlign: 'bottom', paddingBottom: '0.10em' }}>
            <motion.span
              className="inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={headerInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.28 }}
            >
              Get in
            </motion.span>
          </span>
          {' '}
          <span style={{ display: 'inline-block', verticalAlign: 'bottom', paddingBottom: '0.04em' }}>
            <motion.span
              className="italic font-serif text-gray-400 lowercase inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={headerInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.38 }}
            >
              touch
            </motion.span>
          </span>
        </h2>

        <motion.p
          className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black"
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
        >
          Let's build something intelligent together
        </motion.p>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6">

        <motion.div
          ref={leftRef}
          className="lg:col-span-5 space-y-6"
          initial={{ opacity: 0, x: -48, filter: 'blur(10px)' }}
          animate={leftInView
            ? { opacity: 1, x: 0, filter: 'blur(0px)' }
            : { opacity: 0, x: -48, filter: 'blur(10px)' }
          }
          transition={{ duration: 0.75, ease, delay: 0.05 }}
        >
          {/* WhatsApp card */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 rounded-[2.5rem] bg-gradient-to-br from-[#25D366]/10 to-transparent border border-[#25D366]/20 shadow-sm hover:shadow-[0_10px_30px_rgba(37,211,102,0.2)] transition-all duration-300"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.div
                className="p-4 bg-[#25D366] rounded-2xl text-white shadow-lg shadow-[#25D366]/20"
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <MessageSquare size={28} />
              </motion.div>
              <ExternalLink size={20} className="text-[#25D366] opacity-50" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">WhatsApp Me</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">Click to start a conversation instantly.</p>
            <p className="text-xs font-mono font-bold text-[#25D366] mt-4">+91 91011 95664</p>
          </motion.a>

          {/* Other channels */}
          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 space-y-6">
            <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Other Channels</h4>

            <div className="space-y-4">
              {[
                { icon: <Mail size={18} className="text-pink-500" />, text: 'dikshitnath36@gmail.com' },
                { icon: <Phone size={18} className="text-pink-500" />, text: '+91 91011-95664' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
                  initial={{ opacity: 0, x: -12 }}
                  animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.45, ease, delay: 0.2 + i * 0.1 }}
                >
                  {item.icon}
                  <span className="text-xs font-mono font-bold dark:text-gray-300">{item.text}</span>
                </motion.div>
              ))}

              {/* Social links stagger */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { href: "https://github.com/DikshitNath", icon: <Github size={20} className="dark:text-white" />, label: "GitHub" },
                  { href: "https://linkedin.com/in/dikshit-nath", icon: <Linkedin size={20} className="text-blue-500" />, label: "LinkedIn" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/5"
                    initial={{ opacity: 0, y: 12 }}
                    animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.45, ease, delay: 0.4 + i * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                    <span className="text-[10px] font-black uppercase dark:text-white">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Message form — slides in from right ── */}
        <motion.div
          ref={rightRef}
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 48, filter: 'blur(10px)' }}
          animate={rightInView
            ? { opacity: 1, x: 0, filter: 'blur(0px)' }
            : { opacity: 0, x: 48, filter: 'blur(10px)' }
          }
          transition={{ duration: 0.75, ease, delay: 0.1 }}
        >
          <form
            onSubmit={handleSubmit}
            className="h-full p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 flex flex-col shadow-sm"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-pink-500/10 rounded-xl text-pink-500">
                <Send size={24} />
              </div>
              <h4 className="text-sm font-black dark:text-white uppercase tracking-widest">Send a Message</h4>
            </div>

            <div className="space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.45, ease, delay: 0.25 }}
                >
                  <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    placeholder="Your name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputBase} ${focusedField === 'name'
                      ? 'border-pink-500/50 shadow-[0_0_0_3px_rgba(236,72,153,0.08)]'
                      : 'border-gray-100 dark:border-white/10'}`}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.45, ease, delay: 0.33 }}
                >
                  <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="your@email.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputBase} ${focusedField === 'email'
                      ? 'border-pink-500/50 shadow-[0_0_0_3px_rgba(236,72,153,0.08)]'
                      : 'border-gray-100 dark:border-white/10'}`}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 16 }}
                animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.45, ease, delay: 0.41 }}
              >
                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  placeholder="How can I help you?"
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputBase} h-40 resize-none ${focusedField === 'message'
                    ? 'border-pink-500/50 shadow-[0_0_0_3px_rgba(236,72,153,0.08)]'
                    : 'border-gray-100 dark:border-white/10'}`}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>
            </div>

            {/* ── SUBMIT BUTTON with animated state transitions ── */}
            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              className={`mt-10 w-full py-5 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-colors duration-300 flex items-center justify-center gap-3 disabled:cursor-not-allowed overflow-hidden relative
                ${status === 'idle' || status === 'submitting' ? 'bg-pink-500 shadow-[0_10px_30px_rgba(236,72,153,0.3)]' : ''}
                ${status === 'success' ? 'bg-green-500 shadow-[0_10px_30px_rgba(34,197,94,0.3)]' : ''}
                ${status === 'error' ? 'bg-red-500   shadow-[0_10px_30px_rgba(239,68,68,0.3)]' : ''}
              `}
              initial={{ opacity: 0, y: 16 }}
              animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease, delay: 0.52 }}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
            >
              {/* Shimmer on idle */}
              {status === 'idle' && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                />
              )}

              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.span key="idle" className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Message <Send size={16} />
                  </motion.span>
                )}
                {status === 'submitting' && (
                  <motion.span key="submitting" className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span key="success" className="flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                  >
                    Message Sent! <CheckCircle2 size={16} />
                  </motion.span>
                )}
                {status === 'error' && (
                  <motion.span key="error" className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Error. Try Again <XCircle size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;