import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/status-badge'
import { Status } from '@/utils/status-map'

interface ProjectCardProps {
  title: string
  description: string
  image: StaticImageData
  status: Status
}

export function ProjectCard({ title, description, image, status }: ProjectCardProps) {
  return (
    <Card className={'my-4'}>
      <CardHeader>
        <div className={'flex items-center gap-4'}>
          <CardTitle>{title}</CardTitle>
          <StatusBadge status={status} />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={'h-max'}>
        <Image src={image} height={350} width={400} alt="Image" className="rounded-md object-cover" />
      </CardContent>
      <CardFooter>
        <Button>
          Ver detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}