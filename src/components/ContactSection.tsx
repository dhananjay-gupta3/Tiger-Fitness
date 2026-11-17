import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ExternalLink, ArrowUpRight, Sparkles, Navigation } from 'lucide-react';
import { CLIENT_BUSINESS } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceInterest: 'Strength & Resistance Training',
    preferredShift: 'Morning Shift (5:00 AM – 2:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const text = `*New Admission Inquiry - The Gym Tiger Fitness*\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🏋️ *Interested Track:* ${formData.serviceInterest}\n` +
      `⏰ *Preferred Shift:* ${formData.preferredShift}\n` +
      (formData.message ? `📝 *Note/Message:* ${formData.message}\n` : '') +
      `\n*Sent via The Gym Tiger Fitness Website*`;

    const url = `https://wa.me/918355968540?text=${encodeURIComponent(text)}`;
    setWhatsappUrl(url);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Auto open WhatsApp with the inquiry details
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-emerald border-b border-gold/20 text-ivory">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-gold/20 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#091C17] text-gold text-xs font-mono uppercase tracking-wider font-bold border border-gold/30">
              04 / LOCATION & CONCIERGE VISIT
            </span>
            <h2 className="heading-section font-bold font-serif text-white uppercase">
              VISIT THE <span className="text-gold italic font-normal tracking-normal">CLUB SANCTUARY.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-mono text-ivory/70 leading-relaxed">
            PROMINENT LOCATION ON KAMGAR HOSPITAL ROAD, RAMACHANDRA NAGAR, THANE WEST.
          </p>
        </div>

        {/* 2-Column Location & Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct WhatsApp, Address, Map & Click-to-Call */}
          <div className="lg:col-span-6 space-y-6">
            {/* Prominent WhatsApp Hero Card */}
            <div className="p-8 sm:p-9 rounded-3xl bg-[#091C17] border-2 border-gold shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-gold text-emerald-deep text-xs font-mono font-black uppercase tracking-wider">
                  DIRECT CONCIERGE DESK
                </span>
                <span className="text-xs font-mono text-lime font-bold">ACTIVE 24/7</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Direct WhatsApp Concierge
                </h3>
                <p className="text-sm text-ivory/80 font-sans leading-relaxed">
                  Have inquiries regarding monthly rates, quarterly transformation discounts, or off-peak crowd hours? Message our desk directly.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CLIENT_BUSINESS.contact.whatsapp}?text=Hello%20The%20Gym%20Tiger%20Fitness%2C%20I%20would%20like%20to%20visit%20today%20and%20take%20a%20look%20at%20the%20gym.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${CLIENT_BUSINESS.contact.phone}`}
                  className="btn-emerald"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call {CLIENT_BUSINESS.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Address & Hours Detail Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0C231D] border border-gold/20 space-y-4">
              <div className="text-xs font-mono uppercase text-gold font-bold tracking-wider">
                PHYSICAL ADDRESS
              </div>
              <h4 className="text-lg font-bold font-serif text-white">
                {CLIENT_BUSINESS.brandTitle}
              </h4>
              <p className="text-xs sm:text-sm text-ivory/85 leading-relaxed font-sans">
                {CLIENT_BUSINESS.address.line1}, {CLIENT_BUSINESS.address.line2}<br />
                {CLIENT_BUSINESS.address.locality}<br />
                {CLIENT_BUSINESS.address.city}, {CLIENT_BUSINESS.address.state} – {CLIENT_BUSINESS.address.pincode}
              </p>
              <div className="text-xs font-mono text-gold/80 pt-1">
                Landmarks: {CLIENT_BUSINESS.address.landmark}
              </div>
            </div>

            {/* Embedded Google Map Frame with Highlighted Gym Location */}
            <div className="rounded-3xl overflow-hidden border-2 border-gold/40 bg-[#091C17] h-80 sm:h-96 relative shadow-2xl group">
              {/* Google Map Embed (Full Clarity without dimming filter) */}
              <iframe
                title="Google Maps Location - The Gym Tiger Fitness"
                src={CLIENT_BUSINESS.address.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Location Highlight Card on Map */}
              <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-xs p-3.5 rounded-2xl bg-[#091C17]/95 backdrop-blur-md border border-gold/40 shadow-2xl">
                <div className="flex items-start gap-2.5">
                  <div className="relative mt-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF3B30] absolute -top-0.5 -left-0.5 animate-ping opacity-75" />
                    <MapPin className="w-4 h-4 text-[#FF3B30] fill-[#FF3B30] relative z-10" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase text-gold font-bold tracking-wider block">
                      📍 PINPOINTED GYM LOCATION
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold font-serif text-white mt-0.5">
                      The Gym Tiger Fitness
                    </h5>
                    <p className="text-[10px] text-ivory/80 font-mono mt-0.5 leading-snug">
                      Kamgar Hospital Road, Ramchandra Nagar, Thane West (400604)
                    </p>
                    <div className="text-[9px] text-lime font-mono font-bold mt-1">
                      ★ 4.8 Rating • 4,500 Sq Ft Arena
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons: Get Directions & Open Map */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('The Gym Tiger Fitness, Kamgar Hospital Road, Thane West, Maharashtra 400604')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#C6A66B] hover:bg-[#D4B87F] text-[#091C17] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl transition-all hover:scale-102"
                >
                  <Navigation className="w-3.5 h-3.5 fill-current" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={CLIENT_BUSINESS.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-[#091C17]/95 border border-gold/40 text-xs font-mono text-gold flex items-center gap-1.5 hover:bg-emerald transition-colors shadow-xl"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Static Interactive Inquiry Form */}
          <div className="lg:col-span-6 bg-[#0C231D] rounded-3xl border border-gold/25 p-6 sm:p-10 shadow-2xl">
            <div className="mb-8 space-y-2">
              <span className="text-xs font-mono text-gold uppercase font-bold tracking-wider">
                SCHEDULE TOUR / MEMBERSHIP NOTE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                BEGIN YOUR INQUIRY
              </h3>
              <p className="text-xs sm:text-sm text-ivory/70 font-sans">
                Fill out this quick note to check seasonal membership rates or book a facility walkthrough.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-3xl bg-[#091C17] border-2 border-gold text-center space-y-5 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-lime/15 border-2 border-lime mx-auto flex items-center justify-center text-lime animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gold font-bold tracking-wider block">
                    INQUIRY DISPATCHED VIA WHATSAPP
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                    THANK YOU, {formData.fullName.toUpperCase()}!
                  </h4>
                </div>
                <div className="p-4 rounded-2xl bg-[#0E261F] border border-gold/20 text-xs text-ivory/85 text-left font-mono space-y-1">
                  <div><strong className="text-white">Track:</strong> {formData.serviceInterest}</div>
                  <div><strong className="text-white">Phone:</strong> {formData.phone}</div>
                  <div><strong className="text-white">Shift:</strong> {formData.preferredShift}</div>
                </div>
                <p className="text-xs text-ivory/70 font-sans max-w-sm mx-auto">
                  Your inquiry message has been prepared for Head Coach Ketan Sir (8355968540). If WhatsApp did not open automatically, click the button below:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold py-3 px-6 text-xs w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        serviceInterest: 'Strength & Resistance Training',
                        preferredShift: 'Morning Shift (5:00 AM – 2:00 PM)',
                        message: ''
                      });
                    }}
                    className="btn-outline-gold text-xs py-3 px-5 w-full sm:w-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-ivory/70 mb-1.5 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Siddharth Verma"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#091C17] border border-gold/20 text-sm text-white placeholder-ivory/40 focus:outline-none focus:border-gold font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-ivory/70 mb-1.5 font-bold">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98000 00000"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#091C17] border border-gold/20 text-sm text-white placeholder-ivory/40 focus:outline-none focus:border-gold font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-ivory/70 mb-1.5 font-bold">
                      Training Track
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#091C17] border border-gold/20 text-sm text-white focus:outline-none focus:border-gold font-sans"
                    >
                      <option value="Only Workout Floor (₹2,000/mo)">Only Workout Floor (₹2,000)</option>
                      <option value="All-Inclusive Cardio & Steam (₹2,500/mo)">All-Inclusive Cardio & Steam (₹2,500)</option>
                      <option value="1-on-1 Personal Training (PT)">1-on-1 Personal Training (PT)</option>
                      <option value="Quarterly Transformation (3 Months)">Quarterly Transformation (3 Months)</option>
                      <option value="Annual Membership (Best Value)">Annual Membership (Best Value)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-ivory/70 mb-1.5 font-bold">
                      Preferred Workout Shift
                    </label>
                    <select
                      value={formData.preferredShift}
                      onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#091C17] border border-gold/20 text-sm text-white focus:outline-none focus:border-gold font-sans"
                    >
                      <option value="Morning Shift (5:00 AM – 2:00 PM)">Morning Batch (5:00 AM – 2:00 PM)</option>
                      <option value="Evening Peak (4:00 PM – 11:30 PM)">Evening Batch (4:00 PM – 11:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-ivory/70 mb-1.5 font-bold">
                    Questions or Goals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Weight loss target, trial session request, or personal training query..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#091C17] border border-gold/20 text-sm text-white placeholder-ivory/40 focus:outline-none focus:border-gold font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-gold py-4 justify-center"
                >
                  {submitting ? (
                    <span>Sending to WhatsApp Desk...</span>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send Inquiry to Ketan Sir via WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-ivory/60 text-center">
                  Direct WhatsApp dispatch to Head Coach Ketan Sir (8355968540). Zero spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
