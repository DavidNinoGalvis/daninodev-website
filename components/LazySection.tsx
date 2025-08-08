'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, useRef, useState } from 'react';

interface LazySectionProps {
  componentKey: 'AboutMe' | 'ProjectsSection' | 'Contact';
  minHeight?: string;
  rootMargin?: string;
  className?: string;
  loadingFallback?: React.ReactNode;
}

const componentsMap = {
  AboutMe: dynamic(() => import('@/components/AboutMe'), { ssr: false }),
  ProjectsSection: dynamic(() => import('@/components/ProjectsSection'), {
    ssr: false,
  }),
  Contact: dynamic(() => import('@/components/Contact'), { ssr: false }),
};

export default function LazySection({
  componentKey,
  minHeight = 'min-h-[60vh]',
  rootMargin = '300px',
  className = '',
  loadingFallback,
}: LazySectionProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const DynamicComponent = useMemo(
    () => (inView ? componentsMap[componentKey] : null),
    [inView, componentKey],
  );

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return (
    <div ref={ref} className={`${minHeight} ${className}`}>
      {inView && DynamicComponent ? (
        <DynamicComponent />
      ) : (
        (loadingFallback ?? (
          <div className="h-full w-full animate-pulse bg-surface-85 rounded-none md:rounded-xl" />
        ))
      )}
    </div>
  );
}
