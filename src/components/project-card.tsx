import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import Image, {StaticImageData} from 'next/image'
import {Button} from '@/components/ui/button'
import {StatusBadge} from '@/components/status-badge'
import {Status} from '@/utils/status-map'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from '@/components/ui/carousel'
import {useTranslations} from "next-intl";

interface ProjectCardProps {
  projectKey: string
  projectData: {
    status: Status
    srcImgs: StaticImageData[]
    techStack: string[]
  }
}

export function ProjectCard({projectKey, projectData}: ProjectCardProps) {
  const t = useTranslations('ProjectCard')
  const tProjects = useTranslations('Projects')

  const project = {
    title: tProjects(`${projectKey}.title`),
    description: tProjects(`${projectKey}.description`),
    details: tProjects(`${projectKey}.details`),
    date: tProjects(`${projectKey}.date`)
  }

  return (
    <Card className={'mb-4 max-w-[420px]'}>
      <CardHeader>
        <Image src={projectData.srcImgs[0]} height={350} width={400} alt='Image' className='rounded-md object-cover'/>
        <div className={'flex items-center gap-4'}>
          <CardTitle>{project.title}</CardTitle>
          <StatusBadge status={projectData.status}/>
        </div>
        <CardDescription className={'text-primary'}>{project.description}</CardDescription>
        <span className={'text-sm text-muted-foreground'}>{project.date}</span>
      </CardHeader>

      <CardContent className={'h-max'}>
        <p className={'text-sm text-foreground/70'}>{project.details}</p>
      </CardContent>

      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button>{t('details')}</Button>
          </DialogTrigger>
          <DialogContent className={'h-screen lg:min-w-[750px] lg:h-3/4'}>
            <DialogHeader>
              <DialogTitle>
                {project.title}
              </DialogTitle>
              <DialogDescription>
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <Carousel className='relative'>
              <CarouselPrevious className='absolute left-0 z-10'/>
              <CarouselContent className={'p-4'}>
                {projectData.srcImgs.map((img, i) => (
                  <CarouselItem key={i}>
                    <Image
                      src={img}
                      width={600}
                      height={350}
                      alt='Image'
                      className='rounded-md object-cover mx-auto'/>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className='absolute right-0 z-10'/>
            </Carousel>

            <p>{t('technology')}</p>

            <ul className='grid grid-cols-2 lg:grid-cols-4 gap-2 list-disc'>
              {projectData.techStack.map((tech, i) => (
                <li key={i} className='ml-4'>{tech}</li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}