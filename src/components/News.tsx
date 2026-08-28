import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCms } from '../context/CmsContext';

export const News: React.FC = () => {
  const { articles, setSelectedArticle, setCurrentView } = useCms();

  const newsItems = [
    {
      category: 'FIELD EXPEDITION',
      title: 'New Pliocene hominin fossil assemblage unearthed in the Afar Depression, Ethiopia',
      date: 'May 18, 2026',
      img: '/images/news/excavation-trench.jpg',
    },
    {
      category: 'PUBLICATION',
      title: 'Study dating early Acheulean stone tools published in Nature Geosciences',
      date: 'April 29, 2026',
      img: '/images/research/stone-tools.jpg',
    },
    {
      category: 'SYMPOSIUM',
      title: 'Pan-African Prehistory & Paleoanthropology Congress announced',
      date: 'April 10, 2026',
      img: '/images/news/micro-ct-lab.jpg',
    },
  ];

  return (
    <section id="news" className="py-20 sm:py-24 bg-[#FAF8F5] text-[#00232e] border-b border-[#e3e8e9] select-none">
      <div className="max-w-[1280px] w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Left Column (1/3 width / 4 cols) matching screenshot */}
        <div className="lg:col-span-4 space-y-6">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#007681]">
            NEWS
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#00232e] leading-tight">
            Discover the latest from the lab.
          </h2>

          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentView('all-news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-[#007681] hover:text-[#005a63] font-bold text-sm transition-colors cursor-pointer group"
            >
              <span>View all news</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column (2/3 width / 8 cols) - 3 News Cards Grid matching screenshot */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (articles.length > 0) {
                  setSelectedArticle(articles[idx % articles.length]);
                }
              }}
              className="bg-white rounded-xl border border-slate-200 hover:border-[#007681] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="h-40 overflow-hidden bg-slate-100 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-[#007681] uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="font-heading font-extrabold text-sm text-[#00232e] group-hover:text-[#007681] transition-colors leading-snug line-clamp-3">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                  {item.date}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

