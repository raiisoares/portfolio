'use client'

import { Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { contactMe } from '@/app/[locale]/actions'
import { FormField } from '@/components/contact-form/form-filed'
import { Button } from '@/components/ui/button'
import { useFormState } from '@/hooks/use-form-state'

export function ContactForm() {
  const t = useTranslations('ContactForm')

  function onSuccess(message: string | null) {
    toast.success(message || t('successMessage'))
  }

  function onError(message: string | null) {
    toast.error(message || t('errorMessage'))
  }

  const [{ errors }, handleSubmit, isPending] = useFormState(contactMe, onSuccess, onError)

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-8' noValidate>
      <div className='w-full flex flex-col lg:flex-row items-center gap-4'>
        <FormField.Root>
          <FormField.Input name='name' type='text' label={t('name')} error={!!errors?.name} placeholder={t('name')} />
          <FormField.Error error={!!errors?.name} message={errors?.name?.[0] ?? ''} />
        </FormField.Root>

        <FormField.Root>
          <FormField.Input
            name='email'
            type='email'
            label={t('email')}
            error={!!errors?.email}
            placeholder={t('email')}
          />
          <FormField.Error error={!!errors?.email} message={errors?.email?.[0] ?? ''} />
        </FormField.Root>
      </div>

      <FormField.Root>
        <FormField.Textarea
          name='message'
          label={t('message')}
          error={!!errors?.message}
          placeholder={t('message')}
          className='h-40'
        />
        <FormField.Error error={!!errors?.message} message={errors?.message?.[0] ?? ''} />
      </FormField.Root>

      <Button className='w-full bg-primary' type='submit' disabled={isPending}>
        {isPending ? <Loader2 className='size-4 animate-spin' /> : t('submit')}
      </Button>
    </form>
  )
}
