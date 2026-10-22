/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { BusinessConfig } from './types.ts';
import { DEFAULT_BUSINESS_CONFIG } from './data/sampleProducts.ts';
import { SampleNoticeBanner } from './components/SampleNoticeBanner.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CollectionSection } from './components/CollectionSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { HowToOrder } from './components/HowToOrder.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { OwnerSettingsDrawer } from './components/OwnerSettingsDrawer.tsx';
import { openWhatsApp } from './utils/whatsapp.ts';

const STORAGE_KEY = 'homemade_pickles_demo_config';

export default function App() {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_BUSINESS_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // fallback to default
    }
    return DEFAULT_BUSINESS_CONFIG;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSaveConfig = (newConfig: BusinessConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleFloatingWhatsApp = () => {
    openWhatsApp(config.whatsappNumber, config.welcomeMessage);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C241E] selection:bg-[#C85A32]/20 selection:text-[#1B3B2B]">
      {/* Sample Concept Banner */}
      <SampleNoticeBanner
        onOpenSettings={() => setIsSettingsOpen(true)}
        instagramHandle={config.instagramHandle}
      />

      {/* Top Bar Navigation */}
      <Navbar config={config} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero config={config} />

        {/* Product Collection Section */}
        <CollectionSection config={config} />

        {/* About Us Section */}
        <AboutSection config={config} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Food Photography Gallery */}
        <GallerySection config={config} />

        {/* How to Order Guide */}
        <HowToOrder config={config} />

        {/* Contact & Direct WhatsApp Section */}
        <ContactSection config={config} />
      </main>

      {/* Footer */}
      <Footer config={config} />

      {/* Owner Demo Settings Drawer */}
      <OwnerSettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

      {/* Floating WhatsApp Action Button (Discreet, Mobile-Friendly) */}
      <button
        onClick={handleFloatingWhatsApp}
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        aria-label="Chat on WhatsApp"
        title="Direct WhatsApp Enquiry"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs sm:text-sm font-medium tracking-wide hidden sm:inline">
          Order on WhatsApp
        </span>
      </button>
    </div>
  );
}
