import React, { useState } from 'react';
import { ChefHat, Flame, Shield, Clock, Edit2, Check } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/sampleProducts.ts';

export const WhyChooseUs: React.FC = () => {
  const [points, setPoints] = useState(WHY_CHOOSE_US_POINTS);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const icons = [
    <ChefHat className="w-5 h-5 text-[#C85A32]" />,
    <Flame className="w-5 h-5 text-[#D49B24]" />,
    <Shield className="w-5 h-5 text-[#1B3B2B]" />,
    <Clock className="w-5 h-5 text-[#C85A32]" />,
  ];

  const handleUpdate = (index: number, newTitle: string, newDesc: string) => {
    const updated = [...points];
    updated[index] = { title: newTitle, description: newDesc };
    setPoints(updated);
    setEditingIndex(null);
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
            <span>Honest Craftsmanship</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#5C4C41]">Real Kitchen Standards</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] mt-2">
            Why Choose Our Homemade Creations
          </h2>
          <p className="text-sm sm:text-base text-[#5C4C41] mt-2.5">
            Transparent, small-scale culinary preparation you can trust for every family meal.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F4EFE6] flex items-center justify-center mb-5">
                  {icons[idx % icons.length]}
                </div>

                {editingIndex === idx ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      defaultValue={item.title}
                      id={`title-${idx}`}
                      className="w-full text-sm font-semibold p-1 border rounded"
                    />
                    <textarea
                      rows={3}
                      defaultValue={item.description}
                      id={`desc-${idx}`}
                      className="w-full text-xs p-1 border rounded"
                    />
                    <button
                      onClick={() => {
                        const titleEl = document.getElementById(`title-${idx}`) as HTMLInputElement;
                        const descEl = document.getElementById(`desc-${idx}`) as HTMLTextAreaElement;
                        handleUpdate(idx, titleEl.value, descEl.value);
                      }}
                      className="px-2.5 py-1 bg-[#1B3B2B] text-white text-xs rounded font-medium"
                    >
                      Save Point
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-lg font-bold text-[#142E20] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4C41] mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </>
                )}
              </div>

              {/* Editable trigger for business owner */}
              {editingIndex !== idx && (
                <div className="mt-5 pt-3 border-t border-[#F4EFE6] flex items-center justify-between text-[11px] text-[#786457]">
                  <span>Pillar {idx + 1}</span>
                  <button
                    onClick={() => setEditingIndex(idx)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C85A32] hover:underline inline-flex items-center gap-1"
                  >
                    <Edit2 className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
