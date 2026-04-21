import React from 'react';

interface LogoProps {
  className?: string;
  /** Kept for compatibility; the official logo is a single image with mark and wordmark. */
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-[3.3rem]' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Eternal Embrace"
        className="h-full w-auto max-w-full object-contain object-left"
        decoding="async"
      />
    </div>
  );
};
