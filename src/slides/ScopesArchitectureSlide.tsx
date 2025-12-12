import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function ScopesArchitectureSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 6,
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            The <span className="text-cyan-400">Scopes</span> Architecture
          </h1>
          <p className="text-xl text-slate-400 mt-2">
            Everything is managed by <span className="text-yellow-400 font-bold">State Machine</span>
          </p>
        </motion.div>

        {/* Main comparison diagram */}
        <div className="flex-1 flex flex-col">
          {/* Two rows - Babel and Our Approach */}
          <div className="flex-1 grid grid-rows-2 gap-4">

            {/* Row 1: Babel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(0) ? 1 : 0 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="text-lg text-yellow-400 font-bold w-24">Babel</div>

              {/* Source Code */}
              <div className="bg-slate-700/50 border-2 border-slate-500 rounded-xl px-4 py-3 min-w-[140px] text-center">
                <div className="text-base text-white font-medium">Source Code</div>
              </div>

              <div className="text-2xl text-slate-400">→</div>

              {/* Parser */}
              <div className="bg-purple-500/20 border-2 border-purple-500/70 rounded-xl px-4 py-3 min-w-[120px] text-center">
                <div className="text-base text-purple-300 font-medium">Parser</div>
              </div>

              <div className="text-2xl text-slate-400">→</div>

              {/* Traversal */}
              <div className="bg-yellow-500/20 border-2 border-yellow-500/70 rounded-xl px-4 py-3 min-w-[180px] text-center">
                <div className="text-base text-yellow-300 font-medium">Traversal + Visitor</div>
              </div>

              <div className="text-2xl text-slate-400">→</div>

              {/* Generation */}
              <div className="bg-green-500/20 border-2 border-green-500/70 rounded-xl px-4 py-3 min-w-[120px] text-center">
                <div className="text-base text-green-300 font-medium">Generation</div>
              </div>
            </motion.div>

            {/* Row 2: Our Approach - the main focus */}
            <div className="flex items-center justify-center gap-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(0) ? 1 : 0 }}
                className="text-lg text-cyan-400 font-bold w-24"
              >
                Scopes
              </motion.div>

              {/* User Prompt */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible(1) ? 1 : 0.3, y: isVisible(1) ? 0 : 20 }}
                className="bg-slate-800 border-2 border-slate-500 rounded-xl px-5 py-4 min-w-[140px] text-center"
              >
                <div className="text-lg text-white font-bold">User Prompt</div>
                <div className="text-xs text-slate-400 mt-1">"Build a todo app"</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(1) ? 1 : 0 }}
                className="text-2xl text-slate-500"
              >
                →
              </motion.div>

              {/* Planning Scope */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible(2) ? 1 : 0.3, y: isVisible(2) ? 0 : 20 }}
                className="bg-purple-500/20 border-2 border-purple-500 rounded-xl px-5 py-4 min-w-[160px] text-center"
              >
                <div className="text-lg text-purple-400 font-bold">Planning</div>
                <div className="text-xs text-slate-400 mt-1">Scope</div>
                <div className="text-xs text-purple-300 mt-2 bg-purple-500/10 rounded px-2 py-1">
                  → Next states
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(2) ? 1 : 0 }}
                className="text-2xl text-slate-500"
              >
                →
              </motion.div>

              {/* State Machine - Central */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible(3) ? 1 : 0.3, scale: isVisible(3) ? 1 : 0.9 }}
                className="bg-gradient-to-b from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 rounded-2xl px-6 py-4 min-w-[220px]"
              >
                <div className="text-xl text-yellow-400 font-bold text-center mb-3">STATE MACHINE</div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
                    <span className="text-yellow-400">⚙</span>
                    <span className="text-slate-300">Manages sequence</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
                    <span className="text-yellow-400">⚙</span>
                    <span className="text-slate-300">Controls agent loop</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
                    <span className="text-yellow-400">⚙</span>
                    <span className="text-slate-300">Decides next scope</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(3) ? 1 : 0 }}
                className="text-2xl text-slate-500"
              >
                →
              </motion.div>

              {/* Scopes execution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible(4) ? 1 : 0.3, y: isVisible(4) ? 0 : 20 }}
                className="bg-cyan-500/20 border-2 border-cyan-500 rounded-2xl px-5 py-4 min-w-[200px]"
              >
                <div className="text-lg text-cyan-400 font-bold text-center mb-2">SCOPES</div>

                <div className="space-y-2">
                  <div className="bg-cyan-500/10 rounded-lg px-3 py-2 text-center">
                    <div className="text-sm text-white">Each scope has:</div>
                  </div>
                  <div className="flex gap-1 flex-wrap justify-center">
                    <span className="px-2 py-1 bg-purple-500/30 rounded text-xs text-purple-300">context</span>
                    <span className="px-2 py-1 bg-green-500/30 rounded text-xs text-green-300">tools</span>
                    <span className="px-2 py-1 bg-pink-500/30 rounded text-xs text-pink-300">prompt</span>
                  </div>
                  <div className="text-xs text-cyan-300 text-center">
                    Optimized LLM call
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(4) ? 1 : 0 }}
                className="text-2xl text-slate-500"
              >
                →
              </motion.div>

              {/* Output */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible(5) ? 1 : 0.3, y: isVisible(5) ? 0 : 20 }}
                className="bg-green-500/20 border-2 border-green-500 rounded-xl px-5 py-4 min-w-[140px] text-center"
              >
                <div className="text-lg text-green-400 font-bold">Output</div>
                <div className="text-xs text-slate-400 mt-1">Generated app</div>
                <div className="text-xs text-green-300 mt-2">✓ All scopes done</div>
              </motion.div>
            </div>
          </div>

          {/* Mapping arrows between rows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible(0) ? 0.3 : 0 }}
            className="absolute top-[45%] left-0 right-0 flex justify-center gap-[180px] pointer-events-none"
          >
            <span className="text-slate-600 text-lg">↕</span>
            <span className="text-slate-600 text-lg">↕</span>
            <span className="text-slate-600 text-lg">↕</span>
            <span className="text-slate-600 text-lg">↕</span>
          </motion.div>

          {/* Bottom - Key insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible(5) ? 1 : 0, y: isVisible(5) ? 0 : 20 }}
            className="mt-4 bg-gradient-to-r from-cyan-500/10 via-yellow-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5"
          >
            <div className="flex items-center justify-center gap-12">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-lg text-white font-bold">Deterministic Flow</div>
                <div className="text-sm text-slate-400">State machine controls order</div>
              </div>

              <div className="h-16 w-px bg-slate-700" />

              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="text-lg text-white font-bold">Scoped Context</div>
                <div className="text-sm text-slate-400">Each phase gets only what it needs</div>
              </div>

              <div className="h-16 w-px bg-slate-700" />

              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-lg text-white font-bold">Efficient LLM Calls</div>
                <div className="text-sm text-slate-400">Optimized tools + prompts per scope</div>
              </div>

              <div className="h-16 w-px bg-slate-700" />

              <div className="text-center">
                <div className="text-3xl mb-2">🔄</div>
                <div className="text-lg text-white font-bold">Like Babel</div>
                <div className="text-sm text-slate-400">Visitor pattern for agents</div>
              </div>
            </div>
          </motion.div>
        </div>

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
