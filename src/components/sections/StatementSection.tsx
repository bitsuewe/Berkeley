import React from 'react';

export const StatementSection: React.FC = () => {
  return (
    <section id="statement" className="py-12 border-t border-[#E8E4DD] space-y-8 select-none">
      
      {/* Section Tag */}
      <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase flex items-center gap-2">
        <span>02</span>
        <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
        <span>RESEARCH MANIFESTO</span>
      </div>

      {/* Editorial Quote */}
      <blockquote className="font-serif text-3xl sm:text-4xl leading-[1.15] text-[#1A1A1A] font-normal">
        “Traditional scientific websites present frozen conclusions. We believe a research laboratory should feel like a <span className="italic text-[var(--color-accent)]">living digital environment</span> — where data, physical models, and publication archives converse in real time.”
      </blockquote>

      {/* 3 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#F0ECE4]">
        <div className="space-y-2 p-6 rounded-2xl bg-white border border-[#E8E4DD] shadow-studio-sm">
          <div className="font-mono text-[10px] text-[var(--color-accent)] font-bold">01 // QUANTUM SCALE</div>
          <h3 className="font-serif text-lg font-medium text-[#1A1A1A]">Moiré Matter</h3>
          <p className="font-sans text-xs text-[#75736E] leading-relaxed">
            Engineering room-temperature electronic flat bands via nanometer strain fields.
          </p>
        </div>

        <div className="space-y-2 p-6 rounded-2xl bg-white border border-[#E8E4DD] shadow-studio-sm">
          <div className="font-mono text-[10px] text-[var(--color-accent)] font-bold">02 // SOFT BIO-SCALE</div>
          <h3 className="font-serif text-lg font-medium text-[#1A1A1A]">Microfluidic Channels</h3>
          <p className="font-sans text-xs text-[#75736E] leading-relaxed">
            Synthesizing autonomous self-healing hydrogel microchannel networks.
          </p>
        </div>

        <div className="space-y-2 p-6 rounded-2xl bg-white border border-[#E8E4DD] shadow-studio-sm">
          <div className="font-mono text-[10px] text-[var(--color-accent)] font-bold">03 // COMPUTE SCALE</div>
          <h3 className="font-serif text-lg font-medium text-[#1A1A1A]">Ionic Synapses</h3>
          <p className="font-sans text-xs text-[#75736E] leading-relaxed">
            Constructing sub-femtojoule organic memristive transistors for neural interfaces.
          </p>
        </div>
      </div>

    </section>
  );
};
