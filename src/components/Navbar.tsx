import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useSound } from '../context/SoundContext';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { playClick } = useSound();
  const [systemTime, setSystemTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Show header when scrolling up or at the very top of the page
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 80;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: '#research', label: 'Research' },
    { href: '#breakthroughs', label: 'Breakthroughs' },
    { href: '#services', label: 'Programs' },
    { href: '#people', label: 'Personnel' },
    { href: '#news', label: 'Dispatches' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playClick();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`h-[78px] sm:h-[84px] bg-[#00313c]/90 backdrop-blur-2xl border-b border-[#007681]/30 text-white sticky top-0 z-[1000] transition-transform duration-300 ease-in-out select-none shadow-[0_10px_30px_rgba(0,35,46,0.45)] ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1240px] w-[92%] mx-auto h-full flex items-center justify-between gap-6">
        
        {/* Minimalist Brand Logo & Scientific Identifier */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-3.5 group"
        >
          {/* Hex Geometric Lab Icon */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#007681] to-[#00232e] border border-[#77d5dc]/40 text-white flex items-center justify-center font-heading font-black text-base sm:text-lg shadow-md group-hover:scale-105 group-hover:border-[#77d5dc] transition-all">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-white via-[#77d5dc] to-white">
              UC
            </span>
          </div>

          <div className="flex flex-col">
            <div className="font-heading font-extrabold text-[14px] sm:text-base leading-none tracking-tight text-white flex items-center gap-2">
              <span>BERKELEY LAB</span>
              <span className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#007681]/30 text-[#77d5dc] font-bold border border-[#77d5dc]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DR. SEWASEW
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-white/55 tracking-wider uppercase mt-1">
              SYS STATUS: ACTIVE // {systemTime || 'LIVE UTC'}
            </div>
          </div>
        </a>

        {/* Clean Minimalist Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[0.88rem] font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/80 hover:text-[#77d5dc] transition-colors relative py-1.5 group flex items-center gap-1"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#77d5dc] to-[#007681] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Minimalist Right CTA Only */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-2 bg-[#007681] hover:bg-white hover:text-[#00313c] text-white px-5 py-2.5 rounded-xl transition-all font-bold text-xs uppercase tracking-wider shadow-md border border-[#77d5dc]/30 group cursor-pointer hover:shadow-lg"
          >
            <span>Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white hover:text-[#77d5dc] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#00232e] border-b border-[#007681]/40 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn backdrop-blur-2xl">
          <ul className="flex flex-col space-y-3 font-semibold text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block py-1.5 text-white/90 hover:text-[#77d5dc] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#77d5dc]">BERKELEY LAB // 2026</span>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-[#007681] text-white px-5 py-2 rounded-lg font-bold uppercase text-xs tracking-wider inline-flex items-center gap-1"
            >
              <span>Collaborate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
