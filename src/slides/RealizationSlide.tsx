import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function RealizationSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl lg:text-4xl text-slate-300 mb-4">
            We're building <span className="text-cyan-400 font-bold">deterministic systems</span>
          </h1>
          <h1 className="text-3xl lg:text-4xl text-slate-300">
            around <span className="text-purple-400 font-bold">non-deterministic intelligence</span>.
          </h1>
        </motion.div>

        {/* Realization box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible(0) ? 1 : 0, scale: isVisible(0) ? 1 : 0.95 }}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-600 rounded-3xl p-10 max-w-3xl"
        >
          <div className="text-xl text-slate-400 mb-6">Me as engineer realized:</div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible(1) ? 1 : 0, x: isVisible(1) ? 0 : -20 }}
              className="flex items-center gap-4"
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-2xl text-white">State machines <span className="text-cyan-400">still work</span></span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible(1) ? 1 : 0, x: isVisible(1) ? 0 : -20 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-2xl text-white">Focused context <span className="text-cyan-400">still works</span></span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible(1) ? 1 : 0, x: isVisible(1) ? 0 : -20 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-2xl text-white">Structured outputs <span className="text-cyan-400">still work</span></span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible(1) ? 1 : 0, x: isVisible(1) ? 0 : -20 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-2xl text-white">Boring engineering <span className="text-cyan-400">still works</span></span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
            className="mt-8 pt-6 border-t border-slate-700"
          >
            <div className="text-2xl text-slate-300 text-center">
              Just wrapped around something
            </div>
            <div className="text-3xl text-purple-400 font-bold text-center mt-2">
              that thinks back.
            </div>
          </motion.div>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-lg mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Press <kbd className="px-3 py-1.5 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}
