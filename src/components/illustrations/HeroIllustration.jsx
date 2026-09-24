import React from 'react';

export default function HeroIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[540px] drop-shadow-sm select-none"
      >
        {/* Background Subtle Shapes */}
        <circle cx="280" cy="240" r="180" fill="#EEF1FA" opacity="0.6" />
        <rect x="360" y="80" width="160" height="240" rx="12" fill="#F4F6FC" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Hanging Lamp */}
        <line x1="220" y1="0" x2="220" y2="90" stroke="#101B3D" strokeWidth="2" />
        <path d="M200 90 L240 90 L230 115 L210 115 Z" fill="#101B3D" />
        <polygon points="210,115 230,115 250,220 190,220" fill="#2F4CDD" opacity="0.08" />

        {/* Bookshelf on the right */}
        <g id="bookshelf">
          {/* Shelf 1 */}
          <line x1="380" y1="140" x2="520" y2="140" stroke="#101B3D" strokeWidth="3" strokeLinecap="round" />
          {/* Plant Pot 1 */}
          <rect x="400" y="115" width="24" height="25" rx="4" fill="#2F4CDD" />
          <path d="M405 115 Q400 95 412 100 Q425 90 420 115" fill="#101B3D" opacity="0.8" />
          {/* Books */}
          <rect x="440" y="105" width="12" height="35" rx="2" fill="#101B3D" />
          <rect x="454" y="110" width="10" height="30" rx="2" fill="#2F4CDD" opacity="0.7" />
          <rect x="466" y="100" width="14" height="40" rx="2" fill="#6B7280" />

          {/* Shelf 2 */}
          <line x1="380" y1="220" x2="520" y2="220" stroke="#101B3D" strokeWidth="3" strokeLinecap="round" />
          {/* Frame/Picture */}
          <rect x="395" y="175" width="30" height="45" rx="4" fill="#FFFFFF" stroke="#101B3D" strokeWidth="2" />
          <circle cx="410" cy="195" r="8" fill="#2F4CDD" />
          {/* Small Plant */}
          <path d="M480 220 C470 200 460 215 455 200 C470 190 490 200 480 220" fill="#2F4CDD" opacity="0.9" />
          <path d="M475 220 L485 220 L482 208 L478 208 Z" fill="#101B3D" />
        </g>

        {/* Beanbag Chair */}
        <path
          d="M120 370 C100 320 110 260 170 250 C230 240 310 270 330 330 C350 390 300 420 220 420 C150 420 130 400 120 370 Z"
          fill="#101B3D"
        />
        {/* Soft highlight on beanbag */}
        <path
          d="M140 360 C130 330 140 280 180 270 C220 260 280 280 300 330"
          stroke="#2F4CDD"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Person Sitting */}
        <g id="person">
          {/* Body / Torso */}
          <path
            d="M185 270 C185 240 210 230 230 240 C250 250 255 280 250 310 L200 310 Z"
            fill="#FFFFFF"
            stroke="#101B3D"
            strokeWidth="2.5"
          />
          {/* Legs */}
          <path
            d="M200 310 Q240 320 270 340 Q240 360 200 350 Z"
            fill="#101B3D"
          />
          <path
            d="M270 340 L295 380 L275 390 L250 350 Z"
            fill="#101B3D"
          />
          {/* Shoes */}
          <ellipse cx="290" cy="388" rx="14" ry="7" fill="#2F4CDD" />

          {/* Head */}
          <circle cx="215" cy="205" r="22" fill="#FCE0D1" stroke="#101B3D" strokeWidth="2.5" />
          {/* Hair */}
          <path d="M193 205 C193 185 210 180 230 185 C238 190 237 205 237 205 C230 200 220 195 205 205 Z" fill="#101B3D" />
          {/* Glasses */}
          <rect x="212" y="200" width="14" height="10" rx="3" fill="none" stroke="#101B3D" strokeWidth="2" />
          <line x1="205" y1="204" x2="212" y2="204" stroke="#101B3D" strokeWidth="2" />
          {/* Ear */}
          <circle cx="200" cy="208" r="4" fill="#FCE0D1" stroke="#101B3D" strokeWidth="1.5" />

          {/* Arms holding laptop */}
          <path
            d="M225 250 L255 270 L240 285"
            fill="none"
            stroke="#101B3D"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Laptop */}
          <g id="laptop" transform="translate(230, 245) rotate(-10)">
            {/* Screen */}
            <rect x="0" y="0" width="55" height="38" rx="4" fill="#FFFFFF" stroke="#101B3D" strokeWidth="2.5" />
            <rect x="4" y="4" width="47" height="30" rx="2" fill="#EEF1FA" />
            {/* Code lines on screen */}
            <line x1="8" y1="10" x2="26" y2="10" stroke="#2F4CDD" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="16" x2="38" y2="16" stroke="#101B3D" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="22" x2="30" y2="22" stroke="#2F4CDD" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="28" x2="42" y2="28" stroke="#101B3D" strokeWidth="2" strokeLinecap="round" />

            {/* Base */}
            <path d="M-5 38 L60 38 L55 44 L-0 44 Z" fill="#101B3D" />
          </g>
        </g>

        {/* Floating tech elements/icons */}
        <g id="floating-code">
          <rect x="80" y="160" width="85" height="36" rx="18" fill="#FFFFFF" stroke="#2F4CDD" strokeWidth="1.5" className="drop-shadow-md" />
          <text x="95" y="183" fill="#2F4CDD" fontSize="13" fontWeight="bold" fontFamily="sans-serif">&lt;code /&gt;</text>

          <circle cx="340" cy="140" r="20" fill="#2F4CDD" />
          <path d="M333 140 L347 140 M340 133 L340 147" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
