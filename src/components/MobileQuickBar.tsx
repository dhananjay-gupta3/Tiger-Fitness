import React from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { CLIENT_BUSINESS } from '../data/gymData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#091C17]/95 backdrop-blur-xl border-t border-[#C6A66B]/30 px-3 py-2.5 sm:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:+918355968540`}
          className="flex-1 py-3 px-3 rounded-full bg-[#15392F] hover:bg-[#1C4A3D] border border-[#C6A66B]/40 text-[#F4F0E6] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md"
        >
          <Phone className="w-3.5 h-3.5 text-[#C6A66B] shrink-0" />
          <span className="truncate">Call: 8355968540</span>
        </a>

        {/* WhatsApp Direct Concierge */}
        <a
          href={`https://wa.me/918355968540?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20am%20interested%20in%20joining%20and%20would%20like%20to%20know%20active%20offers.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-full bg-gradient-to-r from-[#C6A66B] to-[#FF7518] text-[#091C17] text-xs font-mono font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-lg shadow-[#C6A66B]/20"
        >
          <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
          <span className="truncate">WhatsApp Pass</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>
    </div>
  );
};
