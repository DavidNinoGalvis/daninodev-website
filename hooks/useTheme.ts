import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial = stored || 'dark';
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Actualizar el DOM inmediatamente
    root.classList.toggle('dark', newTheme === 'dark');

    // Guardar en localStorage
    localStorage.setItem('theme', newTheme);

    // Actualizar el estado
    setTheme(newTheme);
  };

  // Evitar hidratación incorrecta
  if (!mounted) {
    return { theme: 'dark', toggleTheme };
  }

  return { theme, toggleTheme };
}
