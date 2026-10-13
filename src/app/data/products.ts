export interface Product {
  id: string
  title: string
  price: number
  image: string
  seller: string
  category: string
  rating: number
  badge?: string
  description: string
  stock: number
}

export const products: Product[] = [
  {
    id: 'wireless-headphones',
    title: 'Wireless Headphones',
    price: 39990,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    seller: 'SoundCo',
    category: 'Electronics',
    rating: 4.8,
    badge: 'Best Seller',
    description: 'Noise-cancelling wireless headphones with 30-hour battery life and ultra-clear sound for work or travel.',
    stock: 24,
  },
  {
    id: 'casual-t-shirt',
    title: 'Casual T-Shirt',
    price: 12990,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    seller: 'FashionHub',
    category: 'Fashion',
    rating: 4.6,
    badge: 'Trending',
    description: 'Premium cotton tee with a relaxed fit, soft touch finish, and breathable comfort for daily wear.',
    stock: 52,
  },
  {
    id: 'ceramic-vase',
    title: 'Ceramic Vase',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    seller: 'HomeMakers',
    category: 'Home',
    rating: 4.7,
    badge: 'New',
    description: 'Hand-finished ceramic vase designed to elevate your living room, shelf or desk with natural elegance.',
    stock: 14,
  },
  {
    id: 'smartwatch',
    title: 'Smartwatch',
    price: 75990,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    seller: 'GadgetStore',
    category: 'Electronics',
    rating: 4.9,
    badge: 'Top Rated',
    description: 'Track fitness goals, monitor heart rate, and stay connected with a sleek smartwatch built for everyday life.',
    stock: 18,
  },
  {
    id: 'travel-bag',
    title: 'Travel Carry-On Bag',
    price: 54990,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
    seller: 'Voyage Co.',
    category: 'Fashion',
    rating: 4.5,
    badge: 'Limited',
    description: 'Durable carry-on with smart compartments, lightweight frame, and smooth rolling wheels for quick travel.',
    stock: 9,
  },
  {
    id: 'lamp',
    title: 'Ambient Desk Lamp',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    seller: 'Luma Home',
    category: 'Home',
    rating: 4.4,
    description: 'Adjustable LED desk lamp with warm lighting to create a relaxed and productive workspace at home.',
    stock: 27,
  },
  {
    id: 'makeup-kit',
    title: 'Essential Makeup Kit',
    price: 32990,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    seller: 'Glow Studio',
    category: 'Beauty',
    rating: 4.7,
    badge: 'Editor Pick',
    description: 'Curated beauty essentials for a flawless finish, designed for natural day-to-day glam and easy touch-ups.',
    stock: 31,
  },
  {
    id: 'coffee-grinder',
    title: 'Premium Coffee Grinder',
    price: 68250,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    seller: 'Bean House',
    category: 'Home',
    rating: 4.8,
    badge: 'Popular',
    description: 'Precision coffee grinder for smooth, consistent brews and a richer flavor in every cup.',
    stock: 13,
  },
]
