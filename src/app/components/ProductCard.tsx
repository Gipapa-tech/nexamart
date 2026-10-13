import Link from 'next/link'
import { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
          {product.badge ? (
            <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
              {product.badge}
            </span>
          ) : null}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{product.category}</span>
          <span className="text-sm text-amber-500">★ {product.rating}</span>
        </div>

        <Link href={`/products/${product.id}`} className="mt-3 block">
          <h3 className="text-lg font-semibold text-slate-800">{product.title}</h3>
        </Link>

        <p className="mt-1 text-sm text-slate-500">Sold by {product.seller}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-xl font-black text-slate-900">RWF {product.price.toLocaleString()}</div>
          <button className="rounded-full bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
