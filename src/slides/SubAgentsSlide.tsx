import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function SubAgentsSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <div className="text-xl text-cyan-400 font-bold mb-2">FOURTH ATTEMPT</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Split Into Sub-Agents
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Left - The Idea */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-6"
          >
            <div className="text-xl font-bold text-purple-400 mb-4">THE IDEA</div>

            <p className="text-lg text-white mb-5">
              Reset context by spawning <span className="text-purple-400">new agent</span> when nearing limit
            </p>

            {/* Agent flow - compact */}
            <div className="space-y-3">
              <div className="bg-surface rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-cyan-500/30 rounded-lg text-cyan-400 font-bold">Agent 1</span>
                  <span className="text-slate-500 text-sm">iter 1-50</span>
                </div>
                <div className="text-base text-slate-400">Plans & creates structure</div>
              </div>

              <div className="flex justify-center text-xl text-slate-500">↓</div>

              <div className="bg-surface rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-500/30 rounded-lg text-green-400 font-bold">Agent 2</span>
                  <span className="text-slate-500 text-sm">iter 51-100</span>
                </div>
                <div className="text-base text-slate-400">Implements features</div>
              </div>

              <div className="flex justify-center text-xl text-slate-500">↓</div>

              <div className="bg-surface rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-pink-500/30 rounded-lg text-pink-400 font-bold">Agent 3</span>
                  <span className="text-slate-500 text-sm">iter 101-150</span>
                </div>
                <div className="text-base text-slate-400">Testing & fixes</div>
              </div>
            </div>

            <div className="mt-4 text-center text-green-400 font-bold text-lg">
              Each starts fresh: small context ✓
            </div>
          </motion.div>

          {/* Middle - Real Example of Coherence Loss */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, y: isVisible(1) ? 0 : 30 }}
            className="bg-slate-800/50 border border-slate-600 rounded-2xl p-6"
          >
            <div className="text-xl font-bold text-slate-300 mb-4">REAL EXAMPLE</div>

            <div className="space-y-4">
              {/* Agent 1 decision */}
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-cyan-500/30 rounded-lg text-cyan-400 font-bold text-sm">Agent 1</span>
                </div>
                <div className="text-base text-white font-mono">
                  "Using <span className="text-cyan-400">singleton pattern</span> for DB connection to avoid pool exhaustion"
                </div>
              </div>

              {/* Handoff - what gets lost */}
              <div className="flex items-center justify-center gap-3 text-base">
                <span className="text-slate-500">handoff:</span>
                <span className="text-yellow-400 font-mono">"db.ts exists"</span>
                <span className="text-red-400 text-sm">(why? lost!)</span>
              </div>

              {/* Agent 2 undoes it */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-green-500/30 rounded-lg text-green-400 font-bold text-sm">Agent 2</span>
                </div>
                <div className="text-base text-white font-mono">
                  "Refactoring to <span className="text-red-400">new connection per request</span> for better isolation"
                </div>
                <div className="text-sm text-red-400 mt-2">
                  ← Undid Agent 1's intentional decision!
                </div>
              </div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(2) ? 1 : 0 }}
                className="bg-red-500/20 rounded-xl p-3 text-center"
              >
                <span className="text-red-400 font-bold text-lg">💥 Connection pool exhausted in prod</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - What Happened */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6"
          >
            <div className="text-xl font-bold text-red-400 mb-4">PROBLEMS</div>

            <div className="space-y-5">
              {/* Problem 1 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <span className="text-lg text-white font-bold">Lost coherence</span>
                </div>
                <div className="pl-7 text-base text-slate-400 space-y-1">
                  <div>• Decisions without full context</div>
                  <div>• Reasoning lost at each boundary</div>
                </div>
              </div>

              {/* Problem 2 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <span className="text-lg text-white font-bold">Coordination overhead</span>
                </div>
                <div className="pl-7 text-base text-slate-400 space-y-1">
                  <div>• What context to pass?</div>
                  <div>• When to switch agents?</div>
                  <div>• How to handle failures?</div>
                </div>
              </div>

              {/* Problem 3 - irony */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(3) ? 1 : 0 }}
                className="bg-orange-500/10 border border-orange-500/50 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-400 text-xl">⚠</span>
                  <span className="text-lg text-orange-400 font-bold">The irony:</span>
                </div>
                <div className="pl-7 text-xl text-white">
                  We wanted <span className="text-cyan-400 font-bold">ONE</span> agent!
                </div>
                <div className="pl-7 text-base text-slate-400 mt-1">
                  Now rebuilding multi-agent... but worse
                </div>

                {/* Visual callback */}
                <div className="mt-4 flex items-center justify-center gap-3 text-sm">
                  <span className="px-3 py-1.5 bg-slate-700 rounded-lg line-through text-slate-500">Multi-Agent</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-3 py-1.5 bg-cyan-500/20 rounded-lg text-cyan-400">Single Agent</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-3 py-1.5 bg-red-500/20 rounded-lg text-red-400">Sub-Agents?</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(3) ? 1 : 0 }}
          className="mt-5 text-center"
        >
          <span className="inline-block px-8 py-4 bg-red-500/20 border border-red-500/50 rounded-xl text-2xl text-red-400 font-bold">
            Status: FAILED (Lost coherence, added complexity)
          </span>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-lg mt-4 text-center"
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
