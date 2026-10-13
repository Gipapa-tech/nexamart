import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '../data/products'

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/products" className="inline-flex text-sm font-medium text-blue-600 hover:text-blue-500">
        ← Back to products
      </Link>

      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl bg-slate-100">
          <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
        </div>

        <div>
          <div className="flex items-center gap-3">
            {product.badge ? (
              <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {product.badge}
              </span>
            ) : null}
            <span className="text-sm font-medium text-slate-500">{product.category}</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-slate-900">{product.title}</h1>
          <p className="mt-2 text-sm text-slate-500">Seller: {product.seller}</p>
          <div className="mt-3 flex items-center gap-2 text-amber-500">
            <span>★</span>
            <span className="font-medium text-slate-700">{product.rating}</span>
            <span className="text-slate-500">• {product.stock} in stock</span>
          </div>

          <div className="mt-6 text-3xl font-black text-slate-900">RWF {product.price.toLocaleString()}</div>

          <p className="mt-5 text-slate-600">{product.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
              Add to cart
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
              Buy now
            </button>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-4">
            <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Secure checkout handled by the platform</li>
              <li>• Verified seller and return protection</li>
              <li>• Express shipping and delivery updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
