import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ResearchArea, Publication, Article, Person, LabImage, OpenPosition, Course, OutreachItem, AccentTheme } from '../types/lab';
import { INITIAL_RESEARCH_AREAS, INITIAL_PUBLICATIONS, INITIAL_PEOPLE, INITIAL_ARTICLES, INITIAL_LAB_IMAGES, INITIAL_OPEN_POSITIONS, INITIAL_COURSES, INITIAL_OUTREACH } from '../data/initialData';

export type AppView = 'home' | 'all-research' | 'all-publications' | 'all-news' | 'all-people' | 'all-courses' | 'all-outreach';

interface CmsContextType {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;

  researchAreas: ResearchArea[];
  publications: Publication[];
  people: Person[];
  articles: Article[];
  courses: Course[];
  outreach: OutreachItem[];
  labImages: LabImage[];
  openPositions: OpenPosition[];
  accentTheme: AccentTheme;
  setAccentTheme: (theme: AccentTheme) => void;
  adminOpen: boolean;
  setAdminOpen: (open: boolean) => void;
  
  // Active modals / drawer detail states
  selectedResearchArea: ResearchArea | null;
  setSelectedResearchArea: (area: ResearchArea | null) => void;
  selectedPublication: Publication | null;
  setSelectedPublication: (pub: Publication | null) => void;
  selectedPerson: Person | null;
  setSelectedPerson: (person: Person | null) => void;
  selectedArticle: Article | null;
  setSelectedArticle: (art: Article | null) => void;
  bibtexImportOpen: boolean;
  setBibtexImportOpen: (open: boolean) => void;

  // Actions
  addPublication: (pub: Omit<Publication, 'id'>) => void;
  deletePublication: (id: string) => void;
  addPerson: (person: Omit<Person, 'id'>) => void;
  parseAndImportBibtex: (rawBibtex: string) => number;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

const ACCENT_COLORS: Record<AccentTheme, { main: string; hover: string; light: string; glow: string }> = {
  cobalt: {
    main: '#1D4ED8',
    hover: '#1E40AF',
    light: 'rgba(29, 78, 216, 0.08)',
    glow: 'rgba(29, 78, 216, 0.25)',
  },
  cyan: {
    main: '#0284C7',
    hover: '#0369A1',
    light: 'rgba(2, 132, 199, 0.08)',
    glow: 'rgba(2, 132, 199, 0.25)',
  },
  orange: {
    main: '#D9381E',
    hover: '#B82C15',
    light: 'rgba(217, 56, 30, 0.08)',
    glow: 'rgba(217, 56, 30, 0.25)',
  },
  green: {
    main: '#059669',
    hover: '#047857',
    light: 'rgba(5, 150, 105, 0.08)',
    glow: 'rgba(5, 150, 105, 0.25)',
  },
  vermilion: {
    main: '#7C3AED',
    hover: '#6D28D9',
    light: 'rgba(124, 58, 237, 0.08)',
    glow: 'rgba(124, 58, 237, 0.25)',
  },
};

const VIEW_TO_HASH: Record<AppView, string> = {
  'home': '#home',
  'all-research': '#research',
  'all-publications': '#publications',
  'all-news': '#news',
  'all-people': '#people',
  'all-courses': '#courses',
  'all-outreach': '#outreach',
};

const HASH_TO_VIEW: Record<string, AppView> = {
  '': 'home',
  '#': 'home',
  '#home': 'home',
  '#about': 'home',
  '#contact': 'home',
  '#featured-research': 'home',
  '#research': 'all-research',
  '#all-research': 'all-research',
  '#publications': 'all-publications',
  '#all-publications': 'all-publications',
  '#news': 'all-news',
  '#all-news': 'all-news',
  '#people': 'all-people',
  '#all-people': 'all-people',
  '#courses': 'all-courses',
  '#all-courses': 'all-courses',
  '#outreach': 'all-outreach',
  '#all-outreach': 'all-outreach',
};

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentViewState] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const initialHash = window.location.hash.toLowerCase();
      return HASH_TO_VIEW[initialHash] || 'home';
    }
    return 'home';
  });

  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  const [researchAreas] = useState<ResearchArea[]>(INITIAL_RESEARCH_AREAS);
  const [publications, setPublications] = useState<Publication[]>(INITIAL_PUBLICATIONS);
  const [people, setPeople] = useState<Person[]>(INITIAL_PEOPLE);
  const [articles] = useState<Article[]>(INITIAL_ARTICLES);
  const [courses] = useState<Course[]>(INITIAL_COURSES);
  const [outreach] = useState<OutreachItem[]>(INITIAL_OUTREACH);
  const [labImages] = useState<LabImage[]>(INITIAL_LAB_IMAGES);
  const [openPositions] = useState<OpenPosition[]>(INITIAL_OPEN_POSITIONS);
  
  const [accentTheme, setAccentTheme] = useState<AccentTheme>('orange');
  const [adminOpen, setAdminOpen] = useState<boolean>(false);

  const [selectedResearchArea, setSelectedResearchArea] = useState<ResearchArea | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [bibtexImportOpen, setBibtexImportOpen] = useState<boolean>(false);

  // Sync currentView with browser history pushState
  const setCurrentView = (view: AppView) => {
    if (typeof window !== 'undefined') {
      if (view !== currentView) {
        window.history.pushState({ view }, '', VIEW_TO_HASH[view] || '#home');
        setCurrentViewState(view);
      }
    } else {
      setCurrentViewState(view);
    }
  };

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set initial history state
    const currentHash = window.location.hash.toLowerCase();
    const initialView = HASH_TO_VIEW[currentHash] || 'home';
    window.history.replaceState({ view: initialView }, '', window.location.hash || '#home');

    const handlePopState = (event: PopStateEvent) => {
      const stateView = event.state?.view as AppView | undefined;
      const hash = window.location.hash.toLowerCase();
      const targetView = stateView || HASH_TO_VIEW[hash] || 'home';

      // Close any open modals when navigating via browser history
      setSelectedResearchArea(null);
      setSelectedPublication(null);
      setSelectedPerson(null);
      setSelectedArticle(null);
      setSearchModalOpen(false);
      setBibtexImportOpen(false);
      setAdminOpen(false);

      setCurrentViewState(targetView);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const colors = ACCENT_COLORS[accentTheme] || ACCENT_COLORS.orange;
    root.style.setProperty('--color-accent', colors.main);
    root.style.setProperty('--color-accent-hover', colors.hover);
    root.style.setProperty('--color-accent-light', colors.light);
    root.style.setProperty('--color-accent-glow', colors.glow);
  }, [accentTheme]);

  const addPublication = (pubData: Omit<Publication, 'id'>) => {
    const newPub: Publication = {
      ...pubData,
      id: `pub-${Date.now()}`
    };
    setPublications(prev => [newPub, ...prev]);
  };

  const deletePublication = (id: string) => {
    setPublications(prev => prev.filter(p => p.id !== id));
  };

  const addPerson = (personData: Omit<Person, 'id'>) => {
    const newPerson: Person = {
      ...personData,
      id: `person-${Date.now()}`
    };
    setPeople(prev => [...prev, newPerson]);
  };

  const parseAndImportBibtex = (rawBibtex: string): number => {
    let importedCount = 0;
    const entries = rawBibtex.split(/@(?=article|inproceedings|book|phdthesis|techreport)/i);

    const newPubs: Publication[] = [];

    entries.forEach((entry, idx) => {
      if (!entry.trim()) return;

      const titleMatch = entry.match(/title\s*=\s*[{"]([^}"]+)[}"]/i);
      const authorMatch = entry.match(/author\s*=\s*[{"]([^}"]+)[}"]/i);
      const journalMatch = entry.match(/(?:journal|booktitle)\s*=\s*[{"]([^}"]+)[}"]/i);
      const yearMatch = entry.match(/year\s*=\s*[{"]?(\d{4})[}"]?/i);
      const doiMatch = entry.match(/doi\s*=\s*[{"]([^}"]+)[}"]/i);
      const abstractMatch = entry.match(/abstract\s*=\s*[{"]([^}"]+)[}"]/i);

      if (titleMatch && titleMatch[1]) {
        const title = titleMatch[1].replace(/\s+/g, ' ').trim();
        const rawAuthors = authorMatch ? authorMatch[1] : 'Sewasew Lab Researcher';
        const authors = rawAuthors.split(/\s+and\s+/i).map(a => a.trim());
        const journal = journalMatch ? journalMatch[1].trim() : 'Scientific Publication';
        const year = yearMatch ? parseInt(yearMatch[1], 10) : new Date().getFullYear();
        const doi = doiMatch ? doiMatch[1].trim() : `10.1038/sewasew-${Date.now()}-${idx}`;
        const abstract = abstractMatch ? abstractMatch[1].trim() : 'No abstract provided in BibTeX record.';

        newPubs.push({
          id: `pub-bib-${Date.now()}-${idx}`,
          title,
          authors,
          journal,
          year,
          doi,
          pdfUrl: '#',
          abstract,
          researchAreaId: 'res-paleoanthropology',
          featured: false,
          citationsCount: Math.floor(Math.random() * 15),
          bibtex: `@article{${authors[0]?.split(' ').pop() || 'Pub'}${year},\n  title={${title}},\n  author={${rawAuthors}},\n  journal={${journal}},\n  year={${year}}\n}`,
          tags: ['BibTeX Import', journal.split(' ')[0] || 'Research']
        });
        importedCount++;
      }
    });

    if (newPubs.length > 0) {
      setPublications(prev => [...newPubs, ...prev]);
    }

    return importedCount;
  };

  return (
    <CmsContext.Provider value={{
      currentView,
      setCurrentView,
      searchModalOpen,
      setSearchModalOpen,
      researchAreas,
      publications,
      people,
      articles,
      courses,
      outreach,
      labImages,
      openPositions,
      accentTheme,
      setAccentTheme,
      adminOpen,
      setAdminOpen,
      selectedResearchArea,
      setSelectedResearchArea,
      selectedPublication,
      setSelectedPublication,
      selectedPerson,
      setSelectedPerson,
      selectedArticle,
      setSelectedArticle,
      bibtexImportOpen,
      setBibtexImportOpen,
      addPublication,
      deletePublication,
      addPerson,
      parseAndImportBibtex,
    }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
