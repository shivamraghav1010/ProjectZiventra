import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "Finding our dream home was much easier than we expected. The process was smooth, transparent, and the team supported us at every step.",
    name: "Liam Carter",
    role: "Real Estate Investor",
    avatar: "/assets/liam_carter.jpg",
  },
  {
    id: 2,
    quote: "Finding our dream home was much easier than we expected. The process was smooth, transparent, and the team supported us at every step.",
    name: "Liam Carter",
    role: "Real Estate Investor",
    avatar: "/assets/liam_carter.jpg",
  },
  {
    id: 3,
    quote: "Finding our dream home was much easier than we expected. The process was smooth, transparent, and the team supported us at every step.",
    name: "Liam Carter",
    role: "Real Estate Investor",
    avatar: "/assets/liam_carter.jpg",
  },
  {
    id: 4,
    quote: "Finding our dream home was much easier than we expected. The process was smooth, transparent, and the team supported us at every step.",
    name: "Liam Carter",
    role: "Real Estate Investor",
    avatar: "/assets/liam_carter.jpg",
  },
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="testimonials" className="w-full bg-white py-16 sm:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            {/* Pill Tag with Blue Dot */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Testimonials
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Navigation Arrows for Carousel */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Testimonials Carousel Cards */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[370px] max-w-[380px] flex-shrink-0 bg-[#F9FAFB] rounded-2xl p-7 flex flex-col justify-between border border-gray-100 snap-start transition-all hover:shadow-md"
            >
              <div>
                {/* Quotation Mark Icon */}
                <div className="text-4xl font-serif text-gray-400 select-none mb-4 leading-none">
                  “
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-3 mt-10 pt-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-lg object-cover border border-gray-200 shadow-sm"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-950">
                    {item.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
