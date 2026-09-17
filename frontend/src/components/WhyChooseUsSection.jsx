import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: '01',
    number: '.01',
    title: 'Verified Properties',
    description: 'Browse reliable and carefully reviewed property listings.',
    isFeatured: true,
  },
  {
    id: '02',
    number: '.02',
    title: 'Expert Guidance',
    description: 'Get professional support at every stage of your property journey.',
    isFeatured: false,
  },
  {
    id: '03',
    number: '.03',
    title: 'Transparent Process',
    description: 'Clear information, honest communication, and no unnecessary surprises.',
    isFeatured: false,
  },
  {
    id: '04',
    number: '.04',
    title: 'Best Locations',
    description: 'Discover properties in neighborhoods and locations that matter to you.',
    isFeatured: false,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          {/* Circular Badge Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3.5"
          >
            <span className="w-3 h-3 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-800 tracking-tight">
              Why Choose Us
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0A101D] tracking-tight leading-tight mb-3.5 font-display"
          >
            Real Estate Made Simple
          </motion.h2>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-xl font-normal"
          >
            Finding the right property shouldn't be complicated. We combine trusted listings, local expertise, and personalized support to help you make confident real estate decisions.
          </motion.p>
        </div>

        {/* 4 Cards Grid / Flex Row matching Figma screenshot pixel-for-pixel */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-5 items-stretch">
          {/* Card 1: Verified Properties (.01) - Hero Dark Card with Victorian Mansion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative lg:flex-[2.1] min-w-0 bg-black rounded-[28px] overflow-hidden flex flex-col justify-between h-[470px] sm:h-[490px] lg:h-[500px] shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Top Text & Number */}
            <div className="p-7 sm:p-8 flex justify-between items-start relative z-10 w-full">
              <div className="max-w-[210px] sm:max-w-[230px]">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 font-display">
                  Verified Properties
                </h3>
                <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed">
                  Browse reliable and carefully reviewed property listings.
                </p>
              </div>

              <div className="text-5xl sm:text-6xl font-bold text-white tracking-tight font-display select-none pl-3">
                .01
              </div>
            </div>

            {/* Mansion Cutout Image positioned at bottom matching Figma design */}
            <div className="absolute bottom-0 inset-x-0 h-[66%] sm:h-[68%] w-full overflow-hidden flex items-end justify-center pointer-events-none">
              <img
                src="/assets/why_choose_house.jpg"
                alt="Verified Properties - Victorian House"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Subtle gradient vignette at top edge to seamlessly blend with black background */}
              <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Card 2: Expert Guidance (.02) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group lg:flex-1 min-w-0 bg-[#F7F8FA] hover:bg-[#F1F3F6] border border-gray-100/90 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between h-[470px] sm:h-[490px] lg:h-[500px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-5xl sm:text-6xl font-bold text-[#0B0F19] tracking-tight font-display select-none">
              .02
            </div>

            <div>
              <h3 className="text-lg sm:text-[19px] font-bold text-[#0B0F19] tracking-tight mb-2 font-display">
                Expert Guidance
              </h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                Get professional support at every stage of your property journey.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Transparent Process (.03) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="group lg:flex-1 min-w-0 bg-[#F7F8FA] hover:bg-[#F1F3F6] border border-gray-100/90 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between h-[470px] sm:h-[490px] lg:h-[500px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-5xl sm:text-6xl font-bold text-[#0B0F19] tracking-tight font-display select-none">
              .03
            </div>

            <div>
              <h3 className="text-lg sm:text-[19px] font-bold text-[#0B0F19] tracking-tight mb-2 font-display">
                Transparent Process
              </h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                Clear information, honest communication, and no unnecessary surprises.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Best Locations (.04) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="group lg:flex-1 min-w-0 bg-[#F7F8FA] hover:bg-[#F1F3F6] border border-gray-100/90 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between h-[470px] sm:h-[490px] lg:h-[500px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-5xl sm:text-6xl font-bold text-[#0B0F19] tracking-tight font-display select-none">
              .04
            </div>

            <div>
              <h3 className="text-lg sm:text-[19px] font-bold text-[#0B0F19] tracking-tight mb-2 font-display">
                Best Locations
              </h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                Discover properties in neighborhoods and locations that matter to you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
