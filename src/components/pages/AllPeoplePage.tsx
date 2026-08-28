import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, Users, Mail, ExternalLink, Award } from 'lucide-react';
import { useCms } from '../../context/CmsContext';
import type { Person } from '../../types/lab';

export const AllPeoplePage: React.FC = () => {
  const { people, setSelectedPerson, setCurrentView } = useCms();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const roles = useMemo(() => {
    const rSet = new Set<string>();
    people.forEach((p) => {
      if (p.role) rSet.add(p.role);
    });
    return ['all', ...Array.from(rSet)];
  }, [people]);

  const filteredPeople = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return (people || []).filter((person) => {
      const name = (person?.name || '').toLowerCase();
      const posTitle = (person?.positionTitle || '').toLowerCase();
      const role = (person?.role || '').toLowerCase();
      const bio = (person?.bio || '').toLowerCase();
      const email = (person?.email || '').toLowerCase();

      const matchesSearch =
        !q ||
        name.includes(q) ||
        posTitle.includes(q) ||
        role.includes(q) ||
        bio.includes(q) ||
        email.includes(q);

      const matchesRole =
        selectedRole === 'all' || person?.role === selectedRole;

      return matchesSearch && matchesRole;
    });
  }, [people, searchQuery, selectedRole]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#00232e] py-12 select-none animate-in fade-in duration-300">
      <div className="max-w-[1360px] w-[94%] mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-6">
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#007681] hover:text-[#005a63] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Overview</span>
          </button>

          <div className="text-xs font-mono text-slate-500 font-medium">
            {filteredPeople.length} Laboratory Members &amp; Scholars
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#007681] flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>LABORATORY PERSONNEL &amp; SCHOLARS</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#00232e] leading-tight">
            Our Research Team
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Meet the faculty, postdoctoral research fellows, doctoral candidates, and undergraduate researchers driving discovery at the Dr. Sewasew Laboratory.
          </p>
        </div>

        {/* Search & Role Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search researchers by name, focus area, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#007681] transition-colors"
            />
          </div>

          {/* Role Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap uppercase tracking-wider transition-all cursor-pointer ${
                  selectedRole === r
                    ? 'bg-[#007681] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {r === 'all' ? 'All Members' : r}
              </button>
            ))}
          </div>

        </div>

        {/* People Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPeople.map((person: Person) => (
            <div
              key={person.id}
              onClick={() => setSelectedPerson(person)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#007681] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              {/* Photo */}
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#00232e]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20">
                  {person.role}
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-xl text-[#00232e] group-hover:text-[#007681] transition-colors leading-snug">
                    {person.name}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    {person.title}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light line-clamp-3 pt-1">
                    {person.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#007681] group-hover:text-[#005a63] flex items-center gap-1">
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>

                  {person.email && (
                    <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span>{person.email}</span>
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredPeople.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 space-y-4">
            <p className="text-slate-500 font-medium">No team members found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRole('all');
              }}
              className="inline-flex items-center gap-2 bg-[#007681] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
