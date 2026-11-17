import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/gymData';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const currentPhoto = activeLightboxIndex !== null ? GALLERY_PHOTOS[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-ivory text-emerald-deep border-b border-ivory-border">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-emerald/15 gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald text-gold text-xs font-mono uppercase tracking-wider font-bold">
              06 / VISUAL PORTFOLIO
            </span>
            <h2 className="heading-section font-bold font-serif text-emerald-deep uppercase">
              THE WORKOUT <span className="text-forest italic font-normal tracking-normal">GALLERY.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-mono text-emerald/70 leading-relaxed">
            GLIMPSES OF THE WORKOUT FLOOR, CALIBRATED FREE WEIGHTS, AND MODERN RESISTANCE SUITE ON KAMGAR HOSPITAL ROAD.
          </p>
        </div>

        {/* Creative Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {GALLERY_PHOTOS.map((photo, idx) => {
            const spanClass =
              photo.aspect === 'wide'
                ? 'col-span-1 sm:col-span-2 lg:col-span-8 h-64 sm:h-80 lg:h-96'
                : photo.aspect === 'tall'
                ? 'col-span-1 lg:col-span-4 h-72 sm:h-96 lg:h-[450px]'
                : 'col-span-1 lg:col-span-4 h-64 sm:h-80 lg:h-96';

            return (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-emerald-deep border-2 border-gold/20 hover:border-gold transition-all duration-300 shadow-lg hover:shadow-2xl ${spanClass}`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Corner Zoom Pill in Champagne Gold */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#091C17]/80 backdrop-blur-md text-gold opacity-0 group-hover:opacity-100 transition-opacity border border-gold/40">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-3 py-1 rounded-full bg-emerald text-gold border border-gold/30 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {photo.tag}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-serif text-white mt-2 leading-snug">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-ivory/80 mt-0.5 line-clamp-1 font-sans">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {currentPhoto && activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#091C17]/95 backdrop-blur-xl">
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-emerald text-white hover:text-gold transition-colors border border-gold/30"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={() =>
              setActiveLightboxIndex(
                (activeLightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
              )
            }
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-emerald text-white hover:text-gold transition-colors border border-gold/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() =>
              setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_PHOTOS.length)
            }
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-emerald text-white hover:text-gold transition-colors border border-gold/30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image Container */}
          <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
            <img
              src={currentPhoto.image}
              alt={currentPhoto.title}
              className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border-2 border-gold/40"
            />
            <div className="text-center mt-4 text-ivory">
              <span className="text-xs font-mono text-gold uppercase font-bold">
                {currentPhoto.tag} • {activeLightboxIndex + 1} of {GALLERY_PHOTOS.length}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mt-1 text-white">
                {currentPhoto.title}
              </h3>
              <p className="text-xs text-ivory/70 mt-1 max-w-lg mx-auto font-sans">
                {currentPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
