import React, { useState } from 'react';
import { MessageCircle, Instagram, Phone, MapPin, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';
import { BusinessConfig } from '../types.ts';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface Props {
  config: BusinessConfig;
}

export const ContactSection: React.FC<Props> = ({ config }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('Traditional Mango Pickle');
  const [quantity, setQuantity] = useState('500g Jar');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Hello! I would like to enquire about ordering:
*Name:* ${name || 'Customer'}
*Item:* ${selectedProduct} (${quantity})
*Contact Phone:* ${phone || 'Not provided'}
*Notes / Location:* ${message || 'Standard delivery enquiry'}`;

    openWhatsApp(config.whatsappNumber, formattedMsg);
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F4EFE6] border-t border-[#E8DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Business Details & Instagram Profile */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
                <span>Direct Contact</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#5C4C41]">Get in Touch</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] mt-2">
                Order & Enquire
              </h2>
              <p className="text-sm sm:text-base text-[#5C4C41] mt-2">
                We prepare our pickles and savouries in small domestic batches. Reach out directly on WhatsApp or Instagram for availability.
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-3">
              <button
                onClick={() =>
                  openWhatsApp(config.whatsappNumber, config.welcomeMessage)
                }
                className="w-full inline-flex items-center justify-between p-4 bg-[#1B3B2B] text-white rounded-xl hover:bg-[#142E20] transition-colors shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#D49B24] font-medium">WhatsApp Direct</p>
                    <p className="text-sm font-semibold">{config.displayPhone}</p>
                  </div>
                </div>
                <span className="text-xs text-white/80 group-hover:translate-x-1 transition-transform">
                  Chat Now &rarr;
                </span>
              </button>

              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-4 bg-white border border-[#E8DFD3] text-[#142E20] rounded-xl hover:border-[#C85A32]/50 hover:bg-[#FAF7F2] transition-colors shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C85A32]/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-[#C85A32]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#786457] font-medium">Official Instagram Profile</p>
                    <p className="text-sm font-semibold">@{config.instagramHandle}</p>
                  </div>
                </div>
                <span className="text-xs text-[#C85A32] group-hover:translate-x-1 transition-transform">
                  Visit Profile &rarr;
                </span>
              </a>
            </div>

            {/* Business Contact Cards */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD3] space-y-4 text-xs sm:text-sm text-[#42362E]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#142E20]">Location & Shipping</p>
                  <p className="text-[#5C4C41] text-xs mt-0.5">{config.locationText}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#F4EFE6]">
                <Clock className="w-4 h-4 text-[#D49B24] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#142E20]">Customer Service Hours</p>
                  <p className="text-[#5C4C41] text-xs mt-0.5">{config.openingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#F4EFE6]">
                <Mail className="w-4 h-4 text-[#1B3B2B] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#142E20]">Direct Inquiries</p>
                  <p className="text-[#5C4C41] text-xs mt-0.5">{config.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD3] shadow-md">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#142E20]">
                  Quick Order Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4C41] mt-1">
                  Fill in your requested sample items below to generate an instant WhatsApp message to the business.
                </p>
              </div>

              {isSent && (
                <div className="mb-6 p-4 bg-[#1B3B2B]/10 border border-[#1B3B2B]/20 rounded-xl flex items-center gap-3 text-xs text-[#142E20]">
                  <CheckCircle2 className="w-5 h-5 text-[#1B3B2B] shrink-0" />
                  <div>
                    <p className="font-semibold">WhatsApp Message Prepared!</p>
                    <p className="text-[#5C4C41]">Your enquiry was forwarded to WhatsApp. You can also chat directly anytime.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C241E] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl focus:outline-none focus:border-[#1B3B2B] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C241E] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., +91 98765 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl focus:outline-none focus:border-[#1B3B2B] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C241E] mb-1">
                      Product Interested In
                    </label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl focus:outline-none focus:border-[#1B3B2B] focus:bg-white transition-all"
                    >
                      <option value="Traditional Mango Pickle">Traditional Mango Pickle (Avakaya)</option>
                      <option value="Sun-Ripened Lemon Pickle">Sun-Ripened Lemon Pickle</option>
                      <option value="Mixed Vegetable Pickle">Mixed Vegetable Pickle</option>
                      <option value="Traditional Savoury Snacks">Traditional Savoury Snacks (Murukku)</option>
                      <option value="Assorted Festive Box">Custom Assortment / Multiple Jars</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C241E] mb-1">
                      Requested Size / Quantity
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl focus:outline-none focus:border-[#1B3B2B] focus:bg-white transition-all"
                    >
                      <option value="250g Jar">250g Trial Jar</option>
                      <option value="500g Jar">500g Standard Jar</option>
                      <option value="1kg Traditional Jar">1kg Family Size</option>
                      <option value="Multiple Jars">Custom / Bulk Batch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C241E] mb-1">
                    Special Preferences or Delivery City
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Medium spice preferred, delivery to Bengaluru..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl focus:outline-none focus:border-[#1B3B2B] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1B3B2B] hover:bg-[#142E20] text-white font-semibold text-sm rounded-xl shadow hover:shadow-md transition-all active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Send WhatsApp Enquiry</span>
                </button>

                <p className="text-[11px] text-[#786457] text-center">
                  This sends your enquiry directly to the business WhatsApp for personal assistance.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
