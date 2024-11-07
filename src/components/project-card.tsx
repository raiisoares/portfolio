import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/status-badge'
import { Status } from '@/utils/status-map'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: StaticImageData
    status: Status
    date: string
    details: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className={'mb-4'}>
      <CardHeader>
        <Image src={project.image} height={350} width={400} alt="Image" className="rounded-md object-cover" />
        <div className={'flex items-center gap-4'}>
          <CardTitle>{project.title}</CardTitle>
          <StatusBadge status={project.status} />
        </div>
        <CardDescription className={'text-primary'}>{project.description}</CardDescription>
        <span className={'text-sm text-muted-foreground'}>{project.date}</span>
      </CardHeader>
      <CardContent className={'h-max'}>
        <p className={'text-sm text-foreground/70 '}>{project.details}</p>
      </CardContent>
      <CardFooter>
        <Button>
          Ver detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}