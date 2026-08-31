import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import type { AccentTheme } from '../../types/lab';
import { X, Settings, Plus, Trash2 } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const AdminCmsModal: React.FC = () => {
  const {
    adminOpen,
    setAdminOpen,
    accentTheme,
    setAccentTheme,
    publications,
    addPublication,
    deletePublication,
  } = useCms();
  const { playClick } = useSound();

  const [activeTab, setActiveTab] = useState<'theme' | 'publications'>('publications');

  // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newAuthors, setNewAuthors] = useState('');
  const [newJournal, setNewJournal] = useState('');
  const [newYear, setNewYear] = useState(new Date().getFullYear());
  const [newDoi, setNewDoi] = useState('');

  if (!adminOpen) return null;

  const handleCreatePublication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newJournal) return;
    playClick();
    addPublication({
      title: newTitle,
      authors: newAuthors.split(',').map(a => a.trim()),
      journal: newJournal,
      year: Number(newYear),
      doi: newDoi || `10.1038/sewasew-${Date.now()}`,
      abstract: 'Abstract summary added via CMS Control Panel.',
      researchAreaId: 'res-paleoanthropology',
      citationsCount: 0,
      bibtex: `@article{sewasew${Date.now()},\n  title={${newTitle}},\n  journal={${newJournal}},\n  year={${newYear}}\n}`,
      tags: ['Admin Published']
    });
    setNewTitle('');
    setNewAuthors('');
    setNewJournal('');
    setNewDoi('');
  };

  const themes: { key: AccentTheme; label: string; color: string }[] = [
    { key: 'orange', label: 'Terracotta Red', color: '#D9381E' },
    { key: 'cobalt', label: 'Electric Cobalt', color: '#1D4ED8' },
    { key: 'green', label: 'Emerald Green', color: '#059669' },
    { key: 'cyan', label: 'Deep Cyan', color: '#0284C7' },
    { key: 'vermilion', label: 'Dark Violet', color: '#7C3AED' },
  ];

  return (
    <div 
      onClick={() => setAdminOpen(false)}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fadeIn select-none"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="max-w-3xl w-full max-h-[90vh] bg-white border border-[#E8E4DD] shadow-studio-lg rounded-3xl overflow-hidden flex flex-col"
      >
        
        {/* Header */}
        <div className="p-6 border-b border-[#E8E4DD] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-bold uppercase">
            <Settings className="w-4 h-4" />
            <span>SEWASEW LAB CMS CONTROL PANEL</span>
          </div>
          <button
            onClick={() => { setAdminOpen(false); playClick(); }}
            className="p-1.5 rounded-full hover:bg-white text-[#1A1A1A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[#E8E4DD] bg-[#FAF8F5] font-mono text-xs">
          <button
            onClick={() => { setActiveTab('publications'); playClick(); }}
            className={`px-5 py-3 border-b-2 font-bold transition-all ${
              activeTab === 'publications' ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-white' : 'border-transparent text-[#75736E]'
            }`}
          >
            Publications ({publications.length})
          </button>
          <button
            onClick={() => { setActiveTab('theme'); playClick(); }}
            className={`px-5 py-3 border-b-2 font-bold transition-all ${
              activeTab === 'theme' ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-white' : 'border-transparent text-[#75736E]'
            }`}
          >
            Studio Colors
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 font-mono text-xs">
          {activeTab === 'publications' && (
            <div className="space-y-6">
              <form onSubmit={handleCreatePublication} className="p-5 rounded-2xl border border-[#E8E4DD] bg-[#FAF8F5] space-y-3">
                <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[var(--color-accent)]" /> Add New Publication Record
                </div>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="Paper Title *"
                  className="w-full p-2 bg-white border border-[#E8E4DD] rounded-xl text-[#1A1A1A]"
                />
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    required
                    value={newAuthors}
                    onChange={e => setNewAuthors(e.target.value)}
                    placeholder="Authors (comma separated) *"
                    className="w-full p-2 bg-white border border-[#E8E4DD] rounded-xl text-[#1A1A1A]"
                  />
                  <input
                    type="text"
                    required
                    value={newJournal}
                    onChange={e => setNewJournal(e.target.value)}
                    placeholder="Journal Name *"
                    className="w-full p-2 bg-white border border-[#E8E4DD] rounded-xl text-[#1A1A1A]"
                  />
                  <input
                    type="number"
                    required
                    value={newYear}
                    onChange={e => setNewYear(Number(e.target.value))}
                    placeholder="Year *"
                    className="w-full p-2 bg-white border border-[#E8E4DD] rounded-xl text-[#1A1A1A]"
                  />
                </div>
                <MagneticButton variant="primary" type="submit" className="w-full font-bold">
                  <span>Add Paper Record</span>
                </MagneticButton>
              </form>

              <div className="space-y-2">
                <div className="font-bold text-[#75736E] uppercase">CATALOG ({publications.length})</div>
                {publications.map(pub => (
                  <div key={pub.id} className="p-3 rounded-xl border border-[#E8E4DD] bg-[#FAF8F5] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[var(--color-accent)]">{pub.journal} ({pub.year})</div>
                      <div className="font-serif text-sm text-[#1A1A1A]">{pub.title}</div>
                    </div>
                    <button
                      onClick={() => deletePublication(pub.id)}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'theme' && (
            <div className="grid grid-cols-2 gap-3">
              {themes.map(t => (
                <button
                  key={t.key}
                  onClick={() => { setAccentTheme(t.key); playClick(); }}
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                    accentTheme === t.key ? 'border-[var(--color-accent)] bg-[#FAF8F5] shadow-studio-sm font-bold text-[var(--color-accent)]' : 'border-[#E8E4DD] bg-white'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: t.color }} />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-[#E8E4DD] bg-[#FAF8F5] flex justify-end">
          <MagneticButton variant="primary" onClick={() => setAdminOpen(false)} className="!px-4 !py-1.5 text-[10px]">
            <span>Close Control Panel</span>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
};
