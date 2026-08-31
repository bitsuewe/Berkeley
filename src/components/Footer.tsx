import React from 'react';
import { BerkeleyLabLogo } from './BerkeleyLabLogo';
import { useCms } from '../context/CmsContext';

export const Footer: React.FC = () => {
  const { setCurrentView } = useCms();

  const handleNav = (view: 'all-research' | 'all-publications' | 'all-news' | 'all-people' | 'all-courses' | 'all-outreach' | 'home', hash?: string) => {
    setCurrentView(view);
    if (view === 'home' && hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001720] text-white py-16 border-t border-[#002d3a] select-none">
      <div className="max-w-[1280px] w-[92%] mx-auto space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) with Berkeley Lab Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div
              onClick={() => handleNav('home')}
              className="flex items-center gap-3.5 cursor-pointer group select-none"
            >
              <BerkeleyLabLogo variant="reverse" showTagline={false} showLogotype={false} size="sm" />
              <div className="flex flex-col border-l border-white/20 pl-3">
                <span className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight uppercase leading-none group-hover:text-[#77d5dc] transition-colors">
                  SEWASEW HAILESELASSIE
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/60 mt-1 leading-tight">
                  African Archaeology, History &amp; Human Evolution
                </span>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-sm font-light">
              Advancing groundbreaking research at the intersection of African archaeology, history, and human evolution.
            </p>
          </div>

          {/* RESEARCH Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#77d5dc]">
              RESEARCH
            </div>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button
                  onClick={() => handleNav('all-research')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Research Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-research')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Active Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-publications')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Publications
                </button>
              </li>
            </ul>
          </div>

          {/* EDUCATION & FIELD Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#77d5dc]">
              ACADEMICS
            </div>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button
                  onClick={() => handleNav('all-courses')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Courses &amp; Curriculum
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-courses')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Afar Field School
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-outreach')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Outreach Programs
                </button>
              </li>
            </ul>
          </div>

          {/* ABOUT & PEOPLE Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#77d5dc]">
              PEOPLE
            </div>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button
                  onClick={() => handleNav('home', '#about')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  About Dr. Sewasew
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-people')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Lab Members
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-news')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  News &amp; Events
                </button>
              </li>
            </ul>
          </div>

          {/* CONNECT Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#77d5dc]">
              CONNECT
            </div>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button
                  onClick={() => handleNav('home', '#contact')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home', '#contact')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Visit Campus
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Sewasew Laboratory. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};


