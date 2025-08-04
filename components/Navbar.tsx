'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, Globe, User, FolderOpen, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import useTheme from '@/hooks/useTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-[1285px] mx-auto px-6">
        <div
          ref={navRef}
          className={`
            pointer-events-auto
            transition-all duration-500
            ${scrolled ? 'max-w-5xl' : 'max-w-7xl'}
            mx-auto px-6 md:px-10 py-3
            flex items-center justify-between
            rounded-2xl border border-border shadow-md
            ${scrolled ? 'bg-background/70 backdrop-blur-md' : 'bg-background'}
          `}
        >
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground">danino.dev</div>

          {/* Menú desktop */}
          <div className="hidden md:flex gap-8 text-foreground text-sm font-medium">
            <a
              href="#about"
              className="flex items-center gap-2 hover:text-primary hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <User size={16} /> About
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 hover:text-primary hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <FolderOpen size={16} /> Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 hover:text-primary hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Mail size={16} /> Contact
            </a>
          </div>

          {/* Iconos de acción */}
          <div className="flex gap-4 items-center text-foreground text-2xl">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <div className="cursor-pointer hover:text-primary hover:scale-110 transition-transform duration-300 ease-in-out">
              <Globe size={28} />
            </div>
            <div className="md:hidden cursor-pointer hover:text-primary hover:scale-110 transition-transform duration-300 ease-in-out">
              <Menu size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
