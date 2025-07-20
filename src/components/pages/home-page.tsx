import { useTranslations } from 'next-intl'
import { ContactForm } from '@/components/contact-form/contact-form'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { ProjectCard } from '@/components/project-card'
import { SectionContent, SectionHeader, SectionRoot, SectionTitle } from '@/components/section'
import { TechStackCard } from '@/components/tech-stack-card'
import { proCrianca, timeTabling, viaJem } from '@/utils/projects-data'
import { backendMap, frontendMap, infraMap, languagesMap } from '@/utils/tech-stack-maps'
import { ApiDesign } from '../icons/api-design'
import { Frontend } from '../icons/frontend'
import { Infra } from '../icons/infra'
import { ProgrammingLanguages } from '../icons/programming-languages'

export function HomePage() {
  const tTitles = useTranslations('SectionsTitles')
  const tStack = useTranslations('TechStackTitles')

  return (
    <div className='grid px-10 grid-rows-[auto_1fr_auto] min-h-screen font-(family-name:--font-geist-sans)'>
      <Header />

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

      <Footer />
    </div>
  )
}
