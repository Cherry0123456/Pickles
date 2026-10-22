import React, { useState } from 'react';
import { MessageCircle, Eye, Sparkles, AlertCircle, Check } from 'lucide-react';
import { Product, BusinessConfig } from '../types.ts';
import { SAMPLE_PRODUCTS } from '../data/sampleProducts.ts';
import { ProductDetailModal } from './ProductDetailModal.tsx';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface Props {
  config: BusinessConfig;
}

export const CollectionSection: React.FC<Props> = ({ config }) => {
  const [filter, setFilter] = useState<'all' | 'pickles' | 'snacks'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = SAMPLE_PRODUCTS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const handleQuickEnquire = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    openWhatsApp(
      config.whatsappNumber,
      `Hello! I would like to enquire about your sample item: ${product.name}. Could you share current availability and ordering details?`
    );
  };

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] tracking-wider uppercase">
              <span>Authentic Homemade Fare</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#5C4C41]">Concept Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] mt-2">
              Our Sample Collection
            </h2>
            <p className="text-sm sm:text-base text-[#5C4C41] mt-2">
              Illustrative demo products representing traditional South Indian pickles and crisp tea-time snacks.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F4EFE6] rounded-xl border border-[#E8DFD3] shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-[#1B3B2B] text-white shadow-sm'
                  : 'text-[#42362E] hover:text-[#142E20]'
              }`}
            >
              All Items ({SAMPLE_PRODUCTS.length})
            </button>
            <button
              onClick={() => setFilter('pickles')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === 'pickles'
                  ? 'bg-[#1B3B2B] text-white shadow-sm'
                  : 'text-[#42362E] hover:text-[#142E20]'
              }`}
            >
              Pickles
            </button>
            <button
              onClick={() => setFilter('snacks')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === 'snacks'
                  ? 'bg-[#1B3B2B] text-white shadow-sm'
                  : 'text-[#42362E] hover:text-[#142E20]'
              }`}
            >
              Artisanal Snacks
            </button>
          </div>
        </div>

        {/* Demo Notice Banner for Catalogue */}
        <div className="mb-10 p-4 rounded-xl bg-[#F4EFE6] border border-[#E8DFD3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5C4C41]">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#C85A32] shrink-0" />
            <span>
              <strong>Sample Catalogue Notice:</strong> These items and photographs are illustrative placeholders to demonstrate how your business offerings will be displayed to customers.
            </span>
          </div>
          <span className="text-[#142E20] font-medium shrink-0">
            Real prices & menu provided upon WhatsApp enquiry
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Product Image Area (~65% height of card) */}
              <div className="relative aspect-[4/3] bg-[#F4EFE6] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle Sample Label */}
                <div className="absolute top-3 left-3 bg-[#142E20]/85 backdrop-blur-sm text-[11px] font-medium text-[#D49B24] px-2.5 py-0.5 rounded-md border border-[#D49B24]/30">
                  Sample Item
                </div>

                {/* Quick view hover affordance */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-[#142E20] shadow">
                    <Eye className="w-3.5 h-3.5 text-[#C85A32]" />
                    Quick View
                  </span>
                </div>
              </div>

              {/* Product Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic dot */}
                  <div className="flex items-center gap-2 text-[11px] text-[#786457]">
                    <span className="uppercase tracking-wider">
                      {product.category === 'pickles' ? 'Pickle' : 'Savouries'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#C85A32]">{product.spiceLevel}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#142E20] mt-1 group-hover:text-[#C85A32] transition-colors">
                    {product.name}
                  </h3>

                  {product.regionalName && (
                    <p className="text-xs text-[#786457] italic mt-0.5">
                      {product.regionalName}
                    </p>
                  )}

                  <p className="text-xs text-[#5C4C41] mt-2 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Bottom info & Action */}
                <div className="mt-4 pt-3.5 border-t border-[#F4EFE6] flex items-center justify-between gap-2">
                  <div className="text-[11px] text-[#786457]">
                    <span>Packaging: </span>
                    <span className="font-medium text-[#2C241E]">{product.demoSizes[0]}</span>
                  </div>

                  <button
                    onClick={(e) => handleQuickEnquire(product, e)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#1B3B2B] hover:bg-[#142E20] rounded-lg transition-colors shrink-0"
                    title="Enquire on WhatsApp for this item"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          config={config}
        />
      )}
    </section>
  );
};
