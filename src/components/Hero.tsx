import React, { useState } from 'react';
import { MessageCircle, ArrowDown, Instagram, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BusinessConfig } from '../types.ts';
import { heroImage } from '../data/sampleProducts.ts';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface Props {
  config: BusinessConfig;
}

export const Hero: React.FC<Props> = ({ config }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleWhatsAppInquiry = () => {
    openWhatsApp(
      config.whatsappNumber,
      `Hello! I would like to enquire about your traditional homemade pickles and snacks.`
    );
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#FAF7F2]">
      {/* Subtle organic warm background decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#EADBCE]/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#D49B24]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7">
            {/* Instagram business verification reference tag */}
            <div className="flex items-center gap-2 text-xs text-[#5C4C41]">
              <span className="font-semibold uppercase tracking-wider text-[#C85A32]">
                South Indian Culinary Heritage
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#1B3B2B] hover:text-[#C85A32] transition-colors group"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C85A32]" />
                <span className="underline decoration-[#C85A32]/40 underline-offset-2 group-hover:decoration-[#C85A32]">
                  @{config.instagramHandle}
                </span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#142E20] leading-[1.12] text-balance">
              Traditional Taste.{' '}
              <span className="italic font-normal text-[#C85A32]">Homemade Goodness.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#42362E] leading-relaxed max-w-xl">
              Discover the flavours of homemade pickles and traditional snacks.
            </p>

            <p className="text-sm text-[#786457] leading-relaxed max-w-lg">
              Crafted in small domestic batches with hand-pounded spices, sun-cured ingredients, and cold-pressed oils. Authentic South Indian taste delivered straight to your home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#collection"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] bg-[#1B3B2B] hover:bg-[#142E20] rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
              >
                <span>Explore Our Products</span>
                <ArrowDown className="w-4 h-4 text-[#D49B24]" />
              </a>

              <button
                onClick={handleWhatsAppInquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#142E20] bg-[#FAF7F2] hover:bg-[#F4EFE6] border border-[#1B3B2B]/25 rounded-xl hover:border-[#1B3B2B] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>

            {/* Instagram Social Card Preview */}
            <div className="pt-3 border-t border-[#E8DFD3] flex items-center justify-between text-xs text-[#5C4C41]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25523D]" />
                <span>Concept website built for the Instagram profile</span>
              </div>
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#C85A32] hover:underline"
              >
                Visit Instagram Profile &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD3] bg-[#F4EFE6] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              {/* Fallback container in case image is loading or fails */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-[#E8DFD3] animate-pulse flex items-center justify-center">
                  <span className="text-xs text-[#786457] font-serif">Loading artisanal pickles & spices...</span>
                </div>
              )}

              <img
                src={heroImage}
                alt="Traditional Indian pickles in ceramic glazed martaban jars and glass jars, accompanied by Indian spices and raw mangoes"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Scrim overlay for elegant framing */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Subtle caption badge over image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                  <span className="font-serif tracking-wide">Ceramic Bharani Jars & Hand-Roasted Spices</span>
                </div>
                <div className="bg-[#142E20]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-[#D49B24] font-medium border border-[#D49B24]/30">
                  Concept Visual
                </div>
              </div>
            </div>

            {/* Small decorative offset highlight */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#FAF7F2] p-3.5 rounded-xl shadow-lg border border-[#E8DFD3] max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C85A32]/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#C85A32]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#142E20]">Small-Batch Preparation</p>
                  <p className="text-[11px] text-[#786457]">Preserving authentic family culinary secrets</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-pillar trust strip below hero split */}
        <div className="mt-14 pt-8 border-t border-[#E8DFD3] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1B3B2B]/10 flex items-center justify-center shrink-0 text-[#1B3B2B] mt-0.5">
              1
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#142E20]">Authentic Recipes</h4>
              <p className="text-xs text-[#786457] mt-0.5">Rooted in South Indian household tradition</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1B3B2B]/10 flex items-center justify-center shrink-0 text-[#1B3B2B] mt-0.5">
              2
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#142E20]">Natural Sun-Curing</h4>
              <p className="text-xs text-[#786457] mt-0.5">Aged patiently without artificial colors</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1B3B2B]/10 flex items-center justify-center shrink-0 text-[#1B3B2B] mt-0.5">
              3
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#142E20]">Fresh to Order</h4>
              <p className="text-xs text-[#786457] mt-0.5">Crispy snacks fried in clean culinary oils</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1B3B2B]/10 flex items-center justify-center shrink-0 text-[#1B3B2B] mt-0.5">
              4
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#142E20]">Careful Packaging</h4>
              <p className="text-xs text-[#786457] mt-0.5">Food-grade, leak-proof jars for transit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
