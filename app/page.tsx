// app/page.tsx
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground scroll-smooth">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
