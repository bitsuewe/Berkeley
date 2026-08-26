import React from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { X, ExternalLink, User } from 'lucide-react';

export const PersonModal: React.FC = () => {
  const { selectedPerson, setSelectedPerson, publications, setSelectedPublication } = useCms();
  const { playClick } = useSound();

  if (!selectedPerson) return null;

  const personPubs = publications.filter(p => 
    p.authors.some(a => a.toLowerCase().includes(selectedPerson.name.split(' ').pop()?.toLowerCase() || ''))
  );

  return (
    <div 
      onClick={() => setSelectedPerson(null)}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-end animate-fadeIn select-none"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="max-w-md w-full h-full max-h-[90vh] bg-white border border-[#E8E4DD] shadow-studio-lg rounded-3xl overflow-hidden flex flex-col"
      >
        
        {/* Header */}
        <div className="p-6 border-b border-[#E8E4DD] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-bold uppercase">
            <User className="w-4 h-4" />
            <span>RESEARCHER PROFILE</span>
          </div>
          <button
            onClick={() => { setSelectedPerson(null); playClick(); }}
            className="p-1.5 rounded-full hover:bg-white text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[#E8E4DD] bg-[#FAF8F5] flex-shrink-0">
              <img src={selectedPerson.avatar} alt={selectedPerson.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase">
                {selectedPerson.role}
              </div>
              <h2 className="font-serif text-2xl font-medium text-[#1A1A1A]">
                {selectedPerson.name}
              </h2>
              <div className="font-sans text-xs text-[#75736E]">
                {selectedPerson.positionTitle}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DD] font-mono text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-[#75736E]">EMAIL:</span>
              <span className="text-[var(--color-accent)] font-bold">{selectedPerson.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#75736E]">OFFICE:</span>
              <span>{selectedPerson.office}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase">BIOGRAPHY</div>
            <p className="font-sans text-xs text-[#4A4843] leading-relaxed">
              {selectedPerson.bio}
            </p>
          </div>

          {/* Publications */}
          <div className="space-y-2 pt-2 border-t border-[#F0ECE4]">
            <div className="font-mono text-xs font-bold text-[#75736E] uppercase">
              AUTHORED PAPERS ({personPubs.length})
            </div>
            {personPubs.map(pub => (
              <div
                key={pub.id}
                onClick={() => { setSelectedPerson(null); setSelectedPublication(pub); playClick(); }}
                className="p-3 rounded-xl border border-[#E8E4DD] bg-[#FAF8F5] hover:border-[var(--color-accent)] cursor-pointer text-xs space-y-0.5"
              >
                <div className="font-mono text-[9px] text-[var(--color-accent)] font-bold">{pub.journal} ({pub.year})</div>
                <div className="font-serif font-medium text-[#1A1A1A] line-clamp-1">{pub.title}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
