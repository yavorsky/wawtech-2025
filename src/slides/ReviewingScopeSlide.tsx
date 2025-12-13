import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function ReviewingScopeSlide() {
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
          <div className="text-lg text-yellow-400 font-bold mb-1">SCOPE</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Reviewing
          </h1>
          <p className="text-xl text-slate-400 mt-2">
            No LLM needed — we know the <span className="text-yellow-400 font-bold">validation scripts</span>
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Left - Validation Scripts */}
          <div className="flex flex-col gap-4">
            {/* Template knows validation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-yellow-500/10 border border-yellow-500/50 rounded-2xl p-5"
            >
              <div className="text-lg text-yellow-400 mb-3">Template Validation Scripts:</div>
              <div className="space-y-3 font-mono">
                <div className="bg-black/30 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-cyan-400 text-xl">▶</span>
                  <span className="text-lg text-white">pnpm typecheck</span>
                </div>
                <div className="bg-black/30 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-cyan-400 text-xl">▶</span>
                  <span className="text-lg text-white">pnpm lint</span>
                </div>
                <div className="bg-black/30 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-cyan-400 text-xl">▶</span>
                  <span className="text-lg text-white">pnpm build</span>
                </div>
              </div>
              <div className="text-sm text-slate-400 mt-3">
                Deterministic checks — no LLM tokens wasted!
              </div>
            </motion.div>

            {/* No LLM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">🚫</div>
                <div>
                  <div className="text-xl text-green-400 font-bold">No LLM Call</div>
                  <div className="text-slate-400 mt-1">
                    State machine runs scripts directly
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Decision Flow */}
          <div className="flex flex-col gap-4">
            {/* Success Path */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl text-green-400">✓</span>
                <span className="text-xl text-green-400 font-bold">All Checks Pass</span>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 text-lg">→</span>
                  <span className="text-lg text-white">Go to</span>
                  <span className="px-3 py-1 bg-orange-500/30 border border-orange-500 rounded-lg text-orange-400 font-mono font-bold">
                    USER_FEEDBACK
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Failure Path */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
              className="bg-red-500/10 border border-red-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl text-red-400">✗</span>
                <span className="text-xl text-red-400 font-bold">Check Failed</span>
              </div>
              <div className="space-y-3">
                <div className="bg-black/30 rounded-xl p-4">
                  <div className="text-sm text-slate-400 mb-2">1. Save error to history:</div>
                  <div className="font-mono text-xs text-red-300 bg-red-500/10 rounded-lg p-2">
                    Error: Type 'string' is not assignable to type 'number'
                    <br />
                    at src/components/Timer.tsx:42
                  </div>
                </div>
                <div className="bg-black/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 text-lg">→</span>
                    <span className="text-lg text-white">Go back to</span>
                    <span className="px-3 py-1 bg-green-500/30 border border-green-500 rounded-lg text-green-400 font-mono font-bold">
                      PHASE_IMPLEMENTING
                    </span>
                  </div>
                </div>
                <div className="text-sm text-slate-400">
                  LLM sees error in history → fixes it!
                </div>
              </div>
            </motion.div>

            {/* Self-healing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(4) ? 1 : 0, y: isVisible(4) ? 0 : 20 }}
              className="bg-gradient-to-r from-yellow-500/20 to-green-500/20 border border-yellow-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl">🔄</span>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">Self-Healing Loop</div>
                  <div className="text-sm text-slate-400 mt-1">
                    IMPLEMENTING → REVIEWING → IMPLEMENTING → ...
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom - Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(4) ? 1 : 0, y: isVisible(4) ? 0 : 20 }}
          className="mt-4 bg-slate-800/50 border border-slate-600 rounded-2xl p-4"
        >
          <div className="flex items-center justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">0 tokens</div>
              <div className="text-sm text-slate-400">for validation</div>
            </div>
            <div className="h-10 w-px bg-slate-600" />
            <div>
              <div className="text-2xl font-bold text-green-400">Deterministic</div>
              <div className="text-sm text-slate-400">pass/fail result</div>
            </div>
            <div className="h-10 w-px bg-slate-600" />
            <div>
              <div className="text-2xl font-bold text-cyan-400">Auto-retry</div>
              <div className="text-sm text-slate-400">on failure</div>
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
