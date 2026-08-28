import React from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { X, Compass, CheckCircle2, FlaskConical, BarChart3, Tag } from 'lucide-react';

export const ResearchModal: React.FC = () => {
  const { selectedResearchArea, setSelectedResearchArea } = useCms();
  const { playClick } = useSound();

  if (!selectedResearchArea) return null;

  return (
    <div 
      onClick={() => setSelectedResearchArea(null)}
      className="fixed inset-0 z-50 bg-[#001720]/80 backdrop-blur-md p-3 sm:p-6 md:p-8 flex items-center justify-center animate-fadeIn select-none overflow-y-auto"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="max-w-4xl w-full max-h-[92vh] bg-white border border-slate-200 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col my-auto"
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="bg-[#007681] text-white text-xs font-mono font-bold px-2.5 py-1 rounded">
              {selectedResearchArea.code || 'THRUST'}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-[#007681] font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>{selectedResearchArea.category}</span>
            </div>
          </div>
          <button
            onClick={() => { setSelectedResearchArea(null); playClick(); }}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1 font-sans text-[#00232e]">
          
          {/* Title and Subtitle */}
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00232e] leading-tight">
              {selectedResearchArea.title}
            </h1>
            {selectedResearchArea.subtitle && (
              <p className="text-slate-600 text-sm sm:text-base font-normal">
                {selectedResearchArea.subtitle}
              </p>
            )}
          </div>

          {/* Hero Image */}
          {selectedResearchArea.heroImage && (
            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 relative shadow-sm">
              <img 
                src={selectedResearchArea.heroImage} 
                alt={selectedResearchArea.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}

          {/* Overview / Descriptions */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#007681]">
              RESEARCH THRUST OVERVIEW
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
              {selectedResearchArea.longDescription || selectedResearchArea.shortDescription}
            </p>
          </div>

          {/* Key Questions */}
          {selectedResearchArea.keyQuestions && selectedResearchArea.keyQuestions.length > 0 && (
            <div className="space-y-3 bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-slate-200">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#007681] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#007681]" />
                <span>CORE INVESTIGATIVE QUESTIONS</span>
              </h3>
              <ul className="space-y-2.5 pt-1">
                {selectedResearchArea.keyQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-snug">
                    <span className="font-mono font-bold text-[#007681] mt-0.5">0{idx + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Methodology */}
          {selectedResearchArea.methodology && (
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#007681] flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-[#007681]" />
                <span>METHODOLOGY & EXPERIMENTAL FRAMEWORK</span>
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {selectedResearchArea.methodology}
              </p>
            </div>
          )}

          {/* Stats Grid */}
          {selectedResearchArea.stats && selectedResearchArea.stats.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#007681] flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#007681]" />
                <span>KEY METRICS & BENCHMARKS</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {selectedResearchArea.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-xl text-center">
                    <div className="font-mono text-lg sm:text-xl font-bold text-[#007681]">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {selectedResearchArea.tags && selectedResearchArea.tags.length > 0 && (
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-slate-400" />
              {selectedResearchArea.tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-[#FAF8F5] flex justify-end">
          <button
            onClick={() => { setSelectedResearchArea(null); playClick(); }}
            className="bg-[#007681] hover:bg-[#005a63] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
