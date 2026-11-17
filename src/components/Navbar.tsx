import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Star, Clock, MapPin, Sparkles } from 'lucide-react';
import { CLIENT_BUSINESS } from '../data/gymData';
import { TigerLogo } from './TigerLogo';

interface NavbarProps {
  onInquireClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onInquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Gym', href: '#the-gym' },
    { name: 'Pricing & Plans', href: '#pricing' },
    { name: 'Timings & Coach', href: '#timings' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Luxury Architectural Micro-Bar */}
      <div className="hidden lg:block bg-[#091C17] text-ivory/80 text-[11px] font-mono py-2 px-6 border-b border-gold/20">
        <div className="max-w-site mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold font-medium">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span>{CLIENT_BUSINESS.name}</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-ivory/70 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gold" />
              <span>Kamgar Hospital Road, Thane West (400604)</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>MON–SAT: 5:00 AM – 11:30 PM</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-gold/80 font-semibold">SUNDAY: REST & SANITIZATION</span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1 text-white font-semibold">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span>4.8 RATED (85+ LOCAL REVIEWS)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#091C17]/95 backdrop-blur-md py-3.5 shadow-2xl border-b border-gold/20'
            : 'bg-emerald py-4 border-b border-gold/15'
        }`}
      >
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group transition-transform hover:scale-[1.01]"
          >
            <TigerLogo size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs uppercase font-semibold tracking-wider text-ivory/80 hover:text-gold transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hello%20The%20Gym%20Tiger%20Fitness%2C%20I%20would%20like%20to%20inquire%20about%20membership%20packages%20and%20timings.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#0E261F] hover:bg-[#15392F] border border-gold/30 text-xs font-semibold text-ivory flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-lime" />
              <span>WhatsApp Concierge</span>
            </a>

            <button
              onClick={() => {
                if (onInquireClick) onInquireClick();
                else handleNavClick('#contact');
              }}
              className="btn-gold py-2.5 px-5 text-xs"
            >
              <span>Join Club</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-gold text-emerald-deep font-bold text-xs sm:hidden uppercase font-mono tracking-wider"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#091C17] border border-gold/30 text-gold hover:text-white transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 pt-24 pb-8 px-6 bg-[#091C17] border-b border-gold/20 flex flex-col justify-between overflow-y-auto xl:hidden">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-gold uppercase mb-3">
              CLUB DIRECTORY
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block py-3 border-b border-white/5 text-xl font-serif font-bold text-ivory hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-gold/20 space-y-3">
            <div className="text-xs font-mono text-ivory/60">
              Kamgar Hospital Road, Ramchandra Nagar, Thane West (400604)
            </div>
            <a
              href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hi%20The%20Gym%20Tiger%20Fitness`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gold py-3.5 text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
