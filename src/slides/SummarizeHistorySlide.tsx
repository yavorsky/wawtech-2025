import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function SummarizeHistorySlide() {
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
          <div className="text-xl text-cyan-400 font-bold mb-2">SECOND ATTEMPT</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Summarize History
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Left - The Idea */}
          <div className="flex flex-col gap-5">
            {/* The Idea */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-6"
            >
              <div className="text-xl font-bold text-purple-400 mb-4">THE IDEA</div>
              <p className="text-xl text-white mb-4">
                Track token usage, when nearing limit → ask LLM to summarize
              </p>

              <div className="bg-surface rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-slate-400">Original (150 iterations):</span>
                  <span className="text-xl text-red-400 font-bold font-mono">600,000 tokens</span>
                </div>

                <div className="border-t border-slate-700 pt-3">
                  <div className="text-base text-slate-500 italic mb-2">
                    "Created Next.js app with auth, database, API routes, and dashboard..."
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg text-slate-400">After summarization:</span>
                  <span className="text-xl text-green-400 font-bold font-mono">50,000 tokens</span>
                </div>
              </div>
            </motion.div>

            {/* Token bar visualization */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-slate-800/50 rounded-xl p-4"
            >
              <div className="text-sm text-slate-400 mb-2">Token savings</div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500 w-16">Before:</span>
                  <div className="flex-1 h-6 bg-black/30 rounded overflow-hidden">
                    <div className="h-full w-[90%] bg-red-500/70" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500 w-16">After:</span>
                  <div className="flex-1 h-6 bg-black/30 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: '90%' }}
                      animate={{ width: isVisible(0) ? '8%' : '90%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-green-500/70"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center text-green-400 mt-2 text-lg font-bold">~92% reduction!</div>
            </motion.div>
          </div>

          {/* Right - What Happened */}
          <div className="flex flex-col gap-5">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 30 }}
              className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6"
            >
              <div className="text-xl font-bold text-red-400 mb-4">WHAT HAPPENED</div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-400 text-xl">✗</span>
                    <span className="text-lg text-white font-bold">Lost critical details:</span>
                  </div>
                  <div className="pl-8 text-base text-slate-400 space-y-1">
                    <div>• Which files exist</div>
                    <div>• What bugs were fixed</div>
                    <div>• Specific implementation decisions</div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-400 text-xl">✗</span>
                    <span className="text-lg text-white font-bold">Agent repeated work:</span>
                  </div>
                  <div className="pl-8 text-base text-slate-400 space-y-1">
                    <div>• Recreated existing files</div>
                    <div>• Re-implemented fixed bugs</div>
                    <div>• Contradicted earlier decisions</div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible(2) ? 1 : 0 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-400 text-xl">✗</span>
                    <span className="text-lg text-white font-bold">Summary itself = 5,000+ tokens</span>
                  </div>
                  <div className="pl-8 text-base text-slate-400">
                    (And keeps growing with each summary)
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Failed tracking = endless errors */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
              className="bg-orange-500/10 border border-orange-500/50 rounded-2xl p-6"
            >
              <div className="text-xl font-bold text-orange-400 mb-3">BONUS PROBLEM</div>

              <div className="flex items-start gap-3 mb-4">
                <span className="text-orange-400 text-xl">⚠</span>
                <span className="text-lg text-white">
                  Failed to track summarization? <span className="text-orange-400 font-bold">Endless errors!</span>
                </span>
              </div>

              <div className="bg-surface rounded-lg p-3 font-mono text-sm">
                <div className="text-slate-500 mb-1"># Real issue from Claude Code</div>
                <div className="text-red-400">Error: Context limit exceeded</div>
                <div className="text-red-400">Error: Context limit exceeded</div>
                <div className="text-red-400">Error: Context limit exceeded</div>
                <div className="text-slate-500">... (loop forever)</div>
              </div>

              <a
                href="https://github.com/anthropics/claude-code/issues/11533"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-cyan-400 hover:text-cyan-300 underline"
              >
                github.com/anthropics/claude-code/issues/11533
              </a>
            </motion.div>
          </div>
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(3) ? 1 : 0 }}
          className="mt-6 text-center"
        >
          <span className="inline-block px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-xl text-2xl text-red-400 font-bold">
            Status: FAILED (Too lossy)
          </span>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-lg mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Press <kbd className="px-3 py-1 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}
