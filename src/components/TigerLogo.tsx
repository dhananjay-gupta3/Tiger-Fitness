import React from 'react';

interface TigerLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'lockup' | 'emblem-only' | 'badge' | 'banner';
}

export const TigerLogo: React.FC<TigerLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'lockup'
}) => {
  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl'
  };

  const bannerHeights = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  };

  // Full banner graphic version
  if (variant === 'banner') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/images/tiger-fitness-logo.png"
          alt="The Gym Tiger Fitness Official Logo"
          className={`${bannerHeights[size]} w-auto object-contain drop-shadow-[0_4px_12px_rgba(229,169,60,0.3)]`}
          loading="eager"
        />
      </div>
    );
  }

  // Emblem Only (Square 1:1)
  if (variant === 'emblem-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${iconSizes[size]} rounded-2xl bg-black border border-[#E5A93C]/50 p-1 shadow-xl overflow-hidden ${className}`}>
        <img
          src="/images/tiger-emblem.png"
          alt="The Gym Tiger Fitness Emblem"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
    );
  }

  // Badge Variant
  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex flex-col items-center p-3 rounded-3xl bg-black border-2 border-[#E5A93C]/60 shadow-2xl ${className}`}>
        <img
          src="/images/tiger-fitness-logo.png"
          alt="The Gym Tiger Fitness Official Logo"
          className="max-h-24 w-auto object-contain"
          loading="eager"
        />
      </div>
    );
  }

  // Default Lockup (Clean Shield Emblem + Typography)
  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Official Tiger Fitness Graphic Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        {/* Ambient Subtle Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#E5A93C]/30 via-[#FF7518]/25 to-[#C6F36A]/15 blur-md transform -scale-95 group-hover:blur-lg transition-all" />

        {/* Shield Frame with Official Tiger Emblem */}
        <div className="relative w-full h-full rounded-2xl bg-black border border-[#E5A93C]/70 p-0.5 shadow-xl shadow-black/70 flex items-center justify-center overflow-hidden">
          <img
            src="/images/tiger-emblem.png"
            alt="The Gym Tiger Fitness Emblem"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E5A93C] font-black">
            THE GYM
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6F36A]" />
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#C6F36A] font-bold">
            UNISEX
          </span>
        </div>

        <div className={`font-serif font-black tracking-tight leading-none text-white ${textSizes[size]}`}>
          TIGER <span className="text-[#E5A93C] font-light italic">FITNESS</span>
        </div>

        {showSubtitle && (
          <span className="text-[9px] text-[#F4F0E6]/70 font-mono tracking-wider uppercase mt-0.5 hidden xs:inline-block">
            4,500 SQ FT • THANE WEST
          </span>
        )}
      </div>
    </div>
  );
};
