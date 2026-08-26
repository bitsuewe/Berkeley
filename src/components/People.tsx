import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCms } from '../context/CmsContext';

export const People: React.FC = () => {
  const { people, setSelectedPerson } = useCms();

  const piPerson = people.find(p => p.role === 'PI') || people[0];
  const teamMembers = people.filter(p => p.id !== piPerson?.id);

  return (
    <section className="py-24 bg-white" id="people">
      <div className="max-w-[1180px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
        
        {/* PI Photo (Col 1 - 4 cols) */}
        <div className="lg:col-span-4">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-[#007681]/30">
            <img
              src={piPerson?.avatar || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"}
              alt="Dr Sewasew - Principal Investigator"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* PI Info (Col 2 - 4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="eyebrow">ABOUT OUR LAB</div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight text-[#102f38]">
            Driven by curiosity.<br />
            Powered by people.
          </h2>

          <div>
            <div className="text-[#007681] font-extrabold text-xl uppercase tracking-wide">
              {piPerson?.name || 'Dr. Sewasew'}
            </div>
            <div className="text-xs font-bold text-[#63666a]">
              Principal Investigator // UC Berkeley Lab
            </div>
          </div>

          <p className="text-[#63666a] text-sm leading-relaxed">
            Dr. Sewasew leads a multidisciplinary team of scientists, postdocs, and Ph.D. researchers advancing groundbreaking research at the frontiers of quantum dynamics, bio-fluidics, and neuromorphic computing.
          </p>

          <div>
            <button
              onClick={() => setSelectedPerson(piPerson)}
              className="text-link text-xs uppercase tracking-wider cursor-pointer"
            >
              <span>View full PI profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Team Members Grid (Col 3 - 4 cols) */}
        <div className="lg:col-span-4 bg-[#f7f9f9] p-8 border border-[#e3e8e9] rounded-2xl space-y-6 shadow-sm">
          <div className="text-[#007681] text-xs font-extrabold uppercase tracking-wider">
            MEET THE TEAM ({teamMembers.length} MEMBERS)
          </div>

          <div className="grid grid-cols-3 gap-4">
            {teamMembers.slice(0, 6).map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedPerson(member)}
                className="cursor-pointer group flex flex-col items-center text-center space-y-1.5"
                title={member.name}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#007681] group-hover:scale-110 transition-transform shadow-md">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] font-bold text-[#102f38] group-hover:text-[#007681] line-clamp-1 leading-tight">
                  {member.name}
                </div>
                <div className="text-[9px] font-mono text-[#63666a] uppercase">
                  {member.role}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#e3e8e9]">
            <button
              onClick={() => setSelectedPerson(teamMembers[0])}
              className="text-link text-xs uppercase tracking-wider cursor-pointer"
            >
              <span>View all lab members</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
