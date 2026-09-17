import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const HeroSection = ({ onOpenContact, onOpenAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <section id="hero" className="relative w-full min-h-[920px] h-screen max-h-[1080px] overflow-hidden flex flex-col justify-between bg-black">
      {/* Background Image: High-res Luxury Villa */}
      <img
        src="/assets/villa_hero.jpg"
        alt="UrbanVista Luxury Architecture"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-100 transition-transform duration-1000"
      />

      {/* Subtle Ambient Light Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35 pointer-events-none z-[1]" />

      {/* Top Floating Transparent Navigation Bar with Increased Length & Subtler Rounded Corners */}
      <div className="relative z-20 w-full px-3 sm:px-5 lg:px-7 pt-3 sm:pt-4">
        <header className="w-full max-w-[1560px] mx-auto bg-transparent backdrop-blur-[2px] border border-white/35 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-sm">
          {/* Left: Dark Rounded Square Hamburger Button */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-xl bg-[#09101D] hover:bg-black text-white flex flex-col items-center justify-center gap-1.5 shadow-md transition-all group"
              aria-label="Toggle menu"
            >
              <div className="w-4 h-[2px] bg-white rounded-full transition-all group-hover:w-5" />
              <div className="w-5 h-[2px] bg-white rounded-full transition-all" />
              <div className="w-3.5 h-[2px] bg-white rounded-full transition-all group-hover:w-5" />
            </button>

            {/* Menu Dropdown */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 text-gray-900"
                >
                  <div className="space-y-1 text-sm font-medium pb-3 border-b border-gray-100">
                    <a
                      href="#hero"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-800"
                    >
                      Home
                    </a>
                    <a
                      href="#services"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-800"
                    >
                      Services
                    </a>
                    <a
                      href="#featured"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-800"
                    >
                      Properties
                    </a>
                    <a
                      href="#why-choose-us"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-800"
                    >
                      Why Choose Us
                    </a>
                    <a
                      href="#stats"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-800"
                    >
                      Overview
                    </a>
                    <a
                      href="#testimonials"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-800"
                    >
                      Testimonials
                    </a>
                    <a
                      href="#faqs"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-800"
                    >
                      FAQs
                    </a>
                  </div>

                  <div className="pt-3 space-y-2">
                    {user ? (
                      <div className="px-2">
                        <p className="text-xs text-gray-400 font-semibold mb-1">Signed in as</p>
                        <p className="text-xs font-bold text-gray-900 truncate mb-2">{user.name}</p>
                        <button
                          onClick={() => { logout(); setMenuOpen(false); }}
                          className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Logout</span>
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => { onOpenAuth('login'); setMenuOpen(false); }}
                          className="w-full py-2 text-xs font-semibold text-gray-800 hover:bg-gray-100 rounded-xl transition-colors text-center"
                        >
                          Log In
                        </button>
                        <button
                          onClick={() => { onOpenAuth('signup'); setMenuOpen(false); }}
                          className="w-full py-2 text-xs font-semibold text-white bg-black rounded-xl hover:bg-gray-800 transition-colors text-center"
                        >
                          Sign Up
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center: Brand Name UrbanVista */}
          <div className="flex items-center justify-center">
            <span className="urbanvista-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#0A111E] select-none">
              UrbanVista
            </span>
          </div>

          {/* Right: Contact Us Button */}
          <div className="flex items-center gap-3">
            {user && (
              <span className="hidden md:inline-flex items-center text-xs font-bold bg-white/70 text-gray-900 px-3 py-1.5 rounded-full shadow-sm">
                {user.name.split(' ')[0]}
              </span>
            )}
            <button
              onClick={onOpenContact}
              className="bg-[#09101D] hover:bg-black text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact us
            </button>
          </div>
        </header>
      </div>

      {/* Main Hero Body: Floating Glass Card matching Screenshot */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-3 sm:px-6 lg:px-8 mt-10 sm:mt-16 lg:mt-24 mb-auto pb-20">
        <div className="flex items-center">
          {/* Left Card: Soft Sky Blue Frosted Glass Panel */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[440px] sm:max-w-[475px] bg-[#8EC2ED]/75 sm:bg-[#8EC2ED]/80 backdrop-blur-md border border-white/50 rounded-2xl sm:rounded-[12px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          >
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1320] tracking-tight leading-[1.14] mb-4 sm:mb-5 font-sans">
              Find a Place You’ll
              <br />
              Love to Call Home
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] text-[#243345] leading-relaxed mb-7 sm:mb-8 font-normal max-w-sm">
              Discover properties that match your lifestyle, budget, and future goals. From modern apartments to luxury villas, your perfect property is just a few clicks away.
            </p>

            {/* Buttons Row */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Explore Homes Button with Squircle badge */}
              <button
                onClick={onOpenContact}
                className="bg-[#09101D] hover:bg-black text-white pl-5 pr-2.5 py-2.5 sm:py-3 rounded-full flex items-center gap-3 text-xs sm:text-sm font-semibold shadow-md transition-all group"
              >
                <span>Explore Homes</span>
                <span className="w-6 h-5 rounded-[6px] bg-white text-black flex items-center justify-center transition-transform group-hover:scale-105" />
              </button>

              {/* Book a Visit Button */}
              <button
                onClick={onOpenContact}
                className="bg-[#85B2DC]/45 hover:bg-[#85B2DC]/65 border border-[#4A7BB0]/80 text-[#0B1320] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                Book a Visit
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Clouds / Fog Layer matching Screenshot */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-10 leading-none">
        {/* Fluffy volumetric clouds overlay */}
        <img
          src="/assets/clouds.png"
          alt="Clouds overlay"
          className="w-full h-[200px] sm:h-[280px] md:h-[360px] object-cover object-top mix-blend-screen opacity-95 select-none"
        />
        {/* Soft bottom blur transition into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
