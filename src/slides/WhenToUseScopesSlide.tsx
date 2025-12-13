import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function WhenToUseScopesSlide() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            When to Use <span className="text-cyan-400">Scopes</span>?
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Left - When to use */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-green-500/10 border border-green-500/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl text-green-400">✓</span>
              <span className="text-2xl text-green-400 font-bold">Use Scopes When</span>
            </div>

            <div className="space-y-4">
              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Multi-step workflows</div>
                <div className="text-slate-400">Planning → Implementation → Review → Deploy</div>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Long-running tasks</div>
                <div className="text-slate-400">Context would exceed limits in single agent</div>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Predictable flows</div>
                <div className="text-slate-400">You know the phases in advance</div>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Need reliability</div>
                <div className="text-slate-400">Can't afford agent going off-track</div>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Scheduled automation</div>
                <div className="text-slate-400">Cron jobs, background tasks, routines</div>
              </div>
            </div>
          </motion.div>

          {/* Right - When NOT to use */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl text-red-400">✗</span>
              <span className="text-2xl text-red-400 font-bold">Don't Use When</span>
            </div>

            <div className="space-y-4">
              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Simple Q&A</div>
                <div className="text-slate-400">Single turn, no workflow needed</div>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Exploratory tasks</div>
                <div className="text-slate-400">Unknown path, need agent flexibility</div>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Short conversations</div>
                <div className="text-slate-400">Context fits easily, no explosion risk</div>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Highly dynamic flows</div>
                <div className="text-slate-400">Can't predict phases ahead of time</div>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-lg text-white font-bold mb-1">Overhead not worth it</div>
                <div className="text-slate-400">Simple tasks don't need state machines</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom - Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
          className="mt-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-2xl p-5"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">
              Scopes = <span className="text-cyan-400">Structure</span> over <span className="text-purple-400">Flexibility</span>
            </div>
            <div className="text-lg text-slate-400">
              Trade-off: More predictable, less adaptive. Choose based on your use case.
            </div>
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
