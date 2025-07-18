'use client'

import type { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme/theme-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
      {children}
      <Toaster richColors />
    </ThemeProvider>
  )
}
