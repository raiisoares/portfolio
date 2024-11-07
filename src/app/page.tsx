import { ModeToggle } from '@/components/theme/mode-toogle'
import { NavLinks } from '@/components/nav-links'
import { Separator } from '@/components/ui/separator'
import backend from '@/assets/api-design.svg'
import frontend from '@/assets/web-design.svg'
import programming from '@/assets/programming-languages.svg'
import infra from '@/assets/cloud-computing.svg'
import { TechStackCard } from '@/components/tech-stack-card'
import { languagesMap, frontendMap, backendMap, infraMap } from '@/utils/tech-stack-maps'

export default function Home() {
  return (
    <div className="grid px-10 grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">

      <header className={'py-10 flex items-center justify-between'}>
        <span>Raí Soares</span>

        <nav className={'flex items-center gap-4'}>
          <NavLinks />

          <ModeToggle />
        </nav>
      </header>

      <main className="">
        <div className={'flex flex-col items-center gap-16'}>
          <h2 className={'text-center text-3xl'}>Tecnologias usadas nos projetos</h2>

          <Separator className={'w-full'} />

          <div className={'grid grid-cols-4 w-3/4 justify-items-center'}>
            <TechStackCard title={'Linguagens'} stackMap={languagesMap} image={programming} />
            <TechStackCard title={'Frontend'} stackMap={frontendMap} image={frontend} />
            <TechStackCard title={'Backend'} stackMap={backendMap} image={backend} />
            <TechStackCard title={'Infra'} stackMap={infraMap} image={infra} />
          </div>
        </div>

      </main>

      <footer className="w-full py-10">
        <Separator className={'w-full'} />

        <div className={'flex items-center justify-between pt-8'}>
          <span>&copy; 2024 All rights reserved.</span>
          <NavLinks />
        </div>
      </footer>
    </div>
  )
}
