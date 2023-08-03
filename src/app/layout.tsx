import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

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
        className={`${jetbrainsMono.className} bg-gradient-to-tl from-spacegray-500 to-spacegray-600`}
      >
        {children}
      </body>
    </html>
  )
}
