import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/seller', label: 'Sell' },
  { href: '/cart', label: 'Cart' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-black tracking-tight text-slate-900">
            Nexamart
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 sm:block">
            Search products
          </div>
          <Link href="/cart" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
            Cart (2)
          </Link>
          <Link href="/seller" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
            Log in
          </Link>
        </div>
      </div>
    </header>
  )
}
