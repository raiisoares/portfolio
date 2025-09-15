'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import githubDark from '../../../public/assets/icons/github-dark.svg'
import githubLight from '../../../public/assets/icons/github-white.svg'
import linkedinDark from '../../../public/assets/icons/linkedin-dark.svg'
import linkedinLight from '../../../public/assets/icons/linkedin-white.svg'

export function NavLinks() {
  const { theme } = useTheme()

  return (
    <>
      <ul className={'hidden lg:flex lg:items-center lg:gap-2 lg:font-light'}>
        <li className={'hover:underline font-light'}>
          <a target={'_blank'} rel='me noopener noreferrer' href='https://www.linkedin.com/in/raiisoares'>
            LinkedIn
          </a>
        </li>

        <li>/</li>

        <li className={'hover:underline'}>
          <a target={'_blank'} rel='me noopener noreferrer' href='https://github.com/raiisoares'>
            GitHub
          </a>
        </li>
      </ul>

      <ul className={'flex gap-4 lg:hidden'}>
        <li>
          <a target={'_blank'} rel='me noopener noreferrer' href='https://www.linkedin.com/in/raiisoares'>
            <Image
              src={theme === 'dark' ? linkedinLight : linkedinDark}
              height={38}
              width={38}
              alt='LinkedIn Icon'
              className='rounded-md object-cover'
            />
          </a>
        </li>

        <li>
          <a target={'_blank'} rel='me noopener noreferrer' href='https://github.com/raiisoares'>
            <Image
              src={theme === 'dark' ? githubLight : githubDark}
              height={38}
              width={38}
              alt='GitHub Icon'
              className='rounded-md object-cover'
            />
          </a>
        </li>
      </ul>
    </>
  )
}
