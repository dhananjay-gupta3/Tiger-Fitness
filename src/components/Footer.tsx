import React from 'react';
import { ArrowUp, MapPin, Phone, MessageCircle } from 'lucide-react';
import { CLIENT_BUSINESS } from '../data/gymData';
import { TigerLogo } from './TigerLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091C17] text-ivory/70 pt-20 pb-12 border-t border-gold/20 text-xs font-mono">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-gold/15">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <TigerLogo size="md" />

            <p className="text-ivory/75 max-w-sm leading-relaxed font-sans text-xs">
              4,500 sq. ft. modern unisex strength, cardio, and CrossFit facility on Kamgar Hospital Road, Thane West. Directed by Ketan Sir (8355968540). King Strength equipment, green turf tracks, and steam bath recovery.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald hover:bg-forest text-white flex items-center gap-2 transition-colors border border-gold/30"
              >
                <MessageCircle className="w-3.5 h-3.5 text-lime" />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href={CLIENT_BUSINESS.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#102C24] hover:bg-[#15392F] text-white flex items-center gap-2 transition-colors border border-gold/20"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs mb-3 font-serif">
              CLUB DIRECTORY
            </div>
            <ul className="space-y-2.5 font-mono text-xs">
              <li><a href="#the-gym" className="hover:text-gold transition-colors">The Gym & Floor</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Official Pricing & Plans</a></li>
              <li><a href="#timings" className="hover:text-gold transition-colors">Timings & Ketan Sir</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Location & Contact</a></li>
            </ul>
          </div>

          {/* Schedule & Address */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs mb-3 font-serif">
              LOCATION & HOURS
            </div>
            <div className="text-ivory/70 space-y-2">
              <div>
                <span className="text-white font-semibold">Address:</span><br />
                Kamgar Hospital Road, Ramachandra Nagar,<br />
                Sambhaji Nagar, Thane West, MH – 400604
              </div>
              <div className="pt-1">
                <span className="text-white font-semibold">Operating Schedule:</span><br />
                Monday – Saturday: 5:00 AM – 11:30 PM<br />
                <span className="text-gold font-bold">Sunday: Closed (Rest & Sanitization)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-ivory/50 text-[11px]">
          <div>
            © {new Date().getFullYear()} {CLIENT_BUSINESS.brandTitle}. Luxury Athletic Club. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-gold transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
};
