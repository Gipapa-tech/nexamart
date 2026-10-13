# Nexamart

Starter Next.js + TypeScript + Tailwind project scaffold for the Nexamart marketplace.

What I added:
- Next.js app router with a homepage (hero, categories, featured products)
- Tailwind CSS setup
- Simple ProductCard and NavBar components
- Sample product data
- Supabase client scaffold (set env vars before using)

Getting started:
1. Clone the repo:
   git clone https://github.com/Gipapa-tech/nexamart.git
2. Install dependencies:
   npm install
3. Create a .env.local file in the project root with the following variables (example):
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
4. Run the dev server:
   npm run dev

Next steps I can implement for you:
- Seller onboarding and store pages
- Product management and image uploads (Supabase Storage)
- Cart and checkout (test payments)
- Admin dashboard and order management

