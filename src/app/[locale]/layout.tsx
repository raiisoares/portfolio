import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type React from 'react'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { routing } from '@/i18n/routing'

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as never)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
