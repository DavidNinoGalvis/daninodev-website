'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Globe, X } from 'lucide-react';

export default function Navbar() {
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
    <div
      ref={navRef}
      className={`
        fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-4
        flex items-center justify-between
        transition-all duration-500
        ${scrolled
          ? 'bg-[#1c1c1c]/70 backdrop-blur-md shadow-lg'
          : 'bg-[#121212]'}
      `}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-white">danino.dev</div>

      {/* Menú desktop */}
      <div className="hidden md:flex gap-8 text-white">
        <a href="#about" className="hover:text-orange-500">About</a>
        <a href="#projects" className="hover:text-orange-500">Projects</a>
        <a href="#contact" className="hover:text-orange-500">Contact</a>
      </div>

      {/* Iconos */}
      <div className="flex gap-4 items-center text-white text-xl">
        <Moon className="cursor-pointer" />
        <Globe className="cursor-pointer" />
        <Menu className="md:hidden cursor-pointer" />
      </div>
    </div>
  );
}
