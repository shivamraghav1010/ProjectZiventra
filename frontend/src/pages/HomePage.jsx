import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const HomePage = ({ onOpenContact }) => {
  return (
    <main className="w-full">
      {/* Screenshot 1: Hero section with UrbanVista branding, villa showcase, and Get in Touch */}
      <HeroSection onOpenContact={onOpenContact} />

      {/* Screenshot 2: Stats section with dotted blue line and underlined metrics */}
      <StatsSection />

      {/* Screenshot 5: Testimonials section with quote cards & Liam Carter avatar */}
      <TestimonialsSection />

      {/* Screenshot 4: FAQ section with "Things You Should Know" and accordion */}
      <FAQSection />

      {/* Screenshot 3: Dark navy footer with social icons, links, and contact circles */}
      <Footer onOpenContact={onOpenContact} />
    </main>
  );
};

export default HomePage;
