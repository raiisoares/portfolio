import { ModeToggle } from '@/components/theme/mode-toogle'
import { NavLinks } from '@/components/nav-links'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">

      <header className={'p-4 flex items-center justify-between'}>
        <span>Raí Soares</span>

        <nav className={'flex items-center gap-2'}>
          <NavLinks />

          <ModeToggle />
        </nav>
      </header>

      <main className="">

      </main>

      <footer className="w-full p-5">
        <Separator className={'w-full'}/>

        <div className={'flex items-center justify-between pt-4'}>
          <span>&copy; 2024 All rights reserved.</span>
          <NavLinks />
        </div>
      </footer>
    </div>
  )
}
