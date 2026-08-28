import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCms } from '../context/CmsContext';

export const AboutSection: React.FC = () => {
  const { setSelectedPerson, people } = useCms();
  const piPerson = people.find((p) => p.role === 'PI') || people[0];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FAF8F5] text-[#00232e] border-b border-[#e3e8e9] select-none">
      <div className="max-w-[1280px] w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column (Photo headshot matching screenshot) */}
        <div className="lg:col-span-4">
          <div className="aspect-[3/4] max-h-[500px] rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
            <img
              src={piPerson?.avatar || '/images/dr-sewasew.jpg'}
              alt="Dr. Sewasew - Principal Investigator"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column (Copy matching screenshot layout) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#007681]">
            ABOUT
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#00232e] leading-tight">
            Advancing knowledge through interdisciplinary research.
          </h2>

          <div className="space-y-1 pt-1">
            <h3 className="font-heading text-xl font-extrabold text-[#007681]">
              Dr. Sewasew Haileselassie
            </h3>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Principal Investigator &amp; Director // African Archaeology &amp; Human Evolution
            </div>
          </div>

          <p className="text-[#63666a] text-sm sm:text-base leading-relaxed font-light max-w-2xl">
            Dr. Sewasew Haileselassie leads interdisciplinary research bringing together field paleoanthropology, prehistoric African archaeology, isotope geochemistry, and high-resolution digital fossil forensics to reconstruct the dawn of our species and human cultural origins in the Horn of Africa.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setSelectedPerson(piPerson)}
              className="inline-flex items-center gap-2 text-[#007681] hover:text-[#005a63] font-bold text-sm transition-colors cursor-pointer group"
            >
              <span>View profile</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

