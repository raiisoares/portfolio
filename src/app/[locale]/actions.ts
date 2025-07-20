'use server'

import { toast } from 'sonner'
import { z } from 'zod/v4'
import { contactMeSchema } from '@/validations/contact-me-validation'

export async function contactMe(data: FormData) {
  const result = contactMeSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = z.flattenError(result.error).fieldErrors
    return { success: false, message: null, errors }
  }

  const { name, message, email } = result.data

  try {
    await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message, email }),
    })

    toast.success('Mensagem enviada com sucesso')

    return {
      success: true,
      message: 'Mensagem enviada com sucesso',
      errors: null,
    }
  } catch (err) {
    console.error(err)
    toast.error('Erro ao enviar mensagem')

    return {
      success: false,
      message: 'Unexpected Error, try again in a few minutes!',
      errors: null,
    }
  }
}
