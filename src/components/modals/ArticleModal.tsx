import React from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { X, Clock, BookOpen } from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const { selectedArticle, setSelectedArticle } = useCms();
  const { playClick } = useSound();

  if (!selectedArticle) return null;

  return (
    <div 
      onClick={() => setSelectedArticle(null)}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fadeIn select-none"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="max-w-3xl w-full max-h-[90vh] bg-white border border-[#E8E4DD] shadow-studio-lg rounded-3xl overflow-hidden flex flex-col"
      >
        
        {/* Header */}
        <div className="p-6 border-b border-[#E8E4DD] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-bold uppercase">
            <BookOpen className="w-4 h-4" />
            <span>EDITORIAL DISPATCH // {selectedArticle.category}</span>
          </div>
          <button
            onClick={() => { setSelectedArticle(null); playClick(); }}
            className="p-1.5 rounded-full hover:bg-white text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 font-sans">
          
          <div className="space-y-3 border-b border-[#F0ECE4] pb-4">
            <div className="flex items-center gap-3 font-mono text-xs text-[#75736E]">
              <span>{selectedArticle.date}</span>
              <span>·</span>
              <span>BY {selectedArticle.author.toUpperCase()}</span>
              <span>·</span>
              <span className="text-[var(--color-accent)] font-bold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#1A1A1A]">
              {selectedArticle.title}
            </h1>
          </div>

          <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#E8E4DD] bg-black">
            <img src={selectedArticle.heroImage} alt={selectedArticle.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4 text-xs text-[#4A4843] leading-relaxed">
            {selectedArticle.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
