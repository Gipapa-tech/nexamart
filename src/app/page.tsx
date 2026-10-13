import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

const categories = [
  { name: 'Fashion', count: '2.3k items' },
  { name: 'Electronics', count: '1.8k items' },
  { name: 'Home', count: '940 items' },
  { name: 'Beauty', count: '650 items' },
]

export default function Home() {
  return (
    <>
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 p-8 text-white shadow-lg">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Discover more. Shop smarter.
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">NEXAMART</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-200">
              One marketplace, many sellers. Compare products, pay securely, and track every order in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200">
                Explore products
              </Link>
              <Link href="/seller" className="rounded-full border border-white/30 bg-transparent px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                Become a seller
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/20">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-slate-200 via-white to-blue-100 text-xl font-semibold text-slate-500">
                Marketplace preview
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Popular categories</h2>
          <Link href="/products" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 text-3xl">{category.name === 'Fashion' ? '👗' : category.name === 'Electronics' ? '📱' : category.name === 'Home' ? '🏠' : '✨'}</div>
              <h3 className="text-lg font-semibold text-slate-800">{category.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{category.count}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Why shoppers choose us</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Shop from multiple sellers, in one checkout</h3>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-5">
            <div className="text-2xl">🔍</div>
            <h4 className="mt-3 text-lg font-semibold">Smart discovery</h4>
            <p className="mt-1 text-sm text-slate-600">Compare products and sellers before you buy.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <div className="text-2xl">🛡️</div>
            <h4 className="mt-3 text-lg font-semibold">Secure payments</h4>
            <p className="mt-1 text-sm text-slate-600">Protected checkout with verified gateway flows.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <div className="text-2xl">🚚</div>
            <h4 className="mt-3 text-lg font-semibold">Order tracking</h4>
            <p className="mt-1 text-sm text-slate-600">Live delivery updates across each seller’s fulfillment.</p>
          </div>
        </div>
      </section>

      <section id="products" className="mt-12">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Featured products</h2>
          <Link href="/products" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            See more
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="become-seller" className="mt-12 rounded-3xl border border-green-100 bg-green-50 p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-700">Grow your business</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Become a seller on Nexamart</h3>
            <p className="mt-2 max-w-2xl text-slate-600">Join the marketplace, manage listings, and reach more shoppers with built-in order workflows.</p>
          </div>
          <Link href="/seller" className="inline-flex rounded-full bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500">
            Apply to sell
          </Link>
        </div>
      </section>
    </>
  )
}
