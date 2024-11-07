export type Status = 'PRODUCTION' | 'USER_TEST' | 'DEVELOPMENT'
export type Variant = 'default' | 'destructive' | 'secondary'

type StatusInfo = {
  value: string
  variant: Variant
}

export const statusMap: Record<Status, StatusInfo> = {
  PRODUCTION: { value: 'Produção', variant: 'default' },
  USER_TEST: { value: 'Teste de usuário', variant: 'destructive' },
  DEVELOPMENT: { value: 'Desenvolvimento', variant: 'secondary' },
}