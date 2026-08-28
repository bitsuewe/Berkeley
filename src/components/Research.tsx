import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCms } from '../context/CmsContext';

interface ResearchItem {
  id: string;
  title: string;
  description: string;
  image: string;
  areaId: string;
}

const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: 'res-paleoanthropology',
    title: 'Hominin Origins & Paleoanthropology',
    description: 'Field expeditions and 3D micro-tomography investigating early Pliocene and Pleistocene hominin morphological evolution across the East African Rift.',
    image: '/images/research/fossil-skull.jpg',
    areaId: 'res-paleoanthropology',
  },
  {
    id: 'res-lithic',
    title: 'Lithic Technology & Cognitive Evolution',
    description: 'Micro-wear traceology and experimental knapping reconstructing the emergence of Oldowan and Acheulean toolmaking traditions.',
    image: '/images/research/stone-tools.jpg',
    areaId: 'res-lithic',
  },
  {
    id: 'res-paleoenvironment',
    title: 'Paleoenvironmental Biogeochemistry',
    description: 'Stable isotope analysis of fossil tooth enamel and paleosols reconstructing hominin dietary shifts and savannah biome expansion.',
    image: '/images/research/savannah-environment.jpg',
    areaId: 'res-paleoenvironment',
  },
];

export const Research: React.FC = () => {
  const { researchAreas, setSelectedResearchArea, setCurrentView } = useCms();

  const handleExplore = (areaId: string) => {
    const found = researchAreas.find((a) => a.id === areaId) || researchAreas[0];
    if (found) setSelectedResearchArea(found);
  };

  return (
    <section id="research" className="py-20 sm:py-24 bg-[#FAF8F5] text-[#00232e] border-b border-[#e3e8e9] select-none">
      <div className="max-w-[1280px] w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column (1/3 width / 4 cols) matching screenshot */}
        <div className="lg:col-span-4 space-y-6">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#007681]">
            OUR RESEARCH
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#00232e] leading-tight">
            Integrated research on human origins, African archaeology, and deep-time environments.
          </h2>

          <p className="text-[#63666a] text-sm sm:text-base leading-relaxed font-light">
            Our lab conducts multi-scalar field excavations, fossil biomechanics, and isotopic biogeochemistry to reconstruct the evolutionary journey of humanity in the African continent.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentView('all-research');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-[#007681] hover:text-[#005a63] font-bold text-sm transition-colors cursor-pointer group"
            >
              <span>Explore all research</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column (2/3 width / 8 cols) - 3 Cards Grid matching screenshot */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleExplore(item.areaId)}
              className="bg-white rounded-xl border border-slate-200 hover:border-[#007681] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              {/* Card Thumbnail */}
              <div className="h-44 overflow-hidden bg-slate-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-base text-[#00232e] group-hover:text-[#007681] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#63666a] text-xs leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExplore(item.areaId);
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#007681] group-hover:text-[#005a63] cursor-pointer hover:underline"
                  >
                    <span>View research</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
;
