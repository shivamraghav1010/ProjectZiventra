import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturedPropertiesSection from './components/FeaturedPropertiesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CtaBannerSection from './components/CtaBannerSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import GetInTouchModal from './components/GetInTouchModal';

const SinglePageScrollWeb = () => {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenAuth = (mode = 'login') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 selection:bg-blue-600 selection:text-white">
      {/* Section 1: Hero Section */}
      <HeroSection
        onOpenContact={() => setContactModalOpen(true)}
        onOpenAuth={handleOpenAuth}
      />

      {/* Section 2: Services / Solutions ("Everything You Need to Find the Right Property") */}
      <ServicesSection />

      {/* Section 3: Featured Properties ("Explore Properties You'll Love") */}
      <FeaturedPropertiesSection
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Section 4: Why Choose Us ("Real Estate Made Simple") */}
      <WhyChooseUsSection />

      {/* Section 5: Stats Section ("Helping People Find Their Perfect Place") */}
      <StatsSection />

      {/* Section 5: Testimonials Section ("What Our Clients Say") */}
      <TestimonialsSection />

      {/* Section 7: FAQs Section ("Things You Should Know") */}
      <FAQSection />

      {/* Section 8: CTA Showcase Banner Section ("UrbanVista" with Villa & Get In Touch) */}
      <CtaBannerSection onOpenContact={() => setContactModalOpen(true)} />

      {/* Section 9: Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Authentication Modal (Login / Sign Up) */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={handleCloseAuth}
      />

      {/* Contact / Inquiries Modal */}
      <GetInTouchModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <SinglePageScrollWeb />
    </AuthProvider>
  );
}

export default App;
