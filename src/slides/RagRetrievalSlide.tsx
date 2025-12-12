import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function RagRetrievalSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
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
          <div className="text-xl text-cyan-400 font-bold mb-2">THIRD ATTEMPT</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            RAG Retrieval
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Left - The Idea */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-6"
          >
            <div className="text-xl font-bold text-purple-400 mb-5">THE IDEA</div>

            <p className="text-xl text-white mb-6">
              Store conversation in <span className="text-purple-400">vector DB</span>, retrieve only relevant context
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <span className="text-cyan-400 font-bold text-xl">1.</span>
                <span className="text-lg text-white">Store all messages in vector DB</span>
              </div>
              <div className="flex gap-3">
                <span className="text-cyan-400 font-bold text-xl">2.</span>
                <span className="text-lg text-white">Each iteration, retrieve relevant bits</span>
              </div>
              <div className="flex gap-3">
                <span className="text-cyan-400 font-bold text-xl">3.</span>
                <span className="text-lg text-white">Only load what matches current task</span>
              </div>
            </div>

            {/* Example */}
            <div className="bg-surface rounded-xl p-4">
              <div className="text-base text-slate-400 mb-3">Example:</div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono text-sm">Current:</span>
                  <span className="text-white">"Fix the auth bug"</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-green-400">Retrieve:</span>
                  <span className="text-slate-300">Messages about auth (50 msgs)</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-slate-500">○</span>
                  <span className="text-slate-500">Skip:</span>
                  <span className="text-slate-500">Messages about UI styling (100 msgs)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - What Happened */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6"
          >
            <div className="text-xl font-bold text-red-400 mb-5">WHAT HAPPENED</div>

            <div className="space-y-6">
              {/* Problem 1 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <span className="text-lg text-white font-bold">What's "relevant"?</span>
                </div>
                <div className="pl-8 text-base text-slate-400 space-y-1">
                  <div>• Auth bug might need <span className="text-yellow-400">DB context</span></div>
                  <div>• DB context might need <span className="text-yellow-400">API context</span></div>
                  <div>• <span className="text-red-400">Everything is connected</span></div>
                </div>
              </div>

              {/* Problem 2 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <span className="text-lg text-white font-bold">Retrieval adds complexity:</span>
                </div>
                <div className="pl-8 text-base text-slate-400 space-y-1">
                  <div>• Embedding every message</div>
                  <div>• Similarity search overhead</div>
                  <div>• False negatives (missed context)</div>
                </div>
              </div>

              {/* Problem 3 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(2) ? 1 : 0 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <span className="text-lg text-white font-bold">Still doesn't solve tool outputs</span>
                </div>
                <div className="pl-8 text-base text-slate-400">
                  (50KB results still need to fit somewhere)
                </div>
              </motion.div>

              {/* Visual - Connected graph */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(2) ? 1 : 0 }}
                className="bg-surface rounded-xl p-4 mt-4"
              >
                <div className="text-sm text-slate-500 mb-3">Context dependencies:</div>
                <div className="flex items-center justify-center gap-2 text-sm font-mono">
                  <span className="px-2 py-1 bg-cyan-500/20 rounded text-cyan-400">Auth</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-2 py-1 bg-yellow-500/20 rounded text-yellow-400">DB</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-2 py-1 bg-pink-500/20 rounded text-pink-400">API</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-green-400">Config</span>
                  <span className="text-slate-500">→</span>
                  <span className="text-slate-500">...</span>
                </div>
                <div className="text-center text-red-400 mt-3 text-sm">
                  Miss one link = broken understanding
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(2) ? 1 : 0 }}
          className="mt-6 text-center"
        >
          <span className="inline-block px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-xl text-2xl text-red-400 font-bold">
            Status: FAILED (Too complex, still incomplete)
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
