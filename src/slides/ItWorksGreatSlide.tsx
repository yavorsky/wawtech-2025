import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const colorStyles = {
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/40',
    shadow: 'shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)]',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/40',
    shadow: 'shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)]',
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/40',
    shadow: 'shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)]',
  },
}

export function ItWorksGreatSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  const examples = [
    {
      task: '"Generate a sales presentation"',
      color: 'cyan' as const,
      rotate: '-rotate-1',
      metrics: {
        iterations: '5-10',
        context: '~10K',
      },
      tools: ['create_file', 'execute_command'],
      capabilities: ['Presentation'],
      mcp: [],
    },
    {
      task: '"Book plane tickets to Berlin"',
      color: 'purple' as const,
      rotate: 'rotate-1',
      metrics: {
        iterations: '10-15',
        context: '~18K',
      },
      tools: ['web_search', 'web_scrape', 'browser_takeover'],
      capabilities: [],
      mcp: ['Discovery', 'Flight Booking'],
    },
    {
      task: '"Read PDF and send summary to Slack"',
      color: 'pink' as const,
      rotate: '-rotate-1',
      metrics: {
        iterations: '4-6',
        context: '~8K',
      },
      tools: ['query_document'],
      capabilities: ['PDF'],
      mcp: ['Slack'],
    },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <FunTitle
            title="It Works Great..."
            subtitle="For predictable tasks"
            variant="neutral"
          />
        </div>

        {/* Examples */}
        <div className="flex-1 w-full max-w-6xl mx-auto space-y-4">
          {examples.map((example, index) => {
            const styles = colorStyles[example.color]
            return (
              <motion.div
                key={example.task}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isVisible(index) ? 1 : 0.3,
                  x: isVisible(index) ? 0 : -20,
                }}
                transition={{ duration: 0.4 }}
                className={`${styles.bg} border-2 ${styles.border} ${styles.shadow} p-5 transform ${example.rotate}`}
              >
                <div className="flex items-center gap-6">
                  {/* Task */}
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white mb-3">
                      {example.task}
                    </div>

                    {/* Tools, Capabilities, MCP */}
                    <div className="flex flex-wrap gap-2">
                      {example.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-green-500/20 border border-green-500/40 text-base text-green-400 font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                      {example.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 text-base text-yellow-400"
                        >
                          {cap}
                        </span>
                      ))}
                      {example.mcp.map((connector) => (
                        <span
                          key={connector}
                          className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 text-base text-purple-400"
                        >
                          MCP: {connector}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-5">
                    <div className="text-center bg-slate-800/50 border border-slate-700 px-4 py-2">
                      <div className="text-2xl font-bold text-white font-mono">{example.metrics.iterations}</div>
                      <div className="text-sm text-slate-400">iterations</div>
                    </div>
                    <div className="text-center bg-slate-800/50 border border-slate-700 px-4 py-2">
                      <div className="text-2xl font-bold text-white font-mono">{example.metrics.context}</div>
                      <div className="text-sm text-slate-400">tokens</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible(3) ? 1 : 0, y: isVisible(3) ? 0 : 10 }}
          className="mt-5 flex justify-center"
        >
          <div className="bg-green-500/10 border-2 border-green-500/40 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)]">
            <span className="text-xl text-green-400 font-bold">
              Predictable input → Predictable output
            </span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
