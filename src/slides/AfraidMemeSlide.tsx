import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'

export function AfraidMemeSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20"
        >
          <img
            src={`${import.meta.env.BASE_URL}afraid-of-flying.gif`}
            alt="Leslie Nielsen - Afraid of Flying"
            className="h-[70vh] w-auto"
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
