import { useTranslations } from 'next-intl'

export type Status = 'PRODUCTION' | 'USER_TEST' | 'DEVELOPMENT'
export type Variant = 'default' | 'destructive' | 'secondary'

type StatusInfo = {
  value: string
  variant: Variant
}

export function useStatusMap() {
  const t = useTranslations('Status')

  return {
    statusMap: {
      PRODUCTION: { value: t('PRODUCTION'), variant: 'default' },
      USER_TEST: { value: t('USER_TEST'), variant: 'destructive' },
      DEVELOPMENT: { value: t('DEVELOPMENT'), variant: 'secondary' },
    } as Record<Status, StatusInfo>,
  }
}
