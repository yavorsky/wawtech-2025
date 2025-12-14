import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function CapabilitiesSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-3"
        >
          <div className="text-lg text-cyan-400 font-bold mb-1">FIRST ATTEMPT</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Capabilities
          </h1>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/30 rounded-xl p-6 mb-5"
        >
          <div className="flex items-center justify-center gap-8">
            {/* Agent Configuration */}
            <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-5 min-w-[340px]">
              <div className="text-lg text-slate-400 mb-3">Agent Configuration</div>
              <div className="bg-slate-800 rounded-lg p-3 mb-4 text-lg text-slate-300 text-center">
                Core system prompt
              </div>
              <div className="text-base text-slate-400 mb-3">Equipped Capabilities</div>
              <div className="flex flex-wrap gap-2">
                {['typescript', 'react-test', 'docker', 'eslint', '...'].map((cap) => (
                  <span key={cap} className="px-3 py-1.5 bg-green-500/20 border border-green-500/40 rounded text-base text-green-400">
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-slate-400 text-base">use sandbox</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl text-cyan-400"
              >
                →
              </motion.div>
            </div>

            {/* Sandbox */}
            <div className="bg-cyan-500/10 border border-cyan-500/40 rounded-xl p-5 min-w-[400px]">
              <div className="text-lg text-cyan-400 mb-3">Sandbox</div>
              <div className="flex gap-3 mb-4">
                {['Bash', 'Python', 'Node.js'].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-slate-700 rounded text-base text-white">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="text-base text-slate-400 mb-3">File System</div>
              <div className="grid grid-cols-2 gap-3 text-base font-mono">
                <div className="bg-cyan-500/10 rounded p-3">
                  <div className="text-cyan-400">capabilities/typescript/</div>
                  <div className="text-slate-500 pl-3 text-sm">- CAPABILITY.md</div>
                  <div className="text-slate-500 pl-3 text-sm">- type-check.ts</div>
                </div>
                <div className="bg-cyan-500/10 rounded p-3">
                  <div className="text-cyan-400">capabilities/docker/</div>
                  <div className="text-slate-500 pl-3 text-sm">- CAPABILITY.md</div>
                  <div className="text-slate-500 pl-3 text-sm">- build.sh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Annotation */}
          <div className="flex justify-center mt-4">
            <div className="bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-2 text-base text-green-400">
              Capability contents live in sandbox file system
            </div>
          </div>
        </motion.div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Left - The Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-6"
          >
            <div className="text-2xl font-bold text-purple-400 mb-5">THE CONCEPT</div>

            <div className="space-y-5">
              <div className="flex gap-3">
                <span className="text-2xl">📁</span>
                <p className="text-xl text-white">
                  <span className="text-purple-400">Folders</span> with prompts + scripts
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl">📋</span>
                <p className="text-xl text-white">
                  Initially: <span className="text-cyan-400">~100 tokens</span> metadata
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl">⚡</span>
                <p className="text-xl text-white">
                  On demand: load to <span className="text-green-400">sandbox</span>
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl">🔧</span>
                <p className="text-xl text-white">
                  Scripts → <span className="text-cyan-400">output only</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle - Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, y: isVisible(1) ? 0 : 30 }}
            className="bg-green-500/10 border border-green-500/50 rounded-2xl p-6"
          >
            <div className="text-2xl font-bold text-green-400 mb-5">BENEFITS</div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-xl text-white">Reduced initial context</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-xl text-white">Progressive disclosure</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-xl text-white">Composable capabilities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-xl text-white">No code in context</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Problems */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
            className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6"
          >
            <div className="text-2xl font-bold text-red-400 mb-5">BUT...</div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-xl text-white">Context still grows</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-xl text-white">Can't unload context</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-xl text-white">Loaded caps stay forever</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(3) ? 1 : 0 }}
                className="flex items-start gap-3"
              >
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-xl text-red-400 font-bold">Same problem @ iter 100</span>
              </motion.div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(3) ? 1 : 0 }}
              className="mt-5 bg-surface rounded-lg p-3"
            >
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-text-secondary">1</span>
                <div className="flex-1 mx-3 h-3 bg-black/30 rounded overflow-hidden">
                  <motion.div
                    initial={{ width: '10%' }}
                    animate={{ width: isVisible(3) ? '95%' : '10%' }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                  />
                </div>
                <span className="text-text-secondary">100</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
