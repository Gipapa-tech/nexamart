export interface Product {
  id: string
  title: string
  price: number
  image?: string
  seller: string
}

export const products: Product[] = [
  { id: 'p1', title: 'Wireless Headphones', price: 39990, image: '/images/headphones.jpg', seller: 'SoundCo' },
  { id: 'p2', title: 'Casual T-Shirt', price: 12990, image: '/images/tshirt.jpg', seller: 'FashionHub' },
  { id: 'p3', title: 'Ceramic Vase', price: 8990, image: '/images/vase.jpg', seller: 'HomeMakers' },
  { id: 'p4', title: 'Smartwatch', price: 75990, image: '/images/watch.jpg', seller: 'GadgetStore' }
]
