import Link from 'next/link'

export function NavLinks() {
  return (
    <ul className={'flex items-center gap-2 font-light'}>
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
  )
}