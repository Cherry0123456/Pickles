import React, { useState } from 'react';
import { MessageCircle, Menu, X, Instagram } from 'lucide-react';
import { BusinessConfig } from '../types.ts';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface Props {
  config: BusinessConfig;
}

export const Navbar: React.FC<Props> = ({ config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    openWhatsApp(config.whatsappNumber, config.welcomeMessage);
  };

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'About Us', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'How to Order', href: '#how-to-order' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#142E20] whitespace-nowrap shrink-0 hover:text-[#25523D] transition-colors"
        >
          {config.businessName}
        </a>

        {/* Zone 2: Single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#42362E]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#142E20] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C85A32] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full text-[#42362E] hover:text-[#C85A32] hover:bg-[#F4EFE6] transition-colors"
            title="Follow on Instagram"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#1B3B2B] hover:bg-[#142E20] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D49B24]"
          >
            <MessageCircle className="w-4 h-4 text-[#D49B24]" />
            <span>Enquire on WhatsApp</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2C241E] hover:text-[#142E20] rounded-lg hover:bg-[#F4EFE6] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD3] px-6 py-5 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2C241E] hover:text-[#C85A32] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8DFD3] flex items-center justify-between">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#42362E] hover:text-[#C85A32]"
              >
                <Instagram className="w-4 h-4" />
                <span>@{config.instagramHandle}</span>
              </a>
              <span className="text-xs text-[#786457]">Homemade Goodness</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
