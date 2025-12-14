import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
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
        <div className="mb-6 flex justify-center">
          <FunTitle title="The Babel Inspiration" subtitle="How compilers handle complexity" />
        </div>

        {/* Key insights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(0) ? 1 : 0 }}
          className="flex justify-center gap-6 mb-8"
        >
          <div className="transform -rotate-1 bg-slate-800/50 border-2 border-slate-600 px-6 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            <span className="text-2xl text-slate-300">Babel doesn't let the AST decide what to do next</span>
          </div>
          <div className="transform rotate-1 bg-yellow-500/10 border-2 border-yellow-500/50 px-6 py-4 shadow-[4px_4px_0px_0px_rgba(234,179,8,0.3)]">
            <span className="text-2xl text-yellow-400 font-bold">Babel has a TRAVERSAL ORDER</span>
          </div>
        </motion.div>

        {/* Main diagram */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-5">
            {/* Source Code */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.3, x: isVisible(1) ? 0 : -30, rotate: isVisible(1) ? -1 : 0 }}
              className="bg-slate-800 border-2 border-slate-600 p-6 min-w-[200px] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
            >
              <div className="text-2xl text-slate-400 mb-3 text-center font-bold">Source Code</div>
              <div className="bg-black/50 p-4 font-mono text-xl text-green-400">
                <div>const x = 1;</div>
                <div>fn(x + 2);</div>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0 }}
              className="text-4xl text-slate-500"
            >
              →
            </motion.div>

            {/* Parser */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.3, y: isVisible(2) ? 0 : 20, rotate: isVisible(2) ? 1 : 0 }}
              className="bg-purple-500/20 border-2 border-purple-500 p-6 min-w-[180px] shadow-[4px_4px_0px_0px_rgba(168,85,247,0.4)]"
            >
              <div className="text-2xl text-purple-400 font-bold text-center mb-2">PARSER</div>
              <div className="text-xl text-slate-400 text-center">
                Source → AST
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(2) ? 1 : 0 }}
              className="text-4xl text-slate-500"
            >
              →
            </motion.div>

            {/* Traversal - the key part */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.3, scale: isVisible(3) ? 1 : 0.9, rotate: isVisible(3) ? -1 : 0 }}
              className="bg-cyan-500/20 border-2 border-cyan-500 p-6 min-w-[300px] shadow-[6px_6px_0px_0px_rgba(6,182,212,0.4)]"
            >
              <div className="text-2xl text-cyan-400 font-bold text-center mb-3">TRAVERSAL</div>

              <div className="bg-slate-800/80 p-4 mb-3">
                <div className="text-xl text-white font-bold mb-2">Visitor Pattern</div>
                <div className="text-lg text-slate-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-xl">→</span>
                    <span>Each node type has a handler</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-xl">→</span>
                    <span>Deterministic order</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-xl">→</span>
                    <span>Own context per visit</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(3) ? 1 : 0 }}
                className="bg-yellow-500/10 border-2 border-yellow-500/50 p-3"
              >
                <div className="text-xl text-center">
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
              className="text-4xl text-slate-500"
            >
              →
            </motion.div>

            {/* Generation */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 0 }}
              animate={{ opacity: isVisible(4) ? 1 : 0.3, x: isVisible(4) ? 0 : 30, rotate: isVisible(4) ? 1 : 0 }}
              className="bg-green-500/20 border-2 border-green-500 p-6 min-w-[200px] shadow-[4px_4px_0px_0px_rgba(34,197,94,0.4)]"
            >
              <div className="text-2xl text-green-400 font-bold text-center mb-2">GENERATION</div>
              <div className="text-xl text-slate-400 text-center mb-3">
                AST → Output
              </div>
              <div className="bg-black/50 p-4 font-mono text-xl text-green-400">
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
          <div className="transform -rotate-1 bg-slate-800/50 border-2 border-slate-600 px-8 py-5 text-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            <div className="text-2xl font-bold text-white mb-1">State Machine</div>
            <div className="text-lg text-slate-400">Predictable phases</div>
          </div>
          <div className="transform rotate-1 bg-slate-800/50 border-2 border-slate-600 px-8 py-5 text-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            <div className="text-2xl font-bold text-white mb-1">Deterministic</div>
            <div className="text-lg text-slate-400">Same input → same flow</div>
          </div>
          <div className="transform -rotate-1 bg-cyan-500/20 border-2 border-cyan-500 px-8 py-5 text-center shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)]">
            <div className="text-2xl font-bold text-cyan-400 mb-1">Scoped Context</div>
            <div className="text-lg text-slate-400">Each phase has its own</div>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
