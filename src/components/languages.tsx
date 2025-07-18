'use client'

import { useTranslations } from 'next-intl'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link, usePathname } from '@/i18n/routing'
import { LanguagesIcon } from './icons/languages'

export function Languages() {
  const t = useTranslations('LanguagesSwitcher')

  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <LanguagesIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t('title')}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href={pathname} locale={'pt'}>
          <DropdownMenuItem>{t('pt')}</DropdownMenuItem>
        </Link>

        <Link href={pathname} locale={'en'}>
          <DropdownMenuItem>{t('en')}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
