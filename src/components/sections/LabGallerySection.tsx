import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { useSound } from '../../context/SoundContext';
import { Camera } from 'lucide-react';

export const LabGallerySection: React.FC = () => {
  const { labImages } = useCms();
  const { playClick, playPaperLift } = useSound();

  const [activeImageId, setActiveImageId] = useState<string | null>(null);

  const activeImage = labImages.find(img => img.id === activeImageId);

  return (
    <section id="lab" className="py-12 border-t border-[#E8E4DD] space-y-6 select-none">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8E4DD] pb-4">
        <div>
          <div className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase mb-1">
            08 // LAB ENVIRONMENT
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#1A1A1A]">
            Inside the Laboratory
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {labImages.map((img) => (
          <div
            key={img.id}
            onMouseEnter={playPaperLift}
            onClick={() => { setActiveImageId(img.id); playClick(); }}
            data-cursor="ZOOM"
            className="group relative rounded-2xl overflow-hidden border border-[#E8E4DD] bg-white shadow-studio-sm hover:shadow-studio-md transition-all duration-300 cursor-pointer select-none"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full font-mono text-[9px] font-bold text-[var(--color-accent)] uppercase">
                {img.category}
              </div>
            </div>

            <div className="p-4 bg-white space-y-1">
              <h3 className="font-serif text-base font-medium text-[#1A1A1A] group-hover:text-[var(--color-accent)] transition-colors">
                {img.title}
              </h3>
              <p className="font-sans text-[11px] text-[#75736E] line-clamp-2">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Image Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImageId(null)}
          className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md p-6 flex items-center justify-center animate-fadeIn cursor-pointer"
        >
          <div className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden border border-[#E8E4DD] shadow-studio-lg p-6 space-y-4" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between font-mono text-xs">
              <div>
                <div className="font-bold text-[var(--color-accent)] uppercase">{activeImage.category}</div>
                <div className="font-serif text-2xl text-[#1A1A1A] font-medium">{activeImage.title}</div>
              </div>
              <div className="text-[10px] text-[#75736E] text-right">
                <div>CAMERA: {activeImage.exif.camera}</div>
                <div>DATE: {activeImage.exif.date}</div>
              </div>
            </div>

            <button
              onClick={() => setActiveImageId(null)}
              className="w-full py-2.5 bg-[#1A1A1A] text-white font-mono text-xs uppercase rounded-xl"
            >
              Close Fullscreen View
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
