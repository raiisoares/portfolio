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
  title: 'Raí Soares | Desenvolvedor Full Stack',
  description: `Desenvolvedor Full Stack especializado em React, Next.js e Spring Boot. Transformando ideias em 
    software eficiente e escalável.`,
  robots: 'index, follow',
  icons: {
    icon: ['/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    title: 'Raí Soares',
    description: 'Transformando ideias em software.',
    url: `${process.env.BASE_URL}/og-image.png`,
    siteName: 'Raí Soares',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${process.env.BASE_URL}/og-image.png`,
        width: 800,
        height: 600,
        alt: 'Raí Soares',
      },
    ],
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
