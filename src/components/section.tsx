import {ComponentProps} from 'react'
import {Separator} from '@/components/ui/separator'
import {motion, MotionProps} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

type SectionTitleProps = ComponentProps<'h2'>
type SectionContentProps = ComponentProps<'div'>
type SectionHeaderProps = ComponentProps<'div'>
type SectionRootProps = ComponentProps<'div'> & MotionProps

export function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className={'text-center text-3xl'} {...props} />
  )
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className={'h-max w-full flex flex-col items-center gap-5'} {...props}>
      {props.children}
      <Separator className={'w-full'}/>
    </div>
  )
}

export function SectionContent(props: SectionContentProps) {
  return (
    <div
      className={'grid grid-cols-2 gap-4 justify-items-center lg:grid-cols-4 lg:w-3/4'}
      {...props} />
  )
}

export function SectionRoot(props: SectionRootProps) {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-16 pb-14"
      initial={{opacity: 0}}
      animate={{opacity: inView ? 1 : 0}}
      transition={{duration: 0.6}}
      {...props}
    />
  )
}
