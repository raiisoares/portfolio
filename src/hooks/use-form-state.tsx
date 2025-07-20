import { type FormEvent, useState, useTransition } from 'react'

export interface FormState {
  success: boolean
  message: string | null
  errors: Record<string, string[]> | null
}

export function useFormState(
  action: (data: FormData) => Promise<FormState>,
  onSuccess?: (message: string | null) => Promise<void> | void,
  onError?: (message: string | null) => Promise<void> | void,
  initialState?: FormState,
) {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<FormState>(initialState ?? { success: false, message: null, errors: null })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    startTransition(async () => {
      const state = await action(data)

      if (state.success) {
        if (onSuccess) await onSuccess(state.message)
        form.reset()
      } else {
        if (onError) await onError(state.message)
      }

      setFormState(state)
    })
  }

  return [formState, handleSubmit, isPending] as const
}
