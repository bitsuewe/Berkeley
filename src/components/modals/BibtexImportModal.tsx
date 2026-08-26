import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { SAMPLE_BIBTEX_PASTE } from '../../data/bibtexSample';
import { X, BookOpen, CheckCircle2, Sparkles, FileCode } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const BibtexImportModal: React.FC = () => {
  const { bibtexImportOpen, setBibtexImportOpen, parseAndImportBibtex } = useCms();
  const { playClick } = useSound();
  const [bibtextInput, setBibtextInput] = useState('');
  const [importResult, setImportResult] = useState<number | null>(null);

  if (!bibtexImportOpen) return null;

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bibtextInput.trim()) return;
    playClick();
    const count = parseAndImportBibtex(bibtextInput);
    setImportResult(count);
  };

  return (
    <div 
      onClick={() => setBibtexImportOpen(false)}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fadeIn select-none"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="max-w-xl w-full bg-white border border-[#E8E4DD] shadow-studio-lg rounded-3xl overflow-hidden flex flex-col space-y-6 p-6 sm:p-8"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8E4DD] pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-bold uppercase">
            <BookOpen className="w-4 h-4" />
            <span>BIBTEX AUTOMATIC IMPORTER</span>
          </div>
          <button
            onClick={() => { setBibtexImportOpen(false); playClick(); }}
            className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#1A1A1A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {importResult !== null ? (
          <div className="py-6 text-center space-y-3 font-mono text-xs">
            <CheckCircle2 className="w-10 h-10 text-[var(--color-accent)] mx-auto" />
            <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium">
              Imported {importResult} Paper{importResult === 1 ? '' : 's'}!
            </h3>
            <MagneticButton
              variant="primary"
              onClick={() => {
                setBibtexImportOpen(false);
                setImportResult(null);
                setBibtextInput('');
                playClick();
              }}
              className="mt-2"
            >
              <span>View Publications</span>
            </MagneticButton>
          </div>
        ) : (
          <form onSubmit={handleImport} className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-[#75736E]">
              <span>PASTE RAW BIBTEX</span>
              <button
                type="button"
                onClick={() => { setBibtextInput(SAMPLE_BIBTEX_PASTE); playClick(); }}
                className="text-[var(--color-accent)] font-bold hover:underline flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" /> Sample BibTeX
              </button>
            </div>

            <textarea
              required
              rows={8}
              value={bibtextInput}
              onChange={e => setBibtextInput(e.target.value)}
              placeholder={`@article{Author2026,\n  author = {Rostova, Elena},\n  title = {Quantum Superlattice Phase Transitions},\n  journal = {Nature Physics},\n  year = {2026}\n}`}
              className="w-full p-4 bg-[#FAF8F5] border border-[#E8E4DD] rounded-2xl font-mono text-xs focus:outline-none focus:border-[var(--color-accent)] text-[#1A1A1A]"
            />

            <MagneticButton
              variant="primary"
              type="submit"
              className="w-full font-bold !py-2.5"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Parse & Add Paper</span>
            </MagneticButton>
          </form>
        )}

      </div>
    </div>
  );
};
