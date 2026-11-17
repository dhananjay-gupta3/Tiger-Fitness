import React, { useMemo } from 'react';
import { Clock, AlertCircle, Phone, MessageCircle, ArrowUpRight, UserCheck, HelpCircle } from 'lucide-react';
import { CLIENT_BUSINESS } from '../data/gymData';

export const TimingsSection: React.FC = () => {
  const status = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentMins = hours * 60 + minutes;

    if (day === 0) {
      return {
        isOpen: false,
        reason: 'CLOSED TODAY (SUNDAY)',
        detail: 'Reopens Monday at 5:00 AM sharp'
      };
    }

    const morningOpen = 5 * 60; // 5:00 AM
    const morningClose = 14 * 60; // 2:00 PM
    const eveningOpen = 16 * 60; // 4:00 PM
    const eveningClose = 23 * 60 + 30; // 11:30 PM

    if ((currentMins >= morningOpen && currentMins < morningClose) ||
        (currentMins >= eveningOpen && currentMins < eveningClose)) {
      return {
        isOpen: true,
        reason: 'OPEN NOW',
        detail: currentMins < morningClose ? 'Morning Batch active until 2:00 PM' : 'Evening Batch active until 11:30 PM'
      };
    } else if (currentMins >= morningClose && currentMins < eveningOpen) {
      return {
        isOpen: false,
        reason: 'AFTERNOON BREAK',
        detail: 'Evening batch opens at 4:00 PM'
      };
    } else {
      return {
        isOpen: false,
        reason: 'CURRENTLY CLOSED',
        detail: 'Opens at 5:00 AM tomorrow'
      };
    }
  }, []);

  const days = [
    { day: 'Monday', hours: '5:00 AM – 2:00 PM | 4:00 PM – 11:30 PM', note: 'Full Coach Coverage' },
    { day: 'Tuesday', hours: '5:00 AM – 2:00 PM | 4:00 PM – 11:30 PM', note: 'Full Coach Coverage' },
    { day: 'Wednesday', hours: '5:00 AM – 2:00 PM | 4:00 PM – 11:30 PM', note: 'Full Coach Coverage' },
    { day: 'Thursday', hours: '5:00 AM – 2:00 PM | 4:00 PM – 11:30 PM', note: 'Full Coach Coverage' },
    { day: 'Friday', hours: '5:00 AM – 2:00 PM | 4:00 PM – 11:30 PM', note: 'Full Coach Coverage' },
    { day: 'Saturday', hours: '5:00 AM – 2:00 PM | 4:00 PM – 11:30 PM', note: 'Weekend Momentum' },
    { day: 'Sunday', hours: 'CLOSED', note: 'Rest & Deep Sanitization', isClosed: true },
  ];

  const quickFaqs = [
    {
      q: "Can I take a trial session before joining?",
      a: "Yes! Prospective members can visit during operational hours for a tour and discuss trial workouts directly at the front desk."
    },
    {
      q: "Is it safe and comfortable for women?",
      a: "100%. The Gym Tiger Fitness is a welcoming unisex facility with many active female lifters and dedicated floor guidance."
    },
    {
      q: "What should I bring on my first day?",
      a: "Clean indoor sports shoes (outdoor dirty footwear not allowed on turf/floor), workout clothes, a small sweat towel, and a water bottle."
    }
  ];

  return (
    <section id="timings" className="py-20 sm:py-28 bg-[#102C24] border-b border-[#C6A66B]/20 text-[#F4F0E6]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#C6A66B]/20 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#091C17] text-[#C6A66B] text-xs font-mono uppercase tracking-wider font-bold border border-[#C6A66B]/30">
              03 / SCHEDULE & COACH MENTORSHIP
            </span>
            <h2 className="heading-section font-bold font-serif text-white uppercase">
              TIMINGS & <span className="text-[#C6A66B] italic font-normal tracking-normal">COACH GUIDANCE.</span>
            </h2>
            <p className="text-sm font-sans text-[#F4F0E6]/75 max-w-xl">
              Convenient morning and evening batches with active trainer supervision on Kamgar Hospital Road.
            </p>
          </div>

          {/* Live Status Badge */}
          <div className="p-3.5 rounded-2xl bg-[#091C17] border border-[#C6A66B]/30 flex items-center gap-3 shadow-lg">
            <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${status.isOpen ? 'bg-[#C6F36A] animate-pulse' : 'bg-[#C6A66B]'}`} />
            <div className="text-xs font-mono">
              <span className={`font-bold ${status.isOpen ? 'text-[#C6F36A]' : 'text-[#C6A66B]'}`}>
                {status.reason}
              </span>
              <span className="text-[#F4F0E6]/70 ml-2">({status.detail})</span>
            </div>
          </div>
        </div>

        {/* Timings & Coach 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Weekly Schedule Table */}
          <div className="lg:col-span-7 bg-[#0C231D] rounded-3xl border border-[#C6A66B]/20 overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#091C17] border-b border-[#C6A66B]/20 flex justify-between text-xs font-mono text-[#C6A66B] uppercase font-bold">
              <span>Day of the Week</span>
              <span>Batch Hours</span>
            </div>
            <div className="divide-y divide-[#C6A66B]/10">
              {days.map((item) => (
                <div
                  key={item.day}
                  className={`p-3.5 sm:p-4 flex items-center justify-between text-xs sm:text-sm font-mono ${
                    item.isClosed ? 'bg-[#C6A66B]/10 text-[#C6A66B]' : 'text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-bold">{item.day}</span>
                    <span className="text-[10px] text-[#F4F0E6]/50 hidden sm:inline">
                      • {item.note}
                    </span>
                  </div>
                  <div className={`font-bold text-right text-xs sm:text-sm ${item.isClosed ? 'text-[#C6A66B]' : 'text-[#C6F36A]'}`}>
                    {item.hours}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#091C17] border-t border-[#C6A66B]/15 flex items-center gap-2.5 text-xs font-mono text-[#F4F0E6]/70">
              <AlertCircle className="w-4 h-4 text-[#C6A66B] shrink-0" />
              <span>Sunday closed for deep sanitization and muscle recovery.</span>
            </div>
          </div>

          {/* Right Column: Head Coach Ketan Sir Profile & Quick FAQs */}
          <div className="lg:col-span-5 space-y-5">
            {/* Ketan Sir Feature Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0E261F] to-[#091C17] border-2 border-[#C6A66B]/50 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#C6A66B] text-[#091C17] font-mono text-[10px] font-black uppercase tracking-wider">
                  HEAD COACH & FOUNDER
                </span>
                <span className="text-xs font-mono text-[#C6F36A] font-bold flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>On Duty Daily</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-white">
                  Ketan Sir
                </h3>
                <p className="text-xs text-[#C6A66B] font-mono mt-0.5">
                  10+ Years Mentoring • Complete Body Transformations
                </p>
                <p className="text-xs text-[#F4F0E6]/80 font-sans mt-2.5 leading-relaxed">
                  Attentive mentor dedicated to correct biomechanics, injury-free progressive overload, and personalized nutrition guidance for Thane West lifters.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <a
                  href="tel:+918355968540"
                  className="flex-1 py-3 px-4 rounded-full bg-[#15392F] hover:bg-[#1E4D40] border border-[#C6A66B]/40 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>Call: 8355968540</span>
                </a>

                <a
                  href={`https://wa.me/918355968540?text=Hi%20Ketan%20Sir%2C%20I%20would%20like%20to%20know%20more%20about%20personal%20training%20and%20gym%20timings.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-gold py-3 px-4 text-xs font-mono font-bold uppercase text-center justify-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Sir</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick 3 Essential FAQs */}
            <div className="p-5 rounded-3xl bg-[#0C231D] border border-[#C6A66B]/20 space-y-3">
              <div className="text-xs font-mono text-[#C6A66B] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-2.5">
                {quickFaqs.map((faq, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#091C17] border border-[#C6A66B]/15">
                    <div className="text-xs font-bold text-white font-sans">
                      {faq.q}
                    </div>
                    <div className="text-[11px] text-[#F4F0E6]/70 mt-1 font-sans leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
