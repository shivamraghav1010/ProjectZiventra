import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CtaBannerSection = ({ onOpenContact }) => {
  return (
    <section className="w-full bg-white relative pt-16 sm:pt-24 lg:pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Split Area: Left Text + Button | Center-Right Villa Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24 lg:mb-28">
          {/* Left Column: Heading / Copy + "Get in Touch" Pill Button */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs font-normal">
              Find your next home with our expert guidance and personalized assistance.
            </p>

            {/* "Get In Touch" Button matching Figma design */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200/90 pl-5 pr-2 py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-950 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>Get In Touch</span>
              <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-blue-600 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>

          {/* Center-Right Column: Villa Pool Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-gray-500/20 group border border-gray-100">
              <img
                src="/assets/cta_pool_villa.jpg"
                alt="Modern Luxury Villa at Dusk"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle ambient lighting vignette on the card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* UrbanVista Banner with Decreased Length & Curvy Left/Right Borders */}
      <div className="w-full flex justify-center mt-6 sm:mt-10 select-none pointer-events-none px-4 sm:px-8">
        <div 
          className="relative w-full max-w-4xl lg:max-w-5xl h-[160px] sm:h-[195px] lg:h-[225px] rounded-t-[60px] sm:rounded-t-[90px] lg:rounded-t-[120px] overflow-hidden flex items-end justify-center pb-2 sm:pb-3"
          style={{
            background: `
              radial-gradient(110% 100% at 50% 105%, #050C14 42%, rgba(10, 22, 36, 0.92) 64%, rgba(70, 92, 118, 0.45) 84%, transparent 100%),
              linear-gradient(180deg, rgba(5, 12, 20, 0.4) 0%, rgba(5, 12, 20, 0.85) 45%, #050C14 100%)
            `,
            boxShadow: '0 -15px 35px -5px rgba(5, 12, 20, 0.28)'
          }}
        >
          {/* Subtle ambient lighting vignette inside the curvy container */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050C14]/30 to-[#050C14] pointer-events-none" />

          {/* Stylized UrbanVista Gradient Text */}
          <span
            className="relative z-10 urbanvista-display font-black text-center text-[44px] sm:text-[68px] md:text-[90px] lg:text-[112px] xl:text-[124px] leading-[0.82] tracking-normal"
            style={{
              background: 'linear-gradient(180deg, #9BAEBF 0%, #687A8E 35%, #2F3E4F 70%, #15202C 95%, #0C141E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 14px rgba(0, 0, 0, 0.4))'
            }}
          >
            UrbanVista
          </span>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
