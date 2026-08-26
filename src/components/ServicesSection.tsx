import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, Award, Compass, Users, Sparkles, Building2 } from 'lucide-react';

interface ProgramItem {
  number: string;
  category: string;
  name: string;
  description: string;
  metrics: string;
  funding: string;
  image: string;
}

const RESEARCH_PROGRAMS: ProgramItem[] = [
  {
    number: '01',
    category: 'Quantum Computing & Materials',
    name: 'Quantum Dynamics & Moiré Heterostructures',
    description: 'Investigating room-temperature electronic flat bands and topological superconductivity across 2D van der Waals lattices and twisted graphene heterostructures.',
    metrics: '18 Postdocs & PhDs',
    funding: 'DOE Office of Science // $14M Grant',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    category: 'Energy & Bio-Inspired Systems',
    name: 'Self-Healing Microfluidic Networks',
    description: 'Synthesizing autonomous self-healing hydrogel microchannel vascular architectures for clean energy fuel cells and resilient bio-chemical reactors.',
    metrics: '12 Active Projects',
    funding: 'ARPA-E Renewable // $8.5M Grant',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '03',
    category: 'Neuromorphic Hardware & AI',
    name: 'Synaptic Memristive Bio-Interfaces',
    description: 'Developing sub-femtojoule organic memristive transistors for ultra-low-power brain-inspired neuromorphic computing and direct neural recording interfaces.',
    metrics: '24 Industry Patents',
    funding: 'NSF Emerging Frontiers // $10M Grant',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '04',
    category: 'Photonic & Wave Dynamics',
    name: 'Zero-Index Waveguides & Light Confinement',
    description: 'Fabricating sub-wavelength optical resonators and zero-refractive-index metamaterials for light manipulation and quantum photonic interconnects.',
    metrics: '6 Cleanroom Lines',
    funding: 'DARPA Optoelectronics // $9.2M Grant',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '05',
    category: 'Synthetic Biology & Bio-Sensors',
    name: 'DNA-Templated Logic & Enzymatic Processors',
    description: 'Constructing nanoscale DNA logic circuits and reaction-diffusion enzymatic processors for diagnostic sensing and autonomous targeted drug delivery.',
    metrics: '15 Clinical Partners',
    funding: 'NIH Biomolecular // $11.8M Grant',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '06',
    category: 'Academic & Industry Exchange',
    name: 'Postdoctoral Fellowship & Visiting Scholar Exchange',
    description: 'Providing fully-funded 2-year postdoctoral fellowships, global faculty sabbatical residencies, and collaborative lab access at UC Berkeley and LBL facilities.',
    metrics: '35 Global Fellows / Year',
    funding: 'Endowment & Foundation Fellowships',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
];

export const ServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="bg-[#FAF8F5] text-[#00232E] rounded-t-[40px] sm:rounded-t-[56px] px-5 sm:px-8 md:px-12 py-24 sm:py-28 relative z-20 shadow-2xl border-t border-[#007681]/20"
    >
      <div className="max-w-[1240px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#00232E]/15 pb-10">
          <div className="space-y-3 max-w-2xl">
            <FadeIn delay={0} y={20}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007681]/10 text-[#007681] font-mono text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>INITIATIVES & FELLOWSHIPS</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1} y={20}>
              <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#00232E] uppercase tracking-tight leading-[0.95]">
                Research Programs
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <p className="text-[#00232E]/70 text-sm sm:text-base max-w-md font-light leading-relaxed">
              Dr. Sewasew Laboratory coordinates major multi-institution research consortia, federal initiatives, and endowed postdoctoral fellowships across Berkeley.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Programs Grid / List */}
        <div className="divide-y divide-[#00232E]/12 border-b border-[#00232E]/12">
          {RESEARCH_PROGRAMS.map((program, index) => (
            <FadeIn key={program.number} delay={index * 0.08} y={25}>
              <div
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group py-8 sm:py-10 transition-colors duration-300 relative rounded-2xl px-3 sm:px-6 hover:bg-white hover:shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10 cursor-default"
              >
                {/* Left Column: Number & Titles */}
                <div className="flex items-start gap-4 sm:gap-8 flex-1">
                  
                  {/* Number */}
                  <span className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#007681]/40 group-hover:text-[#007681] transition-colors leading-none select-none shrink-0 w-12 sm:w-16">
                    {program.number}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-2 flex-1">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#007681] bg-[#007681]/10 px-2.5 py-0.5 rounded-full">
                        {program.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#00232E] tracking-tight group-hover:text-[#007681] transition-colors">
                      {program.name}
                    </h3>

                    <p className="text-[#00232E]/75 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                      {program.description}
                    </p>
                  </div>

                </div>

                {/* Right Column: Metrics, Funding & Image Preview */}
                <div className="flex items-center gap-6 self-stretch lg:self-auto justify-between lg:justify-end shrink-0 pl-16 lg:pl-0 border-t lg:border-t-0 border-[#00232E]/10 pt-4 lg:pt-0">
                  
                  {/* Telemetry Chips */}
                  <div className="flex flex-col items-start lg:items-end gap-1.5 font-mono text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#00232E]">
                      <Users className="w-3.5 h-3.5 text-[#007681]" />
                      <span>{program.metrics}</span>
                    </div>
                    <div className="text-[11px] text-[#00232E]/60">
                      {program.funding}
                    </div>
                  </div>

                  {/* Program Visual Thumbnail */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-[#007681]/30 shrink-0 shadow-md group-hover:scale-105 group-hover:border-[#007681] transition-all hidden sm:block">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Arrow Icon */}
                  <div className="w-10 h-10 rounded-full border border-[#00232E]/20 group-hover:border-[#007681] group-hover:bg-[#007681] group-hover:text-white text-[#00232E] flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Program Stats Row */}
        <FadeIn delay={0.3} y={20}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#00232E]/10 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#007681]/10 text-[#007681] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-[#00232E]">$62.5M+</div>
                <div className="text-xs text-[#00232E]/60 font-mono">ACTIVE FEDERAL ENDOWMENT</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#007681]/10 text-[#007681] flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-[#00232E]">14 Laboratories</div>
                <div className="text-xs text-[#00232E]/60 font-mono">CROSS-CAMPUS FACILITIES</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#007681]/10 text-[#007681] flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-[#00232E]">100% Funded</div>
                <div className="text-xs text-[#00232E]/60 font-mono">POSTDOCTORAL FELLOWSHIPS</div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
