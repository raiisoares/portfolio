'use server'

import { z } from 'zod/v4'
import { sendEmails } from '@/api/send-emails'
import { contactMeSchema } from '@/validations/contact-me-validation'

export async function contactMe(data: FormData) {
  const result = contactMeSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = z.flattenError(result.error).fieldErrors
    return { success: false, message: null, errors }
  }

  const { name, message, email } = result.data

  try {
    await sendEmails({ name, message, email })

    return {
      success: true,
      message: 'Mensagem enviada com sucesso!',
      errors: null,
    }
  } catch (err) {
    console.error(err)

    return {
      success: false,
      message: 'Falha ao enviar a mensagem. Tente novamente mais tarde.',
      errors: null,
    }
  }
}
