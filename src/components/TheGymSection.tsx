import React, { useState } from 'react';
import { Sparkles, Maximize2, ShieldCheck, Dumbbell, Flame, Award, X, ChevronLeft, ChevronRight, UserCheck, MessageCircle, ArrowUpRight, Phone } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/gymData';
import { TigerLogo } from './TigerLogo';

export const TheGymSection: React.FC = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const keyFeatures = [
    {
      title: "4,500 Sq. Ft. Training Arena",
      description: "Spacious unisex floor with wide clearances between stations. Zero waiting for benches or dumbbells.",
      icon: "4,500 SQ FT",
      highlight: "Kamgar Hospital Rd, Thane West"
    },
    {
      title: "Personal Trainers (PT) Available",
      description: "1-on-1 certified trainers available for accelerated fat loss, muscle building, and custom nutrition plans.",
      icon: "PERSONAL TRAINER (PT)",
      highlight: "1-on-1 Coaching & Diets"
    },
    {
      title: "King Strength & Heavy Deck",
      description: "Heavy dumbbell deck with neon underglow, Olympic barbells, power racks, and selectorized machinery.",
      icon: "HEAVY IRON",
      highlight: "Olympic Spec Gear"
    },
    {
      title: "Astroturf Sprint Track",
      description: "Dedicated green artificial turf lane for sled pushes, walking lunges, HIIT conditioning, and mobility work.",
      icon: "TURF RUNWAY",
      highlight: "Agility & Sprints"
    }
  ];

  return (
    <section id="the-gym" className="py-20 sm:py-28 bg-[#F4F0E6] text-[#091C17] border-b border-[#091C17]/15 relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#091C17]/15 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102C24] text-[#C6A66B] text-xs font-mono uppercase tracking-wider font-bold">
              01 / THE GYM & AMENITIES
            </span>
            <h2 className="heading-section font-bold font-serif text-[#091C17] uppercase">
              EXPERIENCE THE <span className="text-[#193D32] italic font-normal tracking-normal">4,500 SQ. FT. ARENA.</span>
            </h2>
            <p className="text-sm font-sans text-[#091C17]/75 max-w-xl">
              Thane West's trusted unisex strength and fitness powerhouse on Kamgar Hospital Road. Clean, spacious, and equipped for real results.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-white border border-[#C6A66B]/40 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6F36A] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#091C17]">4.8★ GOOGLE RATED (85+ REVIEWS)</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {keyFeatures.map((feat, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-[#091C17]/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#102C24] text-[#C6A66B] font-bold">
                {feat.icon}
              </span>
              <h3 className="text-base font-bold font-serif text-[#091C17] mt-3">
                {feat.title}
              </h3>
              <p className="text-xs text-[#091C17]/75 mt-1 font-sans leading-relaxed">
                {feat.description}
              </p>
              <div className="text-[11px] font-mono text-[#193D32] font-semibold mt-3 pt-2 border-t border-[#091C17]/5">
                ✓ {feat.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Trainer (PT) Availability Banner */}
        <div className="mb-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#102C24] via-[#15392F] to-[#091C17] border-2 border-[#C6A66B]/50 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6F36A] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6A66B] font-black">
                1-ON-1 PERSONAL COACHING AVAILABLE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Personal Trainer (PT) Facility & Custom Diet Mentorship
            </h3>
            <p className="text-xs sm:text-sm text-[#F4F0E6]/80 font-sans max-w-2xl leading-relaxed">
              Kya aapko fast-track weight loss ya muscle building ke liye dedicated personal trainer chahiye? Certified personal trainers (PT) available hain daily form correction aur personalized diet planning ke sath.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <a
              href="tel:+918355968540"
              className="py-3 px-5 rounded-full bg-black/40 border border-[#C6A66B]/40 text-[#C6A66B] hover:text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 8355968540</span>
            </a>
            <a
              href={`https://wa.me/918355968540?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20am%20interested%20in%20Personal%20Training%20(PT)%20packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-full bg-gradient-to-r from-[#C6A66B] to-[#FF7518] text-[#091C17] font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#C6A66B]/20 transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire PT on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Visual Real Gym Photo Showcase Grid (6 essential photos) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#091C17] font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C6A66B]" />
              <span>Real Facility Photographs (Tap to Zoom)</span>
            </h3>
            <span className="text-xs font-mono text-[#091C17]/60 hidden sm:inline">
              Kamgar Hospital Road, Thane West
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY_PHOTOS.slice(0, 6).map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIdx(idx)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#091C17] border border-[#C6A66B]/30 shadow-md hover:shadow-xl transition-all duration-300 h-64 sm:h-72"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091C17]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-[#C6A66B] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#102C24] text-[#C6A66B] border border-[#C6A66B]/30 font-mono text-[9px] font-bold uppercase tracking-wider">
                    {photo.tag}
                  </span>
                  <h4 className="text-sm font-bold font-serif text-white mt-1.5 leading-snug line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-[#F4F0E6]/75 mt-0.5 line-clamp-1 font-sans">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activePhotoIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
          <button
            onClick={() => setActivePhotoIdx(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setActivePhotoIdx((activePhotoIdx - 1 + 6) % 6)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setActivePhotoIdx((activePhotoIdx + 1) % 6)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-3xl w-full flex flex-col items-center">
            <img
              src={GALLERY_PHOTOS[activePhotoIdx].image}
              alt={GALLERY_PHOTOS[activePhotoIdx].title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border-2 border-[#C6A66B]/50"
            />
            <div className="text-center mt-3 text-white">
              <h4 className="text-base font-bold font-serif text-white">
                {GALLERY_PHOTOS[activePhotoIdx].title}
              </h4>
              <p className="text-xs text-[#F4F0E6]/75 mt-0.5 font-sans">
                {GALLERY_PHOTOS[activePhotoIdx].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
