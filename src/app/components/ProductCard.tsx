import Image from 'next/image'
import { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400">No image</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.title}</h3>
        <p className="text-sm text-gray-500">Sold by {product.seller}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-semibold">RWF {product.price.toLocaleString()}</div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </div>
    </article>
  )
}
