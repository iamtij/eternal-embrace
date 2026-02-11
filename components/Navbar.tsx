import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsOpen((open) => (open ? false : open)); // Close mobile menu on scroll
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 md:py-3' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="transition-transform hover:scale-105 active:scale-95">
            <Logo className="h-10 md:h-12" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => {
              const isPageRoute = item.href.startsWith('/');
              const isHashLink = item.href.startsWith('#');
              // Hash links on non-home pages must go to home + hash
              const to = isPageRoute
                ? item.href
                : isHashLink && location.pathname !== '/'
                  ? { pathname: '/', hash: item.href.slice(1) }
                  : item.href;
              const useLink = isPageRoute || (isHashLink && location.pathname !== '/');
              const NavLink = useLink ? Link : 'a';
              const linkProps = useLink ? { to } : { href: item.href };
              return (
                <NavLink
                  key={item.label}
                  {...linkProps}
                  className={`font-medium text-sm tracking-widest uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 rounded-sm ${
                    (isPageRoute && location.pathname === item.href)
                      ? 'text-brand-green'
                      : 'text-slate-500 hover:text-brand-green transition-colors'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
            {location.pathname === '/' ? (
              <a
                href="#contact"
                className="bg-brand-gradient text-white px-8 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Talk to Us
              </a>
            ) : (
              <Link
                to={{ pathname: '/', hash: 'contact' }}
                className="bg-brand-gradient text-white px-8 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Talk to Us
              </Link>
            )}
          </div>

          {/* Mobile Menu Button - 48px touch target for elderly */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-3 min-h-[48px] min-w-[48px] inline-flex items-center justify-center touch-manipulation"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - large touch targets, elderly-friendly text */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-100 absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          <div className="px-5 py-8 space-y-2">
            {NAV_ITEMS.map((item) => {
              const isPageRoute = item.href.startsWith('/');
              const isHashLink = item.href.startsWith('#');
              const to = isPageRoute
                ? item.href
                : isHashLink && location.pathname !== '/'
                  ? { pathname: '/', hash: item.href.slice(1) }
                  : item.href;
              const useLink = isPageRoute || (isHashLink && location.pathname !== '/');
              const NavLink = useLink ? Link : 'a';
              const linkProps = useLink ? { to } : { href: item.href };
              return (
                <NavLink
                  key={item.label}
                  {...linkProps}
                  className="block text-xl sm:text-2xl font-serif font-bold text-slate-900 py-4 px-4 -mx-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 touch-manipulation min-h-[56px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              );
            })}
            <div className="pt-6">
              {location.pathname === '/' ? (
                <a
                  href="#contact"
                  className="block w-full bg-brand-gradient text-white text-center px-6 py-5 rounded-2xl font-bold text-lg shadow-xl min-h-[56px] flex items-center justify-center touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  Talk to Us Today
                </a>
              ) : (
                <Link
                  to={{ pathname: '/', hash: 'contact' }}
                  className="block w-full bg-brand-gradient text-white text-center px-6 py-5 rounded-2xl font-bold text-lg shadow-xl min-h-[56px] flex items-center justify-center touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  Talk to Us Today
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};