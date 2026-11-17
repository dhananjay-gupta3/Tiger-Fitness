import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { VERIFIED_FAQS, CLIENT_BUSINESS } from '../data/gymData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-ivory text-emerald-deep border-b border-ivory-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center pb-8 mb-16 border-b border-emerald/15">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald text-gold text-xs font-mono uppercase tracking-wider font-bold mb-3 border border-gold/30">
            09 / INQUIRIES & CLARIFICATIONS
          </span>
          <h2 className="heading-section font-bold font-serif text-emerald-deep uppercase">
            FREQUENTLY ASKED <span className="text-forest italic font-normal tracking-normal">QUESTIONS.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-mono text-emerald/70">
            TRANSPARENT CLARIFICATIONS REGARDING MEMBERSHIPS, FLOOR RULES, TRAINERS, AND TRIAL VISITS.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {VERIFIED_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-gold shadow-lg'
                    : 'bg-ivory-light border-emerald/10 hover:border-gold/40'
                } overflow-hidden`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-serif text-emerald-deep pr-2">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-gold text-emerald-deep rotate-180' : 'bg-emerald/10 text-emerald-deep'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-emerald/80 leading-relaxed font-sans border-t border-emerald/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Inquire Note */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-md">
          <div>
            <h4 className="text-lg font-bold font-serif text-emerald-deep">
              Have another question not answered above?
            </h4>
            <p className="text-xs text-emerald/70 mt-0.5 font-sans">
              Connect directly with our front desk team on Kamgar Hospital Road.
            </p>
          </div>
          <a
            href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20have%20a%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold whitespace-nowrap text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Concierge on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
