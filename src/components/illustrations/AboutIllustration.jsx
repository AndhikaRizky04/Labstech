import React from 'react';

export default function AboutIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 540 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[480px] select-none"
      >
        {/* Background Arched Window */}
        <path
          d="M160 360 L160 180 C160 100 230 60 290 60 C350 60 420 100 420 180 L420 360 Z"
          fill="#EEF1FA"
          stroke="#101B3D"
          strokeWidth="2.5"
        />
        {/* Window Pane Lines */}
        <line x1="290" y1="60" x2="290" y2="360" stroke="#101B3D" strokeWidth="1.5" opacity="0.4" />
        <line x1="160" y1="200" x2="420" y2="200" stroke="#101B3D" strokeWidth="1.5" opacity="0.4" />
        <line x1="160" y1="280" x2="420" y2="280" stroke="#101B3D" strokeWidth="1.5" opacity="0.4" />

        {/* Sun/Cloud outside window */}
        <circle cx="340" cy="140" r="30" fill="#FFFFFF" opacity="0.7" />

        {/* Bookshelf on Left */}
        <g id="left-bookshelf">
          <rect x="50" y="120" width="90" height="240" rx="6" fill="#FFFFFF" stroke="#101B3D" strokeWidth="2" />
          {/* Shelves */}
          <line x1="50" y1="180" x2="140" y2="180" stroke="#101B3D" strokeWidth="2" />
          <line x1="50" y1="250" x2="140" y2="250" stroke="#101B3D" strokeWidth="2" />
          <line x1="50" y1="310" x2="140" y2="310" stroke="#101B3D" strokeWidth="2" />

          {/* Plant on top shelf */}
          <path d="M80 180 L110 180 L105 160 L85 160 Z" fill="#2F4CDD" />
          <circle cx="95" cy="150" r="14" fill="#101B3D" opacity="0.8" />

          {/* Books on middle shelf */}
          <rect x="65" y="200" width="12" height="50" rx="2" fill="#2F4CDD" />
          <rect x="80" y="210" width="14" height="40" rx="2" fill="#101B3D" />
          <rect x="97" y="195" width="15" height="55" rx="2" fill="#6B7280" />

          {/* Decor box bottom shelf */}
          <rect x="65" y="270" width="55" height="35" rx="4" fill="#EEF1FA" stroke="#101B3D" strokeWidth="1.5" />
        </g>

        {/* Desk Surface */}
        <rect x="120" y="320" width="340" height="12" rx="4" fill="#101B3D" />
        <line x1="180" y1="332" x2="180" y2="400" stroke="#101B3D" strokeWidth="3" />
        <line x1="400" y1="332" x2="400" y2="400" stroke="#101B3D" strokeWidth="3" />

        {/* Person with Coffee */}
        <g id="person-coffee">
          {/* Person Body */}
          <path
            d="M230 320 C230 270 260 250 285 250 C310 250 340 270 340 320 Z"
            fill="#FFFFFF"
            stroke="#101B3D"
            strokeWidth="2.5"
          />

          {/* Head */}
          <circle cx="285" cy="210" r="24" fill="#FCE0D1" stroke="#101B3D" strokeWidth="2.5" />
          {/* Hair */}
          <path d="M260 210 C260 185 280 180 305 185 C315 190 312 210 312 210 C300 200 290 198 275 210 Z" fill="#101B3D" />
          {/* Glasses */}
          <rect x="282" y="205" width="15" height="11" rx="3" fill="none" stroke="#101B3D" strokeWidth="2" />
          <line x1="274" y1="210" x2="282" y2="210" stroke="#101B3D" strokeWidth="2" />

          {/* Arm holding Coffee Cup */}
          <path
            d="M305 280 L330 295 L315 315"
            fill="none"
            stroke="#101B3D"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Coffee Mug */}
          <rect x="305" y="295" width="22" height="25" rx="4" fill="#2F4CDD" stroke="#101B3D" strokeWidth="2" />
          <path d="M327 300 Q335 307 327 314" fill="none" stroke="#101B3D" strokeWidth="2" />
          {/* Steam */}
          <path d="M312 290 Q310 282 314 278" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M319 290 Q317 282 321 278" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Laptop on desk */}
        <g id="desk-laptop" transform="translate(190, 275)">
          <polygon points="10,45 60,45 55,20 15,20" fill="#FFFFFF" stroke="#101B3D" strokeWidth="2" />
          <line x1="0" y1="45" x2="70" y2="45" stroke="#101B3D" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
