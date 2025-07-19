'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 50, opacity: 0, duration: 1 });
      gsap.from('.hero-subtitle', { y: 30, opacity: 0, delay: 0.3, duration: 1 });
      gsap.from('.hero-text', { y: 30, opacity: 0, delay: 0.6, duration: 1 });
      gsap.from('.hero-buttons', { opacity: 0, scale: 0.8, delay: 0.8, duration: 0.8 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-between px-6 md:px-20 bg-[#121212] text-white"
    >
      {/* Text Section */}
      <div className="flex flex-col gap-6 max-w-xl">
        <span className="text-gray-400">— Hey!</span>

        <span className="px-3 py-1 text-xs bg-[#581BB7] text-white w-fit rounded-full">
          Open to work
        </span>

        <h1 className="hero-title text-4xl md:text-5xl font-bold">
          I'm <span className="text-white">David Niño</span>
        </h1>

        <h2 className="hero-subtitle text-[#581BB7] text-2xl font-semibold">
          Frontend Developer & UI Designer
        </h2>

        <p className="hero-text text-gray-300">
          I build interactive web experiences with clean code, sharp design, and a touch of jazz 🎷
        </p>

        <div className="hero-buttons flex gap-4 mt-4">
          <Link
            href="mailto:danino.dev@gmail.com"
            className="bg-[#581BB7] hover:bg-[#471095] text-white px-5 py-2 rounded-md shadow-lg transition"
          >
            ✉ Contact me
          </Link>
          <a
            href="/cv_danino.pdf"
            download
            className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            ⬇ Download CV
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block">
        <Image
          src="/perfil_danino.png"
          alt="Foto de David Niño"
          width={300}
          height={300}
          className="rounded-xl border-2 border-white rotate-3 shadow-2xl"
        />
      </div>
    </section>
  );
}
