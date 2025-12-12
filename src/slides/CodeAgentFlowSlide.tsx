import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const states = [
  { name: 'IDLE', color: 'slate', description: 'Waiting for input' },
  { name: 'TEMPLATE_SELECTION', color: 'purple', description: 'Pick the right starter' },
  { name: 'SPEC_GENERATION', color: 'blue', description: 'Define what to build' },
  { name: 'PHASE_PLANNING', color: 'cyan', description: 'Break into steps' },
  { name: 'PHASE_IMPLEMENTING', color: 'green', description: 'Write the code' },
  { name: 'REVIEWING', color: 'yellow', description: 'Check quality' },
  { name: 'USER_FEEDBACK', color: 'orange', description: 'Get approval' },
]

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  slate: { bg: 'bg-slate-500/20', border: 'border-slate-500', text: 'text-slate-300' },
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500', text: 'text-purple-400' },
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500', text: 'text-blue-400' },
  cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500', text: 'text-cyan-400' },
  green: { bg: 'bg-green-500/20', border: 'border-green-500', text: 'text-green-400' },
  yellow: { bg: 'bg-yellow-500/20', border: 'border-yellow-500', text: 'text-yellow-400' },
  orange: { bg: 'bg-orange-500/20', border: 'border-orange-500', text: 'text-orange-400' },
  emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500', text: 'text-emerald-400' },
}

export function CodeAgentFlowSlide() {
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
            Code Agent: <span className="text-cyan-400">Scope Flow</span>
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Left - State Machine Flow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6"
          >
            <div className="text-xl font-bold text-yellow-400 mb-6 text-center">State Machine</div>

            <div className="space-y-2">
              {states.map((state, index) => (
                <div key={state.name}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible(0) ? 1 : 0, x: isVisible(0) ? 0 : -20 }}
                    transition={{ delay: index * 0.08 }}
                    className={`${colorClasses[state.color].bg} border ${colorClasses[state.color].border} rounded-xl px-4 py-3 flex items-center justify-between`}
                  >
                    <span className={`font-mono font-bold text-lg ${colorClasses[state.color].text}`}>
                      {state.name}
                    </span>
                    <span className="text-sm text-slate-400">{state.description}</span>
                  </motion.div>

                  {index < states.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isVisible(0) ? 1 : 0 }}
                      transition={{ delay: index * 0.08 + 0.04 }}
                      className="flex justify-center py-1"
                    >
                      <span className="text-slate-500 text-lg">↓</span>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Loop back to IDLE */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(0) ? 1 : 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center gap-2 pt-2"
              >
                <span className="text-slate-500 text-lg">↻</span>
                <span className="text-slate-400 text-sm">back to IDLE</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Explanation */}
          <div className="flex flex-col gap-6">
            {/* Key concept */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 30 }}
              className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-6"
            >
              <div className="text-xl font-bold text-purple-400 mb-5">Each State = One Scope</div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🎯</span>
                  <span className="text-lg text-white">Each state = <span className="text-cyan-400 font-bold">One focused scope</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🧠</span>
                  <span className="text-lg text-white">Each scope = <span className="text-green-400 font-bold">Optimized LLM call</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📦</span>
                  <span className="text-lg text-white">Own context, tools, history</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🔄</span>
                  <span className="text-lg text-white">Structured output → next state</span>
                </div>
              </div>
            </motion.div>

            {/* The key insight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 30 }}
              className="flex-1 bg-gradient-to-br from-yellow-500/20 via-cyan-500/10 to-green-500/20 border-2 border-yellow-500/50 rounded-2xl p-6 flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <div className="text-lg text-slate-400 mb-2">The STATE MACHINE controls:</div>
                  <div className="text-3xl font-bold text-yellow-400">WHAT and WHEN</div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-5">
                  <div className="text-lg text-slate-400 mb-2">The LLM controls:</div>
                  <div className="text-3xl font-bold text-cyan-400">HOW</div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <span className="text-lg text-slate-400">Deterministic flow + Creative execution</span>
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
