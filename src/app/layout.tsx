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
}

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${jetBrainsMono.className} antialiased`}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster/>
    </ThemeProvider>
    </body>
    </html>
  )
}
