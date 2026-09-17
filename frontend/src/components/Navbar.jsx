import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = ({ onOpenAuth, onOpenContact }) => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/60 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="urbanvista-display text-2xl md:text-3xl tracking-tight text-gray-950 font-black">
            UrbanVista
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-black transition-colors">
            Home
          </button>
          <button onClick={() => scrollTo('stats')} className="hover:text-black transition-colors">
            Overview
          </button>
          <button onClick={() => scrollTo('testimonials')} className="hover:text-black transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollTo('faqs')} className="hover:text-black transition-colors">
            FAQs
          </button>
          <button onClick={() => scrollTo('footer')} className="hover:text-black transition-colors">
            Contact
          </button>
        </nav>

        {/* Right CTA / Auth Status */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200/80 text-sm font-medium text-gray-800">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span>{user.name}</span>
              </div>
              <button
                onClick={logout}
                title="Logout"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenAuth('login')}
                className="text-sm font-semibold text-gray-700 hover:text-black px-3 py-2 transition-colors"
              >
                Log In
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="text-sm font-semibold text-white bg-gray-950 hover:bg-black px-4 py-2 rounded-full transition-all hover:shadow-md"
              >
                Sign Up
              </button>
            </div>
          )}

          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-white text-gray-900 border border-gray-200 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow transition-all group"
          >
            <span>Get in Touch</span>
            <span className="w-6 h-6 rounded-full bg-gray-950 text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          {user && (
            <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 rounded-full text-gray-700">
              {user.name.split(' ')[0]}
            </span>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-black focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block w-full text-left py-2 text-gray-700 font-medium">
            Home
          </button>
          <button onClick={() => scrollTo('stats')} className="block w-full text-left py-2 text-gray-700 font-medium">
            Overview
          </button>
          <button onClick={() => scrollTo('testimonials')} className="block w-full text-left py-2 text-gray-700 font-medium">
            Testimonials
          </button>
          <button onClick={() => scrollTo('faqs')} className="block w-full text-left py-2 text-gray-700 font-medium">
            FAQs
          </button>
          <button onClick={() => scrollTo('footer')} className="block w-full text-left py-2 text-gray-700 font-medium">
            Contact
          </button>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            {user ? (
              <button
                onClick={() => { logout(); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-red-600 bg-red-50 rounded-xl"
              >
                <LogOut className="w-4 h-4" />
                Logout ({user.name})
              </button>
            ) : (
              <>
                <button
                  onClick={() => { onOpenAuth('login'); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 text-sm font-semibold text-gray-900 border border-gray-200 rounded-xl"
                >
                  Log In
                </button>
                <button
                  onClick={() => { onOpenAuth('signup'); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 text-sm font-semibold text-white bg-gray-950 rounded-xl"
                >
                  Sign Up
                </button>
              </>
            )}
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
