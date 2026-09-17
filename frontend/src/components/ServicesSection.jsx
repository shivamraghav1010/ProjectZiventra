import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: 'Buy a Property',
    image: '/assets/buy_property.jpg',
  },
  {
    id: 2,
    title: 'Rent a Property',
    image: '/assets/rent_property.jpg',
  },
  {
    id: 3,
    title: 'Invest in Real Estate',
    image: '/assets/invest_property.jpg',
  },
  {
    id: 4,
    title: 'Sell Your Property',
    image: '/assets/sell_property.jpg',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Left Heading & Pill Badge */}
          <div className="max-w-2xl">
            {/* Pill Badge matching Screenshot */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-3 h-3 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-800 tracking-tight">
                Trusted Real Estate Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="w-full max-w-2xl text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0A101D] tracking-tight leading-[1.15]">
              Everything You Need to Find
              <br />
              the Right Property
            </h2>
          </div>

          {/* Right Subtitle Text */}
          <div className="max-w-md lg:pb-1">
            <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
              Whether you're buying your first home, investing in property, or looking for the perfect rental, we make the entire journey simpler, faster, and more transparent.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="relative">

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
            {servicesData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[380px] sm:h-[420px] lg:h-[440px] rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer bg-gray-100"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Soft Bottom White Gradient Fade matching screenshot */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

                {/* Card Title at Bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-sm sm:text-base font-bold text-gray-950 tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
