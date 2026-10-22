export interface Product {
  id: string;
  name: string;
  regionalName?: string;
  category: 'pickles' | 'snacks';
  tagline: string;
  description: string;
  image: string;
  fallbackColor: string;
  demoSizes: string[];
  spiceLevel: 'Mild' | 'Medium' | 'Traditional Spicy' | 'Extra Hot';
  highlight: string;
  isPopular?: boolean;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string; // e.g. "919876543210" without '+' for wa.me link
  displayPhone: string;   // e.g. "+91 98765 43210"
  locationText: string;
  openingHours: string;
  email: string;
  welcomeMessage: string;
}
