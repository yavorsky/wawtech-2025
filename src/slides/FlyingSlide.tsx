import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function FlyingSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Plane emoji */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          animate={{
            opacity: isVisible(0) ? 1 : 0,
            x: isVisible(0) ? 0 : -100,
            rotate: isVisible(0) ? 0 : -10,
          }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-9xl mb-12"
        >
          ✈️
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isVisible(1) ? 1 : 0.2,
            scale: isVisible(1) ? 1 : 0.9,
          }}
          transition={{ duration: 0.6 }}
          className="text-6xl lg:text-8xl font-bold text-white text-center mb-16"
        >
          Who's afraid of <span className="text-cyan-400">flying</span>?
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isVisible(2) ? 1 : 0,
            y: isVisible(2) ? 0 : 30,
          }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl text-text-secondary text-center max-w-4xl"
        >
          Let me tell you a story...
        </motion.p>

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
