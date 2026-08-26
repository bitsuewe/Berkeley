import React from 'react';

interface ScientificAnnotationProps {
  figureNumber: string;
  title: string;
  value?: string;
  note?: string;
  position?: 'left' | 'right' | 'top';
  className?: string;
}

export const ScientificAnnotation: React.FC<ScientificAnnotationProps> = ({
  figureNumber,
  title,
  value,
  note,
  position = 'right',
  className = '',
}) => {
  return (
    <div className={`relative inline-flex items-center gap-3 font-mono text-[11px] select-none ${className}`}>
      {position === 'left' && (
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="font-bold tracking-widest text-[var(--color-ink-primary)]">
              FIG. {figureNumber} — {title}
            </div>
            {value && <div className="text-[var(--color-accent)] font-semibold">{value}</div>}
            {note && <div className="text-[var(--color-ink-muted)] text-[10px]">{note}</div>}
          </div>
          <svg width="40" height="2" viewBox="0 0 40 2" className="overflow-visible">
            <line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="1" r="2" fill="var(--color-accent)" />
          </svg>
        </div>
      )}

      {position === 'right' && (
        <div className="flex items-center gap-2">
          <svg width="40" height="2" viewBox="0 0 40 2" className="overflow-visible">
            <line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="40" cy="1" r="2" fill="var(--color-accent)" />
          </svg>
          <div>
            <div className="font-bold tracking-widest text-[var(--color-ink-primary)]">
              FIG. {figureNumber} — {title}
            </div>
            {value && <div className="text-[var(--color-accent)] font-semibold">{value}</div>}
            {note && <div className="text-[var(--color-ink-muted)] text-[10px]">{note}</div>}
          </div>
        </div>
      )}
    </div>
  );
};
