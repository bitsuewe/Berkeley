import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E8E4DD] bg-white py-12 px-6 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Identity */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2 font-mono font-bold tracking-wider text-xs text-[#1A1A1A]">
            <div className="w-6 h-6 rounded-lg bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-sm font-bold">N</div>
            <span>NEXUS RESEARCH LABORATORY</span>
          </div>
          <p className="text-[#75736E] text-xs font-sans leading-relaxed max-w-md">
            Investigating non-equilibrium quantum matter, self-assembling bio-microfluidics, and ionic neuromorphic dynamics under the Institute for Advanced Physical Sciences.
          </p>
        </div>

        {/* Directory */}
        <div className="space-y-2 font-mono">
          <div className="font-bold tracking-wider text-[#1A1A1A] uppercase text-[11px]">
            DIRECTORY
          </div>
          <ul className="space-y-1.5 text-[#75736E] text-xs">
            <li><a href="#research" className="hover:text-[var(--color-accent)] transition-colors">Research Matrix</a></li>
            <li><a href="#publications" className="hover:text-[var(--color-accent)] transition-colors">Publications Archive</a></li>
            <li><a href="#articles" className="hover:text-[var(--color-accent)] transition-colors">Dispatches</a></li>
            <li><a href="#people" className="hover:text-[var(--color-accent)] transition-colors">Personnel Roster</a></li>
            <li><a href="#lab" className="hover:text-[var(--color-accent)] transition-colors">Inside the Lab</a></li>
            <li><a href="#join" className="hover:text-[var(--color-accent)] transition-colors">Admissions Portal</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2 font-mono">
          <div className="font-bold tracking-wider text-[#1A1A1A] uppercase text-[11px]">
            LOCATION
          </div>
          <div className="text-[#75736E] text-xs leading-relaxed font-sans">
            <div>77 Science Quadrangle, Suite 400</div>
            <div>Cambridge, MA 02138, USA</div>
          </div>
          <div className="pt-1 text-[var(--color-accent)] font-bold font-mono text-xs">
            contact@nexus-lab.org
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#F0ECE4] flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#75736E] font-mono">
        <div>
          © {new Date().getFullYear()} NEXUS Laboratory. Published under Open Access License.
        </div>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-[var(--color-accent)]">Privacy</a>
          <a href="#" className="hover:text-[var(--color-accent)]">ORCID</a>
          <a href="#" className="hover:text-[var(--color-accent)]">Repository</a>
        </div>
      </div>
    </footer>
  );
};
