import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

interface ContentSlideProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function ContentSlide({ title, subtitle, children }: ContentSlideProps) {
  return (
    <SlideLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-full items-center justify-center"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-2xl md:text-3xl lg:text-4xl text-text-secondary">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants} className="flex-1 w-full max-w-6xl">
          {children}
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
