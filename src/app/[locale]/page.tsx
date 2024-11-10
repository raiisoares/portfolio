'use client'

import {ModeToggle} from '@/components/theme/mode-toogle'
import {NavLinks} from '@/components/nav-links'
import {Separator} from '@/components/ui/separator'
import {TechStackCard} from '@/components/tech-stack-card'
import {backendMap, frontendMap, infraMap, languagesMap} from '@/utils/tech-stack-maps'
import {SectionContent, SectionHeader, SectionRoot, SectionTitle} from '@/components/section'
import {ProjectCard} from '@/components/project-card'
import {proCrianca} from '@/utils/projects-data'
import {Hero} from "@/components/hero";
import {ContactForm} from "@/components/contact-form";
import {ApiDesign} from "@/assets/icons/api-design";
import {ProgrammingLanguages} from "@/assets/icons/programming-languages";
import {Frontend} from "@/assets/icons/frontend";
import {Infra} from "@/assets/icons/infra";
import {Languages} from "@/components/languages";
import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations('SectionsTitles')

  return (
    <div className='grid px-10 grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <header className={'py-10 flex items-center justify-between'}>
        <span className={'text-lg lg:text-xl'}>Raí Soares</span>
        <nav className={'flex items-center gap-4'}>
          <NavLinks/>
          <Languages/>
          <ModeToggle/>
        </nav>
      </header>

      <main className='flex flex-col w-full'>
        <div className={'flex flex-col gap-6'}>
          <Hero/>

          <SectionRoot>
            <SectionHeader>
              <SectionTitle>{t('techStackTitle')}</SectionTitle>
            </SectionHeader>
            <SectionContent className="grid grid-cols-2 space-y-4 lg:gap-20 justify-items-center lg:grid-cols-4">
              <TechStackCard title={'Linguagens'} stackMap={languagesMap} image={ProgrammingLanguages}/>
              <TechStackCard title={'Frontend'} stackMap={frontendMap} image={Frontend}/>
              <TechStackCard title={'Backend'} stackMap={backendMap} image={ApiDesign}/>
              <TechStackCard title={'Infra'} stackMap={infraMap} image={Infra}/>
            </SectionContent>
          </SectionRoot>
        </div>

        <SectionRoot>
          <SectionHeader>
            <SectionTitle>{t('projectsTitle')}</SectionTitle>
          </SectionHeader>
          <SectionContent className={'gap-5 lg:flex'}>
            <ProjectCard projectKey={'proCrianca'} projectData={proCrianca}/>
            <ProjectCard projectKey={'proCrianca'} projectData={proCrianca}/>
            <ProjectCard projectKey={'proCrianca'} projectData={proCrianca}/>
          </SectionContent>
        </SectionRoot>

        <SectionRoot>
          <SectionHeader>
            <SectionTitle>{t('contactTitle')} &#128075;</SectionTitle>
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
