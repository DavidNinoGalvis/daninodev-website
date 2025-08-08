'use client';

import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Github,
  Linkedin,
  Star,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Container from './Container';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honey: '', // honeypot
  });
  const formRef = useRef<HTMLFormElement>(null);
  const reduce = useReducedMotion();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('danino.dev@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback: selecciona dentro de un input si quisieras
      console.warn('Failed to copy email');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honey) return; // bot detected
    setFormStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Request failed');

      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '', honey: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'danino.dev@gmail.com',
      href: 'mailto:danino.dev@gmail.com',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cali, Colombia',
      href: null,
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@tu_usuario',
      href: 'https://github.com/tu_usuario',
      color: 'text-gray-600 dark:text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'David Nino',
      href: 'https://linkedin.com/in/tu_perfil',
      color: 'text-blue-700 dark:text-blue-300',
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-background text-foreground py-20 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/10 dark:from-purple-400/10 dark:via-transparent dark:to-purple-500/20 pointer-events-none" />

      {/* Partículas (respetando reduced motion) */}
      {!reduce && (
        <>
          <motion.div
            animate={{
              y: [0, -25, 10, 0],
              x: [0, 15, -5, 0],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-32 left-20 w-2 h-2 bg-purple/50 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 30, -15, 0],
              x: [0, -20, 8, 0],
              rotate: [0, -150, -300, -360],
              scale: [1, 0.6, 1.4, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
            className="absolute bottom-40 right-32 w-3 h-3 bg-purple/40 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute top-1/2 right-16 w-1 h-1 bg-purple/60 rounded-full"
          />
        </>
      )}

      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp(0.2)}
            className="text-sm text-muted font-medium tracking-wider uppercase mb-4 flex items-center justify-center gap-2"
          >
            <MessageCircle size={14} />
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp(0.3)}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-gray-100 to-purple bg-clip-text text-transparent"
          >
            Want to work together?
          </motion.h2>

          <motion.p
            variants={fadeUp(0.4)}
            className="text-muted text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m always open to discussing new opportunities, creative
            projects, and innovative ideas. Let&apos;s create something amazing
            together! ✨
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Formulario */}
          <motion.div
            variants={fadeLeft(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="glass border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-purple/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple text-white">
                  <Send size={20} />
                </div>
                <h3 className="text-2xl font-bold">Send me a message</h3>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* Honeypot */}
                <div className="hidden">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="honey"
                    value={formData.honey}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-background/90 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-300 placeholder:text-muted hover:border-purple/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-background/90 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-300 placeholder:text-muted hover:border-purple/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                    className="w-full bg-background/90 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-300 placeholder:text-muted hover:border-purple/50 resize-none"
                  />
                </div>

                <fieldset
                  disabled={formStatus === 'sending'}
                  className="contents"
                />

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 25px -5px rgba(139, 70, 243, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  aria-live="polite"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-purple hover:bg-purple-hover text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <AnimatePresence mode="wait">
                    {formStatus === 'sending' ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <motion.span
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                        Sending message...
                      </motion.span>
                    ) : formStatus === 'sent' ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Check size={18} />
                        Message sent successfully!
                      </motion.span>
                    ) : formStatus === 'error' ? (
                      <motion.span
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        ⚠️ Error sending. Try again.
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send message
                        <Send size={18} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* SR-only live region */}
                <p className="sr-only" aria-live="polite">
                  {formStatus === 'sending'
                    ? 'Sending'
                    : formStatus === 'sent'
                      ? 'Sent'
                      : formStatus === 'error'
                        ? 'Error'
                        : ''}
                </p>
              </form>
            </motion.div>
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            variants={fadeRight(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <motion.div variants={fadeUp(0.6)}>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={reduce ? undefined : { rotate: [0, 5, -5, 0] }}
                  transition={
                    reduce
                      ? undefined
                      : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                  }
                ></motion.div>
                <h3 className="text-3xl font-bold text-purple">David Nino</h3>
              </div>
              <p className="text-muted text-lg leading-relaxed">
                Got something exciting in mind? Share your vision and let&apos;s
                start building something incredible together.
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.h4
                variants={fadeUp(0.7)}
                className="text-xl font-bold mb-6 flex items-center gap-2"
              >
                <Star size={18} className="text-purple" />
                Get in touch
              </motion.h4>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp(0.8 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  className="group flex items-center gap-4 p-5 rounded-xl glass border border-border hover:border-purple/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-purple-light/50 group-hover:bg-purple-light transition-colors duration-300">
                    <item.icon
                      size={20}
                      className={`${item.color} group-hover:text-purple transition-colors duration-300`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-purple transition-colors duration-200 font-semibold text-base group-hover:text-purple"
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-semibold text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick email copy */}
            <motion.div
              variants={fadeUp(1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="glass border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-sm text-muted mb-3 font-medium flex items-center gap-2">
                <Mail size={14} />
                Quick contact
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-background/70 border border-border rounded-lg px-4 py-3">
                  <span className="font-mono text-sm">
                    danino.dev@gmail.com
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="p-3 bg-purple hover:bg-purple-hover text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Copy email"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check size={18} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Copy size={18} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              <AnimatePresence>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-500 text-sm mt-3 font-medium flex items-center gap-2"
                    aria-live="polite"
                  >
                    <Check size={14} />
                    Email copied to clipboard!
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp(1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-20 border-t border-border/50 mt-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-sm text-muted flex items-center gap-2"
            >
              Made with
              <motion.span
                animate={reduce ? undefined : { scale: [1, 1.2, 1] }}
                transition={
                  reduce ? undefined : { duration: 1, repeat: Infinity }
                }
                className="text-red-500"
              >
                ♡
              </motion.span>
              by <span className="text-purple font-semibold">David Nino</span>
            </motion.p>
            <p className="text-xs text-muted font-medium">
              © 2025 • The best is yet to come.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
