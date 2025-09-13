import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import type React from 'react'
import { Providers } from '@/app/providers'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  mainEntity: {
    '@type': 'Person',
    name: 'Ra� soares',
    alternateName: 'raiisoares',
    description: 'Desenvolvedor Full Stack especializado em React, Next.js e Spring Boot',
    image: 'https://github.com/raiisoares.png',
    sameAs: ['https://github.com/raiisoares', 'https://linkedin.com/in/raiisoares'],
  },
}

export const metadata: Metadata = {
  title: {
    default: 'Raí Soares',
    template: 'Raí Soares | %s',
  },
  description: `Desenvolvedor Full Stack especializado em React, Next.js e Spring Boot. Transformando ideias em software 
            eficiente e escalável.`,
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
      <head>
        <script
          type='application/ld+json'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: false positive
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
