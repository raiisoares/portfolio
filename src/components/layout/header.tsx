import { Languages } from '@/components/languages'
import { NavLinks } from '@/components/navigation/nav-links'
import { ModeToggle } from '@/components/theme/mode-toogle'

export function Header() {
  return (
    <header className={'py-10 flex items-center justify-between'}>
      <span className={'text-lg lg:text-xl'}>Raí Soares</span>
      <nav className={'flex items-center gap-4'}>
        <NavLinks />
        <Languages />
        <ModeToggle />
      </nav>
    </header>
  )
}
