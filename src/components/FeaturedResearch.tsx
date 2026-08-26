import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCms } from '../context/CmsContext';

export const FeaturedResearch: React.FC = () => {
  const { setSelectedPublication, publications } = useCms();

  return (
    <section className="bg-[#00313c] text-white min-h-[600px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden" id="facilities">
      
      {/* Left Copy Panel (42% width approx / 5 cols) */}
      <div className="lg:col-span-5 flex items-center p-12 lg:p-20">
        <div className="max-w-lg space-y-6">
          <div className="text-[#77d5dc] uppercase font-bold text-xs tracking-wider">
            FEATURED RESEARCH BREAKTHROUGH
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight">
            Understanding energy materials to power tomorrow.
          </h2>

          <p className="text-white/80 text-base leading-relaxed font-light">
            Our researchers are investigating next-generation 2D quantum MoS2 heterostructures and energy materials with unprecedented performance for batteries, electro-catalysis, and room-temperature superconducting phase switches.
          </p>

          <div>
            <button
              onClick={() => {
                if (publications.length > 0) {
                  setSelectedPublication(publications[0]);
                }
              }}
              className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider hover:text-[#77d5dc] transition-colors mt-2"
            >
              <span>Read the research publication</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Panel (58% width / 7 cols) */}
      <div className="lg:col-span-7 min-h-[400px] lg:min-h-[600px] relative">
        <img
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1500&q=85"
          alt="Scientific microscope lab experiment"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};
