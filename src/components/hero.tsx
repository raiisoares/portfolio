import { useTranslations } from 'next-intl'
import { HeroAnimation } from '@/components/animations/hero-animation'

export function Hero() {
  const t = useTranslations('Home')

  return (
    <div className={'flex lg:flex-row flex-col justify-center items-center lg:w-2/3 lg:mx-auto'}>
      <div className={'py-8 lg:p-10 lg:w-3/4'}>
        <h2 className={'text-xl'}>{t('title')}</h2>

        <p className={'1/2'}>{t('about')}</p>
      </div>
      <div className={'w-full lg:w-2/3'}>
        <HeroAnimation />
      </div>
    </div>
  )
}
