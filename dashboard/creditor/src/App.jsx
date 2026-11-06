import React, { useEffect, useState } from 'react';
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  Home,
  FileText,
  BarChart2,
  FileCheck,
  Settings,
  Wallet,
  Clock,
  Check,
  Scale,
  CalendarCheck,
  Zap,
  ArrowRight,
  Sun,
  Moon,
  AlertCircle,
  HeartHandshake,
  CreditCard
} from 'lucide-react';

// ==========================================
// CUSTOM KAWAII & STORYBOOK ILLUSTRATIONS
// ==========================================

/**
 * Brand Leaf Logo SVG (Outlined leaf in soft circle)
 */
const LeafLogo = ({ isDark }) => (
  <div
    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
      isDark
        ? 'border-emerald-400/80 bg-emerald-950/50 text-emerald-300'
        : 'border-[#2f5d41] bg-[#eef5f0] text-[#2f5d41]'
    }`}
  >
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  </div>
);

/**
 * Cute Hand-Drawn Sun Icon next to "Good morning, John!"
 */
const CuteSunIcon = () => (
  <svg className="w-8 h-8 inline-block ml-1.5 -mt-1 shrink-0" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="9.5" fill="#f7b955" stroke="#b57c2c" strokeWidth="1.8" />
    <circle cx="17" cy="17.5" r="2" fill="#ffe194" opacity="0.7" />
    <path
      d="M20 4.5 V7.5 M20 32.5 V35.5 M4.5 20 H7.5 M32.5 20 H35.5 M9.2 9.2 L11.5 11.5 M28.5 28.5 L30.8 30.8 M30.8 9.2 L28.5 11.5 M11.5 28.5 L9.2 30.8"
      stroke="#d99238"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Cute Smiling Star Icon for "You're on track!"
 */
const CuteStarIcon = () => (
  <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 3.5 C17.2 3.5, 18.8 8.6, 19.8 9.3 C20.8 10, 26.2 10.2, 26.6 11.3 C27 12.4, 22.8 15.8, 22.4 16.9 C22 18, 23.5 23.2, 22.5 23.9 C21.5 24.6, 17.2 21.6, 16 21.6 C14.8 21.6, 10.5 24.6, 9.5 23.9 C8.5 23.2, 10 18, 9.6 16.9 C9.2 15.8, 5 12.4, 5.4 11.3 C5.8 10.2, 11.2 10, 12.2 9.3 C13.2 8.6, 14.8 3.5, 16 3.5 Z"
      fill="#f7bf50"
      stroke="#b88428"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="13.8" cy="14.2" r="1" fill="#6b4415" />
    <circle cx="18.2" cy="14.2" r="1" fill="#6b4415" />
    <path d="M14.7 16.3 Q16 17.4 17.3 16.3" stroke="#6b4415" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/**
 * 1. Super Cute Interactive Kawaii Chibi Peeking Ginger Cat Illustration
 *    (With squishy cheeks, side fluff tufts, radial cream face shading, dual-sparkle eyes,
 *     upside-down pink triangle nose, 'ω' mouth, paw wiggles, floating hearts on click,
 *     and handwritten note "Small steps, big recoveries! ♥")
 */
const PeekingCatIllustration = ({ isDark }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPetted, setIsPetted] = useState(false);

  const handlePet = () => {
    setIsPetted(true);
    setTimeout(() => setIsPetted(false), 1400);
  };

  return (
    <div
      onClick={handlePet}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Click to pet the kitty! 🐾"
      className="relative flex items-end select-none cursor-pointer group"
    >
      {/* Floating Hearts when petted */}
      {isPetted && (
        <div className="absolute -top-5 left-16 pointer-events-none flex gap-3 z-30">
          <span className="text-rose-400 text-sm animate-bounce">♥</span>
          <span className="text-pink-400 text-base -mt-2 animate-ping">♥</span>
          <span className="text-rose-400 text-xs animate-bounce">♥</span>
        </div>
      )}

      <svg
        className="w-48 h-28 overflow-visible transition-transform duration-300"
        viewBox="0 0 215 118"
        fill="none"
      >
        <defs>
          {/* Warm Radial Cream Face Shading */}
          <radialGradient id="kawaiiCatFaceGrad" cx="50%" cy="56%" r="54%">
            <stop offset="0%" stopColor="#fffdf9" />
            <stop offset="72%" stopColor="#fff4e0" />
            <stop offset="100%" stopColor="#f8dfc0" />
          </radialGradient>
          {/* Soft Inner Ear Pink Gradient */}
          <linearGradient id="kawaiiEarPink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffccd5" />
            <stop offset="100%" stopColor="#f497a9" />
          </linearGradient>
        </defs>

        {/* Left Botanical Leaves (Sway on hover) */}
        <g
          className={`transition-transform duration-500 origin-bottom ${
            isHovered ? '-rotate-6' : ''
          }`}
        >
          <path
            d="M28 106 Q18 82 10 70"
            stroke={isDark ? '#469c76' : '#689f80'}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M19 88 C9 85, 6 75, 16 74 C23 74, 24 83, 19 88 Z"
            fill={isDark ? '#388e68' : '#7fb396'}
          />
          <path
            d="M24 96 C32 90, 38 80, 29 77 C22 76, 21 88, 24 96 Z"
            fill={isDark ? '#52b788' : '#94c5a9'}
          />
          {/* Floating Coral Heart above Left Leaf */}
          <path
            d="M22 46 C19 41, 12 43, 14 49 C15.5 53, 21 56, 22 57 C23 56, 28.5 53, 30 49 C32 43, 25 41, 22 46 Z"
            fill="#ef7a68"
          />
        </g>

        {/* Right Botanical Leaves (Sway on hover) */}
        <g
          className={`transition-transform duration-500 origin-bottom ${
            isHovered ? 'rotate-6' : ''
          }`}
        >
          <path
            d="M180 106 Q192 86 202 76"
            stroke={isDark ? '#469c76' : '#689f80'}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M190 92 C200 90, 205 80, 196 78 C189 77, 187 86, 190 92 Z"
            fill={isDark ? '#388e68' : '#7fb396'}
          />
          <path
            d="M184 98 C177 92, 173 82, 181 80 C187 79, 188 90, 184 98 Z"
            fill={isDark ? '#52b788' : '#94c5a9'}
          />
        </g>

        {/* Left Chibi Cat Ear */}
        <path
          d="M52 60 C43 35, 47 16, 57 14 C67 12, 82 26, 90 40 Z"
          fill="#f4b178"
          stroke="#4a2c1d"
          strokeWidth="2.7"
          strokeLinejoin="round"
        />
        <path
          d="M57 52 C51 37, 54 23, 60 22 C66 21, 76 30, 81 39 Z"
          fill="url(#kawaiiEarPink)"
        />

        {/* Right Chibi Cat Ear */}
        <path
          d="M158 60 C167 35, 163 16, 153 14 C143 12, 128 26, 120 40 Z"
          fill="#eb9c5c"
          stroke="#4a2c1d"
          strokeWidth="2.7"
          strokeLinejoin="round"
        />
        <path
          d="M153 52 C159 37, 156 23, 150 22 C144 21, 134 30, 129 39 Z"
          fill="url(#kawaiiEarPink)"
        />

        {/* Plump Squishy Chibi Head with Side Cheek Fluff Tufts */}
        <path
          d="M44 106 C33 93, 35 76, 42 70 C38 66, 44 59, 49 56 C61 36, 83 31, 105 31 C127 31, 149 36, 161 56 C166 59, 172 66, 168 70 C175 76, 177 93, 166 106 Z"
          fill="url(#kawaiiCatFaceGrad)"
        />

        {/* Soft Ginger Tabby Patches on Left & Right Forehead */}
        <path
          d="M53 53 C67 36, 88 31, 101 31 C93 46, 77 60, 46 66 C47 60, 50 56, 53 53 Z"
          fill="#f3b37a"
        />
        <path
          d="M157 53 C143 36, 122 31, 109 31 C117 46, 133 60, 164 66 C163 60, 160 56, 157 53 Z"
          fill="#ea9d5c"
        />

        {/* Cute Rounded Forehead Tabby Stripes */}
        <rect x="102.5" y="33" width="5" height="13" rx="2.5" fill="#c97438" opacity="0.85" />
        <rect
          x="92"
          y="35"
          width="4.5"
          height="10"
          rx="2.2"
          transform="rotate(-14 92 35)"
          fill="#c97438"
          opacity="0.8"
        />
        <rect
          x="113.5"
          y="35"
          width="4.5"
          height="10"
          rx="2.2"
          transform="rotate(14 113.5 35)"
          fill="#c97438"
          opacity="0.8"
        />

        {/* Head Outline Redraw */}
        <path
          d="M44 106 C33 93, 35 76, 42 70 C38 66, 44 59, 49 56 C61 36, 83 31, 105 31 C127 31, 149 36, 161 56 C166 59, 172 66, 168 70 C175 76, 177 93, 166 106"
          stroke="#4a2c1d"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Plump Rosy Kawaii Cheek Blushes with Diagonal Blush Lines */}
        <ellipse cx="67" cy="84" rx="11.5" ry="6.8" fill="#ff8fa3" opacity="0.55" />
        <ellipse cx="143" cy="84" rx="11.5" ry="6.8" fill="#ff8fa3" opacity="0.55" />
        <path
          d="M63 83 L61 86 M68 83 L66 86 M141 83 L139 86 M146 83 L144 86"
          stroke="#e05772"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Big Glossy Chocolate-Brown Eyes with Dual White Specular Sparkles (or Happy ^ω^ Arcs when petted) */}
        {isPetted ? (
          <g>
            <path
              d="M71 74 Q79 64 87 74"
              stroke="#3b2012"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M123 74 Q131 64 139 74"
              stroke="#3b2012"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ) : (
          <g>
            {/* Left Eye */}
            <circle cx="79" cy="73" r="7.4" fill="#3b2012" />
            <circle cx="76.5" cy="70.2" r="2.8" fill="#ffffff" />
            <circle cx="81.8" cy="75.8" r="1.3" fill="#ffffff" />
            <path
              d="M73 63.5 Q79 61 84 63.5"
              stroke="#4a2c1d"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Right Eye */}
            <circle cx="131" cy="73" r="7.4" fill="#3b2012" />
            <circle cx="128.5" cy="70.2" r="2.8" fill="#ffffff" />
            <circle cx="133.8" cy="75.8" r="1.3" fill="#ffffff" />
            <path
              d="M126 63.5 Q131 61 137 63.5"
              stroke="#4a2c1d"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* Tiny Upside-Down Pink Triangle Nose */}
        <path
          d="M101.5 77.5 C101.5 76, 108.5 76, 108.5 77.5 C108.5 79.5, 106.2 81.8, 105 81.8 C103.8 81.8, 101.5 79.5, 101.5 77.5 Z"
          fill="#f27d92"
          stroke="#4a2c1d"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/*Tiny Pink Tongue Peeking Out on Hover or Pet */}
        {(isHovered || isPetted) && (
          <path
            d="M101.5 85 C101.5 91.5, 108.5 91.5, 108.5 85 Z"
            fill="#ff8fa3"
            stroke="#4a2c1d"
            strokeWidth="1.7"
          />
        )}

        {/* Classic Kawaii 'ω' Cat Mouth */}
        <path
          d="M96 84 C98.5 88.5, 103.5 88, 105 82 C106.5 88, 111.5 88.5, 114 84"
          stroke="#4a2c1d"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Whiskers */}
        <path
          d="M46 77 L30 74 M44 84 L28 85 M47 90 L33 93"
          stroke="#4a2c1d"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M164 77 L180 74 M166 84 L182 85 M163 90 L177 93"
          stroke="#4a2c1d"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Left Chubby Marshmallow Paw (Fixed on ledge) */}
        <g transform="translate(42, 95)">
          <ellipse
            cx="17"
            cy="11"
            rx="15"
            ry="10"
            fill="#fffdf9"
            stroke="#4a2c1d"
            strokeWidth="2.6"
          />
          <ellipse cx="17" cy="7.5" rx="6" ry="3" fill="#ffccd5" opacity="0.55" />
          <path
            d="M12 11 C11 15, 11 18, 12 20 M22 11 C23 15, 23 18, 22 20"
            stroke="#4a2c1d"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Right Chubby Marshmallow Paw (Fixed on ledge) */}
        <g transform="translate(134, 95)">
          <ellipse
            cx="17"
            cy="11"
            rx="15"
            ry="10"
            fill="#fffdf9"
            stroke="#4a2c1d"
            strokeWidth="2.6"
          />
          <ellipse cx="17" cy="7.5" rx="6" ry="3" fill="#ffccd5" opacity="0.55" />
          <path
            d="M12 11 C11 15, 11 18, 12 20 M22 11 C23 15, 23 18, 22 20"
            stroke="#4a2c1d"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Handwritten Note Next to the Kitty */}
      <div
        className={`hidden sm:block mb-5 -ml-1 transform -rotate-6 text-[11px] leading-tight font-semibold tracking-wide ${
          isDark ? 'text-slate-300' : 'text-[#526358]'
        }`}
        style={{ fontFamily: "'Comic Sans MS', 'Bradley Hand', cursive, sans-serif" }}
      >
        <p>Small steps,</p>
        <p className="flex items-center gap-1">
          big recoveries! <span className="text-rose-400 text-xs">♥</span>
        </p>
      </div>
    </div>
  );
};

/**
 * 2. Sitting Cute Calico/Ginger Chibi Cat Illustration for "You're on track!" Card
 */
const SittingTrackCatIllustration = ({ isDark }) => (
  <div className="relative w-full flex justify-center items-end pt-2 select-none">
    <svg className="w-44 h-32 overflow-visible" viewBox="0 0 200 135" fill="none">
      {/* Warm Sandy Mound Base */}
      <path
        d="M10 135 Q100 102 190 135 Z"
        fill={isDark ? '#3a2e25' : '#f1d4af'}
      />
      <path
        d="M22 130 Q100 105 178 130"
        stroke={isDark ? '#594638' : '#dfb98b'}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Little Left Sprout on Mound */}
      <path d="M45 124 Q42 108 35 100" stroke="#6c9e78" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 112 C32 110, 30 102, 38 102 C43 102, 43 109, 40 112 Z" fill="#82b58d" />
      <path d="M43 116 C50 112, 53 104, 46 103 C41 103, 41 111, 43 116 Z" fill="#6c9e78" />

      {/* Little Right Grass Blades */}
      <path
        d="M154 125 Q158 115 163 111 M158 126 Q164 118 169 116"
        stroke="#6c9e78"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Curled Tail Behind Body */}
      <path
        d="M128 115 C148 115, 156 96, 145 88 C137 83, 132 95, 138 101"
        stroke="#4a2c1d"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M128 115 C148 115, 156 96, 145 88 C137 83, 132 95, 138 101"
        stroke="#ea9d5c"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Plump Sitting Body */}
      <path
        d="M72 78 C60 95, 62 118, 70 124 L130 124 C138 118, 140 95, 128 78 Z"
        fill="#fffaf0"
        stroke="#4a2c1d"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Ginger Patch on Right Side of Body */}
      <path
        d="M112 82 C125 88, 134 102, 132 118 C122 116, 114 105, 112 82 Z"
        fill="#f0a868"
      />

      {/* Front Sitting Paws */}
      <path
        d="M84 102 L84 123 M116 102 L116 123"
        stroke="#4a2c1d"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <ellipse cx="78" cy="123" rx="8" ry="4.5" fill="#fffaf0" stroke="#4a2c1d" strokeWidth="2.2" />
      <ellipse cx="122" cy="123" rx="8" ry="4.5" fill="#fffaf0" stroke="#4a2c1d" strokeWidth="2.2" />
      <ellipse cx="93" cy="124" rx="7.5" ry="4.2" fill="#fffaf0" stroke="#4a2c1d" strokeWidth="2.2" />
      <ellipse cx="107" cy="124" rx="7.5" ry="4.2" fill="#fffaf0" stroke="#4a2c1d" strokeWidth="2.2" />

      {/* Left Ear */}
      <path
        d="M66 48 C60 30, 63 17, 71 16 C79 15, 88 25, 93 34 Z"
        fill="#f3b075"
        stroke="#4a2c1d"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M70 43 C66 32, 68 22, 73 22 C77 22, 83 28, 86 34 Z" fill="#f59dae" />

      {/* Right Ear */}
      <path
        d="M134 48 C140 30, 137 17, 129 16 C121 15, 112 25, 107 34 Z"
        fill="#6b442a"
        stroke="#4a2c1d"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M130 43 C134 32, 132 22, 127 22 C123 22, 117 28, 114 34 Z" fill="#f59dae" />

      {/* Chibi Round Head */}
      <path
        d="M62 66 C56 50, 68 30, 100 30 C132 30, 144 50, 138 66 C142 76, 132 88, 100 88 C68 88, 58 76, 62 66 Z"
        fill="#fffaf0"
        stroke="#4a2c1d"
        strokeWidth="2.5"
      />

      {/* Calico Forehead Patches */}
      <path
        d="M65 48 C73 35, 87 31, 96 31 C90 42, 79 52, 61 56 C62 52, 63 50, 65 48 Z"
        fill="#f3b075"
      />
      <path
        d="M135 48 C127 35, 113 31, 104 31 C110 42, 121 52, 139 56 C138 52, 137 50, 135 48 Z"
        fill="#ea9d5c"
      />

      {/* Head Outline Redraw */}
      <path
        d="M62 66 C56 50, 68 30, 100 30 C132 30, 144 50, 138 66 C142 76, 132 88, 100 88 C68 88, 58 76, 62 66 Z"
        stroke="#4a2c1d"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Rosy Cheeks */}
      <ellipse cx="74" cy="68" rx="7.5" ry="4.5" fill="#ff8fa3" opacity="0.55" />
      <ellipse cx="126" cy="68" rx="7.5" ry="4.5" fill="#ff8fa3" opacity="0.55" />

      {/* Glossy Kawaii Eyes */}
      <circle cx="82" cy="59" r="5" fill="#3b2012" />
      <circle cx="80.3" cy="57.2" r="1.8" fill="#ffffff" />
      <circle cx="118" cy="59" r="5" fill="#3b2012" />
      <circle cx="116.3" cy="57.2" r="1.8" fill="#ffffff" />

      {/* Cute Pink Nose & 'ω' Smile */}
      <polygon points="97.5,62 102.5,62 100,65" fill="#f27d92" />
      <path
        d="M94 67 C96 70, 99 69.5, 100 65.5 C101 69.5, 104 70, 106 67"
        stroke="#4a2c1d"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Happy Excitement Sparkle Lines on Right */}
      <path
        d="M148 44 L155 40 M151 52 L159 51 M149 60 L156 62"
        stroke="#6b5344"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

/**
 * 3. Sleeping Puppy & Tiny Kitten/Hamster Buddy Illustration
 *    for "A little progress goes a long way!" Card
 */
const SleepingPuppyAndBuddy = () => (
  <svg className="w-44 h-28 shrink-0 overflow-visible select-none" viewBox="0 0 190 115" fill="none">
    {/* Soft Ground Shadow */}
    <ellipse cx="102" cy="96" rx="78" ry="12" fill="#cad8c7" opacity="0.65" />

    {/* Floating Coral Heart */}
    <path
      d="M42 36 C39 30, 30 32, 32 39 C34 44, 41 48, 42 49 C43 48, 50 44, 52 39 C54 32, 45 30, 42 36 Z"
      fill="#e87a64"
      stroke="#5c3828"
      strokeWidth="1.5"
    />

    {/* Sleeping Puppy Body (Warm Golden Tan) */}
    <path
      d="M88 50 C112 36, 152 42, 164 66 C170 76, 166 90, 154 91 L72 91 C62 91, 65 65, 88 50 Z"
      fill="#e5b582"
      stroke="#4a2c1d"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />

    {/* Cream Belly Patch & Back Spot */}
    <path d="M128 52 C142 52, 154 62, 156 75 C144 77, 130 68, 128 52 Z" fill="#c68b59" />

    {/* Back Sleeping Hind Leg & Tail */}
    <path
      d="M144 76 C158 74, 168 82, 166 90 C164 94, 146 93, 138 91"
      fill="#fffaf0"
      stroke="#4a2c1d"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M165 72 C175 68, 180 74, 173 80"
      fill="#e5b582"
      stroke="#4a2c1d"
      strokeWidth="2.3"
      strokeLinecap="round"
    />

    {/* Sleeping Puppy Head */}
    <path
      d="M58 64 C52 42, 68 25, 94 26 C120 27, 132 46, 125 68 C120 82, 106 89, 86 89 C68 89, 61 78, 58 64 Z"
      fill="#e8bc8a"
      stroke="#4a2c1d"
      strokeWidth="2.4"
    />

    {/* White Muzzle / Face Blaze */}
    <path
      d="M72 62 C76 50, 90 50, 96 62 C102 72, 98 87, 84 88 C70 88, 68 74, 72 62 Z"
      fill="#fffdf9"
    />

    {/* Cute Floppy Brown Left & Right Ears */}
    <path
      d="M64 38 C52 42, 46 62, 54 74 C60 80, 68 72, 68 58 Z"
      fill="#b37644"
      stroke="#4a2c1d"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M114 36 C126 42, 132 64, 122 76 C115 82, 106 72, 108 55 Z"
      fill="#b37644"
      stroke="#4a2c1d"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />

    {/* Puppy Front Paws Tucked Under Chin */}
    <ellipse cx="66" cy="88" rx="11" ry="6" fill="#fffdf9" stroke="#4a2c1d" strokeWidth="2.3" />
    <ellipse cx="102" cy="90" rx="12" ry="6" fill="#fffdf9" stroke="#4a2c1d" strokeWidth="2.3" />

    {/* Peaceful Closed Sleeping Eyes */}
    <path
      d="M70 62 Q76 67 82 62 M94 62 Q100 67 106 62"
      stroke="#4a2c1d"
      strokeWidth="2.3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Rosy Cheeks */}
    <ellipse cx="67" cy="68" rx="5.5" ry="3.2" fill="#f48b98" opacity="0.55" />
    <ellipse cx="107" cy="68" rx="5.5" ry="3.2" fill="#f48b98" opacity="0.55" />

    {/* Dark Brown Puppy Nose & Tiny Smile */}
    <ellipse cx="86" cy="71" rx="4.2" ry="3" fill="#4a2c1d" />
    <path
      d="M82 76 Q86 79 90 76"
      stroke="#4a2c1d"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Tiny Chibi Kitten/Hamster Buddy Cuddled on the Left */}
    <g transform="translate(24, 58)">
      {/* Tiny Ears */}
      <path
        d="M8 14 C5 6, 9 2, 14 6 Z M28 14 C31 6, 27 2, 22 6 Z"
        fill="#f0b27a"
        stroke="#4a2c1d"
        strokeWidth="2"
      />
      {/* Round Little Body */}
      <path
        d="M4 26 C2 14, 10 8, 19 8 C28 8, 36 14, 34 26 C34 32, 28 35, 19 35 C10 35, 4 32, 4 26 Z"
        fill="#fffdf9"
        stroke="#4a2c1d"
        strokeWidth="2.2"
      />
      {/* Ginger Cap Patch */}
      <path d="M7 15 C12 9, 25 9, 30 15 C25 18, 13 18, 7 15 Z" fill="#f0b27a" />
      {/* Sleeping Eyes & Nose */}
      <path
        d="M11 21 Q14 24 17 21 M21 21 Q24 24 27 21"
        stroke="#4a2c1d"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="19" cy="24" r="1.5" fill="#e87a90" />
    </g>
  </svg>
);

// ==========================================
// CHARTS & GAUGES
// ==========================================

/**
 * Smooth Wavy Mini Sparkline for the 4 Top KPI Cards
 */
const MiniSparkline = ({ color, id }) => {
  const palette = {
    green: { stroke: '#4d8b6e', fill: '#4d8b6e' },
    orange: { stroke: '#df7a47', fill: '#df7a47' },
    mint: { stroke: '#468966', fill: '#468966' },
    purple: { stroke: '#6c72b8', fill: '#6c72b8' }
  }[color] || { stroke: '#4d8b6e', fill: '#4d8b6e' };

  return (
    <svg className="w-24 h-12 shrink-0 overflow-visible" viewBox="0 0 105 48" fill="none">
      <defs>
        <linearGradient id={`spark-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.fill} stopOpacity="0.26" />
          <stop offset="100%" stopColor={palette.fill} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path
        d="M4 40 C16 40, 20 26, 31 28 C42 30, 48 38, 58 24 C68 10, 77 27, 87 19 C94 13, 99 15, 103 18 L103 46 L4 46 Z"
        fill={`url(#spark-${id})`}
      />
      <path
        d="M4 40 C16 40, 20 26, 31 28 C42 30, 48 38, 58 24 C68 10, 77 27, 87 19 C94 13, 99 15, 103 18"
        stroke={palette.stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

/**
 * 68% Multi-Segment Circular Donut Gauge in Recovery Progress
 */
const CircularGauge = ({ percentage = 68, isDark }) => {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center shrink-0 px-2">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 116 116">
          {/* Background Track */}
          <circle
            cx="58"
            cy="58"
            r={radius}
            fill="none"
            stroke={isDark ? '#223136' : '#dfe7df'}
            strokeWidth="12"
          />
          {/* Secondary Mid-Tone Green Segment */}
          <circle
            cx="58"
            cy="58"
            r={radius}
            fill="none"
            stroke={isDark ? '#38755b' : '#7ba58b'}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.22}
            strokeLinecap="round"
          />
          {/* Primary Deep Forest Green Segment */}
          <circle
            cx="58"
            cy="58"
            r={radius}
            fill="none"
            stroke={isDark ? '#42b883' : '#356b4d'}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-[24px] font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#1e2d24]'
            }`}
          >
            {percentage}%
          </span>
        </div>
      </div>

      <p className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        Collection Rate
      </p>
      <p
        className={`text-xs font-bold mt-0.5 flex items-center gap-0.5 ${
          isDark ? 'text-emerald-400' : 'text-[#2d6e4e]'
        }`}
      >
        <span>↑</span> 6%
      </p>
    </div>
  );
};

/**
 * 4-Week Recovery Progress Line & Area Chart
 */
const RecoveryLineChart = ({ isDark, timeframe }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const datasets = {
    'This Month': [
      { week: 'Week 1', x: 10, y: 66, val: '45%' },
      { week: 'Week 2', x: 112, y: 46, val: '62%' },
      { week: 'Week 3', x: 214, y: 31, val: '75%' },
      { week: 'Week 4', x: 316, y: 17, val: '87%' }
    ],
    'Last Month': [
      { week: 'Week 1', x: 10, y: 78, val: '35%' },
      { week: 'Week 2', x: 112, y: 58, val: '52%' },
      { week: 'Week 3', x: 214, y: 45, val: '64%' },
      { week: 'Week 4', x: 316, y: 30, val: '76%' }
    ],
    'This Quarter': [
      { week: 'Week 1', x: 10, y: 60, val: '50%' },
      { week: 'Week 2', x: 112, y: 40, val: '68%' },
      { week: 'Week 3', x: 214, y: 26, val: '80%' },
      { week: 'Week 4', x: 316, y: 12, val: '92%' }
    ]
  };

  const points = datasets[timeframe] || datasets['This Month'];
  const linePath = points.map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ');
  const areaPath = `${linePath} L 316 118 L 10 118 Z`;

  return (
    <div className="flex-1 w-full pt-2">
      <div className="flex items-stretch">
        {/* Y-Axis Labels */}
        <div
          className={`flex flex-col justify-between text-[11px] pr-3 pb-6 select-none font-medium ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* SVG Chart Grid & Area */}
        <div className="flex-1 relative">
          <svg className="w-full h-36 overflow-visible" viewBox="0 0 326 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`areaGrad-${isDark ? 'dark' : 'light'}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isDark ? '#38b27c' : '#437a5b'} stopOpacity="0.24" />
                <stop offset="100%" stopColor={isDark ? '#38b27c' : '#437a5b'} stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid Lines */}
            {[6, 34, 62, 90, 118].map((yPos, idx) => (
              <line
                key={idx}
                x1="10"
                y1={yPos}
                x2="316"
                y2={yPos}
                stroke={isDark ? '#223238' : '#ecebe4'}
                strokeWidth="1"
              />
            ))}

            {/* Vertical Grid Lines */}
            {[10, 112, 214, 316].map((xPos, idx) => (
              <line
                key={idx}
                x1={xPos}
                y1="6"
                x2={xPos}
                y2="118"
                stroke={isDark ? '#223238' : '#ecebe4'}
                strokeWidth="1"
              />
            ))}

            {/* Shaded Gradient Fill */}
            <path d={areaPath} fill={`url(#areaGrad-${isDark ? 'dark' : 'light'})`} />

            {/* Trend Line */}
            <path
              d={linePath}
              fill="none"
              stroke={isDark ? '#42b883' : '#356b4d'}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data Nodes */}
            {points.map((pt, idx) => (
              <g key={idx}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={hoveredPoint === idx ? 6 : 4.2}
                  fill={isDark ? '#42b883' : '#356b4d'}
                  stroke={isDark ? '#141f22' : '#ffffff'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredPoint(idx)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                {hoveredPoint === idx && (
                  <g transform={`translate(${pt.x - 22}, ${pt.y - 28})`}>
                    <rect width="44" height="20" rx="5" fill="#1e2d24" />
                    <text
                      x="22"
                      y="14"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {pt.val}
                    </text>
                  </g>
                )}
              </g>
            ))}
          </svg>

          {/* X-Axis Labels */}
          <div
            className={`flex justify-between text-[11px] pt-2 font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COLLECTFLOW DASHBOARD COMPONENT
// ==========================================

const CollectFlowBoard = ({ theme = 'light', onToggleTheme }) => {
  const isDark = theme === 'dark';

  // Navigation & Interactive States
  const [activeNav, setActiveNav] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeframe, setTimeframe] = useState('This Month');

  // Interactive Today's Priorities Checklist (Dynamically linked to Weekly Progress Bar!)
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review 3 payment proofs', completed: true },
    { id: 2, text: 'Follow up on 5 promises', completed: false },
    { id: 3, text: 'Respond to 2 disputes', completed: false },
    { id: 4, text: 'Check agency updates', completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Base 5 tasks completed earlier this week + 1 checked task = 6 of 10 tasks by default!
  const completedTodayCount = tasks.filter((t) => t.completed).length;
  const weeklyCompletedCount = 5 + completedTodayCount;
  const weeklyTotalCount = 10;
  const weeklyProgressPercent = Math.min(
    100,
    Math.round((weeklyCompletedCount / weeklyTotalCount) * 100)
  );

  // Compact Icon-Only Floating Pill Sidebar Items (Matches original Figma design)
  const navItems = [
    { id: 'menu', icon: Menu, label: 'Menu' },
    { id: 'home', icon: Home, label: 'Overview' },
    { id: 'invoices', icon: FileText, label: 'Invoices' },
    { id: 'reports', icon: BarChart2, label: 'Reports' },
    { id: 'documents', icon: FileCheck, label: 'Documents' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div
      className={`w-full rounded-[24px] overflow-hidden transition-colors duration-300 relative border ${
        isDark
          ? 'bg-[#0e1618] text-slate-100 border-slate-800/90 shadow-2xl'
          : 'bg-[#faf8f3] text-[#1e2d24] border-[#e8e4da] shadow-xl'
      }`}
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
    >
      {/* ==========================================
          1. TOP HEADER BAR (Logo + Search + Theme Toggle + Bell + Profile)
      ========================================== */}
      <header className="relative z-20 flex items-center justify-between px-4 sm:px-7 pt-4 pb-2 gap-4">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer shrink-0">
          <LeafLogo isDark={isDark} />
          <span className="text-[20px] tracking-tight font-extrabold flex items-center">
            <span className={isDark ? 'text-white' : 'text-[#1c2b22]'}>Collect</span>
            <span className={isDark ? 'text-emerald-400' : 'text-[#3b6e52]'}>Flow</span>
          </span>
        </div>

        {/* Center-Left: Pill Search Bar */}
        <div className="relative flex-1 max-w-md hidden md:block">
          <Search
            size={15}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-slate-400' : 'text-[#7c857d]'
            }`}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search invoices, cases, or clients..."
            className={`w-full pl-10 pr-4 py-2 rounded-full text-xs sm:text-[13px] outline-none transition-all ${
              isDark
                ? 'bg-[#182428] text-slate-200 placeholder-slate-400 border border-slate-700/70 focus:border-emerald-500/60'
                : 'bg-[#edeae2] text-slate-700 placeholder-[#848a83] border border-[#e0ddd4] focus:bg-white'
            }`}
          />
        </div>

        {/* Right Controls: Theme Switcher + Bell + Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Light / Dark Mode Toggle */}
          <div
            className={`flex items-center p-1 rounded-full border text-xs ${
              isDark
                ? 'bg-[#182428] border-slate-700/80 text-slate-300'
                : 'bg-[#edeae2] border-[#e0ddd4] text-slate-600'
            }`}
          >
            <button
              onClick={() => onToggleTheme('light')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                !isDark ? 'bg-[#4f775e] text-white shadow-xs' : 'hover:text-white'
              }`}
            >
              <Sun size={13} />
              <span className="hidden sm:inline">Light</span>
            </button>
            <button
              onClick={() => onToggleTheme('dark')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                isDark ? 'bg-emerald-600 text-white shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              <Moon size={13} />
              <span className="hidden sm:inline">Dark</span>
            </button>
          </div>

          {/* Notification Bell with Badge '3' */}
          <button
            className={`relative p-2 rounded-full transition-colors cursor-pointer ${
              isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-stone-200/60 text-[#2b362e]'
            }`}
          >
            <Bell size={19} strokeWidth={2} />
            <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#d85741] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
              3
            </span>
          </button>

          {/* User Profile */}
          <button className="flex items-center gap-2 pl-1 pr-1 py-1 rounded-full hover:opacity-90 transition-opacity cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#4d8b6e] text-white text-xs font-bold flex items-center justify-center shadow-xs">
              JD
            </div>
            <span
              className={`text-xs sm:text-[13px] font-semibold hidden sm:inline ${
                isDark ? 'text-slate-200' : 'text-[#2b362e]'
              }`}
            >
              John Doe
            </span>
            <ChevronDown size={14} className={isDark ? 'text-slate-400' : 'text-slate-500'} />
          </button>
        </div>
      </header>

      {/* ==========================================
          2. BODY CONTAINER: COMPACT FLOATING ICON SIDEBAR + MAIN CONTENT
      ========================================== */}
      <div className="flex px-3 sm:px-5 pb-6 pt-1 gap-3 sm:gap-5 relative z-10">
        {/* Compact Non-Expandable Floating Icon-Only Pill Sidebar */}
        <aside className="pt-6 shrink-0">
          <div
            className={`w-11 sm:w-12 py-3.5 rounded-full flex flex-col items-center gap-3.5 border transition-colors ${
              isDark
                ? 'bg-[#142024]/95 border-slate-800/90 shadow-lg'
                : 'bg-[#f2efe8] border-[#e5e0d5] shadow-sm'
            }`}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => item.id !== 'menu' && setActiveNav(item.id)}
                  title={item.label}
                  className={`relative group w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#3b7254] text-white shadow-sm'
                      : isDark
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                      : 'text-[#5b695e] hover:text-[#1e2d24] hover:bg-stone-200/70'
                  }`}
                >
                  <Icon size={17} strokeWidth={isActive ? 2.3 : 1.9} />
                  {/* Hover Tooltip */}
                  <span
                    className={`pointer-events-none absolute left-12 px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-md ${
                      isDark
                        ? 'bg-slate-800 text-slate-100 border border-slate-700'
                        : 'bg-[#1e2d24] text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Workspace Content */}
        <main className="flex-1 min-w-0">
          {/* ==========================================
              3. GREETING BANNER & CUTE PEEKING CAT ON CLOUD HILLS
          ========================================== */}
          <div className="relative flex flex-col sm:flex-row sm:items-end justify-between pt-1 pb-4">
            {/* Soft Layered Pastel/Dark Green Cloud Hills Behind Banner */}
            <div className="absolute right-0 bottom-0 w-full sm:w-[72%] h-28 pointer-events-none overflow-hidden z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 135"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M120 135 Q140 85 190 95 Q230 40 305 68 Q370 15 455 62 Q525 25 595 75 Q665 40 735 82 Q775 68 800 95 L800 135 Z"
                  fill={isDark ? '#152721' : '#e6efe5'}
                />
                <path
                  d="M180 135 Q260 95 370 112 Q490 85 620 108 Q720 92 800 105 L800 135 Z"
                  fill={isDark ? '#1a3129' : '#dce8db'}
                />
              </svg>
            </div>

            {/* Left Greeting Text */}
            <div className="relative z-10">
              <div className="flex items-center">
                <h1
                  className={`text-2xl sm:text-[28px] font-extrabold italic tracking-tight ${
                    isDark ? 'text-white' : 'text-[#1e2d24]'
                  }`}
                >
                  Good morning, John!
                </h1>
                <CuteSunIcon />
              </div>

              <p
                className={`text-xs sm:text-[14px] mt-1 font-medium relative inline-block ${
                  isDark ? 'text-slate-300' : 'text-[#425247]'
                }`}
              >
                <span className="relative inline-block">
                  Here's
                  {/* Hand-drawn Green Curved Underline under "Here's" */}
                  <svg
                    className="absolute -bottom-2 left-0 w-12 h-2.5 overflow-visible"
                    viewBox="0 0 54 10"
                    fill="none"
                  >
                    <path
                      d="M2 7 C18 3, 36 3, 52 5"
                      stroke={isDark ? '#42b883' : '#4a8563'}
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                your collection overview for this week.
              </p>
            </div>

            {/* Right Cute Interactive Kawaii Chibi Peeking Cat Illustration */}
            <div className="relative z-20 self-end -mb-6 sm:mr-6 mt-2 sm:mt-0">
              <PeekingCatIllustration isDark={isDark} />
            </div>
          </div>

          {/* ==========================================
              4. ROW 1: 4 PASTEL KPI CARDS
          ========================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 relative z-10">
            {/* KPI 1: Total Receivables */}
            <div
              className={`rounded-2xl p-4 border transition-all flex items-center justify-between ${
                isDark
                  ? 'bg-gradient-to-br from-[#162722] to-[#131e1d] border-emerald-800/40'
                  : 'bg-gradient-to-r from-[#ebf2ea] via-[#f2f6f1] to-[#f8faf7] border-[#dfeae0]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isDark
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-[#d7e6d7] text-[#35694b]'
                  }`}
                >
                  <Wallet size={19} />
                </div>
                <div>
                  <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-[#425247]'}`}>
                    Total Receivables
                  </p>
                  <h2
                    className={`text-2xl font-extrabold tracking-tight mt-0.5 ${
                      isDark ? 'text-white' : 'text-[#1e2d24]'
                    }`}
                  >
                    ₹18.4L
                  </h2>
                  <p className="text-[11px] mt-1 font-medium">
                    <span className={isDark ? 'text-emerald-400 font-bold' : 'text-[#2d6e4e] font-bold'}>
                      ↑ 8%
                    </span>{' '}
                    <span className={isDark ? 'text-slate-400' : 'text-[#6c786f]'}>
                      vs last month
                    </span>
                  </p>
                </div>
              </div>
              <div className="self-end -mb-1">
                <MiniSparkline color="green" id={`kpi1-${theme}`} />
              </div>
            </div>

            {/* KPI 2: Overdue Amount */}
            <div
              className={`rounded-2xl p-4 border transition-all flex items-center justify-between ${
                isDark
                  ? 'bg-gradient-to-br from-[#291f1b] to-[#1b1818] border-orange-800/40'
                  : 'bg-[#faefe6] border-[#f2e0d0]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isDark
                      ? 'bg-orange-500/20 text-orange-300'
                      : 'bg-[#f4decb] text-[#d4713b]'
                  }`}
                >
                  <Clock size={19} />
                </div>
                <div>
                  <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-[#425247]'}`}>
                    Overdue Amount
                  </p>
                  <h2
                    className={`text-2xl font-extrabold tracking-tight mt-0.5 ${
                      isDark ? 'text-white' : 'text-[#1e2d24]'
                    }`}
                  >
                    ₹6.1L
                  </h2>
                  <p className="text-[11px] mt-1 font-medium">
                    <span className={isDark ? 'text-orange-400 font-bold' : 'text-[#c94a38] font-bold'}>
                      ↑ 12%
                    </span>{' '}
                    <span className={isDark ? 'text-slate-400' : 'text-[#6c786f]'}>
                      vs last month
                    </span>
                  </p>
                </div>
              </div>
              <div className="self-end -mb-1">
                <MiniSparkline color="orange" id={`kpi2-${theme}`} />
              </div>
            </div>

            {/* KPI 3: Recovered This Month */}
            <div
              className={`rounded-2xl p-4 border transition-all flex items-center justify-between ${
                isDark
                  ? 'bg-gradient-to-br from-[#162722] to-[#131e1d] border-emerald-800/40'
                  : 'bg-[#eef4ed] border-[#dfeae0]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isDark ? 'bg-emerald-500/20' : 'bg-[#d7e6d7]'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-emerald-400 text-slate-950' : 'bg-[#3b7254] text-white'
                    }`}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-[#425247]'}`}>
                    Recovered This Month
                  </p>
                  <h2
                    className={`text-2xl font-extrabold tracking-tight mt-0.5 ${
                      isDark ? 'text-white' : 'text-[#1e2d24]'
                    }`}
                  >
                    ₹4.2L
                  </h2>
                  <p className="text-[11px] mt-1 font-medium">
                    <span className={isDark ? 'text-emerald-400 font-bold' : 'text-[#2d6e4e] font-bold'}>
                      ↑ 15%
                    </span>{' '}
                    <span className={isDark ? 'text-slate-400' : 'text-[#6c786f]'}>
                      vs last month
                    </span>
                  </p>
                </div>
              </div>
              <div className="self-end -mb-1">
                <MiniSparkline color="mint" id={`kpi3-${theme}`} />
              </div>
            </div>

            {/* KPI 4: Pending Disputes */}
            <div
              className={`rounded-2xl p-4 border transition-all flex items-center justify-between ${
                isDark
                  ? 'bg-gradient-to-br from-[#1c1f30] to-[#151824] border-indigo-800/40'
                  : 'bg-[#f0f0f8] border-[#e2e3f2]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isDark
                      ? 'bg-indigo-500/20 text-indigo-300'
                      : 'bg-[#e0e2f2] text-[#535ca8]'
                  }`}
                >
                  <Scale size={19} />
                </div>
                <div>
                  <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-[#425247]'}`}>
                    Pending Disputes
                  </p>
                  <h2
                    className={`text-2xl font-extrabold tracking-tight mt-0.5 ${
                      isDark ? 'text-white' : 'text-[#1e2d24]'
                    }`}
                  >
                    12
                  </h2>
                  <p className="text-[11px] mt-1 font-medium">
                    <span className={isDark ? 'text-indigo-400 font-bold' : 'text-[#4d58a6] font-bold'}>
                      ↓ 2%
                    </span>{' '}
                    <span className={isDark ? 'text-slate-400' : 'text-[#6c786f]'}>
                      vs last month
                    </span>
                  </p>
                </div>
              </div>
              <div className="self-end -mb-1">
                <MiniSparkline color="purple" id={`kpi4-${theme}`} />
              </div>
            </div>
          </div>

          {/* ==========================================
              5. ROW 2: MIDDLE 3-COLUMN SECTION
              (Recovery Progress | You're on track! | Today's Priorities)
          ========================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
            {/* Left Card (6 cols): Recovery Progress */}
            <div
              className={`lg:col-span-6 rounded-2xl p-5 border flex flex-col justify-between ${
                isDark
                  ? 'bg-[#141f22] border-slate-800'
                  : 'bg-white border-[#ece8df] shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BarChart2
                    size={18}
                    className={isDark ? 'text-emerald-400' : 'text-[#2d5a40]'}
                  />
                  <h3 className={`text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#1e2d24]'}`}>
                    Recovery Progress
                  </h3>
                </div>

                {/* Dropdown Pill */}
                <div className="relative">
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className={`appearance-none text-xs font-medium pl-3 pr-7 py-1.5 rounded-lg border outline-none cursor-pointer ${
                      isDark
                        ? 'bg-[#1b292d] border-slate-700 text-slate-200'
                        : 'bg-[#f7f6f2] border-[#e5e2d9] text-[#425247]'
                    }`}
                  >
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>This Quarter</option>
                  </select>
                  <ChevronDown
                    size={13}
                    className={`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                <CircularGauge percentage={68} isDark={isDark} />
                <RecoveryLineChart isDark={isDark} timeframe={timeframe} />
              </div>
            </div>

            {/* Middle Card (3 cols): "You're on track!" with Sitting Cat */}
            <div
              className={`lg:col-span-3 rounded-2xl p-5 pb-0 border flex flex-col justify-between overflow-hidden ${
                isDark
                  ? 'bg-gradient-to-b from-[#262019] to-[#1e1915] border-amber-800/30'
                  : 'bg-[#fdf3e3] border-[#f4e3c8]'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CuteStarIcon />
                  <h3 className={`text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#1e2d24]'}`}>
                    You're on track!
                  </h3>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-[#4a453d]'
                  }`}
                >
                  Keep going, you've recovered{' '}
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-[#1e2d24]'}`}>
                    ₹1.2L
                  </span>{' '}
                  more than last month.
                </p>
              </div>

              <div className="mt-1 -mx-5">
                <SittingTrackCatIllustration isDark={isDark} />
              </div>
            </div>

            {/* Right Card (3 cols): "Today's Priorities" */}
            <div
              className={`lg:col-span-3 rounded-2xl p-5 border flex flex-col justify-between ${
                isDark
                  ? 'bg-[#141f22] border-slate-800'
                  : 'bg-white border-[#ece8df] shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CalendarCheck
                    size={17}
                    className={isDark ? 'text-slate-300' : 'text-[#2b3b30]'}
                  />
                  <h3 className={`text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#1e2d24]'}`}>
                    Today's Priorities
                  </h3>
                </div>

                {/* Interactive Checklist */}
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          task.completed
                            ? isDark
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-[#3b7254] text-white'
                            : isDark
                            ? 'border-2 border-slate-600 group-hover:border-emerald-400'
                            : 'border-2 border-[#d0d5ce] group-hover:border-[#3b7254]'
                        }`}
                      >
                        {task.completed && <Check size={12} strokeWidth={3} />}
                      </div>
                      <span
                        className={`text-[13px] leading-snug transition-colors ${
                          task.completed
                            ? isDark
                              ? 'text-slate-100 font-medium'
                              : 'text-[#1e2d24] font-medium'
                            : isDark
                            ? 'text-slate-300'
                            : 'text-[#37453b]'
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all cursor-pointer shadow-xs ${
                    isDark
                      ? 'bg-[#387556] hover:bg-[#438a66]'
                      : 'bg-[#4f775e] hover:bg-[#40634d]'
                  }`}
                >
                  <span>View All Tasks</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* ==========================================
              6. ROW 3: BOTTOM 3-COLUMN SECTION
              (Recent Activity | Upcoming | A little progress goes a long way!)
          ========================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Card (4 cols): Recent Activity */}
            <div
              className={`lg:col-span-4 rounded-2xl p-5 border flex flex-col justify-between ${
                isDark
                  ? 'bg-[#141f22] border-slate-800'
                  : 'bg-white border-[#ece8df] shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-[#e69249] fill-[#e69249]" />
                    <h3 className={`text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#1e2d24]'}`}>
                      Recent Activity
                    </h3>
                  </div>
                  <button
                    className={`text-xs font-medium flex items-center gap-1 hover:underline cursor-pointer ${
                      isDark ? 'text-slate-400' : 'text-[#526056]'
                    }`}
                  >
                    See all <ArrowRight size={12} />
                  </button>
                </div>

                {/* Activity Timeline with Left Vertical Line & Right Status Icons */}
                <div className="relative space-y-4">
                  <div
                    className={`absolute left-[5px] top-2 bottom-4 w-[1.5px] ${
                      isDark ? 'bg-slate-800' : 'bg-[#e6e4dc]'
                    }`}
                  />

                  {/* Item 1 */}
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <span className="w-3 h-3 rounded-full bg-[#468262] shrink-0 mt-1 ring-4 ring-white dark:ring-[#141f22]" />
                      <div>
                        <p
                          className={`text-[13px] font-bold leading-snug ${
                            isDark ? 'text-slate-100' : 'text-[#1e2d24]'
                          }`}
                        >
                          Payment received: ₹75,000
                        </p>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-[#6c786f]'}`}>
                          2 hours ago • Case #CF-1024
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isDark
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'bg-[#ebf2ea] text-[#3b7254]'
                      }`}
                    >
                      <CreditCard size={16} />
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <span className="w-3 h-3 rounded-full bg-[#759e85] shrink-0 mt-1 ring-4 ring-white dark:ring-[#141f22]" />
                      <div>
                        <p
                          className={`text-[13px] font-bold leading-snug ${
                            isDark ? 'text-slate-100' : 'text-[#1e2d24]'
                          }`}
                        >
                          Promise to pay received
                        </p>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-[#6c786f]'}`}>
                          3 hours ago • Case #CF-1019
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isDark
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'bg-[#ebf2ea] text-[#3b7254]'
                      }`}
                    >
                      <HeartHandshake size={16} />
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <span className="w-3 h-3 rounded-full bg-[#df6c4f] shrink-0 mt-1 ring-4 ring-white dark:ring-[#141f22]" />
                      <div>
                        <p
                          className={`text-[13px] font-bold leading-snug ${
                            isDark ? 'text-slate-100' : 'text-[#1e2d24]'
                          }`}
                        >
                          New dispute raised
                        </p>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-[#6c786f]'}`}>
                          4 hours ago • Invoice #INV-8842
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isDark
                          ? 'bg-orange-500/15 text-orange-300'
                          : 'bg-[#faefe6] text-[#cf5c40]'
                      }`}
                    >
                      <AlertCircle size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Card (4 cols): Upcoming Follow-ups */}
            <div
              className={`lg:col-span-4 rounded-2xl p-5 border flex flex-col justify-between ${
                isDark
                  ? 'bg-[#141f22] border-slate-800'
                  : 'bg-white border-[#ece8df] shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className={isDark ? 'text-slate-300' : 'text-[#1e2d24]'} />
                    <h3 className={`text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#1e2d24]'}`}>
                      Upcoming Follow-ups
                    </h3>
                  </div>
                  <button
                    className={`text-xs font-medium flex items-center gap-1 hover:underline cursor-pointer ${
                      isDark ? 'text-slate-400' : 'text-[#526056]'
                    }`}
                  >
                    See all <ArrowRight size={12} />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Upcoming 1 */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 ${
                        isDark ? 'bg-[#1d2b2f] text-slate-200' : 'bg-[#f3f1ec] text-[#1e2d24]'
                      }`}
                    >
                      <span className="text-[10px] font-medium text-slate-400 leading-none">
                        Nov
                      </span>
                      <span className="text-sm font-extrabold leading-tight mt-0.5">5</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[13px] font-bold truncate ${
                          isDark ? 'text-slate-100' : 'text-[#1e2d24]'
                        }`}
                      >
                        Follow-up call with ABC Corp
                      </p>
                      <div className="mt-1">
                        <span
                          className={`inline-block text-[11px] px-2.5 py-0.5 rounded-md font-semibold ${
                            isDark
                              ? 'bg-rose-500/20 text-rose-300'
                              : 'bg-[#f9e3e1] text-[#8c3b32]'
                          }`}
                        >
                          10:00 AM • <span className="font-bold">High Priority</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming 2 */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 ${
                        isDark ? 'bg-[#1d2b2f] text-slate-200' : 'bg-[#f3f1ec] text-[#1e2d24]'
                      }`}
                    >
                      <span className="text-[10px] font-medium text-slate-400 leading-none">
                        Nov
                      </span>
                      <span className="text-sm font-extrabold leading-tight mt-0.5">5</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[13px] font-bold truncate ${
                          isDark ? 'text-slate-100' : 'text-[#1e2d24]'
                        }`}
                      >
                        Due: Promise Payment
                      </p>
                      <div className="mt-1">
                        <span
                          className={`inline-block text-[11px] px-2.5 py-0.5 rounded-md font-medium ${
                            isDark
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-[#f6ede0] text-[#6b5a45]'
                          }`}
                        >
                          EOD • Case #CF-1019
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming 3 */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 ${
                        isDark ? 'bg-[#1d2b2f] text-slate-200' : 'bg-[#f3f1ec] text-[#1e2d24]'
                      }`}
                    >
                      <span className="text-[10px] font-medium text-slate-400 leading-none">
                        Nov
                      </span>
                      <span className="text-sm font-extrabold leading-tight mt-0.5">6</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[13px] font-bold truncate ${
                          isDark ? 'text-slate-100' : 'text-[#1e2d24]'
                        }`}
                      >
                        Review disputed invoice
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#6c786f]'}`}>
                          11:00 AM •
                        </span>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-md font-semibold ${
                            isDark
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-[#e3efe4] text-[#2d6e4e]'
                          }`}
                        >
                          Medium
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card (4 cols): "A little progress goes a long way!" */}
            <div
              className={`lg:col-span-4 rounded-2xl p-5 border flex flex-col justify-between overflow-hidden ${
                isDark
                  ? 'bg-[#162620] border-emerald-900/40'
                  : 'bg-[#e3ece0] border-[#d5e2d1]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="z-10">
                  <h3
                    className={`text-base sm:text-[17px] font-extrabold leading-snug ${
                      isDark ? 'text-white' : 'text-[#1e2d24]'
                    }`}
                  >
                    A little progress
                    <br />
                    goes a long way!
                  </h3>
                  <p
                    className={`text-xs mt-3 leading-relaxed font-medium ${
                      isDark ? 'text-slate-300' : 'text-[#3c4d41]'
                    }`}
                  >
                    You've completed{' '}
                    <span className="font-bold">{weeklyCompletedCount}</span> of
                    <br />
                    {weeklyTotalCount} tasks this week.
                  </p>
                </div>

                {/* Sleeping Puppy & Tiny Kitten/Hamster Buddy SVG */}
                <div className="-mr-3 -mt-1">
                  <SleepingPuppyAndBuddy />
                </div>
              </div>

              {/* Bottom Smooth Progress Bar */}
              <div className="mt-4 pt-1">
                <div
                  className={`w-full h-3.5 rounded-full overflow-hidden p-0.5 ${
                    isDark ? 'bg-[#0e1915]' : 'bg-[#f4f7f2]'
                  }`}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-[#4b785c] to-[#689678]"
                    style={{ width: `${weeklyProgressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// ==========================================
// MAIN APP ENTRY (Single Screen with Light/Dark Toggle)
// ==========================================

export default function App() {
  const [preference, setPreference] = useState(() => {
    try {
      return localStorage.getItem('collectflow-dashboard-theme') || 'light';
    } catch {
      return 'light';
    }
  });
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let active = true;

    const verifySession = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.user || data.user.account_type !== 'creditor') {
          if (active) {
            window.location.assign('http://127.0.0.1:5173');
          }
          return;
        }

        if (active) {
          setIsAuthorized(true);
        }
      } catch (error) {
        if (active) {
          window.location.assign('http://127.0.0.1:5173');
        }
      } finally {
        if (active) {
          setIsChecking(false);
        }
      }
    };

    verifySession();
    return () => {
      active = false;
    };
  }, []);

  if (isChecking) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#f5f5fb] text-slate-700">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />
          <p className="text-sm font-semibold tracking-[0.14em] text-slate-500 uppercase">Loading dashboard</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 p-2 sm:p-4 md:p-6 flex items-center justify-center ${
        theme === 'dark' ? 'bg-[#070c0e]' : 'bg-[#ece8de]'
      }`}
    >
      <div className="w-full max-w-[1420px]">
        <CollectFlowBoard theme={theme} onToggleTheme={setTheme} />
      </div>
    </div>
  );
}