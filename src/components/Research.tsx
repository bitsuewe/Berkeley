import React, { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { useCms } from '../context/CmsContext';
import { ArrowRight } from 'lucide-react';

interface ResearchCardData {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  areaId: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const RESEARCH_CARDS: ResearchCardData[] = [
  {
    id: '01',
    number: '01',
    category: 'Advanced Materials',
    title: 'Quantum Phase Transitions',
    description: 'Designing and discovering quantum materials with transformative electronic capabilities, room-temperature flat bands, and moiré heterostructures.',
    areaId: 'res-quantum',
    col1Img1: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    col1Img2: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1000&q=80',
    col2Img: 'https://images.unsplash.com/photo-1581093458791-9d42e3c43b78?auto=format&fit=crop&w=1280&q=85',
  },
  {
    id: '02',
    number: '02',
    category: 'Energy & Environment',
    title: 'Microfluidic Vasculature',
    description: 'Developing sustainable energy solutions, self-healing hydrogel microchannels, and resilient bio-fluidic channels for clean energy storage.',
    areaId: 'res-microfluidic',
    col1Img1: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80',
    col1Img2: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80',
    col2Img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1280&q=85',
  },
  {
    id: '03',
    number: '03',
    category: 'Computational Science',
    title: 'Memristive Synapses & AI',
    description: 'Leveraging sub-femtojoule data modeling, neural memristors, and AI supercomputing to drive scientific discovery and brain-inspired hardware.',
    areaId: 'res-synaptic',
    col1Img1: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    col1Img2: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    col2Img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1280&q=85',
  },
  {
    id: '04',
    number: '04',
    category: 'Photonic Metamaterials',
    title: 'Zero-Index Light Confinement',
    description: 'Designing topological optical waveguides, sub-diffraction light resonators, and zero-index metamaterials for ultra-fast optical interconnections.',
    areaId: 'res-photonic',
    col1Img1: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=80',
    col1Img2: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    col2Img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1280&q=85',
  },
  {
    id: '05',
    number: '05',
    category: 'Bio-Molecular Computing',
    title: 'DNA Logic & Enzymatic Processors',
    description: 'Constructing DNA-templated molecular logic circuits and enzymatic reaction-diffusion processors for autonomous nanoscale bio-sensing.',
    areaId: 'res-biomolecular',
    col1Img1: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
    col1Img2: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80',
    col2Img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1280&q=85',
  },
];

interface StickyCardProps {
  card: ResearchCardData;
  index: number;
  totalCards: number;
  onExplore: (areaId: string) => void;
}

const PerfectStickyResearchCard: React.FC<StickyCardProps> = ({ card, index, onExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Rock-Solid Constant Stacking Offset:
  // Each card sticks at exact 68px interval (matching the 68px header tab height)
  // When Card 2 stacks at 92px, Card 1 header stays perfectly visible at 24..92px
  // When Card 3 stacks at 160px, Card 2 header stays perfectly visible at 92..160px
  // All headers remain 100% constant, rock-solid, identical width, with zero scaling distortions!
  const stickyTop = 24 + index * 68;

  return (
    <div
      ref={containerRef}
      className="sticky flex items-center justify-center mb-16 last:mb-0"
      style={{
        top: `${stickyTop}px`,
        zIndex: index + 1,
      }}
    >
      <div className="w-full max-w-6xl rounded-[32px] sm:rounded-[40px] border-2 border-[#007681] bg-[#00232e] text-white p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden relative transition-all duration-200 hover:border-[#77d5dc]">
        
        {/* Rock-Solid Constant Header Tab (Exact 68px height across ALL cards) */}
        <div className="h-[68px] flex items-center justify-between pb-3.5 border-b border-[#007681]/60 mb-4 bg-[#00232e] relative z-10 select-none">
          
          {/* Left: Constant Number + Category + Title */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <span className="font-heading font-black text-[clamp(2rem,4.5vw,56px)] text-[#77d5dc] leading-none select-none shrink-0 w-12 sm:w-16">
              {card.number}
            </span>
            <div className="flex flex-col truncate">
              <span className="font-mono font-bold text-[10px] sm:text-xs uppercase tracking-widest text-[#77d5dc]">
                {card.category}
              </span>
              <h3 className="font-heading font-extrabold text-base sm:text-xl text-white uppercase tracking-tight truncate">
                {card.title}
              </h3>
            </div>
          </div>

          {/* Right: Constant Uniform Explore Research Button */}
          <button
            onClick={() => onExplore(card.areaId)}
            className="shrink-0 inline-flex items-center gap-2 rounded-full border-2 border-[#77d5dc] bg-[#00232e] hover:bg-[#77d5dc] text-[#77d5dc] hover:text-[#00232e] font-mono font-bold uppercase tracking-wider px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md group"
          >
            <span>Explore Research</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Description Tagline */}
        <p className="text-white/85 text-xs sm:text-sm max-w-3xl leading-relaxed mb-4 font-light">
          {card.description}
        </p>

        {/* Bottom Row Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 flex-1 items-stretch min-h-[190px] sm:min-h-[220px]">
          
          {/* Left Column (40% width / 5 cols) - 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-2.5 justify-between">
            <div className="w-full h-[95px] sm:h-[115px] rounded-[20px] overflow-hidden border border-[#007681]/40 shadow-inner">
              <img
                src={card.col1Img1}
                alt={`${card.title} Figure 1`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full h-[115px] sm:h-[140px] rounded-[20px] overflow-hidden border border-[#007681]/40 shadow-inner">
              <img
                src={card.col1Img2}
                alt={`${card.title} Figure 2`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) - 1 Tall Image */}
          <div className="md:col-span-7 rounded-[20px] overflow-hidden h-full min-h-[210px] border border-[#007681]/40 shadow-inner">
            <img
              src={card.col2Img}
              alt={`${card.title} Main Microscopy`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export const Research: React.FC = () => {
  const { researchAreas, setSelectedResearchArea } = useCms();

  const handleExplore = (areaId: string) => {
    const area = researchAreas.find(a => a.id === areaId) || researchAreas[0];
    setSelectedResearchArea(area);
  };

  return (
    <section
      id="research"
      className="bg-[#00313c] text-white relative z-10 px-5 sm:px-8 md:px-10 pt-16 pb-36 border-t border-[#007681]/30"
    >
      {/* Eyebrow & Main Title Header */}
      <div className="max-w-4xl mx-auto text-center mb-14 space-y-3">
        <FadeIn delay={0} y={20}>
          <div className="eyebrow !text-[#77d5dc]">OUR RESEARCH</div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2 className="section-title !text-white text-[clamp(2.5rem,8vw,90px)] font-black uppercase leading-none tracking-tight">
            Science for a sustainable future.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            We explore, understand, and engineer solutions in energy, climate, materials, biosciences, quantum computing, and beyond under the leadership of Dr. Sewasew.
          </p>
        </FadeIn>
      </div>

      {/* Sticky Stacking Cards Container - Constant Header Tabs */}
      <div className="relative max-w-6xl mx-auto pb-20 space-y-6">
        {RESEARCH_CARDS.map((card, idx) => (
          <PerfectStickyResearchCard
            key={card.id}
            card={card}
            index={idx}
            totalCards={RESEARCH_CARDS.length}
            onExplore={handleExplore}
          />
        ))}
      </div>
    </section>
  );
};
