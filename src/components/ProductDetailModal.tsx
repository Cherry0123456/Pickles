import React, { useState } from 'react';
import { X, MessageCircle, AlertCircle, Sparkles, Check, Package, Flame } from 'lucide-react';
import { Product, BusinessConfig } from '../types.ts';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface Props {
  product: Product | null;
  onClose: () => void;
  config: BusinessConfig;
}

export const ProductDetailModal: React.FC<Props> = ({ product, onClose, config }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.demoSizes[0]);
  const [customNote, setCustomNote] = useState('');

  const handleWhatsAppEnquiry = () => {
    let msg = `Hello! I would like to enquire about your ${product.name} (${selectedSize}).`;
    if (customNote.trim()) {
      msg += ` Note: ${customNote.trim()}`;
    }
    msg += ` Please let me know the current batch availability and order details.`;
    openWhatsApp(config.whatsappNumber, msg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#FAF7F2] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E8DFD3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Column */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-[#F4EFE6] min-h-[260px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#142E20]/90 backdrop-blur-md px-3 py-1 rounded text-xs text-[#D49B24] font-medium border border-[#D49B24]/30">
              Sample Item
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-sm text-[11px] text-[#FAF7F2] px-3 py-1.5 rounded-lg border border-white/10">
              Demo presentation visual
            </div>
          </div>

          {/* Product Details Column */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#786457] uppercase tracking-wider">
                <span>{product.category === 'pickles' ? 'Traditional Pickle' : 'Artisanal Snack'}</span>
                {product.regionalName && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#C85A32] normal-case font-medium">{product.regionalName}</span>
                  </>
                )}
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#142E20] mt-1">
                {product.name}
              </h3>

              <p className="text-sm text-[#42362E] mt-2.5 leading-relaxed">
                {product.description}
              </p>

              {/* Spice Profile & Highlights */}
              <div className="mt-4 pt-3 border-t border-[#E8DFD3] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#786457] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Spice Level:</span>
                  </span>
                  <span className="font-semibold text-[#142E20]">{product.spiceLevel}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#786457] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D49B24]" />
                    <span>Batch Highlight:</span>
                  </span>
                  <span className="font-medium text-[#142E20]">{product.highlight}</span>
                </div>
              </div>

              {/* Sample Portion Sizes */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#42362E] mb-2">
                  Illustrative Portion Sizes:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.demoSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                        selectedSize === size
                          ? 'bg-[#1B3B2B] text-white shadow-sm'
                          : 'bg-[#F4EFE6] text-[#42362E] hover:bg-[#E8DFD3]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom message note */}
              <div className="mt-4">
                <label className="block text-xs text-[#786457] mb-1">
                  Custom enquiry note (optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g., Spice level preference or delivery city"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-[#E8DFD3] focus:outline-none focus:border-[#1B3B2B]"
                />
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1B3B2B] hover:bg-[#142E20] rounded-xl shadow transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enquire via WhatsApp for {selectedSize}</span>
              </button>

              <div className="flex items-center gap-1.5 text-[11px] text-[#786457] justify-center text-center">
                <AlertCircle className="w-3.5 h-3.5 text-[#D49B24] shrink-0" />
                <span>Demo item. Final prices & sizes provided directly on enquiry.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
