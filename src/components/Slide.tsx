import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SlideProps {
  children: ReactNode
  className?: string
}

export function Slide({ children, className }: SlideProps) {
  return (
    <div
      className={cn(
        'w-full h-full flex flex-col items-center justify-center',
        'bg-background relative overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  )
}
