import React from 'react';
import { Clock, Award, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { TRAINER_PROFILES, CLIENT_BUSINESS } from '../data/gymData';

export const TrainersSection: React.FC = () => {
  return (
    <section id="trainers" className="py-24 sm:py-32 bg-emerald text-ivory border-b border-gold/20">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-gold/20 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#091C17] text-gold text-xs font-mono uppercase tracking-wider font-bold border border-gold/30">
              04 / FLOOR MENTORSHIP
            </span>
            <h2 className="heading-section font-bold font-serif text-white uppercase">
              MEET OUR <span className="text-gold italic font-normal tracking-normal">MASTER COACHES.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-mono text-ivory/70 leading-relaxed">
            ACTIVE FLOOR TRAINERS ON DUTY DURING MORNING AND EVENING HOURS TO GUIDE EXERCISE MECHANICS AND FORM.
          </p>
        </div>

        {/* Trainer Portrait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINER_PROFILES.map((trainer) => (
            <div
              key={trainer.id}
              className="group rounded-3xl overflow-hidden bg-[#0C231D] border border-gold/30 hover:border-gold transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              {/* Large Portrait Image */}
              <div className="relative h-84 sm:h-96 w-full overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C231D] via-[#0C231D]/20 to-transparent opacity-90" />

                {/* Shift Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-[#091C17]/95 backdrop-blur-md border border-gold/40 text-[11px] font-mono text-gold font-bold">
                    {trainer.experience}
                  </span>
                </div>

                {/* Name & Role overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="text-xs font-mono text-lime uppercase font-bold tracking-wider">
                    {trainer.role}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="p-4 rounded-2xl bg-[#091C17] border border-gold/20 space-y-1.5 text-xs font-mono">
                  <div className="text-gold font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-lime" />
                    <span>{trainer.shift}</span>
                  </div>
                  <div className="text-ivory/80 mt-1">
                    <strong className="text-white">Specialization:</strong> {trainer.specialization}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed font-sans">
                  {trainer.bio}
                </p>

                <div className="pt-3 border-t border-gold/15">
                  <a
                    href={`https://wa.me/${trainer.phone ? '91' + trainer.phone : CLIENT_BUSINESS.contact.whatsapp}?text=Hi%20The%20Gym%20Tiger%20Fitness%2C%20I%20would%20like%20to%20train%20with%20${encodeURIComponent(trainer.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-emerald w-full justify-center text-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-lime" />
                    <span>Inquire with {trainer.name.split(' ')[0]} {trainer.phone ? `(${trainer.phone})` : ''}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
