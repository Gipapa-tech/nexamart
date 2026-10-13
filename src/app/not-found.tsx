import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">404</p>
      <h1 className="mt-3 text-4xl font-black text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you were looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">
        Return home
      </Link>
    </div>
  )
}
