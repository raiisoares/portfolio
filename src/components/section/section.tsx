import type { ComponentProps } from 'react'
import { Separator } from '@/components/ui/separator'

type SectionTitleProps = ComponentProps<'h2'>
type SectionContentProps = ComponentProps<'div'>
type SectionHeaderProps = ComponentProps<'div'>

export function SectionTitle(props: SectionTitleProps) {
  return <h2 className={'text-center text-3xl'} {...props} />
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className={'h-max w-full flex flex-col items-center gap-5'} {...props}>
      {props.children}
      <Separator className={'w-full'} />
    </div>
  )
}

export function SectionContent(props: SectionContentProps) {
  return <div className={'grid grid-cols-1 gap-4 justify-items-center w-full lg:grid-cols-4 lg:w-3/4'} {...props} />
}
