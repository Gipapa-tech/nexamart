import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-xl">Nexamart</Link>
            <nav className="hidden sm:flex gap-3 text-sm text-gray-600">
              <a href="#products">Products</a>
              <a href="#categories">Categories</a>
              <a href="#become-seller">Sell</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <input aria-label="Search" placeholder="Search products" className="hidden sm:block border rounded px-3 py-1" />
            <Link href="/cart" className="px-3 py-1">Cart</Link>
            <Link href="/login" className="px-3 py-1">Log in</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
