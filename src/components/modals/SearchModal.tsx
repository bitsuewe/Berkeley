import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, Layers, BookOpen, Users, Newspaper, ArrowRight } from 'lucide-react';
import { useCms } from '../../context/CmsContext';

export const SearchModal: React.FC = () => {
  const {
    searchModalOpen,
    setSearchModalOpen,
    researchAreas,
    publications,
    people,
    articles,
    setSelectedResearchArea,
    setSelectedPublication,
    setSelectedPerson,
    setSelectedArticle,
  } = useCms();

  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchModalOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedResearch = (researchAreas || []).filter((r) => {
      const title = (r?.title || '').toLowerCase();
      const subtitle = (r?.subtitle || '').toLowerCase();
      const category = (r?.category || '').toLowerCase();
      const shortDesc = (r?.shortDescription || '').toLowerCase();
      const longDesc = (r?.longDescription || '').toLowerCase();
      const tags = (r?.tags || []).join(' ').toLowerCase();

      return (
        title.includes(q) ||
        subtitle.includes(q) ||
        category.includes(q) ||
        shortDesc.includes(q) ||
        longDesc.includes(q) ||
        tags.includes(q)
      );
    });

    const matchedPubs = (publications || []).filter((p) => {
      const title = (p?.title || '').toLowerCase();
      const abstract = (p?.abstract || '').toLowerCase();
      const journal = (p?.journal || '').toLowerCase();
      const authors = (p?.authors || []).join(' ').toLowerCase();
      const year = (p?.year || '').toString();
      const tags = (p?.tags || []).join(' ').toLowerCase();

      return (
        title.includes(q) ||
        abstract.includes(q) ||
        journal.includes(q) ||
        authors.includes(q) ||
        year.includes(q) ||
        tags.includes(q)
      );
    });

    const matchedPeople = (people || []).filter((p) => {
      const name = (p?.name || '').toLowerCase();
      const posTitle = (p?.positionTitle || '').toLowerCase();
      const role = (p?.role || '').toLowerCase();
      const bio = (p?.bio || '').toLowerCase();
      const email = (p?.email || '').toLowerCase();

      return (
        name.includes(q) ||
        posTitle.includes(q) ||
        role.includes(q) ||
        bio.includes(q) ||
        email.includes(q)
      );
    });

    const matchedArticles = (articles || []).filter((a) => {
      const title = (a?.title || '').toLowerCase();
      const summary = (a?.summary || '').toLowerCase();
      const category = (a?.category || '').toLowerCase();
      const author = (a?.author || '').toLowerCase();
      const tags = (a?.tags || []).join(' ').toLowerCase();
      const content = Array.isArray(a?.content) ? a.content.join(' ').toLowerCase() : '';

      return (
        title.includes(q) ||
        summary.includes(q) ||
        category.includes(q) ||
        author.includes(q) ||
        tags.includes(q) ||
        content.includes(q)
      );
    });

    return {
      research: matchedResearch,
      publications: matchedPubs,
      people: matchedPeople,
      articles: matchedArticles,
      totalCount:
        matchedResearch.length + matchedPubs.length + matchedPeople.length + matchedArticles.length,
    };
  }, [query, researchAreas, publications, people, articles]);

  if (!searchModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Header */}
        <div className="flex items-center px-5 py-4 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-[#007681]" />
          <input
            type="text"
            autoFocus
            placeholder="Search all research, publications, people, news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[#00232e] text-base focus:outline-none placeholder:text-slate-400 font-sans"
          />
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-5 flex-1">
          {!results ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300 stroke-[1.5]" />
              <p className="text-sm">Type any keyword, name, or topic to search</p>
            </div>
          ) : results.totalCount === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm">No items found matching "{query}"</p>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Research Matches */}
              {results.research.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#007681] flex items-center gap-1.5 px-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Research Areas ({results.research.length})</span>
                  </div>
                  {results.research.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => {
                        setSelectedResearchArea(r);
                        setSearchModalOpen(false);
                      }}
                      className="p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-bold text-[#00232e] group-hover:text-[#007681]">{r.title}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{r.shortDescription || r.longDescription}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#007681] shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              )}

              {/* Publications Matches */}
              {results.publications.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#007681] flex items-center gap-1.5 px-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Publications ({results.publications.length})</span>
                  </div>
                  {results.publications.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setSelectedPublication(p);
                        setSearchModalOpen(false);
                      }}
                      className="p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-bold text-[#00232e] group-hover:text-[#007681]">{p.title}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{(p.authors || []).join(', ')} • {p.year}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#007681] shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              )}

              {/* People Matches */}
              {results.people.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#007681] flex items-center gap-1.5 px-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>People ({results.people.length})</span>
                  </div>
                  {results.people.map((person) => (
                    <div
                      key={person.id}
                      onClick={() => {
                        setSelectedPerson(person);
                        setSearchModalOpen(false);
                      }}
                      className="p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-bold text-[#00232e] group-hover:text-[#007681]">{person.name}</div>
                        <div className="text-xs text-slate-500">{person.positionTitle || person.role}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#007681] shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              )}

              {/* News Matches */}
              {results.articles.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#007681] flex items-center gap-1.5 px-2">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>News &amp; Updates ({results.articles.length})</span>
                  </div>
                  {results.articles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        setSelectedArticle(art);
                        setSearchModalOpen(false);
                      }}
                      className="p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-bold text-[#00232e] group-hover:text-[#007681]">{art.title}</div>
                        <div className="text-xs text-slate-500">{art.date}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#007681] shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-400 flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>Shortcut: ⌘K or Ctrl+K</span>
        </div>

      </div>
    </div>
  );
};
