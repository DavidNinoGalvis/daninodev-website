'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Globe } from 'lucide-react';

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
    <div className="fixed top-6 left-0 right-0 z-50">
      <div
        ref={navRef}
        className={`
          mx-auto max-w-6xl
          px-6 md:px-10 py-3
          flex items-center justify-between
          rounded-xl
          transition-all duration-500
          border border-[#2a2a2a]
          ${scrolled
            ? 'bg-[#1c1c1c]/70 backdrop-blur-md shadow-md'
            : 'bg-[#121212]'}
        `}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white">danino.dev</div>

        {/* Menú desktop */}
        <div className="hidden md:flex gap-8 text-white">
          <a href="#about" className="hover:text-[#581BB7] transition">About</a>
          <a href="#projects" className="hover:text-[#581BB7] transition">Projects</a>
          <a href="#contact" className="hover:text-[#581BB7] transition">Contact</a>
        </div>

        {/* Iconos */}
        <div className="flex gap-4 items-center text-white text-xl">
          <Moon className="cursor-pointer hover:text-[#581BB7]" />
          <Globe className="cursor-pointer hover:text-[#581BB7]" />
          <Menu className="md:hidden cursor-pointer hover:text-[#581BB7]" />
        </div>
      </div>
    </div>
  );
}
