import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial: Theme = stored || 'dark';
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    // Actualizar el DOM inmediatamente
    root.classList.toggle('dark', newTheme === 'dark');

    // Guardar en localStorage
    localStorage.setItem('theme', newTheme);

    // Actualizar el estado
    setTheme(newTheme);
  };

  // Evitar hidratación incorrecta
  if (!mounted) {
    return { theme: 'dark' as Theme, toggleTheme };
  }

  return { theme, toggleTheme };
}
