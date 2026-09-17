import React from 'react';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ onOpenContact }) => {
  return (
    <footer id="footer" className="w-full bg-[#050C14] text-white pt-20 pb-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content with increased gap between UrbanVista and Explore/Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-30 pb-24">
          {/* Left Column: Brand & Tagline & 4 Solid White/Black Social Icons */}
          <div className="flex flex-col items-start max-w-sm">
            <h3 className="urbanvista-display text-2xl sm:text-[32px] font-black tracking-tight text-white mb-6">
              UrbanVista
            </h3>
            <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-7 font-normal">
              Find, explore, and choose your next home<br className="hidden sm:inline" /> with a simple and modern experience.
            </p>

            {/* 4 Social Media Icons: Solid White with Black Glyphs */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-white flex items-center justify-center text-[#050C14] hover:bg-gray-200 transition-all duration-200 shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#050C14]" />
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-white flex items-center justify-center text-[#050C14] hover:bg-gray-200 transition-all duration-200 shadow-sm"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#050C14]" />
              </a>

              {/* WhatsApp */}
              <a
                href="#whatsapp"
                aria-label="WhatsApp"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-white flex items-center justify-center text-[#050C14] hover:bg-gray-200 transition-all duration-200 shadow-sm"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#050C14]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.875-.444-1.399-.582-2.315-1.996-2.385-2.09-.07-.093-.57-.76-.57-1.449 0-.689.36-1.028.488-1.168.128-.14.28-.175.374-.175.093 0 .187.001.268.005.087.005.203-.033.317.241.12.287.411 1.002.447 1.076.036.074.06.161.01.26-.05.099-.075.16-.149.247-.075.086-.157.193-.225.26-.075.074-.153.155-.066.304.087.149.388.641.833 1.037.573.51 1.056.668 1.205.742.149.074.237.065.326-.037.089-.102.381-.444.482-.596.102-.152.203-.127.34-.076.138.051.874.412 1.024.488.15.075.25.112.287.175.037.062.037.362-.107.767z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-white flex items-center justify-center text-[#050C14] hover:bg-gray-200 transition-all duration-200 shadow-sm"
              >
                <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#050C14]" />
              </a>
            </div>
          </div>

          {/* Right Columns: Explore & Contact grouped together with large gap from UrbanVista */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-16 sm:gap-24 lg:gap-32">
            {/* Explore Column */}
            <div className="flex flex-col min-w-[120px]">
              <h4 className="text-sm font-semibold text-white mb-6 tracking-wide">
                Explore
              </h4>
              <ul className="space-y-4 text-xs sm:text-sm text-[#CBD5E1]">
                <li>
                  <a href="#featured" className="hover:text-white transition-colors">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Column with White/Black Badges */}
            <div className="flex flex-col min-w-[180px]">
              <h4 className="text-sm font-semibold text-white mb-6 tracking-wide">
                Contact
              </h4>
              <ul className="space-y-4 text-xs sm:text-sm text-[#CBD5E1]">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-3.5 h-3.5 text-black" />
                  </span>
                  <a href="mailto:myhome@mail.com" className="hover:text-white transition-colors">
                    myhome@mail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-3.5 h-3.5 text-black" />
                  </span>
                  <a href="tel:+123456000" className="hover:text-white transition-colors">
                    +123 456 000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-black" />
                  </span>
                  <span>New York, USA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-[#94A3B8] gap-4">
          <p className="order-1">Copyright@2026</p>
          <p className="order-2 text-center text-[#94A3B8]">Alive on LiveOS.ai</p>
          <a href="#privacy" className="order-3 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
