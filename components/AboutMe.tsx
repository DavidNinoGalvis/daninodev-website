
'use client';

import Image from 'next/image';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#121212] text-white"
    >
      {/* Text Section */}
      <div className="max-w-2xl space-y-6">
        <p className="text-sm text-gray-400">About me</p>
        <h2 className="text-4xl font-bold">Who am I?</h2>

        <p className="text-gray-300">
          I'm a <span className="text-[#581BB7] font-semibold">Full-Stack Web Developer</span> with a
          strong focus on <span className="font-semibold">Frontend development</span>, and currently
          learning <span className="font-semibold">Backend technologies</span>. I love creating
          beautiful, functional and easy to use interfaces.
        </p>

        <p className="text-gray-300">
          I have +1 year of experience building and designing my own web projects. I haven't worked
          formally in a company yet, but <span className="font-semibold text-white">I've learned Frontend and Backend skills through self study</span>.
          This has allowed me to build amazing and fully functional websites on my own.
        </p>
      </div>

      {/* Image Section */}
      <div className="shrink-0">
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
