import { z } from 'zod/v4'

export const contactMeSchema = z.object({
  name: z.string().min(1, 'Por favor, informe seu nome.'),
  email: z.email({ error: 'Digite um e-mail válido.' }),
  message: z.string().min(1, 'Escreva uma mensagem para que eu possa responder.'),
})
