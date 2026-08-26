import React from 'react';
import { Mail, Building, Compass } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 border-t border-[#E8E4DD] space-y-6 select-none">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8E4DD] pb-4">
        <div>
          <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase mb-1">
            10 // LOCATION & CONTACTS
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#1A1A1A]">
            Laboratory Facility
          </h2>
        </div>
      </div>

      <div className="space-y-6 font-mono text-xs">
        <div className="p-5 rounded-2xl border border-[#E8E4DD] bg-white space-y-2 shadow-studio-sm">
          <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold uppercase">
            <Mail className="w-4 h-4" /> DIRECT CONTACT
          </div>
          <div className="text-base font-bold text-[#1A1A1A]">
            contact@nexus-lab.org
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-[#E8E4DD] bg-white space-y-2 shadow-studio-sm">
          <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold uppercase">
            <Building className="w-4 h-4" /> PHYSICAL ADDRESS
          </div>
          <div className="font-sans text-xs text-[#4A4843] leading-relaxed space-y-0.5">
            <div className="font-bold text-[#1A1A1A]">Institute for Advanced Physical Sciences</div>
            <div>Physical Sciences Building, Floor 4</div>
            <div>77 Science Quadrangle, Cambridge, MA 02138</div>
          </div>
        </div>

        {/* SVG Campus Map */}
        <div className="p-6 rounded-3xl bg-white border border-[#E8E4DD] shadow-studio-md space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-[#75736E]">
            <span className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[var(--color-accent)]" /> CAMPUS SCHEMATIC
            </span>
            <span className="text-[10px]">CAMBRIDGE, MA</span>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl border border-[#E8E4DD] bg-[#FAF8F5] overflow-hidden">
            <svg viewBox="0 0 800 450" className="w-full h-full">
              <rect width="800" height="450" fill="#FAF8F5" />
              <path d="M 50 225 L 750 225" stroke="#E8E4DD" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 400 50 L 400 400" stroke="#E8E4DD" strokeWidth="2" strokeDasharray="4 4" />

              <rect x="100" y="80" width="180" height="100" rx="8" fill="#FFFFFF" stroke="#E8E4DD" strokeWidth="1.5" />
              <text x="190" y="135" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#75736E">Materials Hall</text>

              <rect x="520" y="80" width="180" height="100" rx="8" fill="#FFFFFF" stroke="#E8E4DD" strokeWidth="1.5" />
              <text x="610" y="135" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#75736E">Bio-Eng Annex</text>

              <rect x="100" y="270" width="180" height="100" rx="8" fill="#FFFFFF" stroke="#E8E4DD" strokeWidth="1.5" />
              <text x="190" y="325" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#75736E">Computation Ctr</text>

              <rect x="480" y="250" width="220" height="130" rx="12" fill="rgba(217,56,30,0.06)" stroke="var(--color-accent)" strokeWidth="2" />
              <text x="590" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="monospace" fill="var(--color-accent)">NEXUS LAB // FLOOR 4</text>
              <circle cx="590" cy="275" r="5" fill="var(--color-accent)" />
            </svg>
          </div>
        </div>

      </div>

    </section>
  );
};
