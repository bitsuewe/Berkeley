import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface ResearchPaperItem {
  id: string;
  number: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const RESEARCH_PAPERS_DATA: ResearchPaperItem[] = [
  {
    id: '01',
    number: '01',
    name: 'Quantum Phase Transitions',
    category: 'Nature Physics',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    id: '02',
    number: '02',
    name: 'Microfluidic Morphogenesis',
    category: 'Science Advances',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    id: '03',
    number: '03',
    name: 'Memristive Ionic Synapses',
    category: 'Nature Electronics',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface ResearchPaperCardProps {
  paper: ResearchPaperItem;
  index: number;
  totalCards: number;
}

const ResearchPaperCard: React.FC<ResearchPaperCardProps> = ({ paper, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center mb-12 last:mb-0"
      style={{
        top: `${index * 28 + 96}px`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden"
      >
        {/* Top Row Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.5rem,7vw,90px)] text-[#D7E2EA] leading-none select-none">
              {paper.number}
            </span>
            <div className="flex flex-col">
              <span className="font-light text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60">
                {paper.category}
              </span>
              <h3 className="font-medium text-lg sm:text-2xl md:text-3xl text-[#D7E2EA] uppercase tracking-wide">
                {paper.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* Bottom Row Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 items-stretch">
          
          {/* Left Column (40% width / 5 cols) - 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-4 justify-between">
            <div className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img
                src={paper.col1Img1}
                alt={`${paper.name} Figure 1`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img
                src={paper.col1Img2}
                alt={`${paper.name} Figure 2`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) - 1 Tall Image */}
          <div className="md:col-span-7 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden h-full min-h-[260px]">
            <img
              src={paper.col2Img}
              alt={`${paper.name} Main Showcase`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28">
          Papers
        </h2>
      </FadeIn>

      {/* Sticky Stacking Cards */}
      <div className="relative max-w-6xl mx-auto">
        {RESEARCH_PAPERS_DATA.map((paper, idx) => (
          <ResearchPaperCard
            key={paper.id}
            paper={paper}
            index={idx}
            totalCards={RESEARCH_PAPERS_DATA.length}
          />
        ))}
      </div>

      {/* Footer Contact Section */}
      <footer id="contact" className="mt-32 border-t border-[#D7E2EA]/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-6 font-light uppercase tracking-wider text-xs sm:text-sm text-[#D7E2EA]/60">
        <div>© {new Date().getFullYear()} NEXUS LABORATORY — ALL RIGHTS RESERVED</div>
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-[#D7E2EA] transition-colors">TOP</a>
          <a href="#about" className="hover:text-[#D7E2EA] transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-[#D7E2EA] transition-colors">PROGRAMS</a>
          <a href="#projects" className="hover:text-[#D7E2EA] transition-colors">PAPERS</a>
        </div>
      </footer>
    </section>
  );
};
