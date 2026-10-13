const listings = [
  { name: 'Mini Speaker', price: 22000, orders: 18, status: 'Live' },
  { name: 'Smartwatch Pro', price: 58000, orders: 12, status: 'Live' },
  { name: 'Ceramic Vase', price: 8990, orders: 5, status: 'Pending review' },
]

const stats = [
  { label: 'Monthly sales', value: 'RWF 1.2M' },
  { label: 'Active orders', value: '68' },
  { label: 'Average rating', value: '4.8/5' },
]

export default function SellerPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-green-500 p-8 text-white shadow-lg">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-100">Seller dashboard</p>
        <h1 className="mt-3 text-3xl font-black">Luma Home Store</h1>
        <p className="mt-2 max-w-xl text-emerald-50">Manage listings, fulfil orders and grow your sales across the Nexamart marketplace.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-2xl font-black text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">My listings</h2>
          <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500">
            Add new product
          </button>
        </div>

        <div className="space-y-4">
          {listings.map((listing) => (
            <div key={listing.name} className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{listing.name}</h3>
                <p className="text-sm text-slate-500">{listing.orders} orders this month</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">RWF {listing.price.toLocaleString()}</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">{listing.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
