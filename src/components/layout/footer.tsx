import { NavLinks } from '@/components/nav-links'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className='w-full py-10'>
      <Separator className={'w-full'} />

      <div className={'flex items-center justify-between pt-8'}>
        <p className={'text-xs text-zinc-500 align-middle'}>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <NavLinks />
      </div>
    </footer>
  )
}
