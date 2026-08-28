import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, ArrowRight, Layers, Filter } from 'lucide-react';
import { useCms } from '../../context/CmsContext';
import type { ResearchArea } from '../../types/lab';

export const AllResearchPage: React.FC = () => {
  const { researchAreas, setSelectedResearchArea, setCurrentView } = useCms();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    researchAreas.forEach((area) => {
      area.tags?.forEach((t) => cats.add(t));
    });
    return ['all', ...Array.from(cats)];
  }, [researchAreas]);

  const filteredAreas = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return researchAreas.filter((area) => {
      const title = (area?.title || '').toLowerCase();
      const shortDesc = (area?.shortDescription || '').toLowerCase();
      const longDesc = (area?.longDescription || '').toLowerCase();
      const category = (area?.category || '').toLowerCase();
      const tags = (area?.tags || []).join(' ').toLowerCase();

      const matchesSearch =
        !q ||
        title.includes(q) ||
        shortDesc.includes(q) ||
        longDesc.includes(q) ||
        category.includes(q) ||
        tags.includes(q);

      const matchesCat =
        selectedCategory === 'all' ||
        area?.category === selectedCategory ||
        area?.tags?.includes(selectedCategory);

      return matchesSearch && matchesCat;
    });
  }, [researchAreas, searchQuery, selectedCategory]);

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

          <div className="text-xs font-mono text-slate-500 font-medium">
            Showing {filteredAreas.length} of {researchAreas.length} Research Thrusts
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#007681] flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>RESEARCH THRUSTS &amp; INITIATIVES</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#00232e] leading-tight">
            Comprehensive Research Portfolio
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Explore our multidisciplinary investigations across quantum lattice physics, autonomous bio-fluidics, neuromorphic computing, and metamaterials led by Dr. Sewasew.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research thrusts, keywords, equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#007681] transition-colors"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 hidden sm:block" />
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#007681] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map((area: ResearchArea) => (
            <div
              key={area.id}
              onClick={() => setSelectedResearchArea(area)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#007681] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              {/* Image Banner */}
              <div className="h-52 bg-slate-100 overflow-hidden relative">
                <img
                  src={area.heroImage || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80'}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#00232e]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20">
                  {area.tags?.[0] || 'Research Area'}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="font-heading font-extrabold text-xl text-[#00232e] group-hover:text-[#007681] transition-colors leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {area.shortDescription || area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#007681] group-hover:text-[#005a63]">
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    {area.leadResearcher || 'Dr. Sewasew'}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 space-y-4">
            <p className="text-slate-500 font-medium">No research areas matched your search "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
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
