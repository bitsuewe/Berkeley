import React from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowDownRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="space-y-8 pt-4 select-none">
      
      {/* Top Status Tag */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#75736E] border-b border-[#E8E4DD] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="font-bold text-[#1A1A1A]">RESEARCH DECK // 01</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] font-bold">
          <Compass className="w-3.5 h-3.5" />
          <span>ROOM-TEMP QUANTUM TRANSITIONS</span>
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8E4DD] bg-white text-[var(--color-accent)] shadow-studio-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERDISCIPLINARY DIGITAL RESEARCH LAB</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight font-normal text-[#1A1A1A]">
          We study <br />
          <span className="italic text-[var(--color-accent)] font-light">complex adaptive</span> <br />
          matter systems.
        </h1>

        <p className="font-sans text-base text-[#4A4843] leading-relaxed max-w-xl">
          Investigating non-equilibrium quantum phase transitions, self-organizing microfluidic morphogenesis, and ionic neuromorphic hardware across sub-nanometer scales.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <MagneticButton
            variant="primary"
            onClick={() => {
              document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
            }}
            cursorLabel="EXPLORE"
          >
            <span>Explore Programs</span>
            <ArrowDownRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            onClick={() => {
              document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
            }}
            cursorLabel="JOURNAL"
          >
            <span>Publications Archive</span>
          </MagneticButton>
        </div>
      </div>

      {/* Interactive Key Stats Deck */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E4DD] font-mono text-xs">
        <div className="p-4 rounded-2xl bg-white border border-[#E8E4DD] shadow-studio-sm space-y-1">
          <div className="font-serif text-2xl font-bold text-[#1A1A1A]">0.08 Å</div>
          <div className="text-[10px] text-[#75736E]">Lattice Precision</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-[#E8E4DD] shadow-studio-sm space-y-1">
          <div className="font-serif text-2xl font-bold text-[var(--color-accent)]">295 K</div>
          <div className="text-[10px] text-[#75736E]">Room-Temp Flat Bands</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-[#E8E4DD] shadow-studio-sm space-y-1">
          <div className="font-serif text-2xl font-bold text-[#1A1A1A]">0.45 fJ</div>
          <div className="text-[10px] text-[#75736E]">Synaptic Energy</div>
        </div>
      </div>

    </section>
  );
};
