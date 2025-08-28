import Herolandingpage from '@/components/Herolandingpage';
import Features from '@/components/Features';

export default function LandingPagePage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Herolandingpage />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Features />
      </section>
    </main>
  );
}