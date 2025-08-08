'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X, Globe, User, FolderOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import useTheme from '@/hooks/useTheme';

const navItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: FolderOpen },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentLang, setCurrentLang] = useState(languages[0]);

  // Detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll suave a sección
  const handleSectionClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleLanguageChange = (lang: (typeof languages)[0]) => {
    setCurrentLang(lang);
    setLanguageMenuOpen(false);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-[1285px] mx-auto px-6">
        <motion.div
          ref={navRef}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`
            pointer-events-auto relative
            transition-all duration-500 ease-out
            ${scrolled ? 'max-w-5xl' : 'max-w-7xl'}
            mx-auto px-6 md:px-10 py-3
            flex items-center justify-between
            rounded-2xl border shadow-lg
            border-border
            ${scrolled ? 'glass-strong shadow-2xl' : 'glass'}
            hover:shadow-xl
          `}
        >
          {/* Logo + texto */}
          <motion.a
            href="#top"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-8 h-8 shrink-0">
              <Image
                src="/logo.svg" // coloca tu logo en /public/logo.svg
                alt="Logo danino.dev"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold brand-gradient">
              danino.dev
            </span>
          </motion.a>

          {/* Menú escritorio */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative flex items-center gap-2 px-3 py-2 rounded-lg
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? 'text-purple bg-purple-light'
                        : 'text-foreground hover:text-purple hover:bg-purple-light'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Acciones */}
          <div className="flex gap-3 items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Selector de idioma */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="p-2 rounded-lg hover:bg-purple-light transition-colors duration-200 text-foreground hover:text-purple"
                title="Change language"
              >
                <div className="flex items-center gap-1">
                  <span className="text-lg">{currentLang.flag}</span>
                  <Globe size={20} />
                </div>
              </motion.button>

              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-40 bg-background/98 backdrop-blur-3xl border border-border rounded-lg shadow-lg py-2"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang)}
                        className={`
                          w-full px-3 py-2 text-left text-sm flex items-center gap-2
                          transition-colors duration-200
                          ${
                            currentLang.code === lang.code
                              ? 'text-purple bg-purple-light'
                              : 'text-foreground hover:text-purple hover:bg-purple-light'
                          }
                        `}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Menú móvil */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-light transition-colors duration-200 text-foreground hover:text-purple"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden mt-2 pointer-events-auto glass-strong border border-border rounded-2xl shadow-xl overflow-hidden"
            >
              <nav className="py-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSectionClick(item.href);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`
                        flex items-center gap-3 px-6 py-3 text-sm font-medium
                        transition-all duration-300
                        ${
                          isActive
                            ? 'text-purple bg-purple-light border-r-2 border-purple'
                            : 'text-foreground hover:text-purple hover:bg-purple-light'
                        }
                      `}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}
              </nav>
              <div className="border-t border-border px-6 py-4 bg-muted/10">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>© 2024 danino.dev</span>
                  <div className="flex items-center gap-2">
                    <span>{currentLang.flag}</span>
                    <span>{currentLang.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
