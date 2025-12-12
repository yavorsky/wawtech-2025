import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'

export function CantForgetSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
            <span className="text-red-400">Can't</span> forget.
          </h1>
          <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight mt-4">
            <span className="text-red-400">Can't</span> compress.
          </h1>
          <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight mt-4">
            <span className="text-red-400">Can't</span> reset.
          </h1>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
