import React from 'react';
import { BerkeleyLabLogo } from './BerkeleyLabLogo';
import { useCms } from '../context/CmsContext';

export const Footer: React.FC = () => {
  const { setCurrentView } = useCms();

  const handleNav = (view: 'all-research' | 'all-publications' | 'all-news' | 'all-people' | 'home', hash?: string) => {
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
              className="flex items-center gap-3 cursor-pointer group"
            >
              <BerkeleyLabLogo variant="reverse" showTagline={false} size="sm" />
              <div className="flex flex-col border-l border-white/20 pl-3">
                <span className="font-heading font-extrabold text-sm text-white tracking-tight uppercase leading-none group-hover:text-[#77d5dc] transition-colors">
                  SEWASEW HAILESELASSIE
                </span>
                <span className="text-[10px] text-white/60 mt-1">
                  African Archaeology, History &amp; Human Evolution
                </span>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-sm font-light">
              Advancing research at the intersection of African archaeology, history, and human evolution.
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
                  Capabilities &amp; Facilities
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
            </ul>
          </div>

          {/* ABOUT Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#77d5dc]">
              ABOUT
            </div>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button
                  onClick={() => handleNav('home', '#about')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  About the Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-people')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Leadership (Dr. Sewasew)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-people')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  People &amp; Careers
                </button>
              </li>
            </ul>
          </div>

          {/* RESOURCES Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#77d5dc]">
              RESOURCES
            </div>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button
                  onClick={() => handleNav('all-publications')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Publications Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-news')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  News &amp; Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('all-news')}
                  className="hover:text-[#77d5dc] transition-colors cursor-pointer text-left"
                >
                  Events &amp; Symposia
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


