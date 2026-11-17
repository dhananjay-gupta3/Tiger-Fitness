import React from 'react';
import { Check, ShieldCheck, Users, Dumbbell, Compass, ArrowUpRight, Award, Sparkles } from 'lucide-react';
import { CLIENT_BUSINESS } from '../data/gymData';
import { TigerLogo } from './TigerLogo';

export const AboutEditorial: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-ivory text-emerald-deep border-b border-ivory-border relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Champagne Gold Accent Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-emerald/15 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald text-gold text-xs font-mono uppercase tracking-wider font-bold">
              01 / CLUB PHILOSOPHY & ORIGIN
            </span>
            <h2 className="heading-section font-bold font-serif text-emerald-deep uppercase">
              AN AUTHENTIC SANCTUARY <br />
              <span className="text-forest italic font-normal tracking-normal">FOR DISCIPLINE & FORM.</span>
            </h2>
          </div>
          <div className="max-w-md text-xs font-mono text-emerald/70 leading-relaxed">
            ESTABLISHED IN THANE WEST • KAMGAR HOSPITAL ROAD, RAMCHANDRA NAGAR (PIN 400604)
          </div>
        </div>

        {/* Asymmetrical Editorial Composition with Overlapping Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Manifesto with Cormorant Garamond Quote */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gold/30 shadow-xl space-y-4 relative">
              <span className="text-xs font-mono uppercase text-gold font-bold tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE CLUB STANDARD</span>
              </span>
              <p className="text-2xl sm:text-3xl font-serif text-emerald-deep italic leading-relaxed">
                "We created The Gym Tiger Fitness to offer Thane West a spacious, honorable environment where you never have to compete for floor space."
              </p>
              <p className="text-sm text-emerald/80 leading-relaxed font-sans">
                Commercial gym chains across Mumbai and Thane often pack members into suffocating rooms with broken selectorized cables and aggressive sales personnel. The Gym Tiger Fitness operates differently: we preserve broad walking aisles, generous rack clearance, clean separation between stations, and coaches who proactively correct your lifting mechanics.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-emerald/85 leading-relaxed font-sans">
              <p>
                Situated prominently on <strong className="text-forest font-bold">Kamgar Hospital Road</strong>, our workout floor welcomes every dedicated individual — from beginners learning compound barbell patterns to competitive athletes and working professionals maintaining daily vitality.
              </p>
            </div>

            {/* 4 Feature Checklist Grid with Champagne Gold Accents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-emerald/10 shadow-sm flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald text-gold flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-sm text-emerald-deep font-serif">Spacious Floor Flow</div>
                  <div className="text-xs text-emerald/70 mt-0.5 font-sans">Wide walkways & station clearance</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-emerald/10 shadow-sm flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald text-gold flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-sm text-emerald-deep font-serif">Attentive Floor Mentors</div>
                  <div className="text-xs text-emerald/70 mt-0.5 font-sans">Posture & routine advice included</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-emerald/10 shadow-sm flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald text-gold flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-sm text-emerald-deep font-serif">Safe Space for Women</div>
                  <div className="text-xs text-emerald/70 mt-0.5 font-sans">Comfortable, respectful culture</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-emerald/10 shadow-sm flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald text-gold flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-sm text-emerald-deep font-serif">Roadside Parking Access</div>
                  <div className="text-xs text-emerald/70 mt-0.5 font-sans">Direct access on Kamgar Hospital Rd</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image with Emerald & Champagne Gold Frame */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-emerald shadow-2xl">
                <img
                  src="/images/gym/gym-facade-signboard.jpg"
                  alt="The Gym Tiger Fitness 4500 Sq Ft Facade & Signboard on Kamgar Hospital Rd"
                  className="w-full h-[450px] sm:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-gold text-emerald-deep font-mono text-[10px] font-bold uppercase tracking-wider">
                    REAL FACADE & 3D SIGNBOARD
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-2">
                    4,500 Sq. Ft. Unisex Arena Led by Ketan Sir
                  </h3>
                  <p className="text-xs text-ivory/80 font-mono mt-1">
                    Direct Contact: 8355968540 • Kamgar Hospital Rd, Thane West
                  </p>
                </div>
              </div>

              {/* Overlapping Official Emblem Card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 w-72 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl hidden sm:flex items-center gap-3.5 bg-[#091C17] text-ivory p-4 backdrop-blur-md">
                <TigerLogo variant="emblem-only" size="md" />
                <div>
                  <div className="text-[9px] font-mono text-gold font-bold uppercase tracking-wider">
                    OFFICIAL CREST
                  </div>
                  <div className="text-sm font-black font-serif text-white">
                    THE GYM TIGER FITNESS
                  </div>
                  <div className="text-[10px] text-lime font-mono mt-0.5 font-bold">
                    4.8 ★ Verified Club (85+ Reviews)
                  </div>
                </div>
              </div>

              {/* Timing Badge on Top Right */}
              <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-[#091C17] text-ivory border border-gold/40 shadow-xl flex items-center gap-3">
                <div className="text-2xl font-black font-serif text-gold">
                  18.5 hrs
                </div>
                <div className="text-[11px] font-mono uppercase text-ivory/80 leading-tight">
                  Daily Open Access<br />5:00 AM – 11:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
