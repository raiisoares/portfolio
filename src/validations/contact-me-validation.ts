import {z} from 'zod'

const whitelistRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/

export const ContactMeSchema = z.object({
  name: z
    .string()
    .min(1, 'O nome é obrigatório')
    .regex(whitelistRegex, {
      message: 'O nome não deve conter números e caracteres especiais',
    })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
  email: z.string().email({message: 'Formato inválido de email'}),
  message: z.string().min(1, 'O conteúdo do email está vazio!'),
})