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
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>(
    'idle',
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('danino.dev@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      console.log('Failed to copy email');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simular envío del formulario
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 2000);
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
      value: 'David Niño',
      href: 'https://linkedin.com/in/tu_perfil',
      color: 'text-blue-700 dark:text-blue-300',
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-background text-foreground py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/10 dark:from-purple-400/10 dark:via-transparent dark:to-purple-500/20 pointer-events-none" />

      {/* Floating particles with improved animations */}
      <motion.div
        animate={{
          y: [0, -25, 10, 0],
          x: [0, 15, -5, 0],
          rotate: [0, 120, 240, 360],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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

      {/* Additional floating elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 8, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/2 right-16 w-1 h-1 bg-purple/60 rounded-full"
      />

      <Container>
        {/* Header with improved animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-muted font-medium tracking-wider uppercase mb-4 flex items-center justify-center gap-2"
          >
            <MessageCircle size={14} />
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-gray-100 to-purple bg-clip-text text-transparent"
          >
            Want to work together?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always open to discussing new opportunities, creative projects,
            and innovative ideas. Let's create something amazing together! ✨
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Formulario mejorado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-purple/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple text-white">
                  <Send size={20} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Send me a message
                </h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-muted mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-background/90 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-300 placeholder:text-muted hover:border-purple/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-background/90 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-300 placeholder:text-muted hover:border-purple/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-muted mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                    className="w-full bg-background/90 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-300 placeholder:text-muted hover:border-purple/50 resize-none"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 25px -5px rgba(139, 70, 243, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-purple hover:bg-purple-hover text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {formStatus === 'sending' ? (
                      <motion.div
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending message...
                      </motion.div>
                    ) : formStatus === 'sent' ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Check size={18} />
                        Message sent successfully!
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send message
                        <Send size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Información de contacto mejorada */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Sparkles className="text-purple" size={24} />
                </motion.div>
                <h3 className="text-3xl font-bold text-purple">David Niño</h3>
              </div>
              <p className="text-muted text-lg leading-relaxed">
                Got something exciting in mind? Share your vision and let's
                start building something incredible together. I'm passionate
                about creating digital experiences that make a difference and
                love collaborating with creative minds.
              </p>
            </motion.div>

            {/* Contact methods con mejores animaciones */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-foreground mb-6 flex items-center gap-2"
              >
                <Star size={18} className="text-purple" />
                Get in touch
              </motion.h4>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  className="group flex items-center gap-4 p-5 rounded-xl bg-card/40 border border-border/30 hover:border-purple/30 hover:bg-card/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 rounded-lg bg-purple-light/50 group-hover:bg-purple-light transition-colors duration-300"
                  >
                    <item.icon
                      size={20}
                      className={`${item.color} group-hover:text-purple transition-colors duration-300`}
                    />
                  </motion.div>
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
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-semibold text-base group-hover:text-purple transition-colors duration-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick email copy mejorado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-card/60 to-card/40 border border-border/50 rounded-xl p-6 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-sm text-muted mb-3 font-medium flex items-center gap-2">
                <Mail size={14} />
                Quick contact
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-background/70 border border-border rounded-lg px-4 py-3 backdrop-blur-sm">
                  <span className="text-foreground font-mono text-sm">
                    danino.dev@gmail.com
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="p-3 bg-purple hover:bg-purple-hover text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  aria-label="Copy email"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check size={18} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Copy size={18} />
                      </motion.div>
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
                  >
                    <Check size={14} />
                    Email copied to clipboard!
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
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
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ♡
              </motion.span>
              by <span className="text-purple font-semibold">David Nino</span>
            </motion.p>
            <p className="text-xs text-muted font-medium">
              © 2025 • All rights reserved
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
