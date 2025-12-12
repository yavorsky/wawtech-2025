import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function TokenUsageSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
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
    'File contents in context',
    'File edits history in context',
    'Command outputs in context',
    'Error messages in context',
    'Previous iterations in context',
  ]

  const requirements = [
    { icon: '✅', text: 'Code compiles', color: 'text-green-400' },
    { icon: '✅', text: 'TypeScript passes', color: 'text-blue-400' },
    { icon: '✅', text: 'Lint passes', color: 'text-yellow-400' },
    { icon: '✅', text: 'Visual result works', color: 'text-purple-400' },
    { icon: '✅', text: 'Technical excellence', color: 'text-cyan-400' },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            Despite looking silly...
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl text-text-secondary mt-2"
          >
            The complexity is <span className="text-pink-400 font-bold">massive</span>
          </motion.p>
        </motion.div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Left - Tool Calls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-green-500/10 border border-green-500/50 rounded-2xl p-6"
          >
            <div className="text-center mb-6">
              <div className="text-6xl font-black text-green-400">30+</div>
              <div className="text-2xl text-green-400">tool calls</div>
            </div>

            <div className="space-y-3">
              {toolCalls.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible(0) ? 1 : 0, x: isVisible(0) ? 0 : -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-surface/50 rounded-lg px-4 py-2"
                >
                  <span className="text-xl font-bold text-green-400">{tool.count}</span>
                  <div>
                    <div className="text-lg text-white font-mono">{tool.name}</div>
                    <div className="text-sm text-text-secondary">{tool.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center - Iterations & Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, y: isVisible(1) ? 0 : 30 }}
            className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-6"
          >
            <div className="text-center mb-6">
              <div className="text-6xl font-black text-purple-400">40+</div>
              <div className="text-2xl text-purple-400">loop iterations</div>
            </div>

            <div className="text-xl text-text-secondary mb-4">Context accumulates:</div>
            <div className="space-y-3">
              {contextItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible(1) ? 1 : 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-3 h-3 rounded-full bg-purple-400"
                  />
                  <span className="text-lg text-white">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-center"
            >
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                100K+ tokens
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Output Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
            className="bg-cyan-500/10 border border-cyan-500/50 rounded-2xl p-6"
          >
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-cyan-400">Output Matters</div>
              <div className="text-xl text-text-secondary">Everything must pass</div>
            </div>

            <div className="space-y-4">
              {requirements.map((req, i) => (
                <motion.div
                  key={req.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isVisible(2) ? 1 : 0, x: isVisible(2) ? 0 : 20 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-4 bg-surface/50 rounded-xl px-5 py-3"
                >
                  <span className="text-3xl">{req.icon}</span>
                  <span className={`text-xl font-semibold ${req.color}`}>{req.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(3) ? 1 : 0, y: isVisible(3) ? 0 : 20 }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-surface border-2 border-pink-500 rounded-2xl px-8 py-4">
            <span className="text-3xl text-white font-bold">
              Code generation = <span className="text-pink-400">highest complexity tasks</span>
            </span>
          </div>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-xl mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Press <kbd className="px-4 py-2 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}
