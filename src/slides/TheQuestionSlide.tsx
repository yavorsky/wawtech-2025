import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function TheQuestionSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 6,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="text-xl text-cyan-400 font-bold mb-2">THE QUESTION</div>
          <p className="text-2xl text-slate-400">Realization dawning</p>
        </motion.div>

        {/* Main content */}
        <div className="max-w-4xl w-full space-y-6">
          {/* Setup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-slate-400 text-center mb-8"
          >
            Staring at that log, I thought:
          </motion.div>

          {/* Realizations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible(0) ? 1 : 0, x: isVisible(0) ? 0 : -20 }}
            className="bg-slate-800/50 rounded-xl p-6"
          >
            <p className="text-3xl text-white font-mono">
              "The agent has <span className="text-cyan-400 font-bold">STATE</span>."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible(1) ? 1 : 0, x: isVisible(1) ? 0 : -20 }}
            className="bg-slate-800/50 rounded-xl p-6"
          >
            <p className="text-3xl text-white font-mono">
              "It <span className="text-green-400 font-bold">KNOWS</span> what phase it's in."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible(2) ? 1 : 0, x: isVisible(2) ? 0 : -20 }}
            className="bg-slate-800/50 rounded-xl p-6"
          >
            <p className="text-3xl text-white font-mono">
              "It <span className="text-green-400 font-bold">KNOWS</span> what files exist."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible(3) ? 1 : 0, x: isVisible(3) ? 0 : -20 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl p-6"
          >
            <p className="text-3xl text-white font-mono">
              "But the <span className="text-red-400 font-bold">LLM doesn't see it</span>."
            </p>
          </motion.div>

          {/* Pause - dramatic space */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible(4) ? 1 : 0 }}
            className="py-4"
          />

          {/* The key question */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isVisible(4) ? 1 : 0,
              scale: isVisible(4) ? 1 : 0.95
            }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 border-2 border-cyan-500/50 rounded-2xl p-8"
          >
            <p className="text-3xl text-white font-mono text-center mb-4">
              "What if... the <span className="text-cyan-400 font-bold">STATE</span> controlled the flow?"
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(5) ? 1 : 0 }}
              className="text-4xl text-white font-mono text-center font-bold"
            >
              "Not the <span className="text-purple-400">LLM</span>?"
            </motion.p>
          </motion.div>
        </div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="absolute bottom-8 text-text-secondary text-lg"
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
