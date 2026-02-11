import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <a href="#" className="transition-transform hover:scale-105 active:scale-95">
            <Logo className="h-10 md:h-12" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-500 hover:text-brand-green transition-colors font-medium text-sm tracking-widest uppercase"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-brand-gradient text-white px-8 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Talk to Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-100 absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-12 space-y-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-2xl font-serif font-bold text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6">
              <a 
                href="#contact"
                className="block w-full bg-brand-gradient text-white text-center px-6 py-5 rounded-2xl font-bold text-lg shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                Talk to Us Today
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};