import React, { useState } from 'react';
import { X, SlidersHorizontal, Check, RotateCcw, Smartphone, Instagram, MapPin } from 'lucide-react';
import { BusinessConfig } from '../types.ts';
import { DEFAULT_BUSINESS_CONFIG } from '../data/sampleProducts.ts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onSaveConfig: (newConfig: BusinessConfig) => void;
}

export const OwnerSettingsDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<BusinessConfig>(config);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof BusinessConfig, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1000);
  };

  const handleReset = () => {
    setFormData(DEFAULT_BUSINESS_CONFIG);
    onSaveConfig(DEFAULT_BUSINESS_CONFIG);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl border-l border-[#E8DFD3] flex flex-col justify-between overflow-y-auto animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E8DFD3] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#1B3B2B]/10 flex items-center justify-center text-[#1B3B2B]">
              <SlidersHorizontal className="w-5 h-5 text-[#1B3B2B]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#142E20]">
                Demo Customization
              </h3>
              <p className="text-xs text-[#786457]">
                Configure details for client presentation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-[#F4EFE6] text-[#42362E] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Form */}
        <form onSubmit={handleSave} className="p-6 space-y-5 flex-1">
          <div className="p-3 bg-[#F4EFE6] rounded-xl text-xs text-[#5C4C41]">
            <p>
              Test the website with the business owner&apos;s real WhatsApp number and details. All enquiry buttons across the site will use this phone number.
            </p>
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-xs font-semibold text-[#2C241E] mb-1">
              Business Name
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E8DFD3] rounded-lg focus:outline-none focus:border-[#1B3B2B]"
            />
          </div>

          {/* WhatsApp Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-[#2C241E] mb-1 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Number (Digits with Country Code)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 919876543210"
              value={formData.whatsappNumber}
              onChange={(e) => handleChange('whatsappNumber', e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E8DFD3] rounded-lg focus:outline-none focus:border-[#1B3B2B]"
            />
            <span className="text-[11px] text-[#786457] mt-0.5 block">
              Used in wa.me links. Do not include spaces or +
            </span>
          </div>

          {/* Display Phone */}
          <div>
            <label className="block text-xs font-semibold text-[#2C241E] mb-1">
              Display Phone (Shown in UI)
            </label>
            <input
              type="text"
              value={formData.displayPhone}
              onChange={(e) => handleChange('displayPhone', e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E8DFD3] rounded-lg focus:outline-none focus:border-[#1B3B2B]"
            />
          </div>

          {/* Instagram Handle & URL */}
          <div>
            <label className="block text-xs font-semibold text-[#2C241E] mb-1 flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Instagram Profile Link</span>
            </label>
            <input
              type="text"
              value={formData.instagramUrl}
              onChange={(e) => handleChange('instagramUrl', e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E8DFD3] rounded-lg focus:outline-none focus:border-[#1B3B2B]"
            />
          </div>

          {/* Kitchen / Delivery Location */}
          <div>
            <label className="block text-xs font-semibold text-[#2C241E] mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#1B3B2B]" />
              <span>Kitchen Location & Delivery Zone</span>
            </label>
            <input
              type="text"
              value={formData.locationText}
              onChange={(e) => handleChange('locationText', e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E8DFD3] rounded-lg focus:outline-none focus:border-[#1B3B2B]"
            />
          </div>

          {/* Hours */}
          <div>
            <label className="block text-xs font-semibold text-[#2C241E] mb-1">
              Order Inquiry Hours
            </label>
            <input
              type="text"
              value={formData.openingHours}
              onChange={(e) => handleChange('openingHours', e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E8DFD3] rounded-lg focus:outline-none focus:border-[#1B3B2B]"
            />
          </div>

          {savedNotice && (
            <div className="p-2.5 bg-[#1B3B2B]/10 border border-[#1B3B2B]/30 rounded-lg flex items-center gap-2 text-xs text-[#142E20]">
              <Check className="w-4 h-4 text-[#1B3B2B]" />
              <span>Updated! All WhatsApp buttons are now active with these settings.</span>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-[#E8DFD3] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs text-[#786457] hover:text-[#C85A32]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 bg-[#1B3B2B] text-white hover:bg-[#142E20] text-xs font-semibold rounded-lg shadow transition-colors"
            >
              Apply to Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
