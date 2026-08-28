import React from 'react';

interface BerkeleyArchitecturalMarkProps {
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export const BerkeleyArchitecturalMark: React.FC<BerkeleyArchitecturalMarkProps> = ({
  className = 'w-full h-auto',
  strokeColor = 'white',
  strokeWidth = 10,
}) => {
  return (
    <svg
      viewBox="0 0 560 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMaxYMax meet"
    >
      {/* 1. Inverted V / Roof Cap above Dome */}
      <path
        d="M 152 90 L 195 62 L 238 90"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2. Main Dome Arch and building profile running to the ground */}
      <path
        d="M 40 162 C 78 118, 134 88, 195 88 C 258 88, 312 118, 344 162 L 368 184 H 410 V 380"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 3. Campanile / Sather Tower on the right extending to the bottom */}
      <path
        d="M 432 380 V 212 L 485 135 L 538 212 V 380"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 4. Two vertical window slits inside the tower */}
      <rect
        x="469"
        y="260"
        width="11"
        height="48"
        rx="2"
        fill={strokeColor}
      />
      <rect
        x="491"
        y="260"
        width="11"
        height="48"
        rx="2"
        fill={strokeColor}
      />
    </svg>
  );
};
