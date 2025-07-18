import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import githubDark from '@/assets/icons/github-dark.svg'
import githubLight from '@/assets/icons/github-white.svg'
import linkedinDark from '@/assets/icons/linkedin-dark.svg'
import linkedinLight from '@/assets/icons/linkedin-white.svg'

export function NavLinks() {
  const { theme } = useTheme()

  return (
    <>
      <ul className={'hidden lg:flex lg:items-center lg:gap-2 lg:font-light'}>
        <li className={'hover:underline font-light'}>
          <Link target={'_blank'} href='https://www.linkedin.com/in/raiisoares'>
            LinkedIn
          </Link>
        </li>

        <li>/</li>

        <li className={'hover:underline'}>
          <Link target={'_blank'} href='https://github.com/raiisoares'>
            GitHub
          </Link>
        </li>
      </ul>

      <div className={'flex gap-4 lg:hidden'}>
        <Link target={'_blank'} href='https://www.linkedin.com/in/raiisoares'>
          <Image
            src={theme === 'dark' ? linkedinLight : linkedinDark}
            height={38}
            width={38}
            alt='LinkedIn Icon'
            className='rounded-md object-cover'
          />
        </Link>

        <Link target={'_blank'} href='https://github.com/raiisoares'>
          <Image
            src={theme === 'dark' ? githubLight : githubDark}
            height={38}
            width={38}
            alt='GitHub Icon'
            className='rounded-md object-cover'
          />
        </Link>
      </div>
    </>
  )
}
