'use client';

import { useEffect, useState, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { gsap } from 'gsap';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true); // default: dark
  const iconRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    // Cambia la clase de `html`
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.classList.toggle('dark', !darkMode);
    }
  };

  // Animación de entrada
  useEffect(() => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { rotate: 0, scale: 0.9 },
        { rotate: 360, scale: 1, duration: 0.5, ease: 'power2.out' },
      );
    }
  }, [darkMode]);

  return (
    <div
      onClick={toggleTheme}
      ref={iconRef}
      className="cursor-pointer hover:text-[#581BB7] hover:scale-110 transition-transform duration-300 ease-in-out"
      title="Toggle theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </div>
  );
}
