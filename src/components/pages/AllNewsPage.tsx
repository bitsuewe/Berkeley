import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, Newspaper, ArrowRight, Calendar, Tag } from 'lucide-react';
import { useCms } from '../../context/CmsContext';
import type { Article } from '../../types/lab';

export const AllNewsPage: React.FC = () => {
  const { articles, setSelectedArticle, setCurrentView } = useCms();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const tags = useMemo(() => {
    const tSet = new Set<string>();
    articles.forEach((a) => {
      a.tags?.forEach((t) => tSet.add(t));
      if (a.category) tSet.add(a.category);
    });
    return ['all', ...Array.from(tSet)];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return (articles || []).filter((art) => {
      const title = (art?.title || '').toLowerCase();
      const summary = (art?.summary || '').toLowerCase();
      const author = (art?.author || '').toLowerCase();
      const category = (art?.category || '').toLowerCase();
      const tags = (art?.tags || []).join(' ').toLowerCase();
      const content = Array.isArray(art?.content) ? art.content.join(' ').toLowerCase() : '';

      const matchesSearch =
        !q ||
        title.includes(q) ||
        summary.includes(q) ||
        author.includes(q) ||
        category.includes(q) ||
        tags.includes(q) ||
        content.includes(q);

      const matchesTag =
        selectedTag === 'all' ||
        art?.category === selectedTag ||
        art?.tags?.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [articles, searchQuery, selectedTag]);

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
            {filteredArticles.length} News Dispatches &amp; Updates
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#007681] flex items-center gap-2">
            <Newspaper className="w-4 h-4" />
            <span>LAB DISPATCHES &amp; PRESS RELEASES</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#00232e] leading-tight">
            Laboratory News &amp; Announcements
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Stay updated with recent breakthroughs, symposium events, awards, and media coverage from the Dr. Sewasew Research Group.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search news, press releases, grant announcements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#007681] transition-colors"
            />
          </div>

          {/* Tag Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <Tag className="w-4 h-4 text-slate-400 shrink-0 ml-1 hidden sm:block" />
            {tags.slice(0, 5).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap uppercase tracking-wider transition-all cursor-pointer ${
                  selectedTag === t
                    ? 'bg-[#007681] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art: Article) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#007681] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="h-48 bg-slate-100 overflow-hidden relative">
                <img
                  src={art.heroImage || 'https://images.unsplash.com/photo-1581093458791-9d42e3c43b78?auto=format&fit=crop&w=800&q=80'}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#00232e]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20">
                  {art.category || 'Press'}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="font-heading font-extrabold text-lg text-[#00232e] group-hover:text-[#007681] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#007681] group-hover:text-[#005a63]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <span className="font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{art.date}</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 space-y-4">
            <p className="text-slate-500 font-medium">No news articles found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('all');
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
