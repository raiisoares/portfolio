import legalPerson from '@/assets/images/legal-person.png'
import {Status} from "@/utils/status-map";

export const proCrianca = {
  title: 'Pró Criança',
  description: 'Aplicação para controle interno',
  status: 'PRODUCTION' as Status,
  date: 'Março 2024',
  details: `Aplicação de gerenciamento de matriculas de beneficiários, colaboradores, cursos, 
  projetos filtros personalizados e geração de relatórios`,
  srcImgs: [legalPerson, legalPerson, legalPerson],
  techStack: ['React', 'Spring Boot', 'Postgres', 'Tanstek Query', 'Shadcn/ui', 'swagger', 'storybook', 'AWS',
  'hook form', 'zod', 'tailwind'],
}