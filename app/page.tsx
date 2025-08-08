import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LazySection from '@/components/LazySection';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground scroll-smooth">
      <Navbar />
      <Hero />

      <LazySection
        componentKey="AboutMe"
        minHeight="min-h-[70vh] md:min-h-[60vh]"
        rootMargin="300px"
      />

      <LazySection
        componentKey="ProjectsSection"
        minHeight="min-h-[90vh]"
        rootMargin="400px"
      />

      <LazySection
        componentKey="Contact"
        minHeight="min-h-[80vh]"
        rootMargin="400px"
      />
    </main>
  );
}
