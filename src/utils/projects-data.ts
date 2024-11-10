import legalPerson from '@/assets/images/legal-person.png'
import invoice from '@/assets/images/invoice.png'
import loginViaJem from '@/assets/images/login-via-jem.png'
import timetabling from '@/assets/images/timetabling.png'
import loginProCrianca from '@/assets/images/login-pro-crianca.png'
import addProCrianca from '@/assets/images/add-pro-crianca.png'
import listProCrianca from '@/assets/images/list-procrianca.png'
import {Status} from "@/utils/status-map";

export const proCrianca = {
  status: 'USER_TEST' as Status,
  srcImgs: [loginProCrianca, addProCrianca, listProCrianca],
  techStack: ['React', 'Spring Boot', 'Postgres', 'TanStack Query', 'shadcn/ui', 'Swagger', 'Storybook', 'AWS',
    'Hook Form', 'Zod', 'Tailwind', 'Docker'],
}

export const viaJem = {
  status: 'DEVELOPMENT' as Status,
  srcImgs: [legalPerson, invoice, loginViaJem],
  techStack: ['Next.js', 'Spring Boot', 'MySQL ', 'TanStack Query', 'shadcn/ui', 'Swagger', 'Storybook', 'Docker',
    'Tailwind', 'react email', 'resend', 'AWS'],
}

export const timeTabling = {
  status: 'DEVELOPMENT' as Status,
  srcImgs: [timetabling],
  techStack: ['Next.js', 'Spring Boot', 'MySQL ', 'TanStack Query', 'shadcn/ui', 'Swagger', 'Storybook', 'Docker',
    'Tailwind', 'Timefold'],
}