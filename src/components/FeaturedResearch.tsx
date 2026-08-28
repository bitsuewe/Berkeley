import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCms } from '../context/CmsContext';

export const FeaturedResearch: React.FC = () => {
  const { setSelectedPublication, publications, setCurrentView } = useCms();

  const pubItems = publications.slice(0, 3);

  return (
    <section id="featured-research" className="py-20 sm:py-24 bg-[#001f28] text-white select-none border-b border-[#003847]">
      <div className="max-w-[1280px] w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column (1/3 width / 4 cols) matching screenshot */}
        <div className="lg:col-span-4 space-y-6">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#77d5dc]">
            PUBLICATIONS
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Recent publications and peer-reviewed scholarship.
          </h2>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            A selection of recent works advancing research in hominin paleobiology, African prehistoric archaeology, radiometric dating, and Pleistocene cultural adaptations.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentView('all-publications');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-[#77d5dc] hover:text-white font-bold text-sm transition-colors cursor-pointer group"
            >
              <span>View all publications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column (2/3 width / 8 cols) - 3 Dark Cards Grid matching screenshot */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pubItems.map((pub, idx) => (
            <div
              key={pub.id || idx}
              onClick={() => setSelectedPublication(pub)}
              className="bg-[#002b36] rounded-xl border border-[#007681]/40 hover:border-[#77d5dc] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group shadow-lg"
            >
              {/* Thumbnail */}
              <div className="h-40 overflow-hidden bg-[#001720] relative">
                <img
                  src={pub.heroImage || 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'}
                  alt={pub.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>

              {/* Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-[#77d5dc] uppercase tracking-wider">
                    {pub.year} | {pub.journal || 'JOURNAL ARTICLE'}
                  </div>
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-white group-hover:text-[#77d5dc] transition-colors leading-snug line-clamp-3">
                    {pub.title}
                  </h3>
                  <div className="text-white/60 text-xs font-light line-clamp-1 pt-1">
                    {pub.authors}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-[#77d5dc] group-hover:text-white">
                  <span>Read publication</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

