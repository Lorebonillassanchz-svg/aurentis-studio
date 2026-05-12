'use client'

import React from 'react'
import { motion } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyRecord = Record<string, any>

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  initial?: AnyRecord
  animate?: AnyRecord
  whileInView?: AnyRecord
  transition?: AnyRecord
  viewport?: AnyRecord
}

export default function MotionWrapper({
  children, style, className,
  initial, animate, whileInView, transition, viewport,
}: Props) {
  return (
    <motion.div
      style={style}
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}
