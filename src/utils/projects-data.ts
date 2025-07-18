import type { Status } from '@/utils/status-map'
import addProCrianca from '../../public/assets/images/details-beneficiaries.png'
import invoice from '../../public/assets/images/invoice.png'
import legalPerson from '../../public/assets/images/legal-person.png'
import loginProCrianca from '../../public/assets/images/login-pro-crianca.png'
import loginViaJem from '../../public/assets/images/login-via-jem.png'
import listProCrianca from '../../public/assets/images/search-beneficiaries.png'
import timetabling from '../../public/assets/images/timetabling.png'

export const proCrianca = {
  status: 'PRODUCTION' as Status,
  srcImgs: [addProCrianca, listProCrianca, loginProCrianca],
  techStack: [
    'React',
    'Spring Boot',
    'Postgres',
    'TanStack Query',
    'shadcn/ui',
    'Swagger',
    'Storybook',
    'AWS',
    'Hook Form',
    'Zod',
    'Tailwind',
    'Docker',
  ],
}

export const viaJem = {
  status: 'DEVELOPMENT' as Status,
  srcImgs: [legalPerson, invoice, loginViaJem],
  techStack: [
    'Next.js',
    'Spring Boot',
    'MySQL ',
    'TanStack Query',
    'shadcn/ui',
    'Swagger',
    'Storybook',
    'Docker',
    'Tailwind',
    'react email',
    'resend',
    'AWS',
  ],
}

export const timeTabling = {
  status: 'DEVELOPMENT' as Status,
  srcImgs: [timetabling],
  techStack: [
    'Next.js',
    'Spring Boot',
    'MySQL ',
    'TanStack Query',
    'shadcn/ui',
    'Swagger',
    'Storybook',
    'Docker',
    'Tailwind',
    'Timefold',
  ],
}
