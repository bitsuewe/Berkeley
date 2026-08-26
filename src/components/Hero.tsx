import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[calc(100vh-92px)] max-h-[820px] min-h-[540px] bg-[#00313c] text-white flex items-center overflow-hidden select-none">
      
      {/* Clear High-Definition Scientific Laboratory Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-65"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 49, 60, 0.75) 0%, rgba(0, 35, 46, 0.55) 60%, rgba(0, 25, 33, 0.85) 100%), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85')`
        }}
      />

      {/* Ambient Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#007681]/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#77d5dc]/20 blur-[120px] pointer-events-none" />

      <div className="max-w-[1180px] w-[90%] mx-auto relative z-10 py-6">
        
        {/* Clean Centered Copy Column tailored to fit viewport perfectly */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          
          {/* Telemetry Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00313c]/80 border border-[#77d5dc]/50 text-[#77d5dc] font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md"
          >
            <Compass className="w-3.5 h-3.5 text-[#77d5dc]" />
            <span>UC BERKELEY LAB // DR SEWASEW GROUP</span>
          </motion.div>

          {/* Headline - Scaled to fit viewport cleanly */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.98] tracking-tight text-white drop-shadow-md"
          >
            Advancing science.<br />
            Solving global<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#77d5dc] via-white to-[#77d5dc]">
              challenges.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/95 max-w-xl leading-relaxed font-light drop-shadow-sm"
          >
            UC Berkeley Lab conducts world-class research in advanced materials, energy, bio-fluidics, and computational science under the leadership of Dr. Sewasew.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            <a
              href="#research"
              className="inline-flex items-center gap-3 bg-[#007681] hover:bg-white hover:text-[#00313c] text-white px-7 py-3.5 sm:px-8 sm:py-4 font-bold transition-all text-xs sm:text-sm uppercase tracking-wider group shadow-xl border border-[#77d5dc]/40 rounded-xs"
            >
              <span>Explore Our Research</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>

        </div>

      </div>

      {/* Architectural Vector Line Mark */}
      <div className="absolute right-0 bottom-[-20px] w-[32vw] opacity-40 pointer-events-none z-0 hidden lg:block">
        <svg viewBox="0 0 600 420" fill="none">
          <path d="M0 130C100 45 220 60 310 145H390V420" stroke="white" strokeWidth="12" />
          <path d="M420 420V170L470 100L520 170V420" stroke="white" strokeWidth="12" />
          <path d="M457 235V290M482 235V290" stroke="white" strokeWidth="12" />
          <path d="M120 48L165 24L210 48" stroke="white" strokeWidth="12" />
        </svg>
      </div>

    </section>
  );
};
