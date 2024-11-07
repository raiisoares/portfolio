import { Badge } from '@/components/ui/badge'
import { Status, statusMap } from '@/utils/status-map'

interface StatusBadgeProps {
  status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const badgeStatus: Status = status

  return (
    <Badge variant={statusMap[badgeStatus].variant}>
      {statusMap[badgeStatus].value}
    </Badge>
  )
}