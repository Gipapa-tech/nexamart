import Image from 'next/image'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

export default function Home() {
  return (
    <>
      <section className="bg-white rounded-lg p-8 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">NEXAMART</h1>
            <p className="text-gray-600 mb-6">Discover more. Shop smarter. Your marketplace for everything you need.</p>
            <div className="flex gap-3">
              <a href="#products" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Explore products</a>
              <a href="#become-seller" className="inline-block border border-gray-200 px-4 py-2 rounded">Become a seller</a>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-lg overflow-hidden bg-gray-100 h-56 flex items-center justify-center">
              <span className="text-gray-400">Hero / promotional image</span>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">Fashion</div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">Electronics</div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">Home</div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">Beauty</div>
        </div>
      </section>

      <section id="products" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Featured products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section id="become-seller" className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Become a seller</h3>
        <p className="text-gray-600 mb-4">Sell on Nexamart — create a store, list products and grow your business.</p>
        <a className="inline-block bg-green-600 text-white px-4 py-2 rounded">Apply to sell</a>
      </section>
    </>
  )
}
