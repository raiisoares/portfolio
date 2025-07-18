'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactMeSchema } from '@/validations/contact-me-validation'

export function ContactForm() {
  const t = useTranslations('ContactForm')

  const form = useForm<z.infer<typeof ContactMeSchema>>({
    resolver: zodResolver(ContactMeSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof ContactMeSchema>) {
    try {
      await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      form.reset()
      toast.success('Mensagem enviada com sucesso')
    } catch {
      toast.error('Erro ao enviar mensagem')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-8'>
        <div className={'flex flex-col lg:flex-row items-center gap-4'}>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className={'w-full'}>
                <FormLabel>{t('name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('name')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className={'w-full'}>
                <FormLabel>{t('email')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('email')} type={'email'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className={'h-40'}>
              <FormLabel>{t('message')}</FormLabel>
              <FormControl>
                <Textarea placeholder={t('message')} {...field} className={'mx-0 h-40'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' disabled={form.formState.isSubmitting} className={'mt-8'}>
          {t('submit')}
        </Button>
      </form>
    </Form>
  )
}
