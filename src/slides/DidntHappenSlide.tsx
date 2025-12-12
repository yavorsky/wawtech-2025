import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function DidntHappenSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Main text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isVisible(0) ? 1 : 0,
            scale: isVisible(0) ? 1 : 0.9,
          }}
          transition={{ duration: 0.5 }}
          className="text-6xl lg:text-8xl font-bold text-white text-center mb-12"
        >
          This didn't happen.
        </motion.h1>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible(1) ? 1 : 0,
            y: isVisible(1) ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl text-text-secondary text-center mb-8"
        >
          (Planes don't use LLMs for flight control)
        </motion.p>

        {/* Yet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isVisible(2) ? 1 : 0,
            scale: isVisible(2) ? 1 : 0.5,
          }}
          transition={{ duration: 0.4, type: 'spring' }}
          className="text-5xl lg:text-6xl font-bold text-cyan-400 italic"
        >
          (Yet)
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="absolute bottom-24 text-text-secondary text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Press <kbd className="px-4 py-2 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}
