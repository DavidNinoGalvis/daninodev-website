'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Copy,
  Download,
  Check,
  Instagram,
  Linkedin,
  Github,
  Facebook,
} from 'lucide-react';
import Container from './Container';
import { motion } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef(null);
  const emailBoxRef = useRef<HTMLDivElement>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (showEmail && emailBoxRef.current) {
      const element = emailBoxRef.current;
      element.classList.add('animate-slide-up');
    }
  }, [showEmail]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('danino.dev@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.log('Failed to copy email');
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen pt-12 md:pt-16 flex items-center justify-center bg-background text-foreground overflow-hidden relative"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/10 dark:from-purple-400/10 dark:via-transparent dark:to-purple-500/20 pointer-events-none" />

      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-3 md:gap-4 max-w-lg z-20 text-center lg:text-left lg:w-2/5"
          >
            <span className="text-muted-foreground text-sm font-medium">
              — Hey!
            </span>

            <span className="px-3 py-1.5 text-xs bg-purple hover:bg-purple-hover text-white w-fit rounded-full shadow-lg transition-all duration-200 mx-auto lg:mx-0">
              Open to work
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              I&apos;m{' '}
              <span className="text-purple hover:text-purple transition-colors duration-200">
                David Nino
              </span>
            </h1>

            <h2 className="text-purple text-xl md:text-2xl font-semibold">
              Full Stack Developer & UI Designer
            </h2>

            <p className="text-muted leading-relaxed text-base md:text-lg max-w-md mx-auto lg:mx-0">
              I build interactive web experiences with clean code, sharp design,
              and a touch of jazz 🎷
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 w-full sm:w-auto">
              <motion.button
                onClick={() => setShowEmail(!showEmail)}
                className="bg-purple hover:bg-purple-hover text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-out flex items-center justify-center gap-2 font-medium"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} /> Contact me
              </motion.button>

              <motion.a
                href="/cv_danino.pdf"
                download
                className="flex items-center justify-center gap-2 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white dark:hover:border-purple-500 transform hover:scale-105 transition-all duration-200 ease-out font-medium shadow-sm hover:shadow-lg dark:shadow-purple-500/20 dark:hover:shadow-purple-500/30"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} /> Download CV
              </motion.a>
            </div>

            {/* Social Media Icons - Mejoradas para dark theme */}
            <motion.div
              className="flex gap-4 mt-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                {
                  icon: Instagram,
                  href: 'https://instagram.com/ninodadavid',
                  delay: 0,
                },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/daninodev/',
                  delay: 0.5,
                },
                {
                  icon: Github,
                  href: 'https://github.com/DavidNinoGalvis',
                  delay: 1,
                },
                {
                  icon: Facebook,
                  href: 'https://www.facebook.com/profile.php?id=100014978629240',
                  delay: 1.5,
                },
              ].map(({ icon: Icon, href, delay }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-purple-600 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white shadow-lg hover:shadow-xl dark:shadow-purple-500/25 dark:hover:shadow-purple-500/40 transition-all duration-200"
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay,
                    },
                  }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Email Box*/}
            <motion.div
              initial={false}
              animate={
                showEmail
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: -10, scale: 0.95 }
              }
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`${showEmail ? 'block' : 'hidden'} mt-4`}
            >
              <div
                ref={emailBoxRef}
                className="bg-card border border-border p-4 rounded-lg flex items-center justify-between max-w-sm shadow-lg hover:shadow-xl dark:shadow-lg dark:hover:shadow-xl dark:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-200 mx-auto lg:mx-0 backdrop-blur-sm"
              >
                <span className="text-sm text-foreground font-mono">
                  danino.dev@gmail.com
                </span>
                <button
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200 p-2 rounded-md hover:bg-muted/50"
                  aria-label={copied ? 'Email copied!' : 'Copy email'}
                >
                  {copied ? (
                    <Check
                      size={18}
                      className="text-green-500 dark:text-green-400"
                    />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-500 dark:text-green-400 text-xs mt-2 block text-center lg:text-left font-medium"
                >
                  Email copied to clipboard!
                </motion.span>
              )}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative flex justify-center w-full lg:w-3/5 z-10"
          >
            <div className="relative">
              {/* Círculo de fondo con gradiente adaptable */}
              <motion.div
                animate={{
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] bg-gradient-to-br from-purple-600 via-purple-600 to-purple-700 dark:from-purple-600 dark:via-purple-400 dark:to-purple-600 rounded-full z-0 shadow-2xl dark:shadow-purple-500/25"
              />

              {/* Anillo exterior con glow effect */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[480px] md:h-[480px] lg:w-[530px] lg:h-[530px] xl:w-[580px] xl:h-[580px] border-2 border-purple-400/30 dark:border-purple-300/40 rounded-full z-0"
              />

              {/* Imagen con floating animation mejorada */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-20"
              >
                <div className="relative w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[580px] xl:h-[580px]">
                  <Image
                    src="/images/david-hero.png"
                    alt="Foto de David Niño"
                    fill
                    priority
                    style={{ pointerEvents: 'none' }}
                    className="object-contain object-center shadow-2xl dark:shadow-purple-500/20 transition-all duration-500 rounded-full ring-4 ring-white/20 dark:ring-purple-300/20"
                    sizes="(max-width: 768px) 384px, (max-width: 1024px) 450px, (max-width: 1280px) 500px, 580px"
                  />
                </div>
              </motion.div>

              {/* Partículas flotantes */}
              {[
                {
                  size: 'w-4 h-4',
                  position: 'top-12 right-8',
                  delay: 0,
                  duration: 8,
                },
                {
                  size: 'w-6 h-6',
                  position: 'bottom-16 -left-8',
                  delay: 1,
                  duration: 6,
                },
                {
                  size: 'w-3 h-3',
                  position: 'top-1/3 -right-6',
                  delay: 2,
                  duration: 7,
                },
                {
                  size: 'w-5 h-5',
                  position: 'top-2/3 left-4',
                  delay: 0.5,
                  duration: 9,
                },
                {
                  size: 'w-2 h-2',
                  position: 'bottom-1/3 right-12',
                  delay: 3,
                  duration: 5,
                },
              ].map((particle, index) => (
                <motion.div
                  key={index}
                  animate={{
                    x: [0, Math.random() * 40 - 20, Math.random() * 30 - 15, 0],
                    y: [0, Math.random() * 30 - 15, Math.random() * 25 - 12, 0],
                    rotate: [0, 180 + Math.random() * 180, 360],
                    scale: [1, 1.2 + Math.random() * 0.3, 0.8, 1],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: particle.delay,
                  }}
                  className={`absolute ${particle.position} ${particle.size} bg-purple-600/60 dark:bg-purple-400/70 rounded-full z-30 shadow-lg dark:shadow-purple-400/30`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* CSS personalizado para animaciones */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        /* Glow effect para dark theme */
        @media (prefers-color-scheme: dark) {
          .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(147, 51, 234, 0.25);
          }
        }
      `}</style>
    </section>
  );
}
