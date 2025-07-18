'use client'

import type { MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'
import { useInView } from 'react-intersection-observer'

type SectionRootProps = ComponentProps<'div'> & MotionProps

export function SectionRoot(props: SectionRootProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className='flex flex-col items-center gap-16 pb-14'
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      {...props}
    />
  )
}
