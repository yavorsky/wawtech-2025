import { motion } from 'framer-motion'

interface FunTitleProps {
  title: string
  subtitle?: string
  className?: string
  variant?: 'fun' | 'neutral'
}

export function FunTitle({ title, subtitle, className = '', variant = 'fun' }: FunTitleProps) {
  if (variant === 'neutral') {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-white text-slate-900 px-5 py-2">
            {title}
          </h1>
        </motion.div>

        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-1"
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-400 px-5">
              {subtitle}
            </h2>
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -3 }}
        animate={{ opacity: 1, x: 0, rotate: -1 }}
        transition={{ duration: 0.5 }}
        className="mb-2 inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300 origin-bottom-left"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-[#6EE7B7] text-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
          {title}
        </h1>
      </motion.div>

      {/* Subtitle */}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block transform rotate-1 hover:rotate-0 transition-transform duration-300 origin-top-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-[#2E1065] text-white px-5 py-2 shadow-[6px_6px_0px_0px_rgba(110,231,183,0.5)]">
            {subtitle}
          </h2>
        </motion.div>
      )}
    </div>
  )
}
