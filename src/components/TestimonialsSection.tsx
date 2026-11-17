import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { VERIFIED_REVIEWS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = VERIFIED_REVIEWS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VERIFIED_REVIEWS.length) % VERIFIED_REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VERIFIED_REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#091C17] text-ivory border-b border-gold/20 relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-gold/20 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald text-gold text-xs font-mono uppercase tracking-wider font-bold border border-gold/30">
              07 / PATRON REPUTATION
            </span>
            <h2 className="heading-section font-bold font-serif text-white uppercase">
              MEMBER VOICES & <span className="text-gold italic font-normal tracking-normal">VERIFIED REPUTATION.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-ivory/70">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white font-bold">4.8 / 5.0 RATED</span>
            <span>(85+ Local Reviews)</span>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-emerald border-2 border-gold/40 p-8 sm:p-14 shadow-2xl relative">
          {/* Subtle Quote Watermark */}
          <Quote className="absolute top-8 right-8 w-20 h-20 text-white/[0.03] pointer-events-none" />

          <div className="space-y-8 relative z-10">
            {/* Top Star Rating & Highlight Badge */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-xs font-mono text-gold font-bold">5.0 STAR REPUTATION</span>
              </div>

              <span className="px-3.5 py-1 rounded-full bg-[#091C17] text-gold text-xs font-mono font-bold uppercase border border-gold/30">
                {current.highlight}
              </span>
            </div>

            {/* Large Readable Quote in Playfair Display Serif */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-relaxed italic">
              "{current.text}"
            </blockquote>

            {/* Member Profile Footer & Controls */}
            <div className="pt-8 border-t border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold text-emerald-deep font-serif font-black text-xl flex items-center justify-center shrink-0 shadow-md">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-bold font-serif text-white">
                    {current.author}
                  </h4>
                  <div className="text-xs text-ivory/75 font-mono">
                    {current.role}
                  </div>
                  <div className="text-[11px] font-mono text-gold font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime" />
                    <span>Verified Thane Member</span>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-[#091C17] text-gold hover:text-emerald-deep hover:bg-gold transition-all border border-gold/30 shadow-md"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-ivory/70">
                  {currentIndex + 1} / {VERIFIED_REVIEWS.length}
                </div>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-[#091C17] text-gold hover:text-emerald-deep hover:bg-gold transition-all border border-gold/30 shadow-md"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
