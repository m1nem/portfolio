import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'm1nem - Full Stack Developer',
  description: 'Teen developer building modern web apps, Discord bots, and data scrapers to fund my college journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}