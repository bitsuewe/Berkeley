import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { BerkeleyLabLogo } from './BerkeleyLabLogo';
import { useCms } from '../context/CmsContext';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { currentView, setCurrentView, setSearchModalOpen } = useCms();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top
      if (currentScrollY < 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        // Scrolling DOWN -> hide header
        setVisible(false);
        setMobileOpen(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 8) {
        // Scrolling UP -> show header
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Research', view: 'all-research' as const, hash: '#research' },
    { label: 'Publications', view: 'all-publications' as const, hash: '#featured-research' },
    { label: 'News', view: 'all-news' as const, hash: '#news' },
    { label: 'People', view: 'all-people' as const, hash: '#people' },
    { label: 'About', view: 'home' as const, hash: '#about' },
  ];

  const handleNavClick = (view: 'all-research' | 'all-publications' | 'all-news' | 'all-people' | 'home', hash: string) => {
    setMobileOpen(false);
    if (view !== 'home') {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`h-[84px] bg-white border-b border-slate-100 text-[#153358] sticky top-0 z-[1000] select-none shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-in-out ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-[1380px] w-[94%] sm:w-[95%] mx-auto h-full flex items-center justify-between gap-3 sm:gap-4">

        {/* Brand Logo with Berkeley Lab Logo Symbol (Left) */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group cursor-pointer"
        >
          {/* Berkeley Lab Logo: Restored on tablet and desktop (md+) screens */}
          <div className="hidden sm:flex items-center shrink-0">
            <BerkeleyLabLogo variant="default" showTagline={false} size="sm" />
          </div>

          {/* Typography + Restored Always-Visible Tagline/Motto */}
          <div className="flex flex-col justify-center sm:border-l sm:border-slate-200 sm:pl-3">
            <span className="font-heading font-extrabold text-[0.88rem] sm:text-[1.02rem] md:text-[1.12rem] text-[#153358] tracking-tight uppercase leading-none group-hover:text-[#007681] transition-colors">
              SEWASEW HAILESELASSIE
            </span>
            <span className="text-[9.5px] sm:text-[10.5px] md:text-[11.5px] font-sans text-[#2c4e78] font-medium tracking-normal mt-1 leading-none">
              African Archaeology, History &amp; Human Evolution
            </span>
          </div>
        </div>

        {/* Navigation Links (Middle/Right) */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 shrink-0">
          
          {/* Nav Links: Visible on Desktop & Tablet (>=768px) outside hamburger menu */}
          <nav className="hidden md:flex items-center gap-2.5 lg:gap-6 xl:gap-8 text-[0.82rem] lg:text-[0.94rem] xl:text-[0.98rem] font-semibold text-[#153358]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.view, link.hash)}
                className={`py-1 px-1 relative font-sans whitespace-nowrap cursor-pointer transition-colors ${
                  currentView === link.view && link.view !== 'home'
                    ? 'text-[#007681] font-bold'
                    : 'text-[#153358] hover:text-[#007681]'
                }`}
              >
                <span>{link.label}</span>
                {currentView === link.view && link.view !== 'home' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#007681] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Button: Visible on Desktop & Tablet (>=768px) outside hamburger menu */}
          <button
            onClick={() => handleNavClick('home', '#contact')}
            className="hidden md:inline-flex items-center justify-center bg-[#091f3c] hover:bg-[#153358] text-white px-3.5 lg:px-6 py-1.5 lg:py-2.5 rounded-[6px] font-semibold text-xs lg:text-[0.92rem] transition-all cursor-pointer shadow-sm whitespace-nowrap"
          >
            Contact
          </button>

          {/* Search Icon Button */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="text-[#153358] hover:text-[#007681] p-1.5 sm:p-2 transition-colors cursor-pointer hover:bg-slate-100 rounded-full"
            aria-label="Search"
            title="Search database (Ctrl+K)"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Mobile Toggle Button (Visible only on small screens <768px) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#153358] p-1.5 rounded-md hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown (Visible only on small screens <768px) */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 sm:px-6 py-5 space-y-3 font-bold text-sm text-[#153358] shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.view, link.hash)}
              className="block w-full text-left py-2.5 border-b border-slate-100 hover:text-[#007681] transition-colors"
            >
              {link.label}
            </button>
          ))}
          
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                setSearchModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 border border-slate-200 text-slate-700 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Search Database</span>
            </button>

            <button
              onClick={() => handleNavClick('home', '#contact')}
              className="w-full inline-flex items-center justify-center bg-[#091f3c] text-white py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer hover:bg-[#153358] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};





