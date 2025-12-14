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
          initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
          animate={{ opacity: isVisible(0) ? 1 : 0, scale: isVisible(0) ? 1 : 0.95, rotate: isVisible(0) ? -0.5 : 0 }}
          className="bg-slate-800/50 border-2 border-slate-600 p-10 max-w-3xl shadow-[8px_8px_0px_0px_rgba(100,116,139,0.3)]"
        >
          <div className="text-xl text-slate-400 mb-6">The realization:</div>

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
            className="mt-8 pt-6 border-t-2 border-slate-700"
          >
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <div className="bg-slate-700/50 border-2 border-slate-600 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(100,116,139,0.3)]">
                <span className="text-2xl text-slate-300">Just wrapped around something</span>
              </div>
              <div className="bg-purple-500/20 border-2 border-purple-500/50 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)] transform rotate-1">
                <span className="text-2xl text-purple-400 font-bold">that thinks back.</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
