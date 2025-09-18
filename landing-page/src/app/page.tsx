import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Demarches from '@/components/Demarches';
import Steps from '@/components/Steps';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Demarches />
        <Steps />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
