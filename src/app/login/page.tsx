import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Welcome back</p>
      <h1 className="mt-3 text-3xl font-black text-slate-900">Login to Nexamart</h1>

      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
          <input type="password" placeholder="••••••••" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
        </div>

        <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            Remember me
          </label>
          <Link href="/signup" className="text-blue-600 hover:text-blue-500">Forgot password?</Link>
        </div>

        <button type="submit" className="w-full rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
          Log in
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
          Create one
        </Link>
      </p>
    </div>
  )
}
