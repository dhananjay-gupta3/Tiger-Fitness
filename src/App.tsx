import React from 'react';
import { LenisSmoothScroll } from './components/LenisSmoothScroll';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TheGymSection } from './components/TheGymSection';
import { MembershipsSection } from './components/MembershipsSection';
import { TimingsSection } from './components/TimingsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export function App() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTheGym = () => {
    document.querySelector('#the-gym')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LenisSmoothScroll>
      <div className="min-h-screen bg-emerald text-ivory selection:bg-gold selection:text-emerald-deep font-sans pb-16 sm:pb-0">
        {/* Navigation (Only 4 Essential Links: The Gym, Pricing, Timings, Contact) */}
        <Navbar onInquireClick={scrollToContact} />

        <main id="main-content">
          {/* 1. Hero Section (Visual Hook with 4,500 Sq Ft Real Floor Preview & CTAs) */}
          <HeroSection
            onExploreClick={scrollToTheGym}
            onInquireClick={scrollToContact}
          />

          {/* 2. The Gym & Floor (4,500 Sq. Ft. Space, Key Features & 6 Real Photos) */}
          <TheGymSection />

          {/* 3. Official Membership Tariff (Workout Only & All-Inclusive Plans) */}
          <MembershipsSection />

          {/* 4. Timings & Coach Mentorship (Weekly Schedule, Live Open Status, Ketan Sir Profile & FAQs) */}
          <TimingsSection />

          {/* 5. Location, Google Map & Concierge Desk (Kamgar Hospital Road, Thane West) */}
          <ContactSection />
        </main>

        {/* Architectural Footer */}
        <Footer />

        {/* Mobile Floating Quick-Action Bar */}
        <MobileQuickBar />
      </div>
    </LenisSmoothScroll>
  );
}

export default App;
