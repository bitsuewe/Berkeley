import React from 'react';

interface BerkeleyLabLogoProps {
  variant?: 'default' | 'reverse' | 'positive';
  showTagline?: boolean;
  showLogotype?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BerkeleyLabLogo: React.FC<BerkeleyLabLogoProps> = ({
  variant = 'reverse',
  showTagline = true,
  showLogotype = true,
  className = '',
  size = 'md',
}) => {
  // Brand Guidelines Color Codes (Page 12):
  // Dark Blue: #00313C
  // Teal: #007681
  // Reverse: #FFFFFF
  const isReverse = variant === 'reverse';
  const tileFill = isReverse ? '#00313C' : '#00313C';
  const symbolColor = isReverse ? '#FFFFFF' : '#007681';
  const textColor = isReverse ? '#FFFFFF' : '#00313C';

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official ALS Dome + Campanile Symbol Tile */}
      <div className={`relative flex items-center shrink-0 ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 160 120"
          className="h-full w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tile Background */}
          <rect width="160" height="120" rx="8" fill={tileFill} />

          {/* ALS Dome Curve & Ribs */}
          <path
            d="M 22 72 Q 62 38 102 72"
            stroke={symbolColor}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 62 39 L 62 48"
            stroke={symbolColor}
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* ALS Windows Array */}
          <g stroke={symbolColor} strokeWidth="5" strokeLinecap="round">
            <line x1="34" y1="67" x2="34" y2="73" />
            <line x1="46" y1="67" x2="46" y2="73" />
            <line x1="58" y1="67" x2="58" y2="73" />
            <line x1="70" y1="67" x2="70" y2="73" />
            <line x1="82" y1="67" x2="82" y2="73" />
            <line x1="94" y1="67" x2="94" y2="73" />
          </g>

          {/* Campanile Tower */}
          <rect x="114" y="38" width="22" height="66" fill={symbolColor} rx="1" />
          {/* Campanile Pyramid Roof */}
          <path d="M 112 38 L 125 20 L 138 38 Z" fill={symbolColor} />
          {/* Campanile Belfry Windows */}
          <rect x="119" y="46" width="4" height="14" fill={tileFill} rx="1" />
          <rect x="127" y="46" width="4" height="14" fill={tileFill} rx="1" />
        </svg>

        {/* Logotype & Tagline */}
        {showLogotype && (
          <div className="flex flex-col justify-center ml-2.5">
            <div
              className="font-heading font-black tracking-tight uppercase leading-none"
              style={{ color: textColor, fontSize: size === 'sm' ? '1rem' : size === 'lg' ? '1.5rem' : '1.25rem' }}
            >
              BERKELEY LAB
            </div>
            {showTagline && (
              <div
                className="font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase mt-1 opacity-90"
                style={{ color: isReverse ? '#77d5dc' : '#007681' }}
              >
                Bringing Science Solutions to the World
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
