import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCms } from '../context/CmsContext';
import { BerkeleyArchitecturalMark } from './BerkeleyArchitecturalMark';

export const Hero: React.FC = () => {
  const { setCurrentView } = useCms();

  return (
    <section id="hero" className="relative min-h-[600px] sm:min-h-[660px] lg:min-h-[700px] bg-[#00232e] text-white flex items-center overflow-hidden select-none">
      
      {/* Background Image: Berkeley Lab Campus with gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 35, 46, 0.95) 0%, rgba(0, 49, 60, 0.82) 55%, rgba(0, 35, 46, 0.50) 100%), url('/images/berkeley-lab-campus.jpg')`
        }}
      />

      {/* Main Container - Always in Front (z-20) of Background & Logo */}
      <div className="max-w-[1360px] w-[92%] mx-auto relative z-20 py-16 sm:py-20 lg:py-24">
        
        {/* Left Column Content */}
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-md"
          >
            Sewasew Lab advances groundbreaking research at the intersection of African archaeology, history, and human evolution.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl"
          >
            We integrate paleoenvironmental reconstruction, high-precision geochronology, and 3D digital fossil forensics to discover the deep roots of humanity in East Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            <button
              onClick={() => {
                setCurrentView('all-research');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 bg-[#007681] hover:bg-[#005a63] text-white px-7 py-3.5 rounded-md font-bold text-sm uppercase tracking-wider transition-all shadow-lg group cursor-pointer"
            >
              <span>Explore Research</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>

      </div>

      {/* Architectural Logo Anchor - Positioned Behind Content (z-[1]), In Front of Background (z-0) */}
      <div className="absolute right-0 bottom-0 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[560px] pointer-events-none z-[1] opacity-50 sm:opacity-70 lg:opacity-85 translate-y-[2px]">
        <BerkeleyArchitecturalMark strokeColor="white" strokeWidth={10} className="w-full h-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
      </div>

    </section>
  );
};



