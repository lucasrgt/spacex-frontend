'use client'
import { Providers } from '@/infra/state/redux/provider'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import 'reflect-metadata'

import setupApp from '../main/config/setup-app'
import './globals.css'

// Setup app config
setupApp()

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
      <body className={`${jetbrainsMono.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
