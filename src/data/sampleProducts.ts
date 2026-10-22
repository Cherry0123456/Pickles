import { Product, BusinessConfig } from '../types.ts';

// Product images generated Contextually for the demo
import heroImage from '../assets/images/hero_traditional_pickles_1792675265178.jpg';
import mangoPickleImg from '../assets/images/product_mango_pickle_1792675266567.jpg';
import lemonPickleImg from '../assets/images/product_lemon_pickle_1792675265192.jpg';
import mixedPickleImg from '../assets/images/product_mixed_pickle_1792675266600.jpg';
import snacksImg from '../assets/images/product_traditional_snacks_1792675266840.jpg';
import gallerySpicesImg from '../assets/images/gallery_spices_preparation_1792675268573.jpg';

export { heroImage, mangoPickleImg, lemonPickleImg, mixedPickleImg, snacksImg, gallerySpicesImg };

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  businessName: 'Homemade Pickles & Snacks',
  tagline: 'Traditional Taste. Homemade Goodness.',
  instagramHandle: 'homemadepickels_snacks',
  instagramUrl: 'https://www.instagram.com/homemadepickels_snacks/',
  whatsappNumber: '919876543210',
  displayPhone: '+91 98765 43210',
  locationText: 'Homemade with care in South India · Pan-India Delivery',
  openingHours: 'Taking orders Mon–Sat, 9:00 AM – 7:00 PM',
  email: 'orders@homemadepickles.demo',
  welcomeMessage: 'Hello! I saw your website and would like to enquire about your homemade pickles and snacks.',
};

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'sample-mango-pickle',
    name: 'Traditional Mango Pickle',
    regionalName: 'Avakaya / Cut Mango Achar',
    category: 'pickles',
    tagline: 'Classic South Indian raw mango pickle prepared with stone-ground mustard and pure oil.',
    description: 'An illustrative sample of our signature homemade mango pickle. Made in small artisanal batches with firm, freshly cut raw mangoes and aromatic ground spices.',
    image: mangoPickleImg,
    fallbackColor: '#8C381F',
    demoSizes: ['250g Jar', '500g Jar', '1kg Ceramic Bharani'],
    spiceLevel: 'Traditional Spicy',
    highlight: 'Prepared in small batches',
    isPopular: true,
  },
  {
    id: 'sample-lemon-pickle',
    name: 'Sun-Ripened Lemon Pickle',
    regionalName: 'Nimmakaya / Nimbu Achar',
    category: 'pickles',
    tagline: 'Zesty cured lemons tempered with fenugreek, mustard, and warming spices.',
    description: 'Illustrative demo item. Tangy, naturally cured lemons seasoned according to time-tested South Indian family recipes. Pairs wonderfully with curd rice and warm meals.',
    image: lemonPickleImg,
    fallbackColor: '#B57C1E',
    demoSizes: ['250g Jar', '500g Jar', '1kg Jar'],
    spiceLevel: 'Medium',
    highlight: 'Naturally cured recipe',
    isPopular: false,
  },
  {
    id: 'sample-mixed-vegetable',
    name: 'Mixed Vegetable Pickle',
    regionalName: 'Pachadi / Garden Vegetable Blend',
    category: 'pickles',
    tagline: 'Crisp seasonal vegetables steeped in cold-pressed oil and crushed red chilies.',
    description: 'Illustrative demo item. A colourful medley of tender seasonal vegetables infused with roasted whole spices. Balanced crunch and aromatic tang in every spoonful.',
    image: mixedPickleImg,
    fallbackColor: '#9E4424',
    demoSizes: ['250g Jar', '500g Jar', '1kg Jar'],
    spiceLevel: 'Medium',
    highlight: 'Seasonal vegetable mix',
    isPopular: false,
  },
  {
    id: 'sample-savoury-snacks',
    name: 'Traditional Savoury Snacks',
    regionalName: 'Murukku, Ribbon Pakoda & Mixture',
    category: 'snacks',
    tagline: 'Crispy, golden South Indian savouries freshly fried in clean culinary oils.',
    description: 'Illustrative demo item. Classic crunchy tea-time snacks including handmade spiral murukku, ribbon pakoda, and spiced mixture made to order for optimum freshness.',
    image: snacksImg,
    fallbackColor: '#7A5424',
    demoSizes: ['200g Pouch', '500g Box', '1kg Festive Pack'],
    spiceLevel: 'Mild',
    highlight: 'Freshly fried to order',
    isPopular: true,
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g-1',
    title: 'Authentic Ceramic Martaban Jars',
    caption: 'Traditional glazed bharanis used to preserve the rich, authentic flavours of Indian pickles.',
    image: heroImage,
    category: 'Pickling Craft',
  },
  {
    id: 'g-2',
    title: 'Whole Spices & Fresh Raw Mangoes',
    caption: 'Carefully chosen ingredients, red chilies, and cold-pressed oils prepared in small batches.',
    image: mangoPickleImg,
    category: 'Ingredients',
  },
  {
    id: 'g-3',
    title: 'Traditional Savoury Snacks Platter',
    caption: 'Crisp spiral murukku and golden savory snacks served traditionally on fresh banana leaves.',
    image: snacksImg,
    category: 'Snacks',
  },
  {
    id: 'g-4',
    title: 'Artisanal Spice Grinding',
    caption: 'Stone-crushed fenugreek, mustard, and fragrant turmeric prepared according to family recipes.',
    image: gallerySpicesImg,
    category: 'Heritage Method',
  },
  {
    id: 'g-5',
    title: 'Tangy Lemon Pickle in Ceramic Bowl',
    caption: 'Sun-cured juicy lemons steeped in spiced aromatic oil.',
    image: lemonPickleImg,
    category: 'Pickling Craft',
  },
  {
    id: 'g-6',
    title: 'Crunchy Garden Mixed Vegetables',
    caption: 'Fresh carrots, cauliflower, and green chilies infused with rich mustard oil.',
    image: mixedPickleImg,
    category: 'Varieties',
  },
];

export const ORDER_STEPS = [
  {
    step: '01',
    title: 'Browse Catalogue',
    description: 'Explore our sample collection of traditional pickles and crispy homemade snacks.',
  },
  {
    step: '02',
    title: 'Tap WhatsApp Enquiry',
    description: 'Click any enquiry button to open WhatsApp with your chosen item pre-filled.',
  },
  {
    step: '03',
    title: 'Confirm Details',
    description: 'Discuss jar sizes, current batch availability, custom spice levels, and delivery address.',
  },
  {
    step: '04',
    title: 'Freshly Prepared & Delivered',
    description: 'Your order is securely packed in leak-proof packaging and delivered to your doorstep.',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Small-Batch Preparation',
    description: 'Prepared in limited household quantities rather than mass industrial factories, preserving genuine home flavours.',
  },
  {
    title: 'Traditional Family Recipes',
    description: 'Crafted with age-old South Indian pickling methods, sun-curing processes, and authentic regional taste balance.',
  },
  {
    title: 'Hand-Selected Spices & Oils',
    description: 'Quality mustard seeds, whole red chilies, fenugreek, and cold-pressed oils without artificial synthetic food colors.',
  },
  {
    title: 'Made to Order Freshness',
    description: 'Savouries are crisp and fresh; pickles are matured naturally and packed carefully in leak-proof food-safe containers.',
  },
];
