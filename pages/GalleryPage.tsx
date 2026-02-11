import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';

const GALLERY_IMAGES = [
  {
    src: '/eternal-interior.png',
    alt: 'Eternal Embrace interior — modern lobby with grand staircases, chandelier, and natural light',
  },
  {
    src: '/eternal-facade-2.png',
    alt: 'Eternal Embrace facade — grand entrance with ceremonial ribbon and floral arrangements',
  },
];

export const GalleryPage: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [lightboxImage]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main aria-label="Gallery" className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-[2.25rem] sm:text-4xl md:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.2]">
              Gallery
            </h1>
            <p className="mt-4 text-[1.125rem] sm:text-lg text-slate-500 max-w-xl mx-auto leading-[1.6]">
              A glimpse of our serene spaces and peaceful surroundings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxImage(img)}
                className="group relative overflow-hidden rounded-2xl shadow-md w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 min-h-[200px] touch-manipulation"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[240px] sm:h-[280px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="View full size image"
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-3 min-h-[48px] min-w-[48px] flex items-center justify-center text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors touch-manipulation"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
