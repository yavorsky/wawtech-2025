import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function ItWorksGreatSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  const examples = [
    {
      task: '"Generate a sales presentation"',
      color: 'cyan',
      metrics: {
        iterations: '5-10',
        context: '~10K tokens',
      },
      tools: ['create_file', 'execute_command'],
      capabilities: ['Presentation'],
      mcp: [],
    },
    {
      task: '"Book plane tickets to Berlin"',
      color: 'purple',
      metrics: {
        iterations: '10-15',
        context: '~18K tokens',
      },
      tools: ['web_search', 'web_scrape', 'browser_takeover'],
      capabilities: [],
      mcp: ['Discovery', 'Flight Booking Service'],
    },
    {
      task: '"Read this PDF and send summary to Slack"',
      color: 'pink',
      metrics: {
        iterations: '4-6',
        context: '~8K tokens',
      },
      tools: ['query_document'],
      capabilities: ['PDF'],
      mcp: ['Slack'],
    },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            It Works <span className="text-green-400">Great</span>...
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl text-text-secondary"
          >
            For predictable tasks
          </motion.p>
        </motion.div>

        {/* Examples */}
        <div className="flex-1 w-full max-w-7xl space-y-6">
          {examples.map((example, index) => (
            <motion.div
              key={example.task}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: isVisible(index) ? 1 : 0.15,
                x: isVisible(index) ? 0 : -50,
              }}
              transition={{ duration: 0.5 }}
              className={`bg-${example.color}-500/10 border border-${example.color}-500/50 rounded-2xl p-6`}
              style={{
                backgroundColor: `rgba(${example.color === 'cyan' ? '34, 211, 238' : example.color === 'purple' ? '139, 92, 246' : '236, 72, 153'}, 0.1)`,
                borderColor: `rgba(${example.color === 'cyan' ? '34, 211, 238' : example.color === 'purple' ? '139, 92, 246' : '236, 72, 153'}, 0.5)`,
              }}
            >
              <div className="flex items-start gap-8">
                {/* Task */}
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white mb-4">
                    {example.task}
                  </div>

                  {/* Tools, Capabilities, MCP */}
                  <div className="flex flex-wrap gap-3">
                    {example.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-lg text-green-400"
                      >
                        {tool}
                      </span>
                    ))}
                    {example.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-lg text-yellow-400"
                      >
                        {cap} capability
                      </span>
                    ))}
                    {example.mcp.map((connector) => (
                      <span
                        key={connector}
                        className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-lg text-purple-400"
                      >
                        MCP: {connector}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">{example.metrics.iterations}</div>
                    <div className="text-lg text-text-secondary">iterations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">{example.metrics.context}</div>
                    <div className="text-lg text-text-secondary">context</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(3) ? 1 : 0 }}
          className="mt-6 text-center"
        >
          <span className="text-2xl text-green-400 font-semibold">
            Predictable input → Predictable output
          </span>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-xl mt-4"
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
