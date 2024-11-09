'use client'

import {ModeToggle} from '@/components/theme/mode-toogle'
import {NavLinks} from '@/components/nav-links'
import {Separator} from '@/components/ui/separator'
import backend from '@/assets/icons/api-design.svg'
import frontend from '@/assets/icons/web-design.svg'
import programming from '@/assets/icons/programming-languages.svg'
import infra from '@/assets/icons/cloud-computing.svg'
import {TechStackCard} from '@/components/tech-stack-card'
import {backendMap, frontendMap, infraMap, languagesMap} from '@/utils/tech-stack-maps'
import {SectionContent, SectionHeader, SectionRoot, SectionTitle} from '@/components/section'
import {ProjectCard} from '@/components/project-card'
import {proCrianca} from '@/utils/projects-data'
import {Hero} from "@/components/hero";
import {ContactForm} from "@/components/contact-form";

export default function Home() {
  return (
    <div className='grid px-10 grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <header className={'py-10 flex items-center justify-between'}>
        <span className={'text-xl'}>Raí Soares</span>
        <nav className={'flex items-center gap-4'}>
          <NavLinks/>
          <ModeToggle/>
        </nav>
      </header>

      <main className='flex flex-col w-full'>
        <div className={'flex flex-col gap-6'}>
          <Hero/>

          <SectionRoot>
            <SectionHeader>
              <SectionTitle>Tecnologias usadas nos projetos</SectionTitle>
            </SectionHeader>
            <SectionContent className="grid grid-cols-2 lg:gap-20 justify-items-center lg:grid-cols-4">
              <TechStackCard title={'Linguagens'} stackMap={languagesMap} image={programming}/>
              <TechStackCard title={'Frontend'} stackMap={frontendMap} image={frontend}/>
              <TechStackCard title={'Backend'} stackMap={backendMap} image={backend}/>
              <TechStackCard title={'Infra'} stackMap={infraMap} image={infra}/>
            </SectionContent>
          </SectionRoot>
        </div>

        <SectionRoot>
          <SectionHeader>
            <SectionTitle>Projetos que participo</SectionTitle>
          </SectionHeader>
          <SectionContent className={'gap-5 lg:flex'}>
            <ProjectCard project={proCrianca}/>
            <ProjectCard project={proCrianca}/>
            <ProjectCard project={proCrianca}/>
          </SectionContent>
        </SectionRoot>

        <SectionRoot>
          <SectionHeader>
            <SectionTitle>Vamos trabalhar juntos? Entre em contato &#128075;</SectionTitle>
          </SectionHeader>
          <SectionContent className={'p-0 m-0 w-full lg:w-1/3'}>
            <ContactForm/>
          </SectionContent>
        </SectionRoot>
      </main>

      <footer className="w-full py-10">
        <Separator className={'w-full'}/>

        <div className={'flex items-center justify-between pt-8'}>
          <p className={'text-xs text-zinc-500 align-middle'}>
            &copy; 2024 All rights reserved.
          </p>
          <NavLinks/>
        </div>
      </footer>
    </div>
  )
}
