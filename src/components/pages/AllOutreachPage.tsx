import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, Globe, CheckCircle, ChevronRight, Filter } from 'lucide-react';
import { useCms } from '../../context/CmsContext';
import type { OutreachItem } from '../../types/lab';

export const AllOutreachPage: React.FC = () => {
  const { outreach, setCurrentView } = useCms();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<OutreachItem | null>(null);

  const categories = ['all', 'Pan-African', 'Open Science', 'K-12 Engagement', 'Community Stewardship'];

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return (outreach || []).filter((item) => {
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.impactDetails.toLowerCase().includes(q) ||
        item.lead.toLowerCase().includes(q);

      const matchesCat =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [outreach, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#00232e] py-12 select-none animate-in fade-in duration-300">
      <div className="max-w-[1360px] w-[94%] mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-6">
          <button
            onClick={() => {
              if (selectedItem) {
                setSelectedItem(null);
              } else {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#007681] hover:text-[#005a63] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{selectedItem ? 'Back to All Initiatives' : 'Back to Overview'}</span>
          </button>

          <div className="text-xs font-mono text-slate-500 font-medium">
            {selectedItem ? selectedItem.tag : `Showing ${filteredItems.length} of ${(outreach || []).length} Outreach Initiatives`}
          </div>
        </div>

        {/* Selected Outreach Detailed View */}
        {selectedItem ? (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Image Banner */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-[#001720] relative min-h-[300px] sm:min-h-[380px] flex items-end">
              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 p-6 sm:p-10 bg-gradient-to-t from-[#001720] via-[#001720]/80 to-transparent w-full space-y-3 text-white">
                <span className="bg-[#007681] text-white text-xs font-mono font-bold px-3 py-1 rounded w-fit inline-block">
                  {selectedItem.tag}
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl">
                  {selectedItem.title}
                </h1>
                <div className="text-xs sm:text-sm font-mono text-[#77d5dc]">
                  Impact Benchmark: <span className="font-bold text-white">{selectedItem.stat}</span>
                </div>
              </div>
            </div>

            {/* Content Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="font-heading text-2xl font-extrabold text-[#00232e] mb-3">
                    Mission &amp; Public Impact
                  </h2>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    {selectedItem.impactDetails}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h3 className="text-xs font-mono font-bold text-[#007681] uppercase tracking-wider">
                    KEY STRATEGIC OBJECTIVES
                  </h3>
                  <ul className="space-y-3">
                    {selectedItem.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                        <CheckCircle className="w-5 h-5 text-[#007681] shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm font-mono text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block mb-2 text-xs uppercase tracking-wider">
                      PROGRAM DIRECTORS
                    </span>
                    <p className="text-slate-700 text-sm font-sans">{selectedItem.lead}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-2 text-xs uppercase tracking-wider">
                      PARTNER INSTITUTIONS
                    </span>
                    <ul className="space-y-2 text-slate-600 font-sans text-xs sm:text-sm">
                      {selectedItem.partners.map((partner, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#007681] font-bold">•</span>
                          <span>{partner}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setCurrentView('home');
                        setTimeout(() => {
                          const el = document.querySelector('#contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="w-full bg-[#007681] hover:bg-[#005a63] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer text-center"
                    >
                      Partner With Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Catalog Listing */
          <>
            {/* Page Header */}
            <div className="space-y-4 max-w-3xl">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#007681] flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>COMMUNITY &amp; GLOBAL IMPACT</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#00232e] leading-tight">
                Outreach &amp; Public Science
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                The Sewasew Laboratory is committed to democratizing human evolutionary science, fostering African scientific capacity, and sharing cultural heritage through open-access education, workshops, and museum partnerships.
              </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search outreach programs, keywords, or partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#007681] transition-colors"
                />
              </div>

              {/* Category Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 hidden sm:block" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#007681] text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat === 'all' ? 'All Programs' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Outreach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#007681] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="h-52 overflow-hidden relative bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-[#00232e]/90 backdrop-blur-sm text-white text-[10px] font-mono font-bold px-3 py-1 rounded">
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-heading font-extrabold text-xl text-[#00232e] group-hover:text-[#007681] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                      <span className="text-[#007681] font-mono">{item.stat}</span>
                      <span className="text-[#007681] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore Program Details <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};
