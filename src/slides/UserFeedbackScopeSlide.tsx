import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function UserFeedbackScopeSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 5,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="text-lg text-orange-400 font-bold mb-1">SCOPE</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            User Feedback
          </h1>
          <p className="text-xl text-slate-400 mt-2">
            LLM as <span className="text-orange-400 font-bold">pure function</span> — decide what's next
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Left - What LLM gets */}
          <div className="flex flex-col gap-4">
            {/* Pure function */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-orange-500/10 border border-orange-500/50 rounded-2xl p-5"
            >
              <div className="text-lg text-orange-400 mb-3">User Message:</div>
              <div className="bg-black/30 rounded-xl p-4 font-mono text-lg text-white">
                "Add a pause button to the timer"
              </div>
            </motion.div>

            {/* What's NOT included */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5"
            >
              <div className="text-lg text-slate-400 mb-3">Pure Function — No:</div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-red-400 text-lg">✗</span>
                  <span className="text-slate-300">History</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 text-lg">✗</span>
                  <span className="text-slate-300">Tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 text-lg">✗</span>
                  <span className="text-slate-300">Capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 text-lg">✗</span>
                  <span className="text-slate-300">MCP</span>
                </div>
              </div>
              <div className="text-sm text-slate-500 mt-3">
                Just classify the intent → ultra fast!
              </div>
            </motion.div>

            {/* Speed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 font-mono">~200</div>
                  <div className="text-sm text-slate-400">tokens</div>
                </div>
                <div className="h-10 w-px bg-slate-600" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">&lt;1s</div>
                  <div className="text-sm text-slate-400">response</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Decision branches */}
          <div className="flex flex-col gap-3">
            {/* Complex request */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
              className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏗️</span>
                <span className="text-lg text-purple-400 font-bold">Complex Request</span>
              </div>
              <div className="bg-black/30 rounded-xl p-3 mb-2">
                <div className="text-sm text-slate-400 italic">"Add user authentication"</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">→</span>
                <span className="text-white">Go to</span>
                <span className="px-2 py-1 bg-blue-500/30 border border-blue-500 rounded-lg text-blue-400 font-mono text-sm font-bold">
                  SPEC_GENERATION
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-2">Plan new phase(s)</div>
            </motion.div>

            {/* Small fix */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔧</span>
                <span className="text-lg text-green-400 font-bold">Fix / Small Update</span>
              </div>
              <div className="bg-black/30 rounded-xl p-3 mb-2">
                <div className="text-sm text-slate-400 italic">"Add a pause button"</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">→</span>
                <span className="text-white">Add to history →</span>
                <span className="px-2 py-1 bg-green-500/30 border border-green-500 rounded-lg text-green-400 font-mono text-sm font-bold">
                  IMPLEMENTING
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-2">Skip planning, go straight to code</div>
            </motion.div>

            {/* Question */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(4) ? 1 : 0.2, x: isVisible(4) ? 0 : 30 }}
              className="bg-cyan-500/10 border border-cyan-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💬</span>
                <span className="text-lg text-cyan-400 font-bold">Question / Response</span>
              </div>
              <div className="bg-black/30 rounded-xl p-3 mb-2">
                <div className="text-sm text-slate-400 italic">"Why did we update this file?"</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">→</span>
                <span className="text-white">Direct response →</span>
                <span className="px-2 py-1 bg-slate-500/30 border border-slate-500 rounded-lg text-slate-300 font-mono text-sm font-bold">
                  IDLE
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-2">Answer and wait for next input</div>
            </motion.div>
          </div>
        </div>

        {/* Bottom - Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(4) ? 1 : 0, y: isVisible(4) ? 0 : 20 }}
          className="mt-4 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/50 rounded-2xl p-4"
        >
          <div className="text-center">
            <div className="text-xl font-bold text-white mb-2">
              Router, not a Worker
            </div>
            <div className="text-slate-400">
              Classify intent → Route to correct state → Let specialized scope handle it
            </div>
          </div>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-lg mt-3 text-center"
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
