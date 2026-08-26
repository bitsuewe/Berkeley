import React, { useState, useMemo } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { Search, Filter, ExternalLink, BookOpen } from 'lucide-react';
import type { Publication } from '../../types/lab';
import { MagneticButton } from '../ui/MagneticButton';

export const PublicationsSection: React.FC = () => {
  const { publications, setSelectedPublication, setBibtexImportOpen } = useCms();
  const { playClick, playPaperLift } = useSound();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [hoveredPubId, setHoveredPubId] = useState<string | null>(null);

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(publications.map(p => p.year)));
    return years.sort((a, b) => b - a);
  }, [publications]);

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.doi.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesYear = selectedYear === 'ALL' || pub.year.toString() === selectedYear;

      return matchesSearch && matchesYear;
    });
  }, [publications, searchQuery, selectedYear]);

  const groupedByYear = useMemo(() => {
    const map: Record<number, Publication[]> = {};
    filteredPublications.forEach(pub => {
      if (!map[pub.year]) map[pub.year] = [];
      map[pub.year].push(pub);
    });
    return map;
  }, [filteredPublications]);

  return (
    <section id="publications" className="py-12 border-t border-[#E8E4DD] space-y-6 select-none">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8E4DD] pb-4">
        <div>
          <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase mb-1">
            05 // PUBLICATIONS ARCHIVE
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#1A1A1A]">
            Papers & Repository
          </h2>
        </div>

        <MagneticButton
          variant="secondary"
          onClick={() => { setBibtexImportOpen(true); playClick(); }}
          cursorLabel="IMPORT"
          className="!px-3 !py-1.5 text-[10px]"
        >
          <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>Paste BibTeX</span>
        </MagneticButton>
      </div>

      {/* Search & Year Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#E8E4DD] shadow-studio-sm">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#75736E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers, authors, DOI..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#FAF8F5] border border-[#E8E4DD] rounded-xl text-xs font-mono focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <button
            onClick={() => { setSelectedYear('ALL'); playClick(); }}
            className={`px-3 py-1 rounded-full transition-all text-[10px] ${
              selectedYear === 'ALL'
                ? 'bg-[#1A1A1A] text-white font-bold'
                : 'bg-[#FAF8F5] text-[#75736E] border border-[#E8E4DD]'
            }`}
          >
            ALL
          </button>
          {availableYears.map(year => (
            <button
              key={year}
              onClick={() => { setSelectedYear(year.toString()); playClick(); }}
              className={`px-3 py-1 rounded-full transition-all text-[10px] ${
                selectedYear === year.toString()
                  ? 'bg-[#1A1A1A] text-white font-bold'
                  : 'bg-[#FAF8F5] text-[#75736E] border border-[#E8E4DD]'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {Object.keys(groupedByYear)
          .map(Number)
          .sort((a, b) => b - a)
          .map((year) => (
            <div key={year} className="space-y-3">
              <div className="font-mono text-xs font-bold text-[var(--color-accent)] border-b border-[#E8E4DD] pb-1 flex items-center justify-between">
                <span>YEAR / {year}</span>
                <span className="text-[10px] text-[#75736E]">{groupedByYear[year].length} PAPERS</span>
              </div>

              <div className="space-y-2">
                {groupedByYear[year].map((pub) => (
                  <div
                    key={pub.id}
                    onMouseEnter={() => {
                      setHoveredPubId(pub.id);
                      playPaperLift();
                    }}
                    onMouseLeave={() => setHoveredPubId(null)}
                    onClick={() => {
                      setSelectedPublication(pub);
                      playClick();
                    }}
                    data-cursor="READ"
                    className="p-5 rounded-2xl border border-[#E8E4DD] bg-white hover:border-[var(--color-accent)] hover:shadow-studio-md transition-all duration-200 cursor-pointer space-y-2"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="font-bold text-[var(--color-accent)]">{pub.journal}</span>
                      <span className="text-[#75736E]">DOI: {pub.doi}</span>
                    </div>

                    <h4 className="font-serif text-lg font-medium text-[#1A1A1A] hover:text-[var(--color-accent)] transition-colors">
                      {pub.title}
                    </h4>

                    <div className="font-mono text-[11px] text-[#75736E]">
                      {pub.authors.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

    </section>
  );
};
