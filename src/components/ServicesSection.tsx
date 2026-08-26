import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, Award, Users, Sparkles, Building2, Zap, MapPin, CheckCircle2 } from 'lucide-react';

interface ProgramItem {
  number: string;
  programTag: string;
  category: string;
  name: string;
  description: string;
  metrics: string;
  funding: string;
  image: string;
  facility: string;
  techFocus: string[];
}

const RESEARCH_PROGRAMS: ProgramItem[] = [
  {
    number: '01',
    programTag: 'PROGRAM 01 // QUANTUM COMPUTING',
    category: 'Quantum Computing & Materials',
    name: 'Quantum Dynamics & Moiré Heterostructures',
    description: 'Investigating room-temperature electronic flat bands and topological superconductivity across 2D van der Waals lattices and twisted graphene heterostructures.',
    metrics: '18 Postdocs & PhDs',
    funding: 'DOE Office of Science // $14M Grant',
    image: '/images/programs/program-1.jpg',
    facility: 'Cyclotron Bldg 412 // Nano-Fab Cleanroom',
    techFocus: ['Twisted Graphene', 'Topological Lattices', 'Sub-Kelvin Cryo'],
  },
  {
    number: '02',
    programTag: 'PROGRAM 02 // BIO-FLUIDICS',
    category: 'Energy & Bio-Inspired Systems',
    name: 'Self-Healing Microfluidic Networks',
    description: 'Synthesizing autonomous self-healing hydrogel microchannel vascular architectures for clean energy fuel cells and resilient bio-chemical reactors.',
    metrics: '12 Active Projects',
    funding: 'ARPA-E Renewable // $8.5M Grant',
    image: '/images/programs/program-2.jpg',
    facility: 'Bio-Engineering Annex // Micro-PIV Suite',
    techFocus: ['Hydrogel Vascularization', 'Micro-PIV Analysis', 'Fuel Cells'],
  },
  {
    number: '03',
    programTag: 'PROGRAM 03 // NEUROMORPHIC AI',
    category: 'Neuromorphic Hardware & AI',
    name: 'Synaptic Memristive Bio-Interfaces',
    description: 'Developing sub-femtojoule organic memristive transistors for ultra-low-power brain-inspired neuromorphic computing and direct neural recording interfaces.',
    metrics: '24 Industry Patents',
    funding: 'NSF Emerging Frontiers // $10M Grant',
    image: '/images/programs/program-3.jpg',
    facility: 'Neuromorphic Hardware Lab // Room 208',
    techFocus: ['Memristive Synapses', 'Organic Transistors', 'Neural Probes'],
  },
  {
    number: '04',
    programTag: 'PROGRAM 04 // PHOTONICS',
    category: 'Photonic & Wave Dynamics',
    name: 'Zero-Index Waveguides & Light Confinement',
    description: 'Fabricating sub-wavelength optical resonators and zero-refractive-index metamaterials for light manipulation and quantum photonic interconnects.',
    metrics: '6 Cleanroom Lines',
    funding: 'DARPA Optoelectronics // $9.2M Grant',
    image: '/images/programs/program-4.jpg',
    facility: 'Molecular Foundry // Optics Bay 3',
    techFocus: ['Meta-Surfaces', 'Femtosecond Lasers', 'Photonic Chips'],
  },
  {
    number: '05',
    programTag: 'PROGRAM 05 // SYNTHETIC BIOLOGY',
    category: 'Synthetic Biology & Bio-Sensors',
    name: 'DNA-Templated Logic & Enzymatic Processors',
    description: 'Constructing nanoscale DNA logic circuits and reaction-diffusion enzymatic processors for diagnostic sensing and autonomous targeted drug delivery.',
    metrics: '15 Clinical Partners',
    funding: 'NIH Biomolecular // $11.8M Grant',
    image: '/images/programs/program-5.jpg',
    facility: 'Stanley Hall // Bio-Nanotechnology Wing',
    techFocus: ['DNA Origami Logic', 'Enzyme Cascades', 'Micro-Sensing'],
  },
  {
    number: '06',
    programTag: 'PROGRAM 06 // GLOBAL EXCHANGE',
    category: 'Academic & Industry Exchange',
    name: 'Postdoctoral Fellowship & Visiting Scholar Exchange',
    description: 'Providing fully-funded 2-year postdoctoral fellowships, global faculty sabbatical residencies, and collaborative lab access at UC Berkeley and LBL facilities.',
    metrics: '35 Global Fellows / Year',
    funding: 'Endowment & Foundation Fellowships',
    image: '/images/programs/program-6.jpg',
    facility: 'UC Berkeley Main Campus & LBL Facilities',
    techFocus: ['Global Exchange', 'Sabbatical Residency', 'Joint Grants'],
  },
];

export const ServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeCenterIdx, setActiveCenterIdx] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = index;
        }
      });

      setActiveCenterIdx(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = hoveredIdx !== null ? hoveredIdx : activeCenterIdx;
  const activeProgram = RESEARCH_PROGRAMS[activeIndex] || RESEARCH_PROGRAMS[0];
  const progressPercent = Math.round(((activeIndex + 1) / RESEARCH_PROGRAMS.length) * 100);

  return (
    <section
      id="services"
      className="bg-[#FAF8F5] text-[#00232E] rounded-t-[40px] sm:rounded-t-[56px] px-5 sm:px-8 md:px-12 py-24 sm:py-28 relative z-20 shadow-2xl border-t border-[#007681]/20"
    >
      <div className="max-w-[1240px] w-full mx-auto space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#00232E]/15 pb-10">
          <div className="space-y-3 max-w-2xl">

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

        {/* 2-Column Layout: LEFT = Scrollable Programs List, RIGHT = Sticky Showcase Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Scrollable Research Programs Cards List (padded pb-36 for steady Program 06 scroll runway) */}
          <div className="lg:col-span-7 space-y-4 pb-36 sm:pb-48">
            {RESEARCH_PROGRAMS.map((program, index) => {
              const isCardActive = activeIndex === index;

              return (
                <div
                  key={program.number}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onClick={() => setActiveCenterIdx(index)}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group relative rounded-2xl p-5 sm:p-7 transition-all duration-300 cursor-pointer ${isCardActive
                    ? 'bg-white border-2 border-[#007681] shadow-xl ring-4 ring-[#007681]/15 scale-[1.01] z-10'
                    : 'bg-white/60 hover:bg-white border border-[#00232E]/10 hover:border-[#007681]/40 opacity-75 hover:opacity-100 shadow-sm'
                    }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
                      {/* Program Number */}
                      <span
                        className={`font-heading font-black text-3xl sm:text-4xl transition-colors duration-300 leading-none shrink-0 w-12 ${isCardActive ? 'text-[#007681] scale-110' : 'text-[#00232E]/30 group-hover:text-[#007681]/70'
                          }`}
                      >
                        {program.number}
                      </span>

                      {/* Title & Category */}
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#007681] bg-[#007681]/10 px-2.5 py-0.5 rounded-full border border-[#007681]/20">
                            {program.category}
                          </span>

                        </div>

                        <h4
                          className={`font-heading font-extrabold text-lg sm:text-xl tracking-tight transition-colors ${isCardActive ? 'text-[#007681]' : 'text-[#00232E] group-hover:text-[#007681]'
                            }`}
                        >
                          {program.name}
                        </h4>

                        <p className="text-[#00232E]/70 text-xs sm:text-sm line-clamp-2 font-light">
                          {program.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${isCardActive
                        ? 'bg-[#007681] border-[#007681] text-white scale-110 shadow-md'
                        : 'border-[#00232E]/20 text-[#00232E]/40 group-hover:border-[#007681] group-hover:bg-[#007681] group-hover:text-white'
                        }`}
                    >
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${isCardActive ? 'translate-x-0.5 -translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                          }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Sticky Dynamic Spotlight Showcase Detail Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 z-20">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#007681]/30 shadow-2xl space-y-4 relative overflow-hidden max-h-[calc(100vh-110px)] overflow-y-auto">

              {/* Background Glow Overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#007681]/5 rounded-full blur-3xl pointer-events-none" />

              {/* Counter & Program Header */}

              {/* Animated Image Preview with Crossfade */}
              <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-md border border-[#007681]/30 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProgram.number}
                    src={activeProgram.image}
                    alt={activeProgram.name}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#00232E]/85 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-mono font-bold tracking-wide bg-[#00232E]/70 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/20 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#77d5dc]" />
                    <span>{activeProgram.facility}</span>
                  </span>
                </div>
              </div>

              {/* Title & Narrative Description with Smooth Fade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProgram.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#007681] uppercase tracking-wider block mb-0.5">
                      {activeProgram.category}
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-[#00232E] leading-tight">
                      {activeProgram.name}
                    </h3>
                  </div>

                  <p className="text-[#00232E]/80 text-xs sm:text-sm leading-relaxed font-light">
                    {activeProgram.description}
                  </p>

                  {/* Tech Focus Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#00232E]/10">
                    {activeProgram.techFocus.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 text-[10px] font-mono bg-[#007681]/10 text-[#007681] font-extrabold px-2.5 py-0.5 rounded-lg border border-[#007681]/25"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#007681]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Telemetry Footer */}
                  <div className="flex items-center justify-between pt-2 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 font-bold text-[#00232E]">
                      <Users className="w-3.5 h-3.5 text-[#007681]" />
                      <span>{activeProgram.metrics}</span>
                    </div>
                    <div className="text-[#007681] font-black bg-[#007681]/10 px-2.5 py-0.5 rounded-lg border border-[#007681]/20">
                      {activeProgram.funding}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Bottom Program Stats Row */}
        <FadeIn delay={0.3} y={20}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#00232E]/10 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#007681]/10 text-[#007681] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-[#00232E]">$62.5M+</div>
                <div className="text-xs text-[#00232E]/60 font-mono">ACTIVE FEDERAL ENDOWMENT</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#007681]/10 text-[#007681] flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-[#00232E]">14 Laboratories</div>
                <div className="text-xs text-[#00232E]/60 font-mono">CROSS-CAMPUS FACILITIES</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#007681]/10 text-[#007681] flex items-center justify-center shrink-0">
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
