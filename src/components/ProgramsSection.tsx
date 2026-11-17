import React from 'react';
import { ArrowUpRight, Clock, Target, Users, Flame, Sparkles } from 'lucide-react';
import { FITNESS_SERVICES, CLIENT_BUSINESS } from '../data/gymData';

export const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-ivory text-emerald-deep border-b border-ivory-border">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-emerald/15 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald text-gold text-xs font-mono uppercase tracking-wider font-bold">
              03 / ATHLETIC CURRICULUM
            </span>
            <h2 className="heading-section font-bold font-serif text-emerald-deep uppercase">
              STRUCTURED <span className="text-forest italic font-normal tracking-normal">TRAINING TRACKS.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-mono text-emerald/70 leading-relaxed">
            COACH-GUIDED ROUTINES TAILORED FOR SUSTAINABLE FAT LOSS, STRENGTH BUILDING, AND METABOLIC ENDURANCE.
          </p>
        </div>

        {/* Colorful Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FITNESS_SERVICES.map((program) => {
            const isLime = program.accentColor === 'lime';
            const isOrange = program.accentColor === 'orange';

            return (
              <div
                key={program.code}
                className="group rounded-3xl overflow-hidden bg-white border border-gold/30 hover:border-gold transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image Frame with Program Code Pill */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/20 to-transparent" />

                  {/* Program Code Pill */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase shadow-sm ${
                        isLime
                          ? 'bg-lime text-emerald-deep'
                          : isOrange
                          ? 'bg-gold text-emerald-deep'
                          : 'bg-emerald text-gold border border-gold/30'
                      }`}
                    >
                      {program.code}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-gold font-bold">
                      {program.focus}
                    </div>
                    <h3 className="text-xl font-bold font-serif text-white mt-0.5">
                      {program.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-emerald/80 leading-relaxed font-sans">
                      {program.summary}
                    </p>

                    <div className="p-4 rounded-2xl bg-ivory-light border border-gold/20 space-y-2 text-xs font-mono">
                      <div className="flex items-center gap-2 text-emerald-deep">
                        <Target className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="truncate"><strong>Target:</strong> {program.suitableFor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-deep">
                        <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span><strong>Schedule:</strong> {program.schedule}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action CTA in Emerald & Gold */}
                  <div className="pt-4 border-t border-emerald/10">
                    <a
                      href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20would%20like%20to%20enroll%20in%20the%20${encodeURIComponent(program.name)}%20track.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-full bg-emerald hover:bg-forest text-ivory font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all border border-gold/30 hover:border-gold"
                    >
                      <span>Inquire Track</span>
                      <ArrowUpRight className="w-4 h-4 text-gold" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
