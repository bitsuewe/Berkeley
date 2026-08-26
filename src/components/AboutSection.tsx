import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#00232e] text-[#D7E2EA] border-b border-white/10">
      
      {/* 4 Corner 3D Decorative Research Icons with Idle Floating Animations */}
      
      {/* Top-Left Quantum Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none opacity-80"
      >
        <motion.img
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Quantum Sphere Object"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-Left 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none opacity-80"
      >
        <motion.img
          animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Hydrogel Object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
        />
      </FadeIn>

      {/* Top-Right Crystal Lattice Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none opacity-80"
      >
        <motion.img
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lattice Object"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-Right 3D Cluster Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none opacity-80"
      >
        <motion.img
          animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Waveguide Cluster"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain"
        />
      </FadeIn>

      {/* Main Content Flow */}
      <div className="flex flex-col items-center justify-center text-center z-20 max-w-4xl w-full">
        
        {/* Eyebrow & Heading */}
        <FadeIn delay={0} y={40}>
          <div className="eyebrow !text-[#77d5dc] font-mono text-xs font-bold uppercase tracking-widest mb-3">
            ABOUT OUR LAB // DR SEWASEW
          </div>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14 md:mb-16">
            About lab
          </h2>
        </FadeIn>

        {/* Animated Text Block */}
        <div className="mb-16 sm:mb-20 md:mb-24 flex justify-center">
          <AnimatedText text="We explore, understand, and engineer solutions in energy, climate, materials, biosciences, quantum computing, and beyond under the leadership of Dr. Sewasew. We truly enjoy collaborating with institutions that aim to stand out and solve humanity's greatest scientific challenges!" />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={30}>
          <ContactButton onClick={scrollToContact} />
        </FadeIn>

      </div>

    </section>
  );
};
