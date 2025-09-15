import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import type React from 'react'
import { Providers } from '@/app/providers'
import { DESCRIPTION_PT, KEYWORDS, OG_DESCRIPTION_PT, TITLE } from '@/utils/constants/metadata'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `${TITLE} | %s`,
  },
  description: DESCRIPTION_PT,
  robots: 'index, follow',
  keywords: KEYWORDS,
  icons: {
    icon: ['/favicon.ico'],
  },
  openGraph: {
    title: TITLE,
    description: OG_DESCRIPTION_PT,
    siteName: TITLE,
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${process.env.BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION_PT,
    images: ['/og-image.png'],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
