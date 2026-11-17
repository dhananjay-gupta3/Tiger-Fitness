import React, { useState } from 'react';
import { Check, Info, ArrowUpRight, MessageCircle, Star, Crown, Eye, Sparkles, ShieldCheck, Flame, X } from 'lucide-react';
import { OFFICIAL_PRICING_CATEGORIES, CLIENT_BUSINESS } from '../data/gymData';

export const MembershipsSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<'only-workout' | 'all-inclusive'>('all-inclusive');
  const [showTariffModal, setShowTariffModal] = useState(false);

  const activeCategory = OFFICIAL_PRICING_CATEGORIES.find(c => c.id === activeCategoryId) || OFFICIAL_PRICING_CATEGORIES[0];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-emerald border-b border-gold/20 text-ivory relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-gold/20 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#091C17] text-gold text-xs font-mono uppercase tracking-wider font-bold border border-gold/30">
              02 / OFFICIAL TARIFF & PLANS
            </span>
            <h2 className="heading-section font-bold font-serif text-white uppercase">
              OFFICIAL MEMBERSHIP <span className="text-gold italic font-normal tracking-normal">PLANS.</span>
            </h2>
            <p className="text-sm font-sans text-ivory/70 max-w-xl">
              Direct rates from the official printed rate card of <strong className="text-white">The Gym Tiger Fitness</strong>. Zero hidden registration fees, zero sales pressure.
            </p>
          </div>

          {/* Quick Action: View Printed Tariff Card Photo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => setShowTariffModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#091C17] hover:bg-[#15392F] border border-gold/40 text-xs font-mono text-gold hover:text-white transition-all shadow-md group"
            >
              <Eye className="w-4 h-4 text-lime group-hover:scale-110 transition-transform" />
              <span>Inspect Official Rate Card Photo</span>
            </button>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-lime/10 border border-lime/30 text-xs font-mono text-lime">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Authentic Tariff</span>
            </div>
          </div>
        </div>

        {/* Plan Category Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <div className="p-1.5 rounded-2xl sm:rounded-full bg-[#091C17] border border-gold/30 flex flex-col sm:flex-row items-stretch sm:items-center shadow-xl w-full max-w-2xl gap-1.5 sm:gap-0">
            <button
              onClick={() => setActiveCategoryId('all-inclusive')}
              className={`w-full sm:w-1/2 py-3 px-4 sm:px-6 rounded-xl sm:rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
                activeCategoryId === 'all-inclusive'
                  ? 'bg-gradient-to-r from-gold to-[#FF7518] text-[#091C17] shadow-lg shadow-gold/25'
                  : 'text-ivory/70 hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4 shrink-0" />
              <span className="truncate">All-Inclusive (Cardio + Steam)</span>
            </button>

            <button
              onClick={() => setActiveCategoryId('only-workout')}
              className={`w-full sm:w-1/2 py-3 px-4 sm:px-6 rounded-xl sm:rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
                activeCategoryId === 'only-workout'
                  ? 'bg-gradient-to-r from-gold to-[#FF7518] text-[#091C17] shadow-lg shadow-gold/25'
                  : 'text-ivory/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Only Workout Floor</span>
            </button>
          </div>
        </div>

        {/* Active Category Description Banner */}
        <div className="p-6 rounded-2xl bg-[#0C231D] border border-gold/25 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold font-mono text-[10px] font-bold uppercase tracking-wider border border-gold/30">
                {activeCategory.badge}
              </span>
              <h3 className="text-xl font-bold font-serif text-white">
                {activeCategory.title}
              </h3>
            </div>
            <p className="text-xs text-ivory/80 font-sans mt-1.5 max-w-2xl">
              {activeCategory.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4 text-xs font-mono text-ivory/70 border-t md:border-t-0 md:border-l border-gold/20 pt-3 md:pt-0 md:pl-6">
            <div>
              <span className="text-gold font-bold block">4,500 SQ FT</span>
              <span>Full Floor Space</span>
            </div>
            <div className="w-[1px] h-8 bg-gold/20" />
            <div>
              <span className="text-lime font-bold block">KETAN SIR</span>
              <span>Chief Supervision</span>
            </div>
          </div>
        </div>

        {/* 4 Pricing Cards Grid (1M, 3M, 6M, 1Y) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {activeCategory.plans.map((plan) => (
            <div
              key={plan.period}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#0E261F] to-[#091C17] border-2 border-gold shadow-[0_0_40px_rgba(198,166,107,0.25)] lg:-translate-y-2 z-10'
                  : 'bg-[#091C17]/95 border border-gold/20 hover:border-gold/50'
              }`}
            >
              {/* Highlight Badge */}
              {plan.savingsBadge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full font-mono text-[10px] font-black uppercase tracking-wider shadow-lg whitespace-nowrap flex items-center gap-1 ${
                  plan.popular
                    ? 'bg-gold text-[#091C17]'
                    : 'bg-lime text-[#091C17]'
                }`}>
                  <Crown className="w-3 h-3" />
                  <span>{plan.savingsBadge}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-gold font-bold tracking-wider">
                    {plan.durationLabel}
                  </span>
                  <span className="text-[10px] font-mono text-ivory/60 bg-white/5 px-2 py-0.5 rounded">
                    {plan.period}
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-4 pt-4 border-t border-gold/15 flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black font-serif text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-ivory/60">
                    / total
                  </span>
                </div>

                <div className="text-xs font-mono text-lime font-bold mt-1">
                  Effective: {plan.perMonth}
                </div>

                {/* Inclusions Checklist */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-gold/15">
                  <div className="text-[10px] font-mono uppercase text-gold font-bold tracking-wider">
                    Tier Inclusions:
                  </div>
                  {activeCategory.inclusions.slice(0, 4).map((inc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-ivory/85 font-sans leading-tight">
                      <span className="w-3.5 h-3.5 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold">
                        ✓
                      </span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-5 border-t border-gold/20">
                <a
                  href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(activeCategory.title)}%20${encodeURIComponent(plan.period)}%20package%20(${plan.price}).%20Please%20confirm%20admission.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded-full flex items-center justify-center gap-1.5 transition-all ${
                    plan.popular
                      ? 'bg-gold hover:bg-gold-hover text-[#091C17] shadow-lg shadow-gold/20'
                      : 'bg-[#15392F] hover:bg-[#1E4D40] text-ivory border border-gold/30 hover:border-gold'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Join {plan.period}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Coaching with Ketan Sir Callout Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#091C17] via-[#0E261F] to-[#1C4A3D] border-2 border-gold/50 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse" />
              <span className="text-xs font-mono uppercase text-gold font-bold tracking-wider">
                1-ON-1 PERSONAL TRAINERS (PT) AVAILABLE
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Personal Trainer (PT) & Tailored Body Transformation
            </h3>
            <p className="text-sm font-sans text-ivory/80 max-w-2xl leading-relaxed">
              Kya aapko fast results ke liye personal trainer chahiye? Certified personal trainers (PT) available hain dedicated 1-on-1 coaching, posture correction, aur complete customized diet planning ke sath. Work directly with Ketan Sir & senior mentors.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`tel:+918355968540`}
              className="px-6 py-3.5 rounded-full bg-[#091C17] border border-gold/50 text-gold hover:text-white font-mono text-xs font-bold uppercase tracking-wider text-center transition-all"
            >
              Call PT Desk: 8355968540
            </a>
            <a
              href={`https://wa.me/918355968540?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20am%20interested%20in%20Personal%20Trainer%20(PT)%20packages%20and%20diet%20plans.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-3.5 px-6 text-xs font-mono font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire PT on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Official Tariff Card Modal / Lightbox */}
      {showTariffModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-[#091C17] border-2 border-gold/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gold/25 flex items-center justify-between bg-[#0C231D]">
              <div>
                <span className="text-[10px] font-mono uppercase text-gold font-bold tracking-wider">
                  OFFICIAL PHYSICAL TARIFF CARD
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                  The Gym Tiger Fitness Tariff Inspection
                </h4>
              </div>
              <button
                onClick={() => setShowTariffModal(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden border border-gold/30 shadow-xl max-w-md w-full bg-black">
                <img
                  src="/images/gym/official-pricing-menu.jpg"
                  alt="Official The Gym Tiger Fitness Printed Pricing Menu"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-[#0E261F] border border-gold/20 text-xs text-ivory/85 text-center max-w-md w-full font-mono">
                ✓ 100% Genuine client rate card photographed at The Gym Tiger Fitness, Kamgar Hospital Road, Thane West.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gold/20 flex justify-end gap-3 bg-[#0C231D]">
              <button
                onClick={() => setShowTariffModal(false)}
                className="px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                Close
              </button>
              <a
                href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20have%20reviewed%20your%20official%20tariff%20card%20and%20would%20like%20to%20enroll.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-2.5 px-5 text-xs font-mono font-bold"
              >
                <span>Book Admission via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
