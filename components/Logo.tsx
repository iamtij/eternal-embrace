import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon mimicking the interlocking 'E' loops from the logo */}
      <svg 
        viewBox="0 0 200 200" 
        className="h-full w-auto drop-shadow-sm" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <path 
          d="M100 20C60 20 20 60 20 100C20 140 60 180 100 180C140 180 180 140 180 100C180 60 140 20 100 20ZM100 160C65 160 35 130 35 95C35 60 65 30 100 30C135 30 165 60 165 95C165 130 135 160 100 160Z" 
          fill="url(#logo-grad)" 
          opacity="0.2"
        />
        <path 
          d="M85 50C60 50 40 75 40 100C40 125 60 150 85 150C100 150 115 140 125 125C135 140 150 150 165 150C190 150 210 125 210 100C210 75 190 50 165 50C150 50 135 60 125 75C115 60 100 50 85 50ZM85 65C105 65 120 85 120 100C120 115 105 135 85 135C65 135 55 115 55 100C55 85 65 65 85 65ZM165 65C185 65 195 85 195 100C195 115 185 135 165 135C145 135 130 115 130 100C130 85 145 65 165 65Z" 
          fill="url(#logo-grad)"
          transform="translate(-40, 0) scale(0.9)"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col -space-y-2">
          <span className="font-script text-3xl text-brand-green">Eternal</span>
          <span className="font-script text-3xl text-brand-blue ml-4">Embrace</span>
        </div>
      )}
    </div>
  );
};