import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Luxury Villa',
    location: 'Premium Location',
    price: 'Starting from ₹XX,XX,XXX',
    image: '/assets/featured_villa_1.jpg',
  },
  {
    id: 2,
    title: 'Luxury Villa',
    location: 'Premium Location',
    price: 'Starting from ₹XX,XX,XXX',
    image: '/assets/featured_villa_2.jpg',
  },
  {
    id: 3,
    title: 'Luxury Villa',
    location: 'Premium Location',
    price: 'Starting from ₹XX,XX,XXX',
    image: '/assets/featured_villa_3.jpg',
  },
];

const FeaturedPropertiesSection = ({ onOpenContact }) => {
  return (
    <section id="featured" className="w-full bg-white py-16 sm:py-24 relative overflow-hidden">
      {/* Section Header matching exact Figma screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-10 sm:mb-12">
        {/* Top Row: Badge on Left, View All Properties on Right */}
        <div className="flex items-center justify-between gap-4 mb-3">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-800 tracking-tight">
              Featured Properties
            </span>
          </div>

          {/* View All Properties Button */}
          <button
            onClick={onOpenContact}
            className="bg-black hover:bg-gray-900 text-white pl-4 sm:pl-5 pr-2 py-2 sm:py-2.5 rounded-lg flex items-center gap-3 text-xs sm:text-[13px] font-semibold shadow-md transition-all group"
          >
            <span>View All Properties</span>
            <span className="w-[22px] h-[14px] rounded-[4px] bg-white flex-shrink-0 transition-transform group-hover:scale-105" />
          </button>
        </div>

        {/* Bottom Row: Main Title on Left, Subtitle on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0A101D] tracking-tight leading-tight font-display">
            Explore Properties You'll Love
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 max-w-sm sm:text-right font-normal">
            Discover handpicked properties in prime locations.
          </p>
        </div>
      </div>

      {/* Property Banners (Decreased width by 40 - 50px) */}
      <div className="w-full px-5 sm:px-6 space-y-3 sm:space-y-4">
        {properties.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[860px] xl:h-[880px] rounded-none overflow-hidden shadow-sm group cursor-pointer bg-gray-900"
          >
            {/* Background Property Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center ease-out"
              loading="lazy"
            />

            {/* Subtle Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors pointer-events-none" />

            {/* Floating Center Frosted Glass Details Card */}
            <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
              <div className="w-full max-w-[420px] sm:max-w-[480px] bg-black/45 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-[14px] p-6 sm:p-8 md:p-9 flex flex-col items-center justify-center text-center shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                {/* Category Title */}
                <span className="text-xs sm:text-sm md:text-[15px] font-medium text-white/90 tracking-wide mb-1.5">
                  {item.title}
                </span>

                {/* Location with Red Pin */}
                <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-gray-300 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-red-500 fill-red-500 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>

                {/* Price */}
                <div className="text-lg sm:text-xl md:text-[22px] font-bold text-white tracking-wide mb-5 sm:mb-6">
                  {item.price}
                </div>

                {/* Explore Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenContact();
                  }}
                  className="bg-white hover:bg-gray-100 text-black pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-lg flex items-center gap-3 text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 group/btn"
                >
                  <span>Explore</span>
                  <span className="w-[32px] h-[28px] rounded-[4px] bg-black flex-shrink-0 transition-transform group-hover/btn:scale-105" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section >
  );
};

export default FeaturedPropertiesSection;
