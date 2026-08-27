import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useSound } from '../context/SoundContext';
import { BerkeleyLabLogo } from './BerkeleyLabLogo';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { playClick } = useSound();
  const [systemTime, setSystemTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
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
    { href: '#people', label: 'People' },
    { href: '#services', label: 'Programs' },
    { href: '#featured-research', label: 'Publications' },
    { href: '#news', label: 'News' },
    { href: '#contact', label: 'Contact' },
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

        {/* Official Berkeley Lab Brand Logo & Dr. Sewasew Laboratory Badge */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-3.5 group"
        >
          {/* Official Berkeley Lab Tile & Logotype */}
          <BerkeleyLabLogo variant="reverse" showTagline={false} size="sm" />

          {/* Laboratory Identifier Badge */}
          <div className="hidden sm:flex flex-col border-l border-[#007681]/50 pl-3">
            <div className="flex items-center gap-1.5 text-xs font-mono font-black text-[#77d5dc]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DR. SEWASEW LAB</span>
            </div>
            <div className="text-[9px] font-mono text-white/60 tracking-widest uppercase">
              {systemTime || 'LIVE UTC'}
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
              className="text-white/80 hover:text-[#77d5dc] transition-colors relative py-1.5 group flex items-center gap-1 font-mono text-xs uppercase tracking-wider font-bold"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#77d5dc] to-[#007681] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#77d5dc] bg-[#00232e] hover:bg-[#77d5dc] text-[#77d5dc] hover:text-[#00232e] font-mono font-bold uppercase tracking-wider px-4 py-2 text-xs transition-all duration-200 cursor-pointer shadow-md group"
          >
            <span>Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => {
            playClick();
            setMobileOpen(!mobileOpen);
          }}
          className="md:hidden text-white/90 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#00232e] border-b border-[#007681]/40 px-6 py-6 space-y-4 font-mono text-sm uppercase font-bold text-white shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block py-2 border-b border-white/10 hover:text-[#77d5dc] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#007681] text-white py-3 font-bold"
            >
              <span>Collaborate With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
