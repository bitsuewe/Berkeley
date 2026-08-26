import React, { useRef, useState, useEffect } from 'react';

interface TelemetryCardItem {
  id: string;
  title: string;
  category: string;
  img: string;
}

const RESEARCH_TELEMETRY_ITEMS: TelemetryCardItem[] = [
  {
    id: 't1',
    title: 'Quantum Moiré Superlattice',
    category: 'Quantum Dynamics',
    img: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't2',
    title: 'Self-Healing Microfluidics',
    category: 'Bio-Fluidics',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't3',
    title: 'Memristive Ionic Synapse',
    category: 'Neuromorphic Hardware',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't4',
    title: 'Zero-Index Waveguide',
    category: 'Photonic Metamaterials',
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't5',
    title: 'Enzymatic Reaction-Diffusion',
    category: 'Bio-Computing',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't6',
    title: 'Atomic Force Microscopy',
    category: 'Materials Diagnostics',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't7',
    title: 'Cryogenic Superconductor Chamber',
    category: 'Quantum Computing',
    img: 'https://images.unsplash.com/photo-1581093458791-9d42e3c43b78?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't8',
    title: 'Synthetic Hydrogel Matrix',
    category: 'Tissue Morphogenesis',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't9',
    title: 'Photonic Crystal Lattice',
    category: 'Optical Engineering',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't10',
    title: 'DNA Logic Assembly',
    category: 'Nanoscale Sensing',
    img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't11',
    title: 'Hydrogen Catalysis Reactor',
    category: 'Renewable Energy',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't12',
    title: 'Laser Interferometry Array',
    category: 'Precision Physics',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't13',
    title: 'High-Throughput Spectroscopy',
    category: 'Chemical Analysis',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't14',
    title: 'Supercomputing Cluster',
    category: 'Computational Modeling',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const row1Items = RESEARCH_TELEMETRY_ITEMS.slice(0, 7);
  const row2Items = RESEARCH_TELEMETRY_ITEMS.slice(7);

  const row1Tripled = [...row1Items, ...row1Items, ...row1Items];
  const row2Tripled = [...row2Items, ...row2Items, ...row2Items];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#00232e] border-t border-b border-[#007681]/30 pt-16 pb-24 overflow-hidden space-y-6 relative z-10 select-none"
    >
      {/* Telemetry Header */}
      <div className="max-w-[1180px] w-[90%] mx-auto flex items-center justify-between mb-2">
        <div className="text-xs font-mono font-bold text-[#77d5dc] uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#77d5dc] animate-ping" />
          <span>EXPERIMENTAL TELEMETRY & LIVE RESEARCH FEEDS</span>
        </div>
        <div className="text-[11px] font-mono text-white/60 hidden sm:block">
          UC BERKELEY LAB // 14 ACTIVE STATIONS
        </div>
      </div>

      {/* Row 1: Moves RIGHT on scroll */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-4 w-max"
          style={{
            transform: `translate3d(${scrollOffset - 200}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[360px] h-[230px] flex-shrink-0 rounded-2xl overflow-hidden relative border border-[#007681]/40 group bg-[#001c25]"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001c25] via-transparent to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#77d5dc] uppercase tracking-widest">
                  {item.category}
                </span>
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wide mt-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="overflow-hidden w-full pb-4">
        <div
          className="flex gap-4 w-max"
          style={{
            transform: `translate3d(${-(scrollOffset - 200)}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[360px] h-[230px] flex-shrink-0 rounded-2xl overflow-hidden relative border border-[#007681]/40 group bg-[#001c25]"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001c25] via-transparent to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#77d5dc] uppercase tracking-widest">
                  {item.category}
                </span>
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wide mt-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
