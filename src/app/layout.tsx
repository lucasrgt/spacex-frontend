import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpaceX API',
  description: 'SpaceX API for InfinityBase'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-tl from-spacegray-500 to-spacegray-600`}
      >
        {children}
      </body>
    </html>
  )
}
