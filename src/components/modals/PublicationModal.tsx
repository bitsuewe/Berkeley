import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { X, Download, Copy, Check, BookOpen, FileText } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const PublicationModal: React.FC = () => {
  const { selectedPublication, setSelectedPublication } = useCms();
  const { playClick } = useSound();
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);
  const [readingPdfMode, setReadingPdfMode] = useState(false);

  if (!selectedPublication) return null;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(selectedPublication.bibtex);
    setCopiedBibtex(true);
    playClick();
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <div 
      onClick={() => setSelectedPublication(null)}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fadeIn select-none"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="max-w-3xl w-full max-h-[90vh] bg-white border border-[#E8E4DD] shadow-studio-lg rounded-3xl overflow-hidden flex flex-col"
      >
        
        {/* Header */}
        <div className="p-6 border-b border-[#E8E4DD] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[var(--color-accent)] font-bold uppercase">
            <BookOpen className="w-4 h-4" />
            <span>PUBLICATION RECORD</span>
          </div>
          <button
            onClick={() => { setSelectedPublication(null); playClick(); }}
            className="p-1.5 rounded-full hover:bg-white text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] font-bold">
              {selectedPublication.journal} ({selectedPublication.year})
            </span>
            <span className="text-[#75736E]">
              DOI: {selectedPublication.doi}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[#1A1A1A]">
            {selectedPublication.title}
          </h2>

          <div className="font-mono text-xs text-[#75736E] border-b border-[#F0ECE4] pb-3">
            AUTHORS: <span className="font-semibold text-[#1A1A1A]">{selectedPublication.authors.join(', ')}</span>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase">ABSTRACT</div>
            <p className="font-sans text-xs text-[#4A4843] leading-relaxed bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DD]">
              {selectedPublication.abstract}
            </p>
          </div>

          {/* BibTeX Section */}
          <div className="pt-2 border-t border-[#F0ECE4]">
            <button
              onClick={() => setShowBibtex(!showBibtex)}
              className="font-mono text-xs text-[var(--color-accent)] font-bold uppercase flex items-center gap-1"
            >
              <span>{showBibtex ? '▼ Hide BibTeX' : '▶ View BibTeX Record'}</span>
            </button>

            {showBibtex && (
              <div className="mt-3 relative p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DD] font-mono text-xs overflow-x-auto text-[#1A1A1A]">
                <pre>{selectedPublication.bibtex}</pre>
                <button
                  onClick={handleCopyBibtex}
                  className="absolute top-3 right-3 px-3 py-1 bg-white border border-[#E8E4DD] rounded-xl text-[10px] flex items-center gap-1 font-mono text-[var(--color-accent)] shadow-studio-sm"
                >
                  {copiedBibtex ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedBibtex ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#E8E4DD] bg-[#FAF8F5] flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#75736E]">NEXUS OPEN ACCESS</span>
          <MagneticButton
            variant="primary"
            onClick={() => { alert(`Downloading PDF for ${selectedPublication.doi}`); playClick(); }}
            className="!px-4 !py-2 text-[10px]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
};
