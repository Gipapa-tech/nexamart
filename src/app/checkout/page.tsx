import Link from 'next/link'

const checkoutItems = [
  { id: 'wireless-headphones', name: 'Wireless Headphones', seller: 'SoundCo', price: 39990, qty: 1 },
  { id: 'ceramic-vase', name: 'Ceramic Vase', seller: 'HomeMakers', price: 8990, qty: 2 },
]

const subtotal = checkoutItems.reduce((sum, item) => sum + item.price * item.qty, 0)
const delivery = 4500
const total = subtotal + delivery

export default function CheckoutPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-black text-slate-900">Checkout</h1>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
              <input type="text" defaultValue="Jane Kagabo" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Delivery address</label>
              <textarea defaultValue="Kigali, Rwanda\nKG 11 Ave, Nyarugenge" rows={3} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Phone number</label>
              <input type="tel" defaultValue="+250 788 123 456" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Payment</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <input type="radio" name="payment" defaultChecked className="h-4 w-4" />
              <span>Mobile Money</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <input type="radio" name="payment" className="h-4 w-4" />
              <span>Visa / Mastercard</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <input type="radio" name="payment" className="h-4 w-4" />
              <span>Cash on delivery</span>
            </div>
          </div>
        </div>
      </div>

      <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Order summary</h2>

        <div className="mt-5 space-y-4">
          {checkoutItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
              <div className="h-16 w-16 overflow-hidden rounded-xl bg-slate-200">
                <img src={item.id === 'wireless-headphones' ? 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80' : 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800">{item.name}</p>
                <p className="text-sm text-slate-500">{item.seller}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-900">RWF {(item.price * item.qty).toLocaleString()}</p>
                <p className="text-xs text-slate-500">Qty {item.qty}</p>
              </div>
            </div>
          ))}
        </div>

        <dl className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex justify-between"><dt>Subtotal</dt><dd>RWF {subtotal.toLocaleString()}</dd></div>
          <div className="flex justify-between"><dt>Delivery</dt><dd>RWF {delivery.toLocaleString()}</dd></div>
          <div className="flex justify-between"><dt>Platform fee</dt><dd>RWF 0</dd></div>
        </dl>

        <div className="mt-6 border-t border-slate-200 pt-4 text-lg font-bold text-slate-900">
          <div className="flex justify-between">
            <span>Total</span>
            <span>RWF {total.toLocaleString()}</span>
          </div>
        </div>

        <button className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
          Place order
        </button>

        <Link href="/cart" className="mt-3 block text-center text-sm font-medium text-blue-600 hover:text-blue-500">
          Edit cart
        </Link>
      </aside>
    </div>
  )
}
