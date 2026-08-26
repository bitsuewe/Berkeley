import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { MagneticButton } from '../ui/MagneticButton';
import { Send, CheckCircle2, Terminal } from 'lucide-react';

export const JoinSection: React.FC = () => {
  const { openPositions } = useCms();
  const { playClick } = useSound();

  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [positionId, setPositionId] = useState(openPositions[0]?.id || '');
  const [statement, setStatement] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase mb-2">
            09 // COLLABORATION & ADMISSIONS PORTAL
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#F0F4F8]">
            Work With Us
          </h2>
        </div>
        <p className="font-sans text-xs text-[#C0CADA] max-w-md">
          Research thrives when disciplinary boundaries dissolve. We invite postdocs, Ph.D. candidates, and visiting scholars to join our group.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Open Positions List */}
        <div className="lg:col-span-6 space-y-6">
          <div className="font-mono text-xs font-bold text-[#8A99AD] uppercase tracking-wider">
            OPEN POSITIONS & FELLOWSHIPS
          </div>

          {openPositions.map((pos) => (
            <div
              key={pos.id}
              className="p-6 rounded-2xl border border-white/10 bg-[#12151C] space-y-3 shadow-cyber-sm"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[var(--color-accent)] uppercase">{pos.type}</span>
                <span className="text-[#8A99AD]">DEADLINE: {pos.deadline}</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#F0F4F8]">
                {pos.title}
              </h3>

              <p className="font-sans text-xs text-[#C0CADA] leading-relaxed">
                {pos.description}
              </p>

              <div className="pt-2 border-t border-white/5">
                <div className="font-mono text-[10px] text-[#8A99AD] font-bold mb-1 uppercase">REQUIREMENTS:</div>
                <ul className="list-disc list-inside font-sans text-xs text-[#C0CADA] space-y-1">
                  {pos.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Application Terminal Form */}
        <div className="lg:col-span-6 p-8 rounded-2xl cyber-panel-glow space-y-6 shadow-cyber-md">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <div className="font-mono text-xs text-[var(--color-accent)] font-bold uppercase flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>APPLY // TRANSMIT SIGNAL</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#F0F4F8]">
              Submit Statement of Interest
            </h3>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4 font-mono text-xs text-[var(--color-accent)]">
              <CheckCircle2 className="w-12 h-12 mx-auto text-[var(--color-accent)]" />
              <div className="font-bold text-base text-[#F0F4F8]">Signal Transmitted</div>
              <p className="font-sans text-xs text-[#C0CADA] max-w-sm mx-auto">
                Thank you for your interest in NEXUS Laboratory. Our admissions committee will review your submission and contact you via email.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 border border-white/10 rounded text-xs text-[#F0F4F8]"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-[#8A99AD] mb-1 uppercase">Full Name *</label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={e => setApplicantName(e.target.value)}
                  placeholder="e.g. Dr. Jane Doe"
                  className="w-full p-3 bg-[#0A0B0E] border border-white/10 rounded-lg text-[#F0F4F8] focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>

              <div>
                <label className="block text-[#8A99AD] mb-1 uppercase">Email Address *</label>
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={e => setApplicantEmail(e.target.value)}
                  placeholder="name@institution.edu"
                  className="w-full p-3 bg-[#0A0B0E] border border-white/10 rounded-lg text-[#F0F4F8] focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>

              <div>
                <label className="block text-[#8A99AD] mb-1 uppercase">Position Vector *</label>
                <select
                  value={positionId}
                  onChange={e => setPositionId(e.target.value)}
                  className="w-full p-3 bg-[#0A0B0E] border border-white/10 rounded-lg text-[#F0F4F8] focus:outline-none focus:border-[var(--color-accent)]"
                >
                  {openPositions.map(p => (
                    <option key={p.id} value={p.id}>{p.title} ({p.type})</option>
                  ))}
                  <option value="general">General Visiting Scholar Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[#8A99AD] mb-1 uppercase">Research Background / Statement *</label>
                <textarea
                  required
                  rows={4}
                  value={statement}
                  onChange={e => setStatement(e.target.value)}
                  placeholder="Briefly describe your experimental or theoretical expertise and research objectives..."
                  className="w-full p-3 bg-[#0A0B0E] border border-white/10 rounded-lg text-[#F0F4F8] focus:outline-none focus:border-[var(--color-accent)] font-sans"
                />
              </div>

              <MagneticButton
                variant="primary"
                type="submit"
                className="w-full !py-3 font-bold"
              >
                <span>Transmit Application</span>
                <Send className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}
        </div>

      </div>

    </section>
  );
};
