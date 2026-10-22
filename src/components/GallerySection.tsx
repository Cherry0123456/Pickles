import React, { useState } from 'react';
import { Maximize2, X, Sparkles, Instagram } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/sampleProducts.ts';
import { BusinessConfig } from '../types.ts';

interface Props {
  config: BusinessConfig;
}

export const GallerySection: React.FC<Props> = ({ config }) => {
  const [activePhoto, setActivePhoto] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F4EFE6] border-t border-[#E8DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
              <span>Visual Showcase</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#5C4C41]">Culinary Moments</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] mt-2">
              From Our Kitchen to Yours
            </h2>
            <p className="text-sm sm:text-base text-[#5C4C41] mt-2">
              A glimpse into the textures, colors, and craftsmanship of homemade South Indian food.
            </p>
          </div>

          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E8DFD3] rounded-xl text-xs sm:text-sm font-semibold text-[#142E20] hover:text-[#C85A32] hover:border-[#C85A32]/40 shadow-sm transition-all shrink-0 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#C85A32]" />
            <span>More Photos on Instagram (@{config.instagramHandle})</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E8DFD3] shadow-sm hover:shadow-md cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Content text */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-semibold text-[#D49B24] bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded border border-[#D49B24]/30">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-black max-h-[70vh]">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#FAF7F2]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase">
                <span>{activePhoto.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#786457]">Demo Visual Asset</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#142E20] mt-1">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-[#42362E] mt-2">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
