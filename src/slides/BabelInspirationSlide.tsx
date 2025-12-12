import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function BabelInspirationSlide() {
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
            The <span className="text-yellow-400">Babel</span> Inspiration
          </h1>
          <p className="text-xl text-slate-400 mt-2">
            How compilers handle complexity
          </p>
        </motion.div>

        {/* Key insights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(0) ? 1 : 0 }}
          className="flex justify-center gap-6 mb-8"
        >
          <div className="bg-slate-800/50 border border-slate-600 rounded-xl px-6 py-3">
            <span className="text-lg text-slate-300">Babel doesn't let the AST decide what to do next</span>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl px-6 py-3">
            <span className="text-lg text-yellow-400 font-bold">Babel has a TRAVERSAL ORDER</span>
          </div>
        </motion.div>

        {/* Main diagram */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-4">
            {/* Source Code */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.3, x: isVisible(1) ? 0 : -30 }}
              className="bg-slate-800 border-2 border-slate-600 rounded-2xl p-6 min-w-[180px]"
            >
              <div className="text-lg text-slate-400 mb-3 text-center">Source Code</div>
              <div className="bg-black/50 rounded-lg p-3 font-mono text-sm text-green-400">
                <div>const x = 1;</div>
                <div>fn(x + 2);</div>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0 }}
              className="text-3xl text-slate-500"
            >
              →
            </motion.div>

            {/* Parser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.3, y: isVisible(2) ? 0 : 20 }}
              className="bg-purple-500/20 border-2 border-purple-500 rounded-2xl p-6 min-w-[160px]"
            >
              <div className="text-xl text-purple-400 font-bold text-center mb-2">PARSER</div>
              <div className="text-sm text-slate-400 text-center">
                Source → AST
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(2) ? 1 : 0 }}
              className="text-3xl text-slate-500"
            >
              →
            </motion.div>

            {/* Traversal - the key part */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.3, scale: isVisible(3) ? 1 : 0.9 }}
              className="bg-cyan-500/20 border-2 border-cyan-500 rounded-2xl p-6 min-w-[280px]"
            >
              <div className="text-xl text-cyan-400 font-bold text-center mb-3">TRAVERSAL</div>

              <div className="bg-slate-800/80 rounded-xl p-4 mb-3">
                <div className="text-base text-white font-bold mb-2">Visitor Pattern</div>
                <div className="text-sm text-slate-400 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Each node type has a handler</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Deterministic order</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Own context per visit</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(3) ? 1 : 0 }}
                className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-3"
              >
                <div className="text-sm text-center">
                  <span className="text-slate-400">Like an </span>
                  <span className="text-yellow-400 font-bold">LLM</span>
                  <span className="text-slate-400"> — operates </span>
                  <span className="text-cyan-400 font-bold">WITHIN</span>
                  <span className="text-slate-400"> structure</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Arrow 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(3) ? 1 : 0 }}
              className="text-3xl text-slate-500"
            >
              →
            </motion.div>

            {/* Generation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(4) ? 1 : 0.3, x: isVisible(4) ? 0 : 30 }}
              className="bg-green-500/20 border-2 border-green-500 rounded-2xl p-6 min-w-[180px]"
            >
              <div className="text-xl text-green-400 font-bold text-center mb-2">GENERATION</div>
              <div className="text-sm text-slate-400 text-center mb-3">
                AST → Output
              </div>
              <div className="bg-black/50 rounded-lg p-3 font-mono text-sm text-green-400">
                <div>var x = 1;</div>
                <div>fn(x + 2);</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(4) ? 1 : 0, y: isVisible(4) ? 0 : 20 }}
          className="mt-6 flex justify-center gap-8"
        >
          <div className="bg-slate-800/50 border border-slate-600 rounded-xl px-6 py-4 text-center">
            <div className="text-2xl font-bold text-white mb-1">State Machine</div>
            <div className="text-slate-400">Predictable phases</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-600 rounded-xl px-6 py-4 text-center">
            <div className="text-2xl font-bold text-white mb-1">Deterministic</div>
            <div className="text-slate-400">Same input → same flow</div>
          </div>
          <div className="bg-cyan-500/20 border border-cyan-500 rounded-xl px-6 py-4 text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">Scoped Context</div>
            <div className="text-slate-400">Each phase has its own</div>
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
