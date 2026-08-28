import React from 'react';
import { CmsProvider, useCms } from './context/CmsContext';
import { SoundProvider } from './context/SoundContext';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Research } from './components/Research';
import { FeaturedResearch } from './components/FeaturedResearch';
import { AboutSection } from './components/AboutSection';
import { News } from './components/News';
import { Collaborate } from './components/Collaborate';
import { Footer } from './components/Footer';

import { AllResearchPage } from './components/pages/AllResearchPage';
import { AllPublicationsPage } from './components/pages/AllPublicationsPage';
import { AllNewsPage } from './components/pages/AllNewsPage';
import { AllPeoplePage } from './components/pages/AllPeoplePage';

import { PublicationModal } from './components/modals/PublicationModal';
import { BibtexImportModal } from './components/modals/BibtexImportModal';
import { PersonModal } from './components/modals/PersonModal';
import { ArticleModal } from './components/modals/ArticleModal';
import { AdminCmsModal } from './components/modals/AdminCmsModal';
import { SearchModal } from './components/modals/SearchModal';

export const MainApp: React.FC = () => {
  const { currentView } = useCms();

  return (
    <div className="min-h-screen bg-slate-50 text-[#00232e] font-sans antialiased">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Router based on currentView */}
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Research />
            <FeaturedResearch />
            <AboutSection />
            <News />
            <Collaborate />
          </>
        )}

        {currentView === 'all-research' && <AllResearchPage />}
        {currentView === 'all-publications' && <AllPublicationsPage />}
        {currentView === 'all-news' && <AllNewsPage />}
        {currentView === 'all-people' && <AllPeoplePage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <PublicationModal />
      <BibtexImportModal />
      <PersonModal />
      <ArticleModal />
      <AdminCmsModal />
      <SearchModal />
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


