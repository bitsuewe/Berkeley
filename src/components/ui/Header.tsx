import React, { useState, useEffect } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import type { AccentTheme } from '../../types/lab';
import { Volume2, VolumeX, Settings, BookOpen, Terminal } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Header: React.FC = () => {
  const { accentTheme, setAccentTheme, setAdminOpen, setBibtexImportOpen } = useCms();
  const { soundEnabled, toggleSound, playClick } = useSound();
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [systemTime, setSystemTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const themeOptions: { key: AccentTheme; label: string; color: string }[] = [
    { key: 'orange', label: 'Terracotta Red', color: '#D9381E' },
    { key: 'cobalt', label: 'Electric Cobalt', color: '#1D4ED8' },
    { key: 'green', label: 'Emerald Green', color: '#059669' },
    { key: 'cyan', label: 'Deep Cyan', color: '#0284C7' },
    { key: 'vermilion', label: 'Dark Violet', color: '#7C3AED' },
  ];

  const dockLinks = [
    { href: '#hero', label: '01/Top' },
    { href: '#statement', label: '02/Manifesto' },
    { href: '#research', label: '03/Programs' },
    { href: '#publications', label: '04/Papers' },
    { href: '#articles', label: '05/Dispatches' },
    { href: '#people', label: '06/Team' },
    { href: '#join', label: '07/Apply' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playClick();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Main Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 font-mono"
            data-cursor="NEXUS"
          >
            <div className="w-8 h-8 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-lg font-bold group-hover:scale-105 transition-transform shadow-studio-sm">
              N
            </div>
            <div>
              <div className="font-bold tracking-wider text-xs text-[#1A1A1A] flex items-center gap-2">
                NEXUS // RESEARCH OS
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] font-semibold border border-[var(--color-accent-glow)]">
                  v3.0 LIVE
                </span>
              </div>
              <div className="text-[9px] text-[#75736E] tracking-widest uppercase">
                UTC: {systemTime || 'LIVE'}
              </div>
            </div>
          </a>

          {/* Quick Actions & OS Controls */}
          <div className="flex items-center gap-3">
            {/* BibTeX Quick Import Trigger */}
            <button
              onClick={() => { playClick(); setBibtexImportOpen(true); }}
              className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-xl border border-[#E8E4DD] bg-white text-[#1A1A1A] hover:border-[var(--color-accent)] transition-all shadow-studio-sm"
              data-cursor="IMPORT"
              title="Import Publications via BibTeX"
            >
              <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>BibTeX</span>
            </button>

            {/* Accent Theme Color Selector */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 rounded-xl border border-[#E8E4DD] bg-white text-[#1A1A1A] hover:border-[var(--color-accent)] transition-all shadow-studio-sm"
                data-cursor="THEME"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: themeOptions.find(t => t.key === accentTheme)?.color || '#D9381E' }}
                />
                <span className="capitalize hidden sm:inline">{accentTheme}</span>
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-[#E8E4DD] shadow-studio-lg rounded-2xl p-1.5 z-50">
                  <div className="font-mono text-[9px] uppercase text-[#75736E] px-2.5 py-1 border-b border-[#F0ECE4]">
                    Studio Palette
                  </div>
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setAccentTheme(opt.key);
                        setThemeDropdownOpen(false);
                        playClick();
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono rounded-xl text-left transition-colors ${
                        accentTheme === opt.key ? 'bg-[var(--color-accent-light)] font-bold text-[var(--color-accent)]' : 'hover:bg-[#FAF8F5] text-[#1A1A1A]'
                      }`}
                    >
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: opt.color }} />
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border transition-all ${
                soundEnabled
                  ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-studio-sm'
                  : 'bg-white text-[#75736E] border-[#E8E4DD] hover:border-[var(--color-accent)]'
              }`}
              data-cursor={soundEnabled ? 'SOUND ON' : 'SOUND OFF'}
              title={soundEnabled ? 'Disable Audio FX' : 'Enable Scientific Audio FX'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 font-bold" /> : <VolumeX className="w-3.5 h-3.5 opacity-60" />}
            </button>

            {/* Admin CMS Terminal */}
            <MagneticButton
              variant="secondary"
              onClick={() => setAdminOpen(true)}
              className="!px-3 !py-1.5 text-[10px]"
              cursorLabel="CMS"
            >
              <Terminal className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="hidden sm:inline">CMS Admin</span>
            </MagneticButton>
          </div>

        </div>
      </header>

      {/* Floating Bottom Navigation Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-xl border border-[#E8E4DD] shadow-studio-lg rounded-full px-4 py-2 flex items-center gap-2 sm:gap-4 font-mono text-[10px] font-semibold text-[#75736E]">
        {dockLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="hover:text-[var(--color-accent)] transition-colors py-0.5"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};
