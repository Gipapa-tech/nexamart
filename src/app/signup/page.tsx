import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-600">Start selling or shopping</p>
      <h1 className="mt-3 text-3xl font-black text-slate-900">Create your Nexamart account</h1>

      <form className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">First name</label>
            <input type="text" placeholder="Jane" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Last name</label>
            <input type="text" placeholder="Kagabo" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white" />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
          <input type="password" placeholder="Create a password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Account type</label>
          <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white">
            <option>Customer</option>
            <option>Seller</option>
            <option>Delivery staff</option>
          </select>
        </div>

        <button type="submit" className="w-full rounded-full bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500">
          Create account
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-green-600 hover:text-green-500">
          Sign in
        </Link>
      </p>
    </div>
  )
}
