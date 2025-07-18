import { Badge } from '@/components/ui/badge'
import { type Status, useStatusMap } from '@/utils/status-map'

interface StatusBadgeProps {
  status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { statusMap } = useStatusMap()

  return <Badge variant={statusMap[status].variant}>{statusMap[status].value}</Badge>
}
