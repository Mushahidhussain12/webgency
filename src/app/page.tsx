'use client';

import Navigation from '@/widgets/Navigation';
import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Services from '@/widgets/Services';
import ProcessFlow from '@/widgets/ProcessFlow';
import CompanyLogos from '@/widgets/CompanyLogos';
import Testimonials from '@/widgets/Testimonials';
import Contact from '@/widgets/Contact';
import Footer from '@/widgets/Footer';
import ShadowCursor from '@/components/ui/ShadowCursor'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <ProcessFlow />
      <CompanyLogos />
      <Testimonials />
      <Contact />
      <Footer />

      {/* disable cursor here */}
      <ShadowCursor />
    </>
  );
}
