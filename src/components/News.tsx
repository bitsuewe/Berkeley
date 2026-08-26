import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { useCms } from '../context/CmsContext';

export const News: React.FC = () => {
  const { articles, setSelectedArticle } = useCms();

  const newsItems = [
    {
      category: 'Research',
      title: 'New catalyst design boosts hydrogen production efficiency',
      date: 'May 12, 2026',
      img: 'https://images.unsplash.com/photo-1581093458791-9d42e3c43b78?auto=format&fit=crop&w=900&q=80',
    },
    {
      category: 'Award',
      title: 'Lab researcher receives distinguished early career award',
      date: 'April 28, 2026',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
    },
    {
      category: 'Lab News',
      title: 'New facility opens for advanced quantum computing research',
      date: 'April 15, 2026',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-[#e3e8e9]" id="news">
      <div className="max-w-[1180px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 space-y-5"
        >
          <div className="eyebrow flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#007681]" />
            <span>NEWS & ARTICLES</span>
          </div>

          <h2 className="section-title">
            Discover the latest from the lab.
          </h2>

          <p className="text-[#63666a] text-sm leading-relaxed">
            Breakthrough findings, press releases, and computational advances published directly by the Dr. Sewasew Laboratory team.
          </p>

          <div className="pt-2">
            <a
              href="#publications"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#007681] hover:text-[#005a63] transition-colors group"
            >
              <span>View all dispatches</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right 3-News Cards Grid with Elevated Floating Hover Effect */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                if (articles.length > 0) {
                  setSelectedArticle(articles[idx % articles.length]);
                }
              }}
              className="rounded-2xl border border-[#e3e8e9] hover:border-[#007681] bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(0,118,129,0.22)] hover:ring-2 hover:ring-[#007681]/20 cursor-pointer group flex flex-col justify-between overflow-hidden relative"
            >
              {/* Image Container with Zoom & Gradient Glow */}
              <div className="h-[190px] overflow-hidden bg-gray-100 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00232E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-xs font-mono font-bold flex items-center gap-1">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[0.72rem] uppercase text-[#007681] font-extrabold font-mono tracking-wider group-hover:text-[#005a63] transition-colors inline-block bg-[#007681]/10 px-2.5 py-0.5 rounded-full border border-[#007681]/20">
                    {item.category}
                  </div>
                  <h3 className="text-base font-bold text-[#102f38] leading-snug group-hover:text-[#007681] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="text-[#63666a] text-[0.75rem] pt-3 border-t border-[#e3e8e9] font-mono flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#007681]" />
                    <span>{item.date}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#007681] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
