// app/page.tsx
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main className="bg-[##1A1A1A] text-white scroll-smooth">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}

