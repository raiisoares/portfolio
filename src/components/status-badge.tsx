import { Badge } from '@/components/ui/badge'
import { type Status, useStatusMap } from '@/utils/status-map'

export function StatusBadge({ status }: { status: Status }) {
  const { statusMap } = useStatusMap()

  return <Badge variant={statusMap[status].variant}>{statusMap[status].value}</Badge>
}
