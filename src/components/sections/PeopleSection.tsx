import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { MapPin, ChevronRight } from 'lucide-react';

export const PeopleSection: React.FC = () => {
  const { people, setSelectedPerson } = useCms();
  const { playTick, playClick } = useSound();

  const [activeRoleFilter, setActiveRoleFilter] = useState<string>('ALL');

  const roles = [
    { key: 'ALL', label: 'All' },
    { key: 'PI', label: 'PI' },
    { key: 'Postdoc', label: 'Postdoc' },
    { key: 'PhD', label: 'PhD' },
    { key: 'Alumni', label: 'Alumni' },
  ];

  const filteredPeople = people.filter(p => {
    if (activeRoleFilter === 'ALL') return true;
    return p.role === activeRoleFilter;
  });

  return (
    <section id="people" className="py-12 border-t border-[#E8E4DD] space-y-6 select-none">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8E4DD] pb-4">
        <div>
          <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase mb-1">
            07 // RESEARCH TEAM
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#1A1A1A]">
            People & Collaborators
          </h2>
        </div>

        {/* Role Filters */}
        <div className="flex flex-wrap gap-1 font-mono text-xs">
          {roles.map(r => (
            <button
              key={r.key}
              onClick={() => { setActiveRoleFilter(r.key); playClick(); }}
              className={`px-3 py-1 rounded-full transition-all text-[10px] ${
                activeRoleFilter === r.key
                  ? 'bg-[#1A1A1A] text-white font-bold'
                  : 'bg-white text-[#75736E] border border-[#E8E4DD]'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Roster Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredPeople.map((person) => (
          <div
            key={person.id}
            onMouseEnter={playTick}
            onClick={() => { setSelectedPerson(person); playClick(); }}
            data-cursor="PROFILE"
            className="p-5 rounded-2xl border border-[#E8E4DD] bg-white hover:border-[var(--color-accent)] hover:shadow-studio-md transition-all duration-200 cursor-pointer space-y-3 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E8E4DD] bg-[#FAF8F5] flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-0.5 flex-1">
                <div className="font-mono text-[9px] text-[var(--color-accent)] font-bold uppercase">
                  {person.role}
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1A1A] group-hover:text-[var(--color-accent)] transition-colors">
                  {person.name}
                </h3>
                <div className="font-sans text-[11px] text-[#75736E] line-clamp-1">
                  {person.positionTitle}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#F0ECE4] flex items-center justify-between font-mono text-[10px] text-[#75736E]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[var(--color-accent)]" /> {person.office.split(',')[0]}
              </span>
              <span className="text-[var(--color-accent)] font-bold flex items-center gap-0.5">
                <span>Profile</span>
                <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
