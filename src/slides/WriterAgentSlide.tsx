import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'

export function WriterAgentSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-3xl text-text-secondary mb-8">At</p>
          <h1 className="text-7xl lg:text-9xl font-black text-white mb-8">
            WRITER
          </h1>
          <p className="text-3xl text-text-secondary mb-4">we are building</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Action Agent
            </span>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
