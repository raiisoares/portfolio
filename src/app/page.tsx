import { ModeToggle } from '@/components/theme/mode-toogle'
import { NavLinks } from '@/components/nav-links'
import { Separator } from '@/components/ui/separator'
import backend from '@/assets/api-design.svg'
import frontend from '@/assets/web-design.svg'
import programming from '@/assets/programming-languages.svg'
import infra from '@/assets/cloud-computing.svg'
import Image from 'next/image'

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
            <div className={'space-y-4'}>
              <Image
                src={programming}
                alt="Logo of programming"
                width={50}
                height={50}
              />

              <h2>Linguagens</h2>

              <ul className={'list-disc px-4'}>
                <li>TypeScript</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Rust</li>
              </ul>
            </div>

            <div className={'space-y-4'}>
              <Image
                src={frontend}
                alt="Logo of frontend"
                width={50}
                height={50}
              />

              <h2>Frontend</h2>

              <ul className={'px-4'}>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Playwright</li>
                <li>Storybook</li>
              </ul>
            </div>

            <div className={'space-y-4'}>
              <Image
                src={backend}
                alt="Logo of backend"
                width={50}
                height={50}
              />

              <h2>Backend</h2>

              <ul className={'px-4'}>
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>Postgres | MySql</li>
                <li>Junit | Jest</li>
                <li>Swagger</li>
              </ul>
            </div>

            <div className={'space-y-4'}>
              <Image
                src={infra}
                alt="Logo of backend"
                width={50}
                height={50}
              />

              <h2>Infra</h2>

              <ul className={'px-4'}>
                <li>Linux</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Jenkins</li>
                <li>Github Actions</li>
              </ul>
            </div>
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
