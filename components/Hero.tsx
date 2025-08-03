"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Mail, Copy, Download } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);
  const emailBoxRef = useRef(null);
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 50, opacity: 0, duration: 1 });
      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        delay: 0.3,
        duration: 1,
      });
      gsap.from(".hero-text", { y: 30, opacity: 0, delay: 0.6, duration: 1 });
      gsap.from(".hero-buttons", {
        opacity: 0,
        scale: 0.8,
        delay: 0.8,
        duration: 0.8,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showEmail && emailBoxRef.current) {
      gsap.fromTo(
        emailBoxRef.current,
        { y: -10, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showEmail]);

  const handleCopy = () => {
    navigator.clipboard.writeText("danino.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen pt-28 flex items-center justify-center px-6 md:px-12 bg-[#121212] text-white"
    >
      <div className="w-full max-w-[1250px] flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-xl">
          <span className="text-gray-400">— Hey!</span>

          <span className="px-3 py-1 text-xs bg-[#581BB7] text-white w-fit rounded-full">
            Open to work
          </span>

          <h1 className="hero-title text-4xl md:text-5xl font-bold hover:scale-105 hover:text-[#6d30d7] transition-all duration-300">
            I'm <span className="text-white">David Niño</span>
          </h1>

          <h2 className="hero-subtitle text-[#581BB7] hover:text-[#6d30d7] text-2xl font-semibold transition-all duration-300">
            Frontend Developer & UI Designer
          </h2>

          <p className="hero-text text-gray-300">
            I build interactive web experiences with clean code, sharp design,
            and a touch of jazz 🎷
          </p>

          <div className="hero-buttons flex gap-4 mt-4">
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="bg-[#581BB7] hover:bg-[#471095] hover:scale-105 text-white px-5 py-2 rounded-md shadow-lg transition flex items-center gap-2"
            >
              <Mail size={18} /> Contact me
            </button>

            <a
              href="/cv_danino.pdf"
              download
              className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-black hover:scale-105 transition"
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          {showEmail && (
            <div
              ref={emailBoxRef}
              className="mt-4 bg-[#1f1f1f] border border-gray-600 p-4 rounded-md flex items-center justify-between w-full max-w-sm"
            >
              <span className="text-sm">danino.dev@gmail.com</span>
              <button
                onClick={handleCopy}
                className="text-gray-400 hover:text-white hover:scale-110 transition"
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
            className="rounded-full object-cover border-2 border-white shadow-2xl hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
