const orders = [
  { id: '#NEX-1042', customer: 'Jane K.', total: 48980, status: 'Processing' },
  { id: '#NEX-1041', customer: 'Eric M.', total: 26950, status: 'Shipped' },
  { id: '#NEX-1040', customer: 'Aline T.', total: 123400, status: 'Awaiting payment' },
]

const sellerApplications = [
  { name: 'Luma Home', status: 'Approved' },
  { name: 'Urban Thread', status: 'Pending' },
  { name: 'Bean House', status: 'Approved' },
]

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white shadow-lg">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">Administration</p>
        <h1 className="mt-3 text-3xl font-black">Nexamart admin dashboard</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Revenue</p>
          <p className="mt-3 text-3xl font-black text-slate-900">RWF 2.4M</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Orders today</p>
          <p className="mt-3 text-3xl font-black text-slate-900">184</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Seller applications</p>
          <p className="mt-3 text-3xl font-black text-slate-900">09</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Recent orders</h2>
          <div className="mt-5 space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{order.id}</p>
                  <p className="text-sm text-slate-500">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">RWF {order.total.toLocaleString()}</p>
                  <p className="text-sm text-slate-500">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Seller applications</h2>
          <div className="mt-5 space-y-4">
            {sellerApplications.map((application) => (
              <div key={application.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span className="font-medium text-slate-800">{application.name}</span>
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${application.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {application.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
