import React, { useState } from 'react';
import { Heart, UtensilsCrossed, Sparkles, CheckCircle2, Edit3, Save } from 'lucide-react';
import { BusinessConfig } from '../types.ts';
import { gallerySpicesImg } from '../data/sampleProducts.ts';

interface Props {
  config: BusinessConfig;
}

export const AboutSection: React.FC<Props> = ({ config }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [headline, setHeadline] = useState('Rooted in Heritage. Crafted at Home.');
  const [paragraph1, setParagraph1] = useState(
    'Our journey began in a traditional household kitchen with a love for authentic South Indian recipes passed down through generations. Nothing compares to the robust punch of sun-cured raw mangoes, the warmth of roasted fenugreek and mustard seeds, and the aroma of pure culinary oils.'
  );
  const [paragraph2, setParagraph2] = useState(
    'Every jar of pickle and every packet of savoury snacks is prepared in limited, personal batches. We take pride in spotless kitchen hygiene, hand-selected seasonal ingredients, and patience — allowing natural curing to bring out flavours that mass-produced supermarket jars simply cannot replicate.'
  );

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Grid Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD3] bg-white aspect-[4/3]">
              <img
                src={gallerySpicesImg}
                alt="Artisanal preparation of traditional Indian pickle spices"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold text-[#D49B24] uppercase tracking-wider block">
                  Household Craft
                </span>
                <p className="font-serif text-lg leading-tight mt-0.5">
                  Stone-crushed spices & cold-pressed oils
                </p>
              </div>
            </div>

            {/* Editable helper note for demo */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#786457]">
              <span>Sample story template</span>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center gap-1 text-[#C85A32] font-semibold hover:underline"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Close Editor' : 'Edit This Introduction'}</span>
              </button>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
              <span>Our Story</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#5C4C41]">@{config.instagramHandle}</span>
            </div>

            {isEditing ? (
              <div className="space-y-4 bg-white p-5 rounded-xl border border-[#E8DFD3] shadow-sm">
                <div>
                  <label className="block text-xs font-semibold text-[#2C241E] mb-1">
                    Section Heading:
                  </label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#E8DFD3] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2C241E] mb-1">
                    First Paragraph:
                  </label>
                  <textarea
                    rows={3}
                    value={paragraph1}
                    onChange={(e) => setParagraph1(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#E8DFD3] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2C241E] mb-1">
                    Second Paragraph:
                  </label>
                  <textarea
                    rows={3}
                    value={paragraph2}
                    onChange={(e) => setParagraph2(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#E8DFD3] rounded-lg"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1B3B2B] text-white text-xs font-semibold rounded-lg hover:bg-[#142E20]"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Save Preview Text
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] leading-tight">
                  {headline}
                </h2>

                <p className="text-base text-[#42362E] leading-relaxed">
                  {paragraph1}
                </p>

                <p className="text-sm sm:text-base text-[#5C4C41] leading-relaxed">
                  {paragraph2}
                </p>
              </>
            )}

            {/* Key Quality Commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-[#2C241E]">
                  <strong>100% Home Kitchen Preparation</strong> without industrial preservatives.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-[#2C241E]">
                  <strong>Traditional Sun-Drying</strong> methods for peak shelf life and natural aroma.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-[#2C241E]">
                  <strong>Pure Culinary Spices</strong> toasted and ground in-house for honest punch.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-[#2C241E]">
                  <strong>Custom Orders Welcome</strong> for festive family events and bulk requests.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
