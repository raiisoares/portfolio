import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import type React from 'react'
import { routing } from '@/i18n/routing'
import {
  DESCRIPTION_EN,
  DESCRIPTION_PT,
  OG_DESCRIPTION_EN,
  OG_DESCRIPTION_PT,
  SUBTITLE_EN,
  SUBTITLE_PT,
  TITLE,
} from '@/utils/constants/metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  if (!routing.locales.includes(locale as never)) {
    notFound()
  }

  const isPt = locale === 'pt'
  const titleSuffix = isPt ? SUBTITLE_PT : SUBTITLE_EN
  const description = isPt ? DESCRIPTION_PT : DESCRIPTION_EN
  const ogDescription = isPt ? OG_DESCRIPTION_PT : OG_DESCRIPTION_EN

  return {
    title: titleSuffix,
    description,
    robots: 'index, follow',
    alternates: {
      canonical: `${process.env.BASE_URL}`,
      languages: {
        pt: `${process.env.BASE_URL}/pt`,
        en: `${process.env.BASE_URL}/en`,
      },
    },
    icons: {
      icon: ['/favicon.ico'],
    },
    openGraph: {
      description: ogDescription,
      url: `${process.env.BASE_URL}/${locale}`,
      locale: isPt ? 'pt_BR' : 'en_US',
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
  }
}

export default async function LocaleLayout({
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
  setRequestLocale(locale)

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}
