import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import type React from 'react'
import { routing } from '@/i18n/routing'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  if (!routing.locales.includes(locale as never)) {
    notFound()
  }

  const isPt = locale === 'pt'

  const titleSuffix = isPt ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'
  const description = isPt
    ? `Desenvolvedor Full Stack especializado em React, Next.js e Spring Boot. Transformando ideias em software 
        eficiente e escalável.`
    : `Full Stack Developer specialized in React, Next.js and Spring Boot. Turning ideas into efficient and 
        scalable software.`

  return {
    title: titleSuffix,
    description,
    robots: 'index, follow',
    alternates: {
      canonical: `${process.env.BASE_URL}/${locale}`,
      languages: {
        pt: `${process.env.BASE_URL}/pt`,
        en: `${process.env.BASE_URL}/en`,
      },
    },
    openGraph: {
      description: isPt ? 'Transformando ideias em software' : 'Turning ideas into software',
      locale: isPt ? 'pt_BR' : 'en_US',
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
