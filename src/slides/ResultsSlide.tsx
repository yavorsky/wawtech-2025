import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function ResultsSlide() {
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
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            Results
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Left - Key metrics */}
          <div className="flex flex-col gap-4">
            {/* Quick wins */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl text-green-400">✓</span>
                  <span className="text-2xl text-white">Working app in <span className="text-green-400 font-bold">3 minutes</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl text-green-400">✓</span>
                  <span className="text-2xl text-white"><span className="text-cyan-400 font-bold">8 files</span> created, ~200 lines</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl text-green-400">✓</span>
                  <span className="text-2xl text-white">Live preview ready</span>
                </div>
              </div>
            </motion.div>

            {/* Agent never forgot */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-5"
            >
              <div className="text-xl text-purple-400 font-bold mb-4">Agent never forgot:</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-black/20 rounded-xl p-3">
                  <span className="text-purple-400">•</span>
                  <span className="text-white">Original request</span>
                  <span className="text-slate-400 ml-auto">(ramen timer app)</span>
                </div>
                <div className="flex items-center gap-3 bg-black/20 rounded-xl p-3">
                  <span className="text-purple-400">•</span>
                  <span className="text-white">Selected template</span>
                  <span className="text-slate-400 ml-auto">(React + Vite + Tailwind)</span>
                </div>
                <div className="flex items-center gap-3 bg-black/20 rounded-xl p-3">
                  <span className="text-purple-400">•</span>
                  <span className="text-white">Phase structure</span>
                  <span className="text-slate-400 ml-auto">(Timer → Steps → Polish)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Context usage */}
          <div className="flex flex-col gap-4">
            {/* Context comparison */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
              className="bg-cyan-500/10 border border-cyan-500/50 rounded-2xl p-5"
            >
              <div className="text-xl text-cyan-400 font-bold mb-4">Context Usage:</div>
              <div className="space-y-3 font-mono">
                <div className="flex items-center justify-between bg-black/20 rounded-xl p-3">
                  <span className="text-purple-400">Template Selection:</span>
                  <span className="text-white font-bold">~800 tokens</span>
                </div>
                <div className="flex items-center justify-between bg-black/20 rounded-xl p-3">
                  <span className="text-blue-400">Spec Creation:</span>
                  <span className="text-white font-bold">~3,500 tokens</span>
                </div>
                <div className="flex items-center justify-between bg-black/20 rounded-xl p-3">
                  <span className="text-green-400">Implementation:</span>
                  <span className="text-white font-bold">~50k per phase</span>
                </div>
              </div>
            </motion.div>

            {/* Max context comparison */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-4 text-center">
                  <div className="text-sm text-slate-400 mb-1">Scopes Approach</div>
                  <div className="text-3xl font-bold text-green-400 font-mono">50k</div>
                  <div className="text-sm text-slate-400">max context</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-center">
                  <div className="text-sm text-slate-400 mb-1">Old Approach</div>
                  <div className="text-3xl font-bold text-red-400 font-mono">500k+</div>
                  <div className="text-sm text-red-400">would have failed</div>
                </div>
              </div>
            </motion.div>

            {/* Success badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible(4) ? 1 : 0, scale: isVisible(4) ? 1 : 0.9 }}
              className="bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-purple-500/20 border-2 border-green-500 rounded-2xl p-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  Scopes Pattern: <span className="text-green-400">WORKS</span>
                </div>
                <div className="text-xl text-slate-400">
                  Deterministic flow + Focused context = Reliable agents
                </div>
              </div>
            </motion.div>
          </div>
        </div>

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
