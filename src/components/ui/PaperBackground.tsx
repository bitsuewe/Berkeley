import React from 'react';

export const PaperBackground: React.FC = () => {
  return (
    <>
      {/* Studio Background Surface */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-[#FAF8F5]"
        aria-hidden="true"
      />

      {/* Subtle Technical Grid Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-studio-grid opacity-60"
        aria-hidden="true"
      />

      {/* Subtle Warm Ambient Glow */}
      <div 
        className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none z-0 opacity-10"
        style={{ background: 'var(--color-accent)' }}
        aria-hidden="true"
      />
    </>
  );
};
