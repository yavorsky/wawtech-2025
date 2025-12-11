import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SlideLayoutProps {
  children: ReactNode
  className?: string
}

function BackgroundArcs() {
  const arcs = Array.from({ length: 8 }, (_, i) => ({
    radius: 200 + i * 80,
  }))

  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMinYMax slice"
    >
      <g transform="translate(-200, 1280)">
        {arcs.map((arc, index) => (
          <motion.circle
            key={index}
            cx={0}
            cy={0}
            r={arc.radius}
            fill="none"
            stroke="#4c1d95"
            strokeWidth={1.5}
            strokeOpacity={0.4 - index * 0.03}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
          />
        ))}
      </g>
    </svg>
  )
}

export function SlideLayout({ children, className }: SlideLayoutProps) {
  return (
    <div
      className={cn(
        'w-full h-full flex flex-col bg-background relative overflow-hidden',
        className
      )}
    >
      <BackgroundArcs />
      <div className="relative z-10 flex-1 flex flex-col p-16 lg:p-20 xl:p-24">
        {children}
      </div>
    </div>
  )
}
