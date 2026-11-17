import React from 'react';

interface TigerLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'lockup' | 'emblem-only' | 'badge';
}

export const TigerLogo: React.FC<TigerLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'lockup'
}) => {
  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  // The Exact Authentic Vector Recreation of The Gym Tiger Fitness Logo
  const AuthenticTigerEmblem = ({ className: emblemClass = "w-full h-full" }: { className?: string }) => (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={emblemClass}
    >
      <defs>
        {/* Rich Golden Yellow Gradient matching the real mural photo */}
        <linearGradient id="gymGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFDE72" />
          <stop offset="50%" stopColor="#E5A93C" />
          <stop offset="100%" stopColor="#C98822" />
        </linearGradient>

        <linearGradient id="innerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
        </linearGradient>

        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#E5A93C" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* 1. LEFT DUMBBELL (Concentric Circles as seen in photo) */}
      <g filter="url(#goldGlow)">
        {/* Outer Plate */}
        <circle cx="34" cy="38" r="14" fill="url(#gymGold)" />
        <circle cx="34" cy="38" r="10.5" fill="#091C17" />
        {/* Inner Ring */}
        <circle cx="34" cy="38" r="7.5" fill="url(#gymGold)" />
        <circle cx="34" cy="38" r="4" fill="#091C17" />
        <circle cx="34" cy="38" r="2" fill="url(#gymGold)" />

        {/* Left Dumbbell Handle */}
        <rect x="42" y="35" width="8" height="6" rx="1.5" fill="url(#gymGold)" />
      </g>

      {/* 2. RIGHT DUMBBELL (Concentric Circles) */}
      <g filter="url(#goldGlow)">
        {/* Outer Plate */}
        <circle cx="126" cy="38" r="14" fill="url(#gymGold)" />
        <circle cx="126" cy="38" r="10.5" fill="#091C17" />
        {/* Inner Ring */}
        <circle cx="126" cy="38" r="7.5" fill="url(#gymGold)" />
        <circle cx="126" cy="38" r="4" fill="#091C17" />
        <circle cx="126" cy="38" r="2" fill="url(#gymGold)" />

        {/* Right Dumbbell Handle */}
        <rect x="110" y="35" width="8" height="6" rx="1.5" fill="url(#gymGold)" />
      </g>

      {/* 3. BODYBUILDER SILHOUETTE (Massive Traps, Deltoids, Overhead Double Bicep) */}
      <g filter="url(#goldGlow)">
        {/* Head */}
        <circle cx="80" cy="40" r="9" fill="url(#gymGold)" />

        {/* Massive Neck & Traps */}
        <path
          d="M71 46 C67 44 60 48 57 55 C54 62 57 70 63 68 C68 66 71 60 74 54 Z"
          fill="url(#gymGold)"
        />
        <path
          d="M89 46 C93 44 100 48 103 55 C106 62 103 70 97 68 C92 66 89 60 86 54 Z"
          fill="url(#gymGold)"
        />

        {/* Left Arm / Bicep Holding Dumbbell */}
        <path
          d="M48 37 C46 39 44 48 48 55 C52 61 58 62 62 58 C62 53 58 46 54 41 Z"
          fill="url(#gymGold)"
        />

        {/* Right Arm / Bicep Holding Dumbbell */}
        <path
          d="M112 37 C114 39 116 48 112 55 C108 61 102 62 98 58 C98 53 102 46 106 41 Z"
          fill="url(#gymGold)"
        />

        {/* Muscular Broad Torso & V-Taper Lats */}
        <path
          d="M68 52 C65 57 56 64 54 75 C52 86 60 93 68 96 L74 97 L80 98 L86 97 L92 96 C100 93 108 86 106 75 C104 64 95 57 92 52 Z"
          fill="url(#gymGold)"
        />

        {/* 4-POINT STAR CUTS ON THE BACK (Exact signature feature from client logo) */}
        {/* Center-Top 4-Point Star */}
        <path
          d="M80 58 Q80 64 84 64 Q80 64 80 70 Q80 64 76 64 Q80 64 80 58 Z"
          fill="#091C17"
        />

        {/* Center-Bottom 4-Point Star */}
        <path
          d="M80 73 Q80 80 85 80 Q80 80 80 87 Q80 80 75 80 Q80 80 80 73 Z"
          fill="#091C17"
        />

        {/* Left Lat 4-Point Star */}
        <path
          d="M68 70 Q68 74 71 74 Q68 74 68 78 Q68 74 65 74 Q68 74 68 70 Z"
          fill="#091C17"
        />

        {/* Right Lat 4-Point Star */}
        <path
          d="M92 70 Q92 74 95 74 Q92 74 92 78 Q92 74 89 74 Q92 74 92 70 Z"
          fill="#091C17"
        />

        {/* Muscular Striations & Cut Lines */}
        <path
          d="M63 80 C67 82 72 85 76 90"
          stroke="#091C17"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M97 80 C93 82 88 85 84 90"
          stroke="#091C17"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>

      {/* 4. "THE GYM" EMBOSSED WAIST BANNER (Curved Plaque at waist) */}
      <g filter="url(#goldGlow)">
        <path
          d="M62 97 C68 96 74 95.5 80 95.5 C86 95.5 92 96 98 97 L97 106 C92 105 86 104.5 80 104.5 C74 104.5 68 105 63 106 Z"
          fill="url(#gymGold)"
          stroke="#091C17"
          strokeWidth="0.8"
        />
        <text
          x="80"
          y="102.8"
          textAnchor="middle"
          fill="#091C17"
          fontSize="6"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1"
        >
          THE GYM
        </text>
      </g>

      {/* 5. "TIGER FITNESS" BOLD TEXT */}
      <text
        x="80"
        y="124"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="14.5"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="1.2"
      >
        TIGER FITNESS
      </text>

      {/* 6. BOTTOM WREATH & STARS */}
      <g filter="url(#goldGlow)">
        {/* Center Hollow/Concentric 5-Point Star */}
        {/* Outer Star */}
        <polygon
          points="80,131 82.5,137 89,137 83.8,141 85.8,147 80,143.5 74.2,147 76.2,141 71,137 77.5,137"
          fill="url(#gymGold)"
        />
        {/* Inner Star Cutout */}
        <polygon
          points="80,135 81.5,138.5 85.5,138.5 82.3,141 83.5,144.5 80,142.5 76.5,144.5 77.7,141 74.5,138.5 78.5,138.5"
          fill="#091C17"
        />

        {/* Small Left Star */}
        <polygon
          points="67,138 68.2,140.5 71,140.5 68.8,142 69.6,144.5 67,143 64.4,144.5 65.2,142 63,140.5 65.8,140.5"
          fill="url(#gymGold)"
        />

        {/* Small Right Star */}
        <polygon
          points="93,138 94.2,140.5 97,140.5 94.8,142 95.6,144.5 93,143 90.4,144.5 91.2,142 89,140.5 91.8,140.5"
          fill="url(#gymGold)"
        />

        {/* Left Laurel Wreath Branch */}
        <path
          d="M58 140 C52 140 46 137 42 133 C39 129 38 123 39 119"
          stroke="url(#gymGold)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left Leaves */}
        <path d="M41 123 Q46 124 46 128 Q41 128 41 123" fill="url(#gymGold)" />
        <path d="M43 129 Q49 130 48 134 Q43 134 43 129" fill="url(#gymGold)" />
        <path d="M48 135 Q53 136 51 140 Q47 139 48 135" fill="url(#gymGold)" />
        <path d="M54 139 Q58 140 55 144 Q52 143 54 139" fill="url(#gymGold)" />

        {/* Right Laurel Wreath Branch */}
        <path
          d="M102 140 C108 140 114 137 118 133 C121 129 122 123 121 119"
          stroke="url(#gymGold)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right Leaves */}
        <path d="M119 123 Q114 124 114 128 Q119 128 119 123" fill="url(#gymGold)" />
        <path d="M117 129 Q111 130 112 134 Q117 134 117 129" fill="url(#gymGold)" />
        <path d="M112 135 Q107 136 109 140 Q113 139 112 135" fill="url(#gymGold)" />
        <path d="M106 139 Q102 140 105 144 Q108 143 106 139" fill="url(#gymGold)" />
      </g>
    </svg>
  );

  // If badge variant is requested
  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex flex-col items-center p-3 rounded-3xl bg-[#091C17] border-2 border-[#E5A93C]/40 shadow-2xl ${className}`}>
        <div className={iconSizes[size]}>
          <AuthenticTigerEmblem />
        </div>
      </div>
    );
  }

  // If emblem-only is requested
  if (variant === 'emblem-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${iconSizes[size]} ${className}`}>
        <AuthenticTigerEmblem />
      </div>
    );
  }

  // Default Horizontal Lockup (Emblem + Typography)
  return (
    <div className={`inline-flex items-center gap-3.5 group ${className}`}>
      {/* Authentic Tiger Fitness Emblem Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        {/* Ambient Subtle Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#E5A93C]/25 via-[#FF7518]/20 to-[#C6F36A]/15 blur-md transform -scale-95 group-hover:blur-lg transition-all" />

        {/* Shield Frame */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#15392F] via-[#0E261F] to-[#091C17] border border-[#E5A93C]/60 p-1 shadow-xl shadow-black/50 flex items-center justify-center overflow-hidden">
          <AuthenticTigerEmblem />
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
