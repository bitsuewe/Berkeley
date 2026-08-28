import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, BookOpen, Download, ExternalLink, Filter, Calendar } from 'lucide-react';
import { useCms } from '../../context/CmsContext';
import type { Publication } from '../../types/lab';

export const AllPublicationsPage: React.FC = () => {
  const { publications, setSelectedPublication, setCurrentView, setBibtexImportOpen } = useCms();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const years = useMemo(() => {
    const ySet = new Set<string>();
    publications.forEach((p) => {
      if (p.year) ySet.add(p.year.toString());
    });
    return ['all', ...Array.from(ySet).sort().reverse()];
  }, [publications]);

  const filteredPublications = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return (publications || []).filter((pub) => {
      const title = (pub?.title || '').toLowerCase();
      const abstract = (pub?.abstract || '').toLowerCase();
      const journal = (pub?.journal || '').toLowerCase();
      const authors = (pub?.authors || []).join(' ').toLowerCase();
      const tags = (pub?.tags || []).join(' ').toLowerCase();
      const doi = (pub?.doi || '').toLowerCase();

      const matchesSearch =
        !q ||
        title.includes(q) ||
        abstract.includes(q) ||
        journal.includes(q) ||
        authors.includes(q) ||
        tags.includes(q) ||
        doi.includes(q);

      const matchesYear =
        selectedYear === 'all' || pub?.year?.toString() === selectedYear;

      return matchesSearch && matchesYear;
    });
  }, [publications, searchQuery, selectedYear]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#00232e] py-12 select-none animate-in fade-in duration-300">
      <div className="max-w-[1360px] w-[94%] mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-6">
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#007681] hover:text-[#005a63] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Overview</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setBibtexImportOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#007681] text-xs font-mono font-bold uppercase cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Import BibTeX</span>
            </button>
            <div className="text-xs font-mono text-slate-500 font-medium">
              {filteredPublications.length} Peer-Reviewed Articles
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#007681] flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>PEER-REVIEWED SCHOLARSHIP</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#00232e] leading-tight">
            Scientific Publications &amp; Articles
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Read and download published journal articles, conference proceedings, and preprint manuscripts from the Dr. Sewasew Laboratory.
          </p>
        </div>

        {/* Search & Year Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, author, journal name, DOI, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#007681] transition-colors"
            />
          </div>

          {/* Year Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <Calendar className="w-4 h-4 text-slate-400 shrink-0 ml-1 hidden sm:block" />
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap uppercase tracking-wider transition-all cursor-pointer ${
                  selectedYear === year
                    ? 'bg-[#007681] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {year === 'all' ? 'All Years' : year}
              </button>
            ))}
          </div>

        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.map((pub: Publication) => (
            <div
              key={pub.id}
              onClick={() => setSelectedPublication(pub)}
              className="bg-white rounded-xl border border-slate-200 hover:border-[#007681] p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col md:flex-row gap-6 justify-between items-start group"
            >
              <div className="space-y-2.5 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="bg-[#007681]/10 text-[#007681] font-bold px-2.5 py-0.5 rounded-full border border-[#007681]/20">
                    {pub.year}
                  </span>
                  <span className="text-slate-500 font-semibold uppercase">
                    {pub.journal}
                  </span>
                  {pub.doi && (
                    <span className="text-slate-400">
                      • DOI: {pub.doi}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#00232e] group-hover:text-[#007681] transition-colors leading-snug">
                  {pub.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                  {pub.abstract}
                </p>

                <div className="text-xs text-slate-500 font-medium pt-1">
                  Authors: {pub.authors.join(', ')}
                </div>
              </div>

              <div className="flex md:flex-col items-center gap-3 shrink-0 self-end md:self-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPublication(pub);
                  }}
                  className="inline-flex items-center gap-2 bg-[#007681] hover:bg-[#005a63] text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <span>Read Paper</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 space-y-4">
            <p className="text-slate-500 font-medium">No publications found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('all');
              }}
              className="inline-flex items-center gap-2 bg-[#007681] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
