import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function PhaseImplementationScopeSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 7,
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
          <div className="text-lg text-green-400 font-bold mb-1">SCOPE</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Phase Implementation
          </h1>
          <p className="text-xl text-slate-400 mt-2">
            NOW the LLM gets <span className="text-green-400 font-bold">tools</span> and <span className="text-cyan-400 font-bold">autonomy</span>
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Left - Context Given to LLM */}
          <div className="flex flex-col gap-3">
            {/* Current Phase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-green-400 mb-2">Current Phase:</div>
              <div className="bg-black/30 rounded-xl p-3 font-mono text-lg text-white">
                "Setup Timer Component"
              </div>
            </motion.div>

            {/* Phase Implementation Strategy from Blueprint */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-yellow-500/10 border border-yellow-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base text-yellow-400">From spec.implementation:</span>
                <span className="text-xs text-slate-500">Phase Implementation Strategy</span>
              </div>
              <div className="bg-black/20 rounded-lg p-3 text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">1.</span>
                  <span className="text-slate-300">Install framer-motion dependency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">2.</span>
                  <span className="text-slate-300">Create Timer.tsx component</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">3.</span>
                  <span className="text-slate-300">Update HomePage to import & render</span>
                </div>
              </div>
            </motion.div>

            {/* History + Blueprint */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : -30 }}
              className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-purple-400 mb-2">Full Context:</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
                  <span className="text-yellow-400">📋</span>
                  <span className="text-white">spec.implementation</span>
                  <span className="text-slate-500">→ Blueprint</span>
                </div>
                <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
                  <span className="text-cyan-400">📁</span>
                  <span className="text-white">File structure</span>
                  <span className="text-slate-500">→ Current state</span>
                </div>
                <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
                  <span className="text-green-400">💬</span>
                  <span className="text-white">Whole History!</span>
                  <span className="text-slate-500">→ Every file edit</span>
                </div>
              </div>
              <div className="text-xs text-slate-400 mt-2">
                LLM knows full state from all previous edits!
              </div>
            </motion.div>

            {/* Available Tools + MCP */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : -30 }}
              className="bg-pink-500/10 border border-pink-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base text-pink-400">Available Tools</span>
                <span className="px-2 py-0.5 bg-pink-500/30 rounded text-xs text-pink-300">+ MCP!</span>
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                <div className="bg-black/20 rounded-lg px-3 py-2 text-pink-300">create_file()</div>
                <div className="bg-black/20 rounded-lg px-3 py-2 text-pink-300">edit_file()</div>
                <div className="bg-black/20 rounded-lg px-3 py-2 text-pink-300">shell_command()</div>
                <div className="bg-black/20 rounded-lg px-3 py-2 text-pink-300">web_search()</div>
              </div>
            </motion.div>

            {/* System Prompt with usage.md */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(4) ? 1 : 0.2, x: isVisible(4) ? 0 : -30 }}
              className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">✨</span>
                <span className="text-base text-cyan-400 font-bold">System Prompt</span>
              </div>

              {/* usage.md from template */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-2 mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-400 text-xs font-bold">usage.md</span>
                  <span className="text-slate-500 text-xs">from templateScope</span>
                </div>
                <div className="text-xs text-slate-400 space-y-0.5">
                  <div>• ShadCN UI, Tailwind, Vite</div>
                  <div>• Custom colors in tailwind.config</div>
                  <div>• Icons from lucide-react</div>
                </div>
              </div>

              {/* Visual Excellence */}
              <div className="text-xs text-purple-400 font-bold mb-2">Visual Excellence:</div>
              <div className="space-y-1.5 text-xs">
                <div className="bg-black/20 rounded-lg px-2 py-1.5">
                  <span className="text-purple-300">Rich Tailwind:</span>
                  <span className="text-slate-400"> gradients, shadows</span>
                </div>
                <div className="bg-black/20 rounded-lg px-2 py-1.5">
                  <span className="text-pink-300">Interactions:</span>
                  <span className="text-slate-400"> hover, focus, animations</span>
                </div>
                <div className="bg-black/20 rounded-lg px-2 py-1.5">
                  <span className="text-cyan-300">Visual depth:</span>
                  <span className="text-slate-400"> layers, overlays</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - LLM Capabilities */}
          <div className="flex flex-col gap-3">
            {/* LLM Can Now */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(5) ? 1 : 0.2, x: isVisible(5) ? 0 : 30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-green-400 mb-3">LLM Focuses on Execution:</div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-white">Create files</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-white">Run commands</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-white">Search for docs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-white">Test the code</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-white">Fix bugs</span>
                </div>
              </div>
              <div className="text-sm text-slate-400 mt-3 border-t border-slate-700 pt-3">
                Plan already in place → Focus on <span className="text-green-400">quality</span>
              </div>
            </motion.div>

            {/* Bounded */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(6) ? 1 : 0.2, x: isVisible(6) ? 0 : 30 }}
              className="bg-orange-500/10 border border-orange-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-orange-400 mb-3">BUT: Bounded by Phase</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-300">Can't jump to planning next phase</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-300">Can't modify unrelated files</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-300">Can't skip research/planning</span>
                </div>
              </div>
              <div className="text-center mt-3 text-orange-300 font-bold">
                Focused on THIS task only
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(6) ? 1 : 0, y: isVisible(6) ? 0 : 20 }}
          className="mt-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-2xl p-4"
        >
          <div className="flex items-center justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">History</div>
              <div className="text-sm text-slate-400">Full context</div>
            </div>
            <div className="text-2xl text-slate-500">+</div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">Blueprint</div>
              <div className="text-sm text-slate-400">Design specs</div>
            </div>
            <div className="text-2xl text-slate-500">+</div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">Phase Plan</div>
              <div className="text-sm text-slate-400">Step by step</div>
            </div>
            <div className="text-2xl text-slate-500">=</div>
            <div>
              <div className="text-2xl font-bold text-pink-400">Quality Focus</div>
              <div className="text-sm text-slate-400">Not planning!</div>
            </div>
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
