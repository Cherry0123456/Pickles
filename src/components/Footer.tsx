import React from 'react';
import { Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { BusinessConfig } from '../types.ts';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface Props {
  config: BusinessConfig;
}

export const Footer: React.FC<Props> = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142E20] text-[#FAF7F2] border-t border-[#25523D]/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#25523D]/50">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
              {config.businessName}
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 max-w-sm leading-relaxed">
              Traditional South Indian homemade pickles and savoury snacks prepared in artisanal family batches. Pure culinary goodness delivered to your doorstep.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25523D] hover:bg-[#316B50] text-[#D49B24] flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={() =>
                  openWhatsApp(config.whatsappNumber, config.welcomeMessage)
                }
                className="w-9 h-9 rounded-full bg-[#25523D] hover:bg-[#316B50] text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D49B24]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF7F2]/80">
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Sample Collection
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Homemade Story
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Food Photography Gallery
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-white transition-colors">
                  How to Enquire & Order
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Demo Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D49B24]">
              Website Demo Concept
            </h4>
            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed">
              Prepared as a demo proposal for the business behind Instagram handle{' '}
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D49B24] underline hover:text-white"
              >
                @{config.instagramHandle}
              </a>
              . All products and prices displayed are illustrative samples ready to be replaced with genuine business inventory.
            </p>
            <div className="pt-2 text-xs text-[#FAF7F2]/60">
              <span>Delivery: {config.locationText}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>
            &copy; {new Date().getFullYear()} {config.businessName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
