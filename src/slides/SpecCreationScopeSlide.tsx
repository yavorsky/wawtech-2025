import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function SpecCreationScopeSlide() {
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
          className="text-center mb-4"
        >
          <div className="text-lg text-blue-400 font-bold mb-1">SCOPE</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Spec Creation
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Left - Context Given to LLM */}
          <div className="flex flex-col gap-3">
            {/* User Request */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-4"
            >
              <div className="text-base text-slate-400 mb-2">User Request:</div>
              <div className="bg-black/30 rounded-xl p-3 font-mono text-sm text-white leading-relaxed">
                "Build a ramen cooking timer app with step-by-step instructions, like mob.co.uk"
              </div>
            </motion.div>

            {/* Design Inspiration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-orange-500/10 border border-orange-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-orange-400 mb-2">Design Inspiration:</div>
              <div className="bg-black/30 rounded-xl p-3 font-mono text-sm text-orange-300">
                Fetched content from mob.co.uk
              </div>
              <div className="text-xs text-slate-500 mt-2">
                Visual style, layout patterns, UX flows
              </div>
            </motion.div>

            {/* Selected Template */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-purple-400 mb-2">From Previous Scope:</div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">├─</span>
                  <span className="text-cyan-400">template:</span>
                  <span className="text-white">react-vite-ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">└─</span>
                  <span className="text-cyan-400">subTemplates:</span>
                  <span className="text-white">["workers"]</span>
                </div>
              </div>
            </motion.div>

            {/* File Structure */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-cyan-500/10 border border-cyan-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-cyan-400 mb-2">Current File Structure:</div>
              <div className="bg-black/20 rounded-xl p-3 font-mono text-xs text-slate-300">
                <div>src/</div>
                <div className="pl-3">├── components/</div>
                <div className="pl-3">├── hooks/</div>
                <div className="pl-3">├── App.tsx</div>
                <div className="pl-3">└── main.tsx</div>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-pink-500/10 border border-pink-500/50 rounded-2xl p-3"
            >
              <div className="text-sm text-pink-400 mb-1">Tools:</div>
              <div className="font-mono text-xs text-pink-300">
                <span className="text-slate-500">└─</span> fetch_url() <span className="text-slate-500">→ get design inspiration</span>
              </div>
            </motion.div>
          </div>

          {/* Right - LLM Output */}
          <div className="flex flex-col gap-3">
            {/* Spec Output */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-4 flex-1"
            >
              <div className="text-base text-green-400 mb-3">LLM Creates Complete Spec:</div>
              <div className="bg-black/30 rounded-xl p-3 font-mono text-xs space-y-1.5 max-h-[400px] overflow-y-auto">
                <div className="text-yellow-400 font-bold"># Ramen Timer Pro</div>

                <div className="text-cyan-400 mt-2">## Design System</div>
                <div className="pl-3 text-slate-400">Colors, typography, spacing...</div>

                <div className="text-cyan-400 mt-2">## UX Principles</div>
                <div className="pl-3 text-slate-400">Large touch targets, visual feedback...</div>

                <div className="text-green-400 mt-2 font-bold">## Implementation Strategy</div>
                <div className="pl-3 space-y-1">
                  <div className="text-slate-300">Visual excellence requirements:</div>
                  <div className="text-slate-400 pl-2">• Rich Tailwind: gradients, shadows</div>
                  <div className="text-slate-400 pl-2">• Hover states, transitions</div>
                  <div className="text-slate-400 pl-2">• Multiple visual layers</div>
                </div>

                <div className="text-yellow-400 mt-2 font-bold">## Phases</div>
                <div className="pl-3 space-y-1">
                  <div className="text-yellow-300">Phase 1: Timer Core</div>
                  <div className="text-yellow-300">Phase 2: Recipe Steps</div>
                  <div className="text-yellow-300">Phase 3: Polish & PWA</div>
                </div>
              </div>
            </motion.div>

            {/* Spec saved to STATE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
              className="bg-yellow-500/10 border border-yellow-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base text-yellow-400">spec.implementation</span>
                <span className="text-xs text-slate-500">→ saved to STATE</span>
              </div>
              <div className="bg-black/30 rounded-xl p-3 text-sm">
                <div className="text-yellow-300 font-bold mb-1">All implementation scopes reference this!</div>
                <div className="text-slate-400 text-xs space-y-1">
                  <div>• PHASE_PLANNING reads spec.phases</div>
                  <div>• PHASE_IMPLEMENTING reads spec.designSystem</div>
                  <div>• REVIEWING checks against spec.uxPrinciples</div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(4) ? 1 : 0, y: isVisible(4) ? 0 : 20 }}
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 font-mono">~3,500</div>
                  <div className="text-sm text-slate-400">tokens</div>
                </div>
                <div className="h-10 w-px bg-slate-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">1</div>
                  <div className="text-sm text-slate-400">LLM call</div>
                </div>
                <div className="h-10 w-px bg-slate-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">&lt;5s</div>
                  <div className="text-sm text-slate-400">response</div>
                </div>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(4) ? 1 : 0 }}
              className="text-center"
            >
              <span className="text-xl font-bold text-white">Blueprint for everything that follows.</span>
            </motion.div>
          </div>
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
