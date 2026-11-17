import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Star, Clock, MapPin, Sparkles, Phone, ChevronRight } from 'lucide-react';
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

  // Lock background scrolling completely when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
      (window as any).__lenis?.stop();
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      (window as any).__lenis?.start();
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      (window as any).__lenis?.start();
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      number: '01',
      name: 'The Gym & Floor',
      desc: '4,500 Sq. Ft Arena, Turf Track & Equipment',
      href: '#the-gym',
    },
    {
      number: '02',
      name: 'Pricing & Plans',
      desc: 'Workout & All-Inclusive VIP from ₹2,000/mo',
      href: '#pricing',
    },
    {
      number: '03',
      name: 'Timings & Coach',
      desc: '5 AM–11:30 PM & Head Coach Ketan Sir',
      href: '#timings',
    },
    {
      number: '04',
      name: 'Location & Contact',
      desc: 'Kamgar Hospital Rd, Thane West & Map',
      href: '#contact',
    },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Timeout gives time for menu to close and scroll unlock
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
            ? 'bg-[#091C17]/95 backdrop-blur-md py-3 shadow-2xl border-b border-gold/20'
            : 'bg-emerald py-3.5 sm:py-4 border-b border-gold/15'
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
          <nav className="hidden xl:flex items-center gap-7">
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

          {/* Header Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hello%20The%20Gym%20Tiger%20Fitness%2C%20I%20would%20like%20to%20inquire%20about%20membership%20packages%20and%20timings.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#0E261F] hover:bg-[#15392F] border border-gold/30 text-xs font-semibold text-ivory flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-lime fill-current" />
              <span>WhatsApp Concierge</span>
            </a>

            <button
              onClick={() => {
                if (onInquireClick) onInquireClick();
                else handleNavClick('#contact');
              }}
              className="btn-gold py-2.5 px-5 text-xs font-mono font-bold"
            >
              <span>Join Club</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick Pill & Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-gold text-[#091C17] font-black text-[11px] sm:hidden uppercase font-mono tracking-wider flex items-center gap-1 shadow-md"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>Chat</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-[#091C17] border border-gold/40 text-gold hover:text-white transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu Overlay (z-50, Clean, Prevents Background Scrolling) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#071713] flex flex-col overflow-y-auto overscroll-contain animate-fadeIn xl:hidden">
          {/* Top Bar inside Overlay */}
          <div className="sticky top-0 z-20 bg-[#071713]/95 backdrop-blur-md px-4 py-3 border-b border-gold/20 flex items-center justify-between shrink-0">
            <TigerLogo size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-[#102C24] border border-gold/50 text-gold hover:text-white transition-colors flex items-center justify-center shadow-lg active:scale-95"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body - tight, compact, zero artificial gap */}
          <div className="p-4 flex flex-col gap-2.5 max-w-md mx-auto w-full">
            {/* Quick Live Hours Strip */}
            <div className="bg-[#0B211A] border border-gold/20 rounded-xl px-3 py-2 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="font-mono font-bold text-gold uppercase tracking-wider text-[11px]">
                  OPEN MON–SAT
                </span>
              </div>
              <span className="font-mono text-ivory/70 text-[11px]">
                5 AM–2 PM • 4 PM–11:30 PM
              </span>
            </div>

            {/* Navigation Directory */}
            <div className="text-[10px] font-mono tracking-widest text-gold/80 uppercase pt-1 px-1 flex items-center gap-2">
              <span>DIRECTORY</span>
              <span className="h-px flex-1 bg-gold/15" />
            </div>

            {/* Navigation Links - compact and tight */}
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-2.5 px-3 rounded-xl border border-white/5 bg-[#0A1D17] hover:bg-[#102D24] active:bg-[#13362B] flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold font-bold">
                      {link.number}
                    </span>
                    <div>
                      <div className="text-base font-serif font-bold text-white group-hover:text-gold transition-colors leading-tight">
                        {link.name}
                      </div>
                      <div className="text-[11px] font-sans text-ivory/60">
                        {link.desc}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gold/60 group-hover:text-gold transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>

            {/* Personal Trainer Highlight Card */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-[#0F2D24] to-[#143B30] border border-gold/30 flex items-center gap-3 mt-1">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-mono font-bold text-gold uppercase tracking-wider">
                  Personal Training (PT) Available
                </div>
                <div className="text-[11px] text-ivory/70 truncate">
                  1-on-1 Transformation with Head Coach Ketan Sir
                </div>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href="tel:+918355968540"
                className="py-2.5 px-3 rounded-xl bg-[#122F26] border border-gold/40 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Coach</span>
              </a>

              <a
                href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20am%20interested%20in%20joining`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold to-[#FF7518] text-[#091C17] font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Location footer strip */}
            <div className="px-1 py-1 flex items-center gap-1.5 text-[11px] font-mono text-ivory/60">
              <MapPin className="w-3 h-3 text-gold shrink-0" />
              <span className="truncate">Kamgar Hospital Road, Thane West (400604)</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
