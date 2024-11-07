import Link from 'next/link'
import Image from 'next/image'
import linkedin from '@/assets/icons/linkedin.svg'
import github from '@/assets/icons/github.svg'

export function NavLinks() {
  return (
    <>
      <ul className={'hidden lg:flex lg:items-center lg:gap-2 lg:font-light'}>
        <li className={'hover:underline  font-light'}>
          <Link target={'blank'} href="https://www.linkedin.com/in/raiisoares">
            LinkedIn
          </Link>
        </li>

        <li>/</li>

        <li className={'hover:underline'}>
          <Link target={'blank'} href="https://github.com/raiisoares">
            GitHub
          </Link>
        </li>
      </ul>

      <div className={'flex gap-4 lg:hidden'}>
        <Link target={'blank'} href="https://www.linkedin.com/in/raiisoares">
            <Image src={linkedin} height={38} width={38} alt="Image" className="rounded-md object-cover" />
        </Link>

        <Link target={'blank'} href="https://www.linkedin.com/in/raiisoares">
            <Image src={github} height={38} width={38} alt="Image" className="rounded-md object-cover" />
        </Link>
      </div>
    </>
  )
}