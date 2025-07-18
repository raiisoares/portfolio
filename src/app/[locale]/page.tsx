import { HomePage } from '@/components/pages/home-page'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default function Home() {
  return <HomePage />
}
