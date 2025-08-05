'use client';

import React, { useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = window.document.documentElement;
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial = stored || 'dark';

    // tema inicial
    root.classList.toggle('dark', initial === 'dark');
  }, []);

  // Evitar hidratación incorrecta
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
