import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Din mamma',
  description: 'Statement earrings made from polymer clay.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4 max-w-7xl m-auto min-w-[300px]">
        {children}
        </main>
        </body>
    </html>
  )
}
