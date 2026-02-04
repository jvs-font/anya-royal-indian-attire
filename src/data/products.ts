export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'lehenga' | 'saree' | 'anarkali' | 'accessory';
  price: number;
  originalPrice?: number;
  description: string;
  fabric: string;
  embroidery: string;
  color: string;
  occasion: string[];
  images: string[];
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Maharani Rose Lehenga',
    slug: 'maharani-rose-lehenga',
    category: 'lehenga',
    price: 285000,
    description: 'An exquisite rose gold lehenga featuring intricate zardozi work and hand-embroidered floral motifs. Perfect for the modern bride who cherishes tradition.',
    fabric: 'Raw Silk with Organza Dupatta',
    embroidery: 'Zardozi, Sequin, Pearl Work',
    color: 'Rose Gold',
    occasion: ['Wedding', 'Reception'],
    images: [
      'https://images.unsplash.com/photo-1610030469668-7e8e23f3a7b7?w=800',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    new: true,
  },
  {
    id: '2',
    name: 'Ivory Dreams Lehenga',
    slug: 'ivory-dreams-lehenga',
    category: 'lehenga',
    price: 325000,
    description: 'A pristine ivory masterpiece adorned with delicate chikankari and subtle gold accents. Timeless elegance for your special day.',
    fabric: 'Georgette with Net Dupatta',
    embroidery: 'Chikankari, Gold Thread Work',
    color: 'Ivory',
    occasion: ['Wedding', 'Engagement'],
    images: [
      'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Champagne Elegance Saree',
    slug: 'champagne-elegance-saree',
    category: 'saree',
    price: 185000,
    description: 'A stunning champagne saree with intricate border work and contemporary draping style. Modern sophistication meets traditional grace.',
    fabric: 'Banarasi Silk',
    embroidery: 'Zari Work, Stone Embellishments',
    color: 'Champagne',
    occasion: ['Reception', 'Sangeet'],
    images: [
      'https://images.unsplash.com/photo-1610030469668-7e8e23f3a7b7?w=800',
    ],
    sizes: ['Free Size'],
    inStock: true,
  },
  {
    id: '4',
    name: 'Blush Petal Anarkali',
    slug: 'blush-petal-anarkali',
    category: 'anarkali',
    price: 145000,
    description: 'A flowing blush anarkali with layered panels and delicate embroidery. Perfect for pre-wedding celebrations.',
    fabric: 'Chanderi Silk',
    embroidery: 'Gota Patti, Mirror Work',
    color: 'Blush Pink',
    occasion: ['Mehndi', 'Sangeet'],
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Royal Maroon Lehenga',
    slug: 'royal-maroon-lehenga',
    category: 'lehenga',
    price: 395000,
    description: 'A regal maroon lehenga with heavy bridal embroidery and rich gold detailing. For the bride who wants to make a statement.',
    fabric: 'Velvet with Silk Dupatta',
    embroidery: 'Heavy Zardozi, Kundan, Dabka',
    color: 'Maroon',
    occasion: ['Wedding'],
    images: [
      'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    new: true,
  },
  {
    id: '6',
    name: 'Gold Dust Saree',
    slug: 'gold-dust-saree',
    category: 'saree',
    price: 225000,
    description: 'A luxurious golden saree with scattered sequin work that catches light beautifully. Pure opulence.',
    fabric: 'Tissue Silk',
    embroidery: 'Sequin, Cutdana Work',
    color: 'Gold',
    occasion: ['Reception', 'Wedding'],
    images: [
      'https://images.unsplash.com/photo-1610030469668-7e8e23f3a7b7?w=800',
    ],
    sizes: ['Free Size'],
    inStock: true,
  },
];

export const categories = [
  { name: 'Bridal Lehengas', slug: 'lehenga', count: 24 },
  { name: 'Sarees', slug: 'saree', count: 18 },
  { name: 'Anarkalis', slug: 'anarkali', count: 12 },
  { name: 'Accessories', slug: 'accessory', count: 30 },
];

export const occasions = [
  'Wedding',
  'Reception',
  'Engagement',
  'Sangeet',
  'Mehndi',
  'Haldi',
];

export const colors = [
  'Rose Gold',
  'Ivory',
  'Champagne',
  'Blush Pink',
  'Maroon',
  'Gold',
  'Red',
  'Peach',
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}
