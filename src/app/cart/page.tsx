import Link from 'next/link'

const cartItems = [
  {
    id: 'wireless-headphones',
    name: 'Wireless Headphones',
    seller: 'SoundCo',
    price: 39990,
    qty: 1,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ceramic-vase',
    name: 'Ceramic Vase',
    seller: 'HomeMakers',
    price: 8990,
    qty: 2,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
]

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
const delivery = 4500
const total = subtotal + delivery

export default function CartPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-slate-900">Your cart</h1>
          <span className="text-sm text-slate-500">{cartItems.length} items</span>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <img src={item.image} alt={item.name} className="h-28 w-28 rounded-2xl object-cover" />
            <div className="flex flex-1 flex-col justify-between gap-3 sm:flex-row">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{item.name}</h2>
                <p className="text-sm text-slate-500">Seller: {item.seller}</p>
                <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
                  <button className="rounded-full border border-slate-200 px-2 py-1">-</button>
                  <span>{item.qty}</span>
                  <button className="rounded-full border border-slate-200 px-2 py-1">+</button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-slate-900">RWF {(item.price * item.qty).toLocaleString()}</p>
                <p className="mt-2 text-sm text-slate-500">RWF {item.price.toLocaleString()} each</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Order summary</h2>

        <dl className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>RWF {subtotal.toLocaleString()}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Delivery</dt>
            <dd>RWF {delivery.toLocaleString()}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Platform fee</dt>
            <dd>RWF 0</dd>
          </div>
        </dl>

        <div className="mt-6 border-t border-slate-200 pt-4 text-lg font-bold text-slate-900">
          <div className="flex justify-between">
            <span>Total</span>
            <span>RWF {total.toLocaleString()}</span>
          </div>
        </div>

        <button className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
          Proceed to checkout
        </button>

        <Link href="/products" className="mt-3 block text-center text-sm font-medium text-blue-600 hover:text-blue-500">
          Continue shopping
        </Link>
      </aside>
    </div>
  )
}
