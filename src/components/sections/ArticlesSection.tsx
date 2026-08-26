import React from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { Clock, ArrowUpRight } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const { articles, setSelectedArticle } = useCms();
  const { playClick } = useSound();

  return (
    <section id="articles" className="py-12 border-t border-[#E8E4DD] space-y-6 select-none">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8E4DD] pb-4">
        <div>
          <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase mb-1">
            06 // EDITORIAL DISPATCHES
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#1A1A1A]">
            Articles & News
          </h2>
        </div>
      </div>

      {/* Dispatches Grid */}
      <div className="space-y-4">
        {articles.map((art) => (
          <div
            key={art.id}
            onClick={() => { setSelectedArticle(art); playClick(); }}
            data-cursor="READ"
            className="p-6 rounded-2xl border border-[#E8E4DD] bg-white hover:border-[var(--color-accent)] hover:shadow-studio-md transition-all duration-200 cursor-pointer space-y-3 group"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#75736E]">
              <span className="text-[var(--color-accent)] font-bold uppercase">{art.category}</span>
              <span>{art.date}</span>
            </div>

            <h3 className="font-serif text-xl font-normal text-[#1A1A1A] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
              {art.title}
            </h3>

            <p className="font-sans text-xs text-[#75736E] line-clamp-2 leading-relaxed">
              {art.summary}
            </p>

            <div className="font-mono text-[11px] text-[var(--color-accent)] font-bold flex items-center gap-1">
              <span>Read Full Story</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
