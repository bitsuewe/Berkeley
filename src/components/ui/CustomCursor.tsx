import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('[data-cursor], a, button, input, [role="button"]');
      if (interactiveEl) {
        setIsHovered(true);
        const customLabel = interactiveEl.getAttribute('data-cursor');
        if (customLabel) {
          setCursorLabel(customLabel);
        } else if (interactiveEl.tagName === 'A' || interactiveEl.getAttribute('role') === 'button') {
          setCursorLabel('READ');
        } else if (interactiveEl.tagName === 'BUTTON') {
          setCursorLabel('EXECUTE');
        } else {
          setCursorLabel('');
        }
      } else {
        setIsHovered(false);
        setCursorLabel('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] hidden lg:block overflow-hidden">
      {/* Central Point */}
      <div
        className="fixed w-2 h-2 bg-[var(--color-accent)] rounded-full transition-transform duration-75 ease-out shadow-studio-sm"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isClicking ? 0.5 : isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Reticle Circle Badge */}
      <div
        className="fixed top-0 left-0 border border-[var(--color-accent)] rounded-full flex items-center justify-center transition-all duration-200 ease-out backdrop-blur-sm"
        style={{
          width: isHovered ? (cursorLabel ? '76px' : '40px') : '24px',
          height: isHovered ? (cursorLabel ? '76px' : '40px') : '24px',
          transform: `translate3d(${position.x - (isHovered ? (cursorLabel ? 38 : 20) : 12)}px, ${position.y - (isHovered ? (cursorLabel ? 38 : 20) : 12)}px, 0) scale(${isClicking ? 0.9 : 1})`,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          boxShadow: isHovered ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        {cursorLabel && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-[var(--color-accent)] uppercase">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
};
