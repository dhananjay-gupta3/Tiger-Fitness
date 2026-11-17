import React from 'react';
import { ArrowUpRight, Check, Dumbbell, Sparkles } from 'lucide-react';
import { ACTUAL_FACILITIES } from '../data/gymData';

export const FacilitiesShowcase: React.FC = () => {
  return (
    <section id="facilities" className="py-24 sm:py-32 bg-emerald border-b border-gold/20 text-ivory">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-gold/20 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#091C17] text-gold text-xs font-mono uppercase tracking-wider font-bold border border-gold/30">
              02 / PHYSICAL FLOOR & EQUIPMENT
            </span>
            <h2 className="heading-section font-bold font-serif text-white uppercase">
              THE WORKOUT FLOOR <span className="text-gold italic font-normal tracking-normal">& HARDWARE.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-mono text-ivory/70 leading-relaxed">
            ASYNCHRONOUS ZONES DELIBERATELY ARRANGED TO PREVENT CROWDING DURING PEAK MORNING AND EVENING LIFTS.
          </p>
        </div>

        {/* Asymmetrical Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {ACTUAL_FACILITIES.map((facility, idx) => {
            const isLarge = idx === 0 || idx === 4;

            return (
              <div
                key={facility.number}
                className={`group relative rounded-3xl overflow-hidden bg-[#0C231D] border border-gold/20 hover:border-gold transition-all duration-300 flex flex-col justify-between ${
                  isLarge ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                {/* Image Frame with Subtle Zoom on Hover */}
                <div className={`relative w-full overflow-hidden ${isLarge ? 'h-72 sm:h-84' : 'h-64 sm:h-72'}`}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C231D] via-[#0C231D]/40 to-transparent opacity-90" />

                  {/* Top Badge Strip */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#091C17]/95 backdrop-blur-md border border-gold/30 text-xs font-mono font-bold text-gold">
                      ZONE {facility.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-forest-deep text-ivory text-[11px] font-mono font-semibold uppercase border border-white/10">
                      {facility.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-8 space-y-4 -mt-6 relative z-10">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-lime font-bold">
                      {facility.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-white group-hover:text-gold transition-colors">
                      {facility.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed font-sans">
                    {facility.description}
                  </p>

                  {/* Specification Pill */}
                  <div className="pt-4 border-t border-gold/15 flex items-center justify-between text-xs font-mono text-ivory/60">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="truncate max-w-xs">{facility.spec}</span>
                    </div>
                    <a
                      href={`https://wa.me/919820000000?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20${encodeURIComponent(facility.title)}%20at%20The%20Gym%20Tiger%20Fitness`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline font-bold shrink-0 flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Orientation Notice Banner with Champagne Gold Accents */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#091C17] border border-gold/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold font-serif font-bold text-lg shrink-0">
              ✓
            </div>
            <div>
              <div className="text-base font-bold text-white font-serif">
                Complimentary Equipment Walkthrough for New Members
              </div>
              <div className="text-xs font-mono text-ivory/70 mt-0.5">
                Our floor coaches walk you through every machine setting, seat height, and safety lock upon enrollment.
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/919820000000?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20would%20like%20to%20schedule%20a%20facility%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold whitespace-nowrap text-xs"
          >
            Schedule Facility Tour
          </a>
        </div>
      </div>
    </section>
  );
};
