import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="eyebrow">NEWS & UPDATES</div>

          <h2 className="section-title">
            Discover the latest from the lab.
          </h2>

          <div>
            <a
              href="#publications"
              className="text-link text-xs uppercase tracking-wider"
            >
              <span>View all dispatches</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right 3-News Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              onClick={() => {
                if (articles.length > 0) {
                  setSelectedArticle(articles[idx % articles.length]);
                }
              }}
              className="border border-[#e3e8e9] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-berkeley-card cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-[180px] overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[0.72rem] uppercase text-[#007681] font-extrabold mb-1 font-mono">
                    {item.category}
                  </div>
                  <h3 className="text-sm font-bold text-[#102f38] leading-snug group-hover:text-[#007681] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="text-[#63666a] text-[0.75rem] pt-3 border-t border-[#e3e8e9] font-mono">
                  {item.date}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
