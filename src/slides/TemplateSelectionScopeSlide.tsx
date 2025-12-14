import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'
import { SiNextdotjs, SiReact, SiSvelte } from '@icons-pack/react-simple-icons'

export function TemplateSelectionScopeSlide() {
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
          className="text-center mb-5"
        >
          <div className="text-lg text-purple-400 font-bold mb-1">SCOPE</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Template Selection
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Left - Context Given to LLM */}
          <div className="flex flex-col gap-4">
            {/* User Request */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5"
            >
              <div className="text-lg text-slate-400 mb-3">User Request:</div>
              <div className="bg-black/30 rounded-xl p-4 font-mono text-base text-white leading-relaxed">
                "Build a ramen cooking timer app with step-by-step instructions, like mob.co.uk"
              </div>
            </motion.div>

            {/* Available Templates with selection.md */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-5"
            >
              <div className="text-lg text-purple-400 mb-3">Templates + selection.md:</div>
              <div className="space-y-2 font-mono text-base">
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <SiNextdotjs size={18} className="text-white" />
                    <span className="text-cyan-400 font-bold">nextjs-tailwind</span>
                  </div>
                  <div className="text-slate-400 text-sm pl-6 mt-1">→ SEO optimized web apps, SSR</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <SiReact size={18} className="text-cyan-400" />
                    <span className="text-green-400 font-bold">react-vite-ts</span>
                  </div>
                  <div className="text-slate-400 text-sm pl-6 mt-1">→ Fast UI, quick iteration</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <SiSvelte size={18} className="text-orange-500" />
                    <span className="text-orange-400 font-bold">svelte-kit</span>
                  </div>
                  <div className="text-slate-400 text-sm pl-6 mt-1">→ Lightweight, performance</div>
                </div>
              </div>
            </motion.div>

            {/* Sub-templates */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : -30 }}
              className="bg-cyan-500/10 border border-cyan-500/50 rounded-2xl p-5"
            >
              <div className="text-lg text-cyan-400 mb-3">Sub-templates (like capabilities!):</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-sm text-cyan-300">
                  workers
                </span>
                <span className="px-3 py-1.5 bg-green-500/20 border border-green-500/40 rounded-lg text-sm text-green-300">
                  database
                </span>
                <span className="px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/40 rounded-lg text-sm text-yellow-300">
                  migrations
                </span>
                <span className="px-3 py-1.5 bg-pink-500/20 border border-pink-500/40 rounded-lg text-sm text-pink-300">
                  playwright
                </span>
                <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-sm text-purple-300">
                  auth
                </span>
              </div>
              <div className="text-sm text-slate-400 mt-3">
                Each has own <span className="text-cyan-400">selection.md</span> → LLM decides what to include
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : -30 }}
              className="bg-pink-500/10 border border-pink-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-pink-400 mb-2">Tools:</div>
              <div className="font-mono text-sm text-pink-300">
                <span className="text-slate-500">└─</span> execute_command() <span className="text-slate-500">→ load template from cloud</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Response + Stats */}
          <div className="flex flex-col gap-4">
            {/* LLM Response */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-4"
            >
              <div className="text-base text-green-400 mb-2">LLM Response:</div>
              <div className="bg-black/30 rounded-xl p-3 font-mono text-sm">
                <div className="text-slate-500">{'{'}</div>
                <div className="pl-4">
                  <span className="text-cyan-400">"template"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"nextjs-tailwind"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"subTemplates"</span>
                  <span className="text-white">: [</span>
                  <span className="text-green-400">"database"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">"workers"</span>
                  <span className="text-white">]</span>
                </div>
                <div className="text-slate-500">{'}'}</div>
              </div>
            </motion.div>

            {/* usage.md saved to history */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
              className="bg-yellow-500/10 border border-yellow-500/50 rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base text-yellow-400">usage.md</span>
                <span className="text-xs text-slate-500">→ saved to history for future scopes</span>
              </div>
              <div className="bg-black/30 rounded-xl p-3 font-mono text-xs text-slate-300 space-y-1">
                <div className="text-yellow-400">## Built with</div>
                <div className="text-slate-400">React Router, ShadCN UI, Tailwind, Vite...</div>
                <div className="text-yellow-400 mt-2">## Restrictions</div>
                <div className="text-slate-400">Custom colors in tailwind.config.js</div>
                <div className="text-yellow-400 mt-2">## Styling</div>
                <div className="text-slate-400">Prefer ShadCN; Icons from lucide-react</div>
              </div>
              <div className="text-xs text-slate-500 mt-2">
                LLM in next scopes will know how to use selected template!
              </div>
            </motion.div>

            {/* What's NOT included */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(4) ? 1 : 0.2, x: isVisible(4) ? 0 : 30 }}
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5"
            >
              <div className="text-lg text-slate-400 mb-3">What's NOT in context:</div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-400">No conversation history</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-400">No previous tool results</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-400">No implementation details</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-400">No file contents</span>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(4) ? 1 : 0, y: isVisible(4) ? 0 : 20 }}
              className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 font-mono">~800</div>
                  <div className="text-sm text-slate-400">tokens</div>
                </div>
                <div className="h-12 w-px bg-slate-600" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">1</div>
                  <div className="text-sm text-slate-400">LLM call</div>
                </div>
                <div className="h-12 w-px bg-slate-600" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">&lt;2s</div>
                  <div className="text-sm text-slate-400">response</div>
                </div>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(4) ? 1 : 0 }}
              className="text-center mt-2"
            >
              <span className="text-2xl font-bold text-white">Clean. Focused. Fast.</span>
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
