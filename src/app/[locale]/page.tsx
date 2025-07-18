'use client'

import { useTranslations } from 'next-intl'
import { ApiDesign } from '@/assets/icons/api-design'
import { Frontend } from '@/assets/icons/frontend'
import { Infra } from '@/assets/icons/infra'
import { ProgrammingLanguages } from '@/assets/icons/programming-languages'
import { ContactForm } from '@/components/contact-form'
import { Hero } from '@/components/hero'
import { Languages } from '@/components/languages'
import { NavLinks } from '@/components/nav-links'
import { ProjectCard } from '@/components/project-card'
import { SectionContent, SectionHeader, SectionRoot, SectionTitle } from '@/components/section'
import { TechStackCard } from '@/components/tech-stack-card'
import { ModeToggle } from '@/components/theme/mode-toogle'
import { Separator } from '@/components/ui/separator'
import { proCrianca, timeTabling, viaJem } from '@/utils/projects-data'
import { backendMap, frontendMap, infraMap, languagesMap } from '@/utils/tech-stack-maps'

export default function Home() {
  const tTitles = useTranslations('SectionsTitles')
  const tStack = useTranslations('TechStackTitles')

  return (
    <div className='grid px-10 grid-rows-[auto_1fr_auto] min-h-screen font-(family-name:--font-geist-sans)'>
      <header className={'py-10 flex items-center justify-between'}>
        <span className={'text-lg lg:text-xl'}>Raí Soares</span>
        <nav className={'flex items-center gap-4'}>
          <NavLinks />
          <Languages />
          <ModeToggle />
        </nav>
      </header>

      <main className='flex flex-col w-full'>
        <div className={'flex flex-col gap-6'}>
          <Hero />

          <SectionRoot>
            <SectionHeader>
              <SectionTitle>{tTitles('techStackTitle')}</SectionTitle>
            </SectionHeader>
            <SectionContent className='grid grid-cols-2 space-y-4 lg:space-y-0 lg:gap-20 justify-items-center lg:grid-cols-4'>
              <TechStackCard title={tStack('languages')} stackMap={languagesMap} image={ProgrammingLanguages} />
              <TechStackCard title={tStack('frontend')} stackMap={frontendMap} image={Frontend} />
              <TechStackCard title={tStack('backend')} stackMap={backendMap} image={ApiDesign} />
              <TechStackCard title={tStack('infrastructure')} stackMap={infraMap} image={Infra} />
            </SectionContent>
          </SectionRoot>
        </div>

        <SectionRoot>
          <SectionHeader>
            <SectionTitle>{tTitles('projectsTitle')}</SectionTitle>
          </SectionHeader>
          <SectionContent className={'gap-5 lg:flex'}>
            <ProjectCard projectKey={'proCrianca'} projectData={proCrianca} />
            <ProjectCard projectKey={'viaJem'} projectData={viaJem} />
            <ProjectCard projectKey={'timetabling'} projectData={timeTabling} />
          </SectionContent>
        </SectionRoot>

        <SectionRoot>
          <SectionHeader>
            <SectionTitle>{tTitles('contactTitle')} &#128075;</SectionTitle>
          </SectionHeader>
          <SectionContent className={'p-0 m-0 w-full lg:w-1/3'}>
            <ContactForm />
          </SectionContent>
        </SectionRoot>
      </main>

      <footer className='w-full py-10'>
        <Separator className={'w-full'} />

        <div className={'flex items-center justify-between pt-8'}>
          <p className={'text-xs text-zinc-500 align-middle'}>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <NavLinks />
        </div>
      </footer>
    </div>
  )
}
