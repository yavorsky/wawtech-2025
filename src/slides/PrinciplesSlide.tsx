import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function PrinciplesSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 6,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Principles for Building <span className="text-cyan-400">AI Agents</span>
          </h1>
          <p className="text-xl text-slate-400 mt-2">with Scopes</p>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-5">
          {/* Principle 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl font-bold text-purple-400">1</span>
              <span className="text-xl text-white font-bold">State Machine Controls Flow</span>
            </div>
            <div className="text-slate-400">
              LLM decides <span className="text-cyan-400">HOW</span>, not <span className="text-yellow-400">WHAT</span> or <span className="text-yellow-400">WHEN</span>.
              Deterministic progression through phases.
            </div>
          </motion.div>

          {/* Principle 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 30 }}
            className="bg-cyan-500/10 border border-cyan-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl font-bold text-cyan-400">2</span>
              <span className="text-xl text-white font-bold">Minimal Context Per Scope</span>
            </div>
            <div className="text-slate-400">
              Give LLM <span className="text-green-400">only what it needs</span> for current task.
              No accumulated history, no irrelevant context.
            </div>
          </motion.div>

          {/* Principle 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : -30 }}
            className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl font-bold text-green-400">3</span>
              <span className="text-xl text-white font-bold">Scoped Tools & Capabilities</span>
            </div>
            <div className="text-slate-400">
              Each scope gets <span className="text-pink-400">specific tools</span>.
              Planning scope can't write files. Implementation scope can't skip to review.
            </div>
          </motion.div>

          {/* Principle 4 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
            className="bg-yellow-500/10 border border-yellow-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl font-bold text-yellow-400">4</span>
              <span className="text-xl text-white font-bold">Structured Output → State</span>
            </div>
            <div className="text-slate-400">
              Each scope returns <span className="text-cyan-400">structured data</span>.
              State machine stores it, passes to next scope as needed.
            </div>
          </motion.div>

          {/* Principle 5 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(4) ? 1 : 0.2, x: isVisible(4) ? 0 : -30 }}
            className="bg-pink-500/10 border border-pink-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl font-bold text-pink-400">5</span>
              <span className="text-xl text-white font-bold">Skip LLM When Possible</span>
            </div>
            <div className="text-slate-400">
              Validation? <span className="text-green-400">Run scripts</span>.
              Routing? <span className="text-green-400">Pure function</span>.
              Save tokens for creative work.
            </div>
          </motion.div>

          {/* Principle 6 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(5) ? 1 : 0.2, x: isVisible(5) ? 0 : 30 }}
            className="bg-orange-500/10 border border-orange-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl font-bold text-orange-400">6</span>
              <span className="text-xl text-white font-bold">Self-Healing Loops</span>
            </div>
            <div className="text-slate-400">
              Errors go to history → <span className="text-cyan-400">retry scope</span>.
              Agent fixes itself within bounded context.
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
