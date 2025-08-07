"use client";

import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("danino.dev@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log("Failed to copy email");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simular envío del formulario
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "danino.dev@gmail.com",
      href: "mailto:danino.dev@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cali, Colombia",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@tu_usuario",
      href: "https://github.com/tu_usuario",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "David Niño",
      href: "https://linkedin.com/in/tu_perfil",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-background text-foreground py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-purple-light pointer-events-none" />

      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-20 w-2 h-2 bg-purple/40 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -12, 0],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 right-32 w-3 h-3 bg-purple/30 rounded-full"
      />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground font-medium tracking-wider uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-purple bg-clip-text text-transparent">
            Want to work together?
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full bg-background/80 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200 placeholder:text-muted-foreground"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full bg-background/80 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200 placeholder:text-muted-foreground"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-background/80 text-foreground px-4 py-4 rounded-lg border border-border focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200 placeholder:text-muted-foreground resize-none"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-purple hover:bg-purple-hover text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : formStatus === "sent" ? (
                    <>
                      <Check size={18} />
                      Message sent!
                    </>
                  ) : (
                    <>
                      Send message <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-purple mb-4">
                David Niño
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Got something in mind? Share your vision and let's start
                building something amazing together. I'm always excited to work
                on new projects and collaborate with creative people.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Get in touch
              </h4>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/30 hover:border-purple/30 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-purple-light text-purple">
                    <item.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-purple transition-colors duration-200 font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick email copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-border/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <p className="text-sm text-muted-foreground mb-3">
                Quick contact
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-background/50 border border-border rounded-lg px-4 py-3">
                  <span className="text-foreground font-mono text-sm">
                    danino.dev@gmail.com
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="p-3 bg-purple hover:bg-purple-hover text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </motion.button>
              </div>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-500 text-sm mt-2 font-medium"
                >
                  ✨ Email copied to clipboard!
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="pt-20 border-t border-border/50 mt-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by{" "}
              <span className="text-purple font-medium">David Niño</span>
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 All rights reserved
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
