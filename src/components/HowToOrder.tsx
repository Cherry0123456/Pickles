import React from 'react';
import { MessageCircle, Search, ClipboardCheck, Truck, ArrowRight } from 'lucide-react';
import { ORDER_STEPS } from '../data/sampleProducts.ts';
import { BusinessConfig } from '../types.ts';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface Props {
  config: BusinessConfig;
}

export const HowToOrder: React.FC<Props> = ({ config }) => {
  const stepIcons = [
    <Search className="w-5 h-5 text-[#C85A32]" />,
    <MessageCircle className="w-5 h-5 text-[#25D366]" />,
    <ClipboardCheck className="w-5 h-5 text-[#D49B24]" />,
    <Truck className="w-5 h-5 text-[#1B3B2B]" />,
  ];

  const handleStartOrder = () => {
    openWhatsApp(
      config.whatsappNumber,
      `Hello! I would like to place an order for homemade pickles and snacks. Please share current batch availability.`
    );
  };

  return (
    <section id="how-to-order" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
            <span>Seamless Experience</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#5C4C41]">Direct WhatsApp Ordering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] mt-2">
            How to Order From Us
          </h2>
          <p className="text-sm sm:text-base text-[#5C4C41] mt-2.5">
            Since every batch is homemade, we take orders directly on WhatsApp to ensure tailored freshness and accurate delivery.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
          {ORDER_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD3] shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F4EFE6] flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#C85A32]/40">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#142E20]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4C41] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F4EFE6] text-[11px] text-[#786457]">
                <span>Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Action Box */}
        <div className="mt-12 bg-[#1B3B2B] rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D49B24]">
              Ready to Taste Traditional Goodness?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#FAF7F2]">
              Enquire on WhatsApp today
            </h3>
            <p className="text-sm text-[#FAF7F2]/80 mt-2">
              Speak directly with the cook, customize your spice tolerance, and get freshly prepared South Indian staples.
            </p>
          </div>

          <button
            onClick={handleStartOrder}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FAF7F2] text-[#142E20] hover:bg-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all shrink-0 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#142E20]" />
          </button>
        </div>
      </div>
    </section>
  );
};
