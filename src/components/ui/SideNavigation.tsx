import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: '01 HERO' },
  { id: 'statement', label: '02 STATEMENT' },
  { id: '3d-explorer', label: '03 3D EXPLORER' },
  { id: 'research', label: '04 RESEARCH' },
  { id: 'publications', label: '05 PUBLICATIONS' },
  { id: 'articles', label: '06 ARTICLES' },
  { id: 'people', label: '07 PEOPLE' },
  { id: 'lab', label: '08 ENVIRONMENT' },
  { id: 'join', label: '09 COLLABORATE' },
];

export const SideNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;
      const percent = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setScrollPercent(Math.round(percent));

      // Find section currently in view
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.1) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 font-mono text-[10px] select-none">
      {/* Scroll Progress percentage indicator */}
      <div className="text-[var(--color-ink-muted)] font-semibold mb-2">
        REF. {scrollPercent.toString().padStart(2, '0')}%
      </div>

      <div className="flex flex-col gap-2 relative">
        {/* Thin vertical progress line */}
        <div className="absolute right-[5px] top-0 bottom-0 w-[1px] bg-[var(--color-ink-border)] -z-10" />

        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`group flex items-center gap-3 transition-all duration-300 ${
                isActive ? 'text-[var(--color-accent)] font-bold translate-x-0' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink-primary)]'
              }`}
            >
              <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 uppercase tracking-widest ${isActive ? '!opacity-100' : ''}`}>
                {sec.label}
              </span>
              <div
                className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--color-accent)] border-[var(--color-accent)] scale-125'
                    : 'bg-[#F3F0E8] border-[var(--color-ink-muted)] group-hover:border-[var(--color-ink-primary)]'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
