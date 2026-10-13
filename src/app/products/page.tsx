import Link from 'next/link'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Marketplace</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Shop all products</h1>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-slate-900 px-3 py-1.5 font-medium text-white">All</span>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">Fashion</span>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">Electronics</span>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">Home</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/" className="rounded-full border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 hover:bg-slate-50">
          Back to home
        </Link>
      </div>
    </div>
  )
}
