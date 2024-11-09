'use client'

import {useForm} from 'react-hook-form'
import {ContactMeSchema} from '@/validations/contact-me-validation'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {toast} from "sonner"
import {useTranslations} from "next-intl";

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

  function onSubmit(values: z.infer<typeof ContactMeSchema>) {
    try {
      console.log(values)
      toast.success('Contact form successfully')
    } catch {
      toast.error('Something goes wrong!')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-8'>
        <div className={'flex flex-col lg:flex-row items-center gap-4'}>
          <FormField
            control={form.control}
            name='name'
            render={({field}) => (
              <FormItem className={'w-full'}>
                <FormLabel>{t('name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('name')} {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem className={'w-full'}>
                <FormLabel>{t('email')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('email')} type={'email'} {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({field}) => (
            <FormItem className={'h-40'}>
              <FormLabel>{t('message')}</FormLabel>
              <FormControl>
                <Textarea placeholder={t('message')} {...field} className={'mx-0 h-40'}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <Button type="submit" className={'mt-8'}>{t('submit')}</Button>
      </form>
    </Form>
  )
}