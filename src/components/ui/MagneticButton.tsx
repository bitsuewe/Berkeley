import React, { useRef, useState } from 'react';
import { useSound } from '../../context/SoundContext';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'paper' | 'ghost';
  cursorLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  cursorLabel,
  className = '',
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const { playClick, playTick } = useSound();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setOffset({ x: distanceX * 0.15, y: distanceY * 0.15 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    playTick();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClick();
    if (onClick) onClick(e);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[var(--color-accent)] text-white border border-[var(--color-accent)] font-bold hover:bg-[var(--color-accent-hover)] shadow-studio-sm hover:shadow-studio-md';
      case 'secondary':
        return 'bg-white text-[#1A1A1A] border border-[#E8E4DD] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] shadow-studio-sm';
      case 'paper':
        return 'bg-[#FAF8F5] text-[#1A1A1A] border border-[#E8E4DD] hover:border-[var(--color-accent)]';
      case 'ghost':
        return 'bg-transparent text-[#1A1A1A] hover:text-[var(--color-accent)]';
      default:
        return '';
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      data-cursor={cursorLabel}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
      }}
      className={`relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider rounded-xl px-5 py-2.5 transition-all active:scale-95 ${getVariantStyles()} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
