import React from 'react';
import { ArrowUpRight, ArrowDown, MessageCircle, MapPin, Clock, Star, Dumbbell, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { CLIENT_BUSINESS } from '../data/gymData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onInquireClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onInquireClick }) => {
  return (
    <section className="relative bg-emerald border-b border-gold/20 overflow-hidden min-h-[92vh] flex flex-col justify-between">
      {/* Background Cinematic Texture with Deep Emerald & Charcoal Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter contrast-110"
          style={{
            backgroundImage: `url('/images/gym/main-gym-floor-turf.jpg')`,
          }}
        />
        {/* Rich Emerald & Dark Forest Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep via-emerald/90 to-emerald-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-emerald-deep/80" />
      </div>

      {/* Main Split Content Area */}
      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Typographic Split */}
          <div className="lg:col-span-7 space-y-7">
            {/* Location Pill with Champagne Gold Accent */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#091C17]/95 border border-gold/40 text-xs font-mono text-ivory backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
              <span className="text-gold font-bold uppercase tracking-wider">4,500 SQ FT UNISEX FITNESS CLUB</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-ivory/80 hidden sm:inline font-semibold">KAMGAR HOSPITAL RD, THANE WEST</span>
            </div>

            {/* Bold Headline with Highlighted Champagne Gold and Lime Words */}
            <div className="space-y-3">
              <h1 className="heading-hero font-serif font-bold uppercase text-white leading-tight">
                THE POWERHOUSE <br />
                <span className="text-gold italic font-normal tracking-normal drop-shadow-[0_0_35px_rgba(198,166,107,0.35)]">
                  OF REAL RESULTS.
                </span>
              </h1>
            </div>

            {/* Short Professional Description */}
            <p className="text-base sm:text-lg text-ivory/85 max-w-xl font-sans font-light leading-relaxed">
              Step into Thane West's sprawling <strong className="text-white font-semibold">4,500 sq. ft.</strong> unisex training club on Kamgar Hospital Road. Featuring green astroturf sprint tracks, King Strength commercial rigs, steam recovery, and hands-on guidance by <strong className="text-gold font-semibold">Ketan Sir</strong>.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hello%20The%20Gym%20Tiger%20Fitness%2C%20I%20would%20like%20to%20reserve%20a%20facility%20tour%20and%20inquire%20about%20membership.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto py-3.5 px-6"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve Pass / WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onExploreClick}
                className="btn-outline-gold w-full sm:w-auto py-3.5 px-6"
              >
                <span>Explore The Floor</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Proof Badges Strip */}
            <div className="pt-6 border-t border-gold/20 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-ivory/70">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-white font-bold">4.8★ Verified Google Rating</span>
                <span className="hidden sm:inline">(85+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-lime" />
                <span>Mon–Sat: 5 AM – 11:30 PM</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold font-bold">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Personal Trainers (PT) Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image Card with Champagne Gold Border & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Visual with Champagne Gold Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-emerald-deep">
                <img
                  src="/images/gym/main-gym-floor-turf.jpg"
                  alt="The Gym Tiger Fitness 4500 Sq Ft Training Floor & Astroturf Lane"
                  className="w-full h-[280px] sm:h-[380px] md:h-[440px] lg:h-[490px] object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent opacity-80" />

                {/* Bottom Frame Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#091C17]/95 border border-gold/30 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-mono uppercase text-gold font-bold tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                        <span>REAL WORKOUT FLOOR • 4,500 SQ FT</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold font-serif text-white mt-0.5 line-clamp-1 sm:line-clamp-none">
                        Sprawling Green Turf Track & Machine Fleet
                      </div>
                    </div>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-gold/20 border border-gold/40 text-[9px] sm:text-[10px] font-mono text-gold font-bold shrink-0 ml-2">
                      THANE WEST
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Subtle Visual Element 1: 4,500 Sq Ft Floor */}
              <div className="absolute -top-5 -left-5 p-3.5 rounded-2xl bg-[#091C17]/95 border border-gold/40 backdrop-blur-md shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/50 flex items-center justify-center text-gold font-bold">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-serif">4,500 Sq. Ft. Space</div>
                  <div className="text-[10px] font-mono text-ivory/70">Turf track & King Strength</div>
                </div>
              </div>

              {/* Floating Subtle Visual Element 2: Ketan Sir Guidance */}
              <div className="absolute -bottom-5 -right-5 p-3.5 rounded-2xl bg-[#091C17]/95 border border-gold/40 backdrop-blur-md shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-lime/15 border border-lime/40 flex items-center justify-center text-lime font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-serif">Ketan Sir (Head Coach)</div>
                  <div className="text-[10px] font-mono text-ivory/70">Direct Line: 8355968540</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Operational Highlights */}
      <div className="relative z-10 bg-[#091C17]/90 border-t border-gold/20 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-ivory">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span>Spacious Workout Floor</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span>Guided Resistance Machinery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime" />
            <span>Dedicated Female Safe Space</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span>Kamgar Hospital Road Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};
