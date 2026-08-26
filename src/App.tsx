import React from 'react';
import { CmsProvider } from './context/CmsContext';
import { SoundProvider } from './context/SoundContext';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeSection } from './components/MarqueeSection';
import { Research } from './components/Research';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedResearch } from './components/FeaturedResearch';
import { People } from './components/People';
import { Stats } from './components/Stats';
import { News } from './components/News';
import { Collaborate } from './components/Collaborate';
import { Footer } from './components/Footer';

import { PublicationModal } from './components/modals/PublicationModal';
import { BibtexImportModal } from './components/modals/BibtexImportModal';
import { PersonModal } from './components/modals/PersonModal';
import { ArticleModal } from './components/modals/ArticleModal';
import { AdminCmsModal } from './components/modals/AdminCmsModal';

export const MainApp: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#000f14] text-[#102f38] font-sans antialiased overflow-x-clip">
      
      {/* 
        The Curtain (Main Page Container): 
        Elevated with shadow and solid background so as you scroll to the bottom, 
        this curtain slides upward, seamlessly revealing the static immovable footer underneath!
      */}
      <main className="relative z-10 bg-[#00313c] shadow-[0_40px_100px_rgba(0,0,0,0.85)] border-b border-[#007681]/40">
        <Navbar />
        <Hero />
        <MarqueeSection />
        <Research />
        <ServicesSection />
        <FeaturedResearch />
        <People />
        <Stats />
        <News />
        <Collaborate />
      </main>

      {/* The Static Curtain-Reveal Footer (Immovable at the bottom) */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <PublicationModal />
      <BibtexImportModal />
      <PersonModal />
      <ArticleModal />
      <AdminCmsModal />
    </div>
  );
};

export default function App() {
  return (
    <CmsProvider>
      <SoundProvider>
        <MainApp />
      </SoundProvider>
    </CmsProvider>
  );
}
