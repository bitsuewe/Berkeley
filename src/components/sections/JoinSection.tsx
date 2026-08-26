import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { MagneticButton } from '../ui/MagneticButton';
import { Send, CheckCircle2 } from 'lucide-react';

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
    <section id="join" className="py-12 border-t border-[#E8E4DD] space-y-6 select-none">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8E4DD] pb-4">
        <div>
          <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase mb-1">
            09 // ADMISSIONS PORTAL
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#1A1A1A]">
            Work With Us
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {/* Open Positions List */}
        <div className="space-y-3">
          <div className="font-mono text-xs font-bold text-[#75736E] uppercase">
            OPEN FELLOWSHIPS ({openPositions.length})
          </div>

          {openPositions.map((pos) => (
            <div
              key={pos.id}
              className="p-5 rounded-2xl border border-[#E8E4DD] bg-white space-y-2 shadow-studio-sm"
            >
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="font-bold text-[var(--color-accent)] uppercase">{pos.type}</span>
                <span className="text-[#75736E]">DEADLINE: {pos.deadline}</span>
              </div>

              <h3 className="font-serif text-xl font-medium text-[#1A1A1A]">
                {pos.title}
              </h3>

              <p className="font-sans text-xs text-[#75736E] leading-relaxed">
                {pos.description}
              </p>
            </div>
          ))}
        </div>

        {/* Application Terminal Form */}
        <div className="p-6 rounded-3xl bg-white border border-[#E8E4DD] shadow-studio-md space-y-4">
          <div className="border-b border-[#F0ECE4] pb-3">
            <div className="font-mono text-xs text-[var(--color-accent)] font-bold uppercase">
              APPLY // TRANSMIT APPLICATION
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#1A1A1A]">
              Submit Statement of Interest
            </h3>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3 font-mono text-xs">
              <CheckCircle2 className="w-10 h-10 text-[var(--color-accent)] mx-auto" />
              <div className="font-serif text-xl text-[#1A1A1A] font-medium">Application Received</div>
              <p className="font-sans text-xs text-[#75736E] max-w-sm mx-auto">
                Thank you for your interest in NEXUS Laboratory. Our admissions committee will review your submission and contact you via email.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-3 py-1.5 border border-[#E8E4DD] rounded-xl text-xs text-[#1A1A1A]"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-[#75736E] mb-1 uppercase">Full Name *</label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={e => setApplicantName(e.target.value)}
                  placeholder="Dr. Jane Doe"
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E4DD] rounded-xl text-[#1A1A1A] focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>

              <div>
                <label className="block text-[#75736E] mb-1 uppercase">Email Address *</label>
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={e => setApplicantEmail(e.target.value)}
                  placeholder="name@institution.edu"
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E4DD] rounded-xl text-[#1A1A1A] focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>

              <div>
                <label className="block text-[#75736E] mb-1 uppercase">Position Vector *</label>
                <select
                  value={positionId}
                  onChange={e => setPositionId(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E4DD] rounded-xl text-[#1A1A1A] focus:outline-none focus:border-[var(--color-accent)]"
                >
                  {openPositions.map(p => (
                    <option key={p.id} value={p.id}>{p.title} ({p.type})</option>
                  ))}
                  <option value="general">General Visiting Scholar Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[#75736E] mb-1 uppercase">Research Background / Statement *</label>
                <textarea
                  required
                  rows={3}
                  value={statement}
                  onChange={e => setStatement(e.target.value)}
                  placeholder="Briefly describe your experimental or theoretical expertise..."
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E4DD] rounded-xl text-[#1A1A1A] focus:outline-none focus:border-[var(--color-accent)] font-sans"
                />
              </div>

              <MagneticButton
                variant="primary"
                type="submit"
                className="w-full !py-2.5 font-bold"
              >
                <span>Transmit Application</span>
                <Send className="w-3.5 h-3.5" />
              </MagneticButton>
            </form>
          )}
        </div>

      </div>

    </section>
  );
};
