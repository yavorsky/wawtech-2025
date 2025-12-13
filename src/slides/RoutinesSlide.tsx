import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function RoutinesSlide() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Routines: <span className="text-cyan-400">Scheduled Scoped Execution</span>
          </h1>
          <p className="text-xl text-slate-400 mt-2">
            Same scoped execution. <span className="text-yellow-400">Different trigger.</span>
          </p>
        </motion.div>

        <div className="flex-1 flex flex-col gap-3 overflow-hidden">
          {/* Cron Scheduler */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, y: isVisible(0) ? 0 : -20 }}
            className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl p-3 text-center"
          >
            <div className="text-lg text-yellow-400 font-bold">CRON SCHEDULER</div>
            <div className="font-mono text-slate-300">"0 3 * * 1" (Monday 3am)</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible(0) ? 1 : 0 }}
            className="text-center text-slate-500 text-xl"
          >
            ↓
          </motion.div>

          {/* State Machine */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2 }}
            className="bg-purple-500/10 border border-purple-500/50 rounded-xl p-3"
          >
            <div className="text-base text-purple-400 font-bold text-center mb-2">STATE MACHINE</div>
            <div className="flex flex-wrap justify-center gap-1 text-xs font-mono">
              <span className="px-2 py-1 bg-slate-500/30 rounded text-slate-300">IDLE</span>
              <span className="text-slate-500">→</span>
              <span className="px-2 py-1 bg-cyan-500/30 rounded text-cyan-300">FETCH</span>
              <span className="text-slate-500">→</span>
              <span className="px-2 py-1 bg-green-500/30 rounded text-green-300">BUNDLE</span>
              <span className="text-slate-500">→</span>
              <span className="px-2 py-1 bg-yellow-500/30 rounded text-yellow-300">ANALYZE</span>
              <span className="text-slate-500">→</span>
              <span className="px-2 py-1 bg-pink-500/30 rounded text-pink-300">GENERATE</span>
              <span className="text-slate-500">→</span>
              <span className="px-2 py-1 bg-slate-500/30 rounded text-slate-300">DONE</span>
            </div>
          </motion.div>

          {/* Scopes Grid */}
          <div className="flex-1 grid grid-cols-4 gap-3">
            {/* Scope 1: Fetch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, y: isVisible(1) ? 0 : 20 }}
              className="bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-3"
            >
              <div className="text-sm text-cyan-400 font-bold mb-2">SCOPE 1: Fetch Version</div>
              <div className="space-y-2 text-xs">
                <div className="bg-black/20 rounded-lg p-2">
                  <div className="text-slate-500 mb-1">Context:</div>
                  <div className="text-slate-300">Framework: "Next.js"</div>
                  <div className="text-slate-300">Current: "14.2.0"</div>
                </div>
                <div className="bg-black/20 rounded-lg p-2">
                  <div className="text-slate-500 mb-1">Tools:</div>
                  <div className="text-cyan-300 font-mono">web_search</div>
                  <div className="text-cyan-300 font-mono">fetch_cdn_url</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-2">
                  <div className="text-green-400">Output: "15.1.0" detected</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-2 text-center">~3,000 tokens</div>
            </motion.div>

            {/* Scope 2: Bundle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, y: isVisible(2) ? 0 : 20 }}
              className="bg-green-500/10 border border-green-500/50 rounded-xl p-3"
            >
              <div className="text-sm text-green-400 font-bold mb-2">SCOPE 2: Bundle Version</div>
              <div className="space-y-2 text-xs">
                <div className="bg-black/20 rounded-lg p-2">
                  <div className="text-slate-500 mb-1">Context:</div>
                  <div className="text-slate-300">New version: "15.1.0"</div>
                </div>
                <div className="bg-black/20 rounded-lg p-2">
                  <div className="text-slate-500 mb-1">Tools:</div>
                  <div className="text-green-300 font-mono">download_from_cdn</div>
                  <div className="text-green-300 font-mono">npm_install_bundle</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-2">
                  <div className="text-green-400">Output: Minified bundle</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-2 text-center">~5,000 tokens</div>
            </motion.div>

            {/* Scope 3: Analyze */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, y: isVisible(3) ? 0 : 20 }}
              className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl p-3"
            >
              <div className="text-sm text-yellow-400 font-bold mb-2">SCOPE 3: Analyze Patterns</div>
              <div className="space-y-2 text-xs">
                <div className="bg-black/20 rounded-lg p-2">
                  <div className="text-slate-500 mb-1">Looking for:</div>
                  <div className="text-slate-300">• Strings that survive minify</div>
                  <div className="text-slate-300">• Method names preserved</div>
                  <div className="text-slate-300">• Unique identifiers</div>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-2 font-mono text-xs">
                  <div className="text-yellow-300">"use server"</div>
                  <div className="text-yellow-300">__NEXT_DATA__.rsc</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-2 text-center">~15,000 tokens</div>
            </motion.div>

            {/* Scope 4: Generate PR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(4) ? 1 : 0.2, y: isVisible(4) ? 0 : 20 }}
              className="bg-pink-500/10 border border-pink-500/50 rounded-xl p-3"
            >
              <div className="text-sm text-pink-400 font-bold mb-2">SCOPE 4: Generate PR</div>
              <div className="space-y-2 text-xs">
                <div className="bg-black/20 rounded-lg p-2">
                  <div className="text-slate-500 mb-1">Tools:</div>
                  <div className="text-pink-300 font-mono">read_file</div>
                  <div className="text-pink-300 font-mono">edit_file</div>
                  <div className="text-pink-300 font-mono">create_github_pr</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-2">
                  <div className="text-green-400 font-bold">PR: "Add Next.js 15.1"</div>
                  <div className="text-slate-400">+ 'use server' detection</div>
                  <div className="text-slate-400">- old middleware</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-2 text-center">~8,000 tokens</div>
            </motion.div>
          </div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible(5) ? 1 : 0, y: isVisible(5) ? 0 : 20 }}
            className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-xl p-4"
          >
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">GitHub PR Ready</div>
                <div className="text-slate-400">for human review</div>
              </div>
              <div className="h-10 w-px bg-slate-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">2 min</div>
                <div className="text-slate-400">vs 3 hours manual</div>
              </div>
              <div className="h-10 w-px bg-slate-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">Actual bundles</div>
                <div className="text-slate-400">not changelogs</div>
              </div>
            </div>
          </motion.div>

          {/* Key insight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible(6) ? 1 : 0 }}
            className="text-center text-lg text-slate-400"
          >
            Pattern detection via <span className="text-cyan-400 font-bold">minification survival</span> — not reading changelogs!
          </motion.div>
        </div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-lg mt-2 text-center"
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
