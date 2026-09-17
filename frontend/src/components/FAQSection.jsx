import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqList = [
  {
    id: 1,
    question: 'How do I start searching for a home?',
    answer: 'You can browse available properties, apply filters, and explore listings based on your needs and location.',
  },
  {
    id: 2,
    question: 'Can I filter homes by budget & location?',
    answer: 'Yes, you can easily filter listings by price range, location, property type, and bespoke architectural specifications to find your ideal home.',
  },
  {
    id: 3,
    question: 'Are the property details accurate?',
    answer: 'Every property featured on UrbanVista undergoes rigorous legal, structural, and valuation verification to ensure complete transparency.',
  },
  {
    id: 4,
    question: 'How do I contact a owner or agent?',
    answer: 'You can reach out directly via our "Get in Touch" portal or our dedicated concierge contact lines to schedule private viewings.',
  },
  {
    id: 5,
    question: 'Can I explore rental and buying options',
    answer: 'Yes, we provide both luxury acquisition opportunities and high-end exclusive rental properties in premier locations.',
  },
  {
    id: 6,
    question: 'Do I need an account to use platform',
    answer: 'Browsing is open to all visitors, but creating an account allows you to save properties, receive private off-market listings, and manage direct inquiries.',
  },
  {
    id: 7,
    question: 'How do I know if a property is available?',
    answer: 'Property availability is updated in real-time across our network. You can also contact our luxury advisors for immediate verification.',
  },
];

const FAQSection = () => {
  // First item open by default matching Screenshot 4
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="w-full bg-white py-16 sm:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column Header */}
        <div className="lg:col-span-4 flex flex-col items-start">
          {/* Blue Dot Badge (Notice it has "Testimonials" in screenshot 4) */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-tight">
            Things You
            <br />
            Should Know
          </h2>
        </div>

        {/* Right Column Accordion Items */}
        <div className="lg:col-span-8 flex flex-col gap-3.5 w-full">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100/80 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="text-gray-500 flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-0 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
