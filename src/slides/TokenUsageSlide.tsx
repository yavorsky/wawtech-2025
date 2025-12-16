import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function TokenUsageSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  const toolCalls = [
    { name: 'create_file', count: '10+', desc: 'components, pages, configs' },
    { name: 'execute_command', count: '8+', desc: 'npm install, dev server, lint' },
    { name: 'web_search', count: '3+', desc: 'API docs, libraries' },
    { name: 'edit_file', count: '15+', desc: 'fix errors, add features' },
    { name: 'read_file', count: '10+', desc: 'check existing code' },
  ]

  const contextItems = [
    'File contents',
    'File edits history',
    'Command outputs',
    'Error messages',
    'Previous iterations',
  ]

  const requirements = [
    { text: 'Code compiles', color: 'text-green-400' },
    { text: 'TypeScript passes', color: 'text-blue-400' },
    { text: 'Lint passes', color: 'text-yellow-400' },
    { text: 'Visual result works', color: 'text-purple-400' },
    { text: 'Technical excellence', color: 'text-cyan-400' },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <FunTitle
            title="Despite Looking Silly..."
            subtitle="The complexity is massive"
            variant="neutral"
          />
        </div>

        <div className="flex-1 grid grid-cols-3 gap-5">
          {/* Left - Tool Calls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.3, x: isVisible(0) ? 0 : -20 }}
            className="bg-green-500/10 border-2 border-green-500/40 p-5 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)] transform -rotate-1"
          >
            <div className="text-center mb-5">
              <div className="text-5xl font-black text-green-400 font-mono">30+</div>
              <div className="text-xl text-green-400">tool calls</div>
            </div>

            <div className="space-y-2">
              {toolCalls.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isVisible(0) ? 1 : 0, x: isVisible(0) ? 0 : -10 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 px-3 py-2"
                >
                  <span className="text-lg font-bold text-green-400 font-mono">{tool.count}</span>
                  <div>
                    <div className="text-base text-white font-mono">{tool.name}</div>
                    <div className="text-xs text-slate-500">{tool.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center - Iterations & Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.3, y: isVisible(1) ? 0 : 20 }}
            className="bg-purple-500/10 border-2 border-purple-500/40 p-5 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)]"
          >
            <div className="text-center mb-5">
              <div className="text-5xl font-black text-purple-400 font-mono">40+</div>
              <div className="text-xl text-purple-400">iterations</div>
            </div>

            <div className="text-base text-slate-400 mb-3">Context accumulates:</div>
            <div className="space-y-2">
              {contextItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible(1) ? 1 : 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-purple-400" />
                  <span className="text-base text-white">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-center bg-purple-500/20 border border-purple-500/40 py-3"
            >
              <div className="text-3xl font-black text-purple-400 font-mono">200K+ tokens</div>
            </motion.div>
          </motion.div>

          {/* Right - Output Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.3, x: isVisible(2) ? 0 : 20 }}
            className="bg-cyan-500/10 border-2 border-cyan-500/40 p-5 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)] transform rotate-1"
          >
            <div className="text-center mb-5">
              <div className="text-2xl font-bold text-cyan-400">Output Matters</div>
              <div className="text-base text-slate-400">Everything must pass</div>
            </div>

            <div className="space-y-3">
              {requirements.map((req, i) => (
                <motion.div
                  key={req.text}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: isVisible(2) ? 1 : 0, x: isVisible(2) ? 0 : 10 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 px-4 py-2"
                >
                  <div className="w-2 h-2 bg-cyan-400" />
                  <span className={`text-lg font-medium ${req.color}`}>{req.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(3) ? 1 : 0, y: isVisible(3) ? 0 : 20 }}
          className="mt-5 flex justify-center"
        >
          <div className="bg-pink-500/10 border-2 border-pink-500/40 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)] transform -rotate-1">
            <span className="text-2xl text-white font-bold">
              Code generation = <span className="text-pink-400">highest complexity tasks</span>
            </span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
