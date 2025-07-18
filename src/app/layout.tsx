import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import type React from 'react'
import { Providers } from '@/app/providers'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raí Soares',
  description: `Raí Soares' Portfolio`,
  icons: {
    icon: ['/favicon.ico'],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
