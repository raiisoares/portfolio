import { ModeToggle } from '@/components/theme/mode-toogle'
import { NavLinks } from '@/components/nav-links'
import { Separator } from '@/components/ui/separator'
import backend from '@/assets/icons/api-design.svg'
import frontend from '@/assets/icons/web-design.svg'
import programming from '@/assets/icons/programming-languages.svg'
import infra from '@/assets/icons/cloud-computing.svg'
import { TechStackCard } from '@/components/tech-stack-card'
import { backendMap, frontendMap, infraMap, languagesMap } from '@/utils/tech-stack-maps'
import { SectionContent, SectionHeader, SectionRoot, SectionTitle } from '@/components/section'
import legalPerson from '@/assets/images/legal-person.png'
import { ProjectCard } from '@/components/project-card'

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
        <SectionRoot>
          <SectionHeader>
            <SectionTitle>Tecnologias usadas nos projetos</SectionTitle>
          </SectionHeader>
          <SectionContent>
            <TechStackCard title={'Linguagens'} stackMap={languagesMap} image={programming} />
            <TechStackCard title={'Frontend'} stackMap={frontendMap} image={frontend} />
            <TechStackCard title={'Backend'} stackMap={backendMap} image={backend} />
            <TechStackCard title={'Infra'} stackMap={infraMap} image={infra} />
          </SectionContent>
        </SectionRoot>

        <SectionRoot>
          <SectionHeader>
            <SectionTitle>Projetos que participo</SectionTitle>
          </SectionHeader>
          <SectionContent className={'gap-5 lg:flex'}>
            <ProjectCard
              title={'Pró Criança'}
              description={'Aplicação para controle interno'}
              image={legalPerson}
              status={'PRODUCTION'}
            />

            <ProjectCard
              title={'Pró Criança'}
              description={'Aplicação para controle interno'}
              image={legalPerson}
              status={'USER_TEST'}
            />

            <ProjectCard
              title={'Pró Criança'}
              description={'Aplicação para controle interno'}
              image={legalPerson}
              status={'DEVELOPMENT'}
            />

          </SectionContent>
        </SectionRoot>
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
