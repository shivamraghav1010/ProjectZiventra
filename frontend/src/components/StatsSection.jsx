import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ number, label, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(number.replace(/[^0-9]/g, ''), 10);
    const duration = 1800;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, number]);

  // Format count with commas
  const formatted = count.toLocaleString();

  return (
    <div ref={ref} className="flex flex-col items-start">
      <div className="text-3xl sm:text-4xl md:text-[44px] font-bold text-gray-950 tracking-tight mb-2 font-display">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div className="w-full">
        <p className="text-xs sm:text-sm text-gray-700 font-medium mb-3">
          {label}
        </p>
        {/* Solid dark underline exactly as shown in Screenshot 2 */}
        <div className="w-full max-w-[170px] h-[1.5px] bg-black" />
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section id="stats" className="w-full bg-white py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 tracking-tight leading-snug">
            Helping People Find Their
            <br />
            Perfect Place
          </h2>
        </motion.div>

        {/* 4 Stats Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-14">
          <StatItem
            number="10000"
            suffix="+"
            label="Properties Listed"
          />
          <StatItem
            number="5000"
            suffix="+"
            label="Happy Clients"
          />
          <StatItem
            number="50"
            suffix="+"
            label="Locations Covered"
          />
          <StatItem
            number="10"
            suffix="+ Years"
            label="Real Estate Experience"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
