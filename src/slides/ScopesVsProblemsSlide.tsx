import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function ScopesVsProblemsSlide() {
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
          className="text-center mb-6"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            <span className="text-cyan-400">Scopes</span> vs <span className="text-red-400">Problems</span>
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Problem 1: Context explosion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-red-400">✗</span>
              <span className="text-xl text-red-400 font-bold">Context explosion</span>
            </div>
            <div className="text-slate-400">
              History grows unbounded, LLM slows down, loses focus
            </div>
          </motion.div>

          {/* Solution 1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : 30 }}
            className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-green-400">✓</span>
              <span className="text-xl text-green-400 font-bold">Focused context per scope</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-mono">Template selection:</span>
                <span className="text-white font-bold">~800 tokens</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-mono">Spec creation:</span>
                <span className="text-white font-bold">~3,500 tokens</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-mono">Implementation:</span>
                <span className="text-white font-bold">50k tokens max</span>
              </div>
            </div>
            <div className="text-xs text-slate-500 mt-2">Never accumulates full history</div>
          </motion.div>

          {/* Problem 2: Forgets goal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-red-400">✗</span>
              <span className="text-xl text-red-400 font-bold">Agent forgets original goal</span>
            </div>
            <div className="text-slate-400">
              After 50 tool calls, what were we building again?
            </div>
          </motion.div>

          {/* Solution 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 30 }}
            className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-green-400">✓</span>
              <span className="text-xl text-green-400 font-bold">State machine tracks progress</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Original request stored in state</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">spec.implementation stored in state</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Phase list stored in state</span>
              </div>
            </div>
            <div className="text-xs text-slate-500 mt-2">Each scope gets structured state</div>
          </motion.div>

          {/* Problem 3: MCP floods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : -30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-red-400">✗</span>
              <span className="text-xl text-red-400 font-bold">MCP 50KB outputs flood context</span>
            </div>
            <div className="text-slate-400">
              One web fetch = context destroyed for next operations
            </div>
          </motion.div>

          {/* Solution 3 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
            className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-green-400">✓</span>
              <span className="text-xl text-green-400 font-bold">Scopes contain the damage</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">MCP output only in ONE scope</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Doesn't carry to next scope</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Fresh context for next phase</span>
              </div>
            </div>
          </motion.div>

          {/* Problem 4: Agent controls flow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : -30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-red-400">✗</span>
              <span className="text-xl text-red-400 font-bold">Agent controls flow, gets lost</span>
            </div>
            <div className="text-slate-400">
              LLM decides what to do next → unpredictable behavior
            </div>
          </motion.div>

          {/* Solution 4 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
            className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-green-400">✓</span>
              <span className="text-xl text-green-400 font-bold">State machine controls flow</span>
            </div>
            <div className="flex flex-wrap gap-1 text-xs font-mono mt-2">
              <span className="px-2 py-1 bg-slate-500/30 rounded text-slate-300">IDLE</span>
              <span className="text-slate-500">→</span>
              <span className="px-2 py-1 bg-purple-500/30 rounded text-purple-300">TEMPLATE</span>
              <span className="text-slate-500">→</span>
              <span className="px-2 py-1 bg-blue-500/30 rounded text-blue-300">SPEC</span>
              <span className="text-slate-500">→</span>
              <span className="px-2 py-1 bg-green-500/30 rounded text-green-300">IMPLEMENTING</span>
            </div>
            <div className="text-xs text-slate-500 mt-2">Deterministic • LLM can't skip or repeat</div>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(4) ? 1 : 0, y: isVisible(4) ? 0 : 20 }}
          className="mt-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/50 rounded-2xl p-4"
        >
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                Same problems. <span className="text-cyan-400">Structural</span> solutions.
              </div>
            </div>
            <div className="h-10 w-px bg-slate-600" />
            <a
              href="https://app.writer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-purple-500/20 border border-purple-500 rounded-xl hover:bg-purple-500/30 transition-colors"
            >
              <span className="text-2xl">🚀</span>
              <div>
                <div className="text-lg font-bold text-purple-400">Live Demo</div>
                <div className="text-sm text-slate-400">app.writer.com</div>
              </div>
            </a>
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
