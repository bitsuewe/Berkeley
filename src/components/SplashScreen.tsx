import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { BerkeleyLabLogo } from './BerkeleyLabLogo';

const TELEMETRY_STEPS = [
  'INITIALIZING QUANTUM DYNAMICS...',
  'LOADING MICROFLUIDIC VASCULATURE...',
  'CALIBRATING NEUROMORPHIC ARRAYS...',
  'ESTABLISHING BERKELEY // LBL LINK...',
  'LABORATORY SYSTEM ONLINE',
];

export const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user has seen splash in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenBerkeleySplash');
    if (hasSeenSplash) {
      setIsFinished(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            sessionStorage.setItem('hasSeenBerkeleySplash', 'true');
          }, 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 10) + 5;
        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 25) setStatusIdx(0);
    else if (progress < 50) setStatusIdx(1);
    else if (progress < 75) setStatusIdx(2);
    else if (progress < 100) setStatusIdx(3);
    else setStatusIdx(4);
  }, [progress]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash-screen"
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-[9999] bg-[#00171F] text-white flex flex-col items-center justify-between p-8 sm:p-12 overflow-hidden select-none"
      >
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007681]/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Telemetry Header */}
        <div className="w-full max-w-5xl flex items-center justify-between font-mono text-xs text-[#007681] border-b border-[#007681]/20 pb-4 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#007681] animate-ping" />
            <span className="font-extrabold tracking-widest uppercase text-[#77d5dc]">BERKELEY RESEARCH LAB</span>
          </div>
          <div className="hidden sm:block font-bold tracking-widest text-[#007681]/70">
            SYS_VER // 2026.08.27
          </div>
        </div>

        {/* Central Logo & Laboratory Telemetry */}
        <div className="flex flex-col items-center text-center space-y-8 relative z-10 my-auto">
          {/* Official Berkeley Lab Symbol Tile */}
          <div className="scale-125 sm:scale-150 mb-2">
            <BerkeleyLabLogo variant="reverse" showTagline={true} size="lg" />
          </div>

          {/* Laboratory Badge */}
          <div className="space-y-2 max-w-lg pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#007681]/20 text-[#77d5dc] border border-[#007681]/50 font-mono text-xs font-black tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DR. SEWASEW LABORATORY</span>
            </div>
          </div>

          {/* Dynamic Telemetry Status Text */}
          <div className="h-6 flex items-center justify-center">
            <motion.span
              key={statusIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="font-mono text-xs text-white/80 tracking-wider font-semibold uppercase bg-white/5 px-4 py-1 rounded-full border border-white/10"
            >
              {TELEMETRY_STEPS[statusIdx]}
            </motion.span>
          </div>
        </div>

        {/* Bottom Progress Counter Bar */}
        <div className="w-full max-w-md space-y-3 relative z-10">
          <div className="flex items-center justify-between font-mono text-xs font-bold text-[#77d5dc]">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#007681]" />
              <span>PRELOADING ASSETS</span>
            </span>
            <span className="text-sm font-black">{progress}%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-2 bg-[#00232E] rounded-full overflow-hidden border border-[#007681]/30 p-0.5 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#007681] via-[#77d5dc] to-[#007681] rounded-full shadow-[0_0_12px_#77d5dc]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
