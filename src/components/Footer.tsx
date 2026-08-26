import React from 'react';
import { ArrowUp, Compass, Mail, MapPin, Sparkles, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sticky bottom-0 z-0 bg-gradient-to-b from-[#00171e] via-[#00141a] to-[#000f14] text-white pt-24 pb-10 border-t border-[#007681]/30 overflow-hidden select-none">
      
      {/* Background Watermark Typography */}
      <div className="absolute right-0 bottom-[-30px] font-heading font-black text-[clamp(4rem,14vw,180px)] text-white/[0.03] leading-none pointer-events-none select-none tracking-tighter">
        BERKELEY LAB
      </div>

      <div className="max-w-[1240px] w-[92%] mx-auto space-y-16 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Logo & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007681] to-[#00232e] border border-[#77d5dc]/40 text-white flex items-center justify-center font-heading font-black text-xl shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-white via-[#77d5dc] to-white">
                  UC
                </span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl leading-none tracking-tight text-white flex items-center gap-2">
                  BERKELEY LAB
                  <Sparkles className="w-4 h-4 text-[#77d5dc]" />
                </div>
                <div className="text-[11px] font-mono font-bold text-[#77d5dc] tracking-wider uppercase mt-1">
                  DR SEWASEW RESEARCH GROUP
                </div>
              </div>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Pioneering multidisciplinary breakthroughs in quantum dynamics, self-healing bio-fluidics, neuromorphic synaptic architectures, and sustainable energy storage.
            </p>

            {/* Telemetry / Location Badge */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-white/60 bg-[#00232e]/60 px-3.5 py-2 rounded-lg border border-[#007681]/30 w-max">
              <MapPin className="w-3.5 h-3.5 text-[#77d5dc]" />
              <span>1 Cyclotron Rd, Berkeley, CA 94720</span>
            </div>
          </div>

          {/* Col 1: Research Vectors (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5 font-sans">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#77d5dc] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Research</span>
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-light">
              <li><a href="#research" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Quantum Dynamics</a></li>
              <li><a href="#research" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Bio-Fluidics</a></li>
              <li><a href="#research" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Neuromorphic AI</a></li>
              <li><a href="#research" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Metamaterials</a></li>
              <li><a href="#research" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Bio-Computing</a></li>
            </ul>
          </div>

          {/* Col 2: Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5 font-sans">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#77d5dc]">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-light">
              <li><a href="#services" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Fellowships</a></li>
              <li><a href="#services" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">User Facilities</a></li>
              <li><a href="#services" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Industry Exchange</a></li>
              <li><a href="#services" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Postdoc Cohorts</a></li>
            </ul>
          </div>

          {/* Col 3: Personnel (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5 font-sans">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#77d5dc]">
              Personnel
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-light">
              <li><a href="#people" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Dr. Sewasew (PI)</a></li>
              <li><a href="#people" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Research Fellows</a></li>
              <li><a href="#people" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Graduate Scholars</a></li>
              <li><a href="#people" className="hover:text-[#77d5dc] hover:translate-x-1 transition-all inline-block">Alumni Network</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5 font-sans">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#77d5dc]">
              Inquiries
            </h4>
            <div className="space-y-2 text-xs text-white/75 font-light">
              <a 
                href="mailto:contact@lbl-sewasew.org" 
                className="hover:text-[#77d5dc] flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#77d5dc]" />
                <span>contact@lbl.gov</span>
              </a>
              <a 
                href="#contact" 
                className="inline-block mt-2 px-3.5 py-1.5 rounded bg-[#007681] hover:bg-white hover:text-[#00313c] text-white font-mono font-bold text-[11px] uppercase tracking-wider transition-all shadow-sm"
              >
                Portal Login →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} UC Berkeley Lab & Dr. Sewasew Laboratory.</span>
            <span className="hidden md:inline">• All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#77d5dc] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#77d5dc] transition-colors">Security</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#00232e] border border-[#007681]/40 text-[#77d5dc] hover:bg-[#007681] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
