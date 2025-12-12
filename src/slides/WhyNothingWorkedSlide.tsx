import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function WhyNothingWorkedSlide() {
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
          className="text-center mb-6"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            Why <span className="text-red-400">Nothing</span> Worked
          </h1>
          <p className="text-xl text-slate-400 mt-3">
            The architecture was fundamentally broken
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Problem 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, y: isVisible(0) ? 0 : 30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-red-400 text-3xl">✗</span>
              <span className="text-2xl text-white font-bold">Append-only conversation</span>
            </div>

            <div className="space-y-4 text-lg text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>Every tool call adds to history <span className="text-red-400">forever</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>No way to "forget" old context</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>LLM sees <span className="text-yellow-400">EVERYTHING</span>, always</span>
              </div>
            </div>

            {/* Visual */}
            <div className="mt-6 bg-surface rounded-xl p-4">
              <div className="font-mono text-sm text-slate-500 space-y-1">
                <div>[msg 1] user: "create app"</div>
                <div>[msg 2] assistant: "creating..."</div>
                <div>[msg 3] tool: read_file (2KB)</div>
                <div className="text-slate-600">...</div>
                <div>[msg 847] tool: read_file (50KB)</div>
                <div className="text-red-400 font-bold">[msg 848] 💥 context full</div>
              </div>
            </div>
          </motion.div>

          {/* Problem 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, y: isVisible(1) ? 0 : 30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-red-400 text-3xl">✗</span>
              <span className="text-2xl text-white font-bold">Agent controls flow</span>
            </div>

            <div className="space-y-4 text-lg text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>Agent decides what to do next</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>No structure to the workflow</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>Gets <span className="text-red-400">lost</span> in its own history</span>
              </div>
            </div>

            {/* Visual */}
            <div className="mt-6 bg-surface rounded-xl p-4">
              <div className="flex flex-col items-center gap-2">
                <div className="px-4 py-2 bg-cyan-500/20 rounded-lg text-cyan-400 text-sm">Agent</div>
                <div className="text-slate-500">↓ decides ↓</div>
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs">plan?</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs">code?</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs">test?</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs">fix?</span>
                </div>
                <div className="text-red-400 text-sm mt-2">🎲 random walk through tasks</div>
              </div>
            </div>
          </motion.div>

          {/* Problem 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, y: isVisible(2) ? 0 : 30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-red-400 text-3xl">✗</span>
              <span className="text-2xl text-white font-bold">Global context</span>
            </div>

            <div className="space-y-4 text-lg text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>LLM needs to track <span className="text-yellow-400">everything</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>Planning + Implementation + Testing</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">→</span>
                <span>All in <span className="text-red-400">one</span> context window</span>
              </div>
            </div>

            {/* Visual */}
            <div className="mt-6 bg-surface rounded-xl p-4">
              <div className="text-sm text-slate-500 mb-2">One context holds:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs">planning</span>
                <span className="px-2 py-1 bg-cyan-500/20 rounded text-cyan-400 text-xs">coding</span>
                <span className="px-2 py-1 bg-green-500/20 rounded text-green-400 text-xs">testing</span>
                <span className="px-2 py-1 bg-yellow-500/20 rounded text-yellow-400 text-xs">debugging</span>
                <span className="px-2 py-1 bg-pink-500/20 rounded text-pink-400 text-xs">file reads</span>
                <span className="px-2 py-1 bg-orange-500/20 rounded text-orange-400 text-xs">tool outputs</span>
              </div>
              <div className="text-red-400 text-sm mt-3 text-center">
                All competing for attention
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(3) ? 1 : 0, y: isVisible(3) ? 0 : 20 }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 border border-orange-500/50 rounded-2xl px-10 py-5">
            <p className="text-2xl text-slate-300 mb-2">
              We were trying to <span className="text-red-400 font-bold">FIX</span> the symptoms.
            </p>
            <p className="text-3xl text-white font-bold">
              We needed to <span className="text-cyan-400">CHANGE</span> the architecture.
            </p>
          </div>
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
