import { type ComponentProps, type ReactNode, useId } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type FormFieldType = {
  label: string
  error?: boolean
}

type FormFieldInputProps = FormFieldType & ComponentProps<'input'>
type FormFieldTextareaProps = FormFieldType & ComponentProps<'textarea'>
type ErrorMessageProps = {
  error: boolean
  message: string
}

type FormFieldProps = {
  children: ReactNode
} & ComponentProps<'div'>

function Root({ children, ...props }: FormFieldProps) {
  return (
    <div {...props} className={`space-y-3 w-full ${props.className ?? ''}`}>
      {children}
    </div>
  )
}

function InputField({ label, error, ...props }: FormFieldInputProps) {
  const id = useId()

  return (
    <>
      <Label htmlFor={id} className={cn('font-light text-sm', error && 'text-destructive', props.className)}>
        {label}
      </Label>
      <Input
        {...props}
        id={id}
        placeholder={label}
        className={cn(error && 'ring-destructive/20 dark:ring-destructive/40 border-destructive', props.className)}
      />
    </>
  )
}

function TextareaField({ label, error, ...props }: FormFieldTextareaProps) {
  const id = useId()

  return (
    <>
      <Label htmlFor={id} className={cn('font-light text-sm', error && 'text-destructive', props.className)}>
        {label}
      </Label>
      <Textarea
        {...props}
        id={id}
        placeholder={label}
        className={cn(error && 'ring-destructive/20 dark:ring-destructive/40 border-destructive', props.className)}
      />
    </>
  )
}

function ErrorMessage({ error, message }: ErrorMessageProps) {
  if (!error) return null

  return <p className='text-sm font-light text-destructive'>{message}</p>
}

export const FormField = {
  Root,
  Input: InputField,
  Error: ErrorMessage,
  Textarea: TextareaField,
}
