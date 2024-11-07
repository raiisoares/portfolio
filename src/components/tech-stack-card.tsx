import Image from 'next/image'

interface TechStackCardProps {
  image: string
  stackMap: { key: string, value: string }[]
  title: string
}

export function TechStackCard({ image, stackMap, title }: TechStackCardProps) {
  return (
    <div className={'space-y-4'}>
      <Image
        src={image}
        alt={`Illustration of ${title}`}
        width={50}
        height={50}
      />

      <h2>{title}</h2>

      <ul className={'list-disc px-4'}>
        {stackMap.map((item) => <li key={item.key}>{item.value}</li>)}
      </ul>
    </div>
  )
}