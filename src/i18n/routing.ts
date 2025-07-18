import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'
import { LANGUAGES } from '@/constants/languages'

export const routing = defineRouting({
  locales: LANGUAGES,
  defaultLocale: 'pt',
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
