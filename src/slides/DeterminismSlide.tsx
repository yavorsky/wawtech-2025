import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const examples = [
  {
    name: 'Babel',
    input: { text: '() => {}' },
    output: { text: 'function () {}' },
    suffix: 'Always',
    isCode: true,
  },
  {
    name: 'Wix CLI',
    input: { prefix: '>', command: 'wix', args: ' bootstrap' },
    output: { text: 'Project Bootstrapped!' },
    suffix: '500 times a day',
    isCli: true,
  },
  {
    name: 'Netflix',
    input: { text: 'GET /movies/home-alone' },
    output: { text: <span className='text-[red]'>404 NOT FOUND</span> },
    suffix: 'Every time',
    isCode: true,
  },
  {
    name: 'unbuilt.app',
    input: { prefix: '>', command: 'unbuilt', args: ' vercel.com' },
    output: { text: 'Next.js detected!' },
    suffix: 'Guaranteed',
    isCli: true,
  },
]

function CodeSnippet({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-4 py-2 bg-surface/80 rounded-lg font-mono text-cyan-400 border border-purple-500/30">
      {children}
    </code>
  )
}

function CliSnippet({ prefix, command, args }: { prefix: string; command: string; args: string }) {
  return (
    <code className="inline-block px-4 py-2 bg-surface/80 rounded-lg font-mono border border-purple-500/30 whitespace-nowrap">
      <span className="text-text-secondary">{prefix}</span>
      <span className="text-green-400">{command}</span>
      <span className="text-cyan-400">{args}</span>
    </code>
  )
}

export function DeterminismSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isActive, isComplete } = useSteppedReveal({
    totalSteps: 6, // 4 examples + formula + DETERMINISM
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center"
        >
          What all these have in <span className="text-cyan-400">common</span>?
        </motion.h1>

        {/* Examples */}
        <div className="space-y-10 mb-16 w-full max-w-6xl">
          {examples.map((example, index) => (
            <motion.div
              key={example.name}
              initial={{ opacity: 0.2, x: -30 }}
              animate={{
                opacity: isVisible(index) ? 1 : 0.2,
                x: isVisible(index) ? 0 : -30,
              }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-6 text-2xl lg:text-3xl flex-nowrap ${
                isActive(index) ? 'text-white' : 'text-text-secondary'
              }`}
            >
              <span className="text-cyan-500 font-bold min-w-[220px] shrink-0">{example.name}:</span>
              <span className="shrink-0">
                {example.isCli ? (
                  <CliSnippet prefix={example.input.prefix!} command={example.input.command!} args={example.input.args!} />
                ) : (
                  <CodeSnippet>{example.input.text}</CodeSnippet>
                )}
              </span>
              <span className="text-purple-400 shrink-0">→</span>
              <span className="shrink-0">
                <CodeSnippet>{example.output.text}</CodeSnippet>
              </span>
              <span className="text-purple-400 shrink-0">→</span>
              <span className="text-green-400 font-semibold shrink-0">{example.suffix}</span>
            </motion.div>
          ))}
        </div>

        {/* Formula section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(4) ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-2xl lg:text-3xl text-text-secondary mb-8">
            I spent 10 years obsessed with one thing:
          </p>
          <div className="space-y-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isVisible(4) ? 1 : 0,
                  scale: isVisible(4) ? 1 : 0.9,
                }}
                transition={{ delay: i * 0.15, duration: 0.3 }}
                className="text-4xl lg:text-5xl font-mono text-purple-400"
              >
                f(x) = y
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DETERMINISM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible(5) ? 1 : 0,
            scale: isVisible(5) ? 1 : 0.8,
          }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-center"
        >
          <span className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            DETERMINISM
          </span>
        </motion.div>


      </div>
    </SlideLayout>
  )
}
