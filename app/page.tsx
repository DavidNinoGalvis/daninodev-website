// app/page.tsx
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
//import About from '@/components/About';
//import Projects from '@/components/Projects';
//import Contact from '@/components/Contact';
//import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-[##1A1A1A] text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Hero />
      {/*<About />
      <Projects />
      <Contact />
      <Footer />*/}
    </main>
  );
}

