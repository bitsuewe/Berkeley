import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { ArrowRight, ChevronRight, Layers, FileText } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const ResearchExplorer: React.FC = () => {
  const { researchAreas, setSelectedResearchArea } = useCms();
  const { playTick, playClick } = useSound();
  const [activeAreaId, setActiveAreaId] = useState<string>(researchAreas[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'overview' | 'questions' | 'methodology'>('overview');

  const activeArea = researchAreas.find(a => a.id === activeAreaId) || researchAreas[0];

  return (
    <section id="research" className="py-12 border-t border-[#E8E4DD] space-y-6 select-none">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8E4DD] pb-4">
        <div>
          <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase mb-1">
            04 // RESEARCH WORKBENCH
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#1A1A1A]">
            Core Program Matrix
          </h2>
        </div>
      </div>

      {/* Program Selector Tabs */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {researchAreas.map(area => (
          <button
            key={area.id}
            onClick={() => { setActiveAreaId(area.id); playClick(); }}
            className={`px-3 py-1.5 rounded-full border transition-all ${
              activeAreaId === area.id
                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold shadow-sm'
                : 'bg-white text-[#75736E] border-[#E8E4DD] hover:border-[var(--color-accent)]'
            }`}
          >
            {area.code} // {area.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Program Detail Studio Card */}
      <div className="p-8 rounded-3xl bg-white border border-[#E8E4DD] shadow-studio-md space-y-6">
        
        {/* Card Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#F0ECE4] pb-4">
          <div>
            <div className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase">
              {activeArea.category} // PROGRAM /{activeArea.code}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1A1A] mt-1">
              {activeArea.title}
            </h3>
            <p className="font-sans text-xs text-[#75736E] italic mt-1">
              {activeArea.subtitle}
            </p>
          </div>

          <MagneticButton
            variant="primary"
            onClick={() => { setSelectedResearchArea(activeArea); playClick(); }}
            className="!px-4 !py-2 text-[10px]"
            cursorLabel="INSPECT"
          >
            <span>Full Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>

        {/* Studio Sub-Tabs */}
        <div className="flex border-b border-[#F0ECE4] font-mono text-xs gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2 border-b-2 font-bold transition-all ${
              activeTab === 'overview' ? 'border-[var(--color-accent)] text-[var(--color-accent)]' : 'border-transparent text-[#75736E]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('questions')}
            className={`pb-2 border-b-2 font-bold transition-all ${
              activeTab === 'questions' ? 'border-[var(--color-accent)] text-[var(--color-accent)]' : 'border-transparent text-[#75736E]'
            }`}
          >
            Key Questions ({activeArea.keyQuestions.length})
          </button>
          <button
            onClick={() => setActiveTab('methodology')}
            className={`pb-2 border-b-2 font-bold transition-all ${
              activeTab === 'methodology' ? 'border-[var(--color-accent)] text-[var(--color-accent)]' : 'border-transparent text-[#75736E]'
            }`}
          >
            Methodology
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[120px] font-sans text-xs text-[#4A4843] leading-relaxed">
          {activeTab === 'overview' && (
            <p>{activeArea.longDescription}</p>
          )}

          {activeTab === 'questions' && (
            <ul className="space-y-2 font-mono text-xs">
              {activeArea.keyQuestions.map((q, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E4DD] text-[#1A1A1A] flex items-start gap-2">
                  <span className="text-[var(--color-accent)] font-bold">Q{idx + 1}.</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'methodology' && (
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DD] font-mono text-xs space-y-2">
              <div className="font-bold text-[var(--color-accent)]">LABORATORY EXPERIMENTAL PROTOCOL</div>
              <p>{activeArea.methodology}</p>
            </div>
          )}
        </div>

        {/* Telemetry Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#F0ECE4] font-mono text-[10px]">
          {activeArea.stats.map((stat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E4DD]">
              <div className="text-[#75736E]">{stat.label}</div>
              <div className="font-bold text-xs text-[#1A1A1A] mt-0.5">{stat.value}</div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
