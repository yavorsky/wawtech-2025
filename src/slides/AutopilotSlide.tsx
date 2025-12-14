import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function AutopilotSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 2,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center relative">
        {/* Airbus LLM title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: isVisible(1) ? 1 : 0,
            y: isVisible(1) ? 0 : -50,
          }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="absolute top-8 left-1/2 -translate-x-1/2"
        >
          <div className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl shadow-2xl">
            <h1 className="text-5xl lg:text-6xl font-black text-white">
              ✈️ Airbus <span className="text-background">LLM</span>
            </h1>
          </div>
        </motion.div>

        {/* Autopilot gif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isVisible(0) ? 1 : 0,
            scale: isVisible(0) ? 1 : 0.9,
          }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20"
        >
          <img
            src={`${import.meta.env.BASE_URL}autopilot.gif`}
            alt="Autopilot"
            className="h-[60vh] w-auto"
          />
        </motion.div>


      </div>
    </SlideLayout>
  )
}
