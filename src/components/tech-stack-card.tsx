import type { ElementType } from 'react'

interface TechStackCardProps {
  image: ElementType
  stackMap: { key: string; value: string }[]
  title: string
}

export function TechStackCard({ image: ImageComponent, stackMap, title }: TechStackCardProps) {
  return (
    <div className={'space-y-4 mt-4 lg:mt-0'}>
      <div className='mx-auto lg:-mx-0 size-[50px]'>
        <ImageComponent />
      </div>

      <h2 className={'text-center lg:text-start'}>{title}</h2>

      <ul className={'list-disc px-4'}>
        {stackMap.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}
