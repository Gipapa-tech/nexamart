import './styles/globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexamart',
  description: 'Discover more. Shop smarter.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      </body>
    </html>
  )
}
