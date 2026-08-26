import React, { useRef, useState, useEffect } from 'react';
import { Activity, Layers } from 'lucide-react';

interface TelemetryCardItem {
  id: string;
  title: string;
  category: string;
  img: string;
  specs?: string;
}

const RESEARCH_TELEMETRY_ITEMS: TelemetryCardItem[] = [
  {
    id: 't1',
    title: 'Quantum Moiré Superlattice',
    category: 'Quantum Dynamics',
    img: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    specs: 'Flat Band Bandgap // 1.2 eV',
  },
  {
    id: 't2',
    title: 'Self-Healing Microfluidics',
    category: 'Bio-Fluidics',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    specs: 'Self-Repair Rate // 0.4 mm/s',
  },
  {
    id: 't3',
    title: 'Memristive Ionic Synapse',
    category: 'Neuromorphic Hardware',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    specs: 'Energy Consumption // 3.2 fJ',
  },
  {
    id: 't4',
    title: 'Zero-Index Waveguide',
    category: 'Photonic Metamaterials',
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    specs: 'Refractive Index n ≈ 0.002',
  },
  {
    id: 't5',
    title: 'Enzymatic Reaction-Diffusion',
    category: 'Bio-Computing',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    specs: 'Enzyme Yield // 98.4%',
  },
  {
    id: 't6',
    title: 'Atomic Force Microscopy',
    category: 'Materials Diagnostics',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    specs: 'Sub-Angstrom Resolution',
  },
  {
    id: 't7',
    title: 'Cryogenic Superconductor Chamber',
    category: 'Quantum Computing',
    img: 'https://images.unsplash.com/photo-1581093458791-9d42e3c43b78?auto=format&fit=crop&w=800&q=80',
    specs: 'Base Temp // 15 mK',
  },
  {
    id: 't8',
    title: 'Synthetic Hydrogel Matrix',
    category: 'Tissue Morphogenesis',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    specs: 'Young Modulus // 42 kPa',
  },
  {
    id: 't9',
    title: 'Photonic Crystal Lattice',
    category: 'Optical Engineering',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    specs: 'Quality Factor Q > 10^6',
  },
  {
    id: 't10',
    title: 'DNA Logic Assembly',
    category: 'Nanoscale Sensing',
    img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    specs: 'Gate Latency // 120 ms',
  },
  {
    id: 't11',
    title: 'Hydrogen Catalysis Reactor',
    category: 'Renewable Energy',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    specs: 'Overpotential // 180 mV',
  },
  {
    id: 't12',
    title: 'Laser Interferometry Array',
    category: 'Precision Physics',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    specs: 'Phase Sensitivity // 10^-15',
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const row1Items = RESEARCH_TELEMETRY_ITEMS.slice(0, 6);
  const row2Items = RESEARCH_TELEMETRY_ITEMS.slice(6);

  const row1Tripled = [...row1Items, ...row1Items, ...row1Items];
  const row2Tripled = [...row2Items, ...row2Items, ...row2Items];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#001c25] border-t border-b border-[#007681]/30 py-16 overflow-hidden space-y-8 relative z-10 select-none"
    >
      {/* Telemetry Header */}


      {/* Row 1: Moves RIGHT on scroll */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-5 w-max"
          style={{
            transform: `translate3d(${scrollOffset - 250}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[360px] h-[230px] flex-shrink-0 rounded-2xl overflow-hidden relative border border-[#007681]/40 group bg-[#001720] hover:border-[#77d5dc] hover:shadow-[0_0_25px_rgba(0,118,129,0.5)] transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001720] via-[#001720]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#77d5dc] uppercase tracking-widest">
                  {item.category}
                </span>
                <h4 className="text-base font-heading font-bold text-white uppercase tracking-wide mt-0.5">
                  {item.title}
                </h4>
                {item.specs && (
                  <span className="text-[10px] font-mono text-white/70 mt-1 bg-[#007681]/30 px-2 py-0.5 rounded w-max border border-[#007681]/40">
                    {item.specs}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="overflow-hidden w-full pb-2">
        <div
          className="flex gap-5 w-max"
          style={{
            transform: `translate3d(${-(scrollOffset - 250)}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[360px] h-[230px] flex-shrink-0 rounded-2xl overflow-hidden relative border border-[#007681]/40 group bg-[#001720] hover:border-[#77d5dc] hover:shadow-[0_0_25px_rgba(0,118,129,0.5)] transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001720] via-[#001720]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#77d5dc] uppercase tracking-widest">
                  {item.category}
                </span>
                <h4 className="text-base font-heading font-bold text-white uppercase tracking-wide mt-0.5">
                  {item.title}
                </h4>
                {item.specs && (
                  <span className="text-[10px] font-mono text-white/70 mt-1 bg-[#007681]/30 px-2 py-0.5 rounded w-max border border-[#007681]/40">
                    {item.specs}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
