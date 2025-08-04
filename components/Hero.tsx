'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Copy, Download } from 'lucide-react';
import Container from './Container';

export default function Hero() {
  const heroRef = useRef(null);
  const emailBoxRef = useRef<HTMLDivElement>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (showEmail && emailBoxRef.current) {
      // Animación simple para el email box
      const element = emailBoxRef.current;
      element.style.transform = 'translateY(-10px)';
      element.style.opacity = '0';

      setTimeout(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
      }, 10);
    }
  }, [showEmail]);

  const handleCopy = () => {
    navigator.clipboard.writeText('danino.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen pt-28 flex items-center justify-center bg-background text-foreground"
    >
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="flex flex-col gap-6 max-w-xl">
            <span className="text-muted">— Hey!</span>

            <span className="px-3 py-1 text-xs bg-purple text-white w-fit rounded-full">
              Open to work
            </span>

            <h1 className="text-4xl md:text-5xl font-bold hover:scale-105 hover:text-purple transition-all duration-300">
              I'm <span className="text-foreground">David Niño</span>
            </h1>

            <h2 className="text-purple hover:text-purple text-2xl font-semibold transition-all duration-300">
              Frontend Developer & UI Designer
            </h2>

            <p className="text-muted">
              I build interactive web experiences with clean code, sharp design,
              and a touch of jazz 🎷
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setShowEmail(!showEmail)}
                className="bg-purple hover:bg-purple-hover hover:scale-105 text-white px-5 py-2 rounded-md shadow-lg transition flex items-center gap-2"
              >
                <Mail size={18} /> Contact me
              </button>

              <a
                href="/cv_danino.pdf"
                download
                className="flex items-center gap-2 border border-foreground text-foreground px-5 py-2 rounded-md hover:bg-foreground hover:text-background hover:scale-105 transition"
              >
                <Download size={18} /> Download CV
              </a>
            </div>

            {showEmail && (
              <div
                ref={emailBoxRef}
                className="mt-4 bg-background border border-border p-4 rounded-md flex items-center justify-between w-full max-w-sm transition-all duration-300"
              >
                <span className="text-sm text-foreground">
                  danino.dev@gmail.com
                </span>
                <button
                  onClick={handleCopy}
                  className="text-muted hover:text-foreground hover:scale-110 transition"
                >
                  <Copy size={18} />
                </button>
                {copied && (
                  <span className="text-green-500 text-xs ml-2">Copied!</span>
                )}
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/davidphoto.jpg"
              alt="Foto de David Niño"
              width={300}
              height={300}
              className="rounded-full object-cover border-2 border-foreground shadow-2xl hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
