import type {Metadata} from 'next'
import './globals.css'
import {ThemeProvider} from '@/components/theme/theme-provider'
import React from 'react'

import {JetBrains_Mono} from 'next/font/google'
import {Toaster} from "@/components/ui/sonner";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raí Soares',
  description: `Raí Soares' Portfolio`,
  icons:{
    icon:['/favicon.ico'],
  }
}

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${jetBrainsMono.className} antialiased`}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
      {children}
      <Toaster/>
    </ThemeProvider>
    </body>
    </html>
  )
}
