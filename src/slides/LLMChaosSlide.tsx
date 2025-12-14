import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const llmOutputs = [
  { input: 'llm("Hello")', output: '"Hi there!"' },
  { input: 'llm("Hello")', output: '"Hey!"' },
  { input: 'llm("Hello")', output: '"Greetings!"' },
]

export function LLMChaosSlide() {
  const { nextSlide } = usePresentationContext()
  const { currentStep, isVisible, isComplete } = useSteppedReveal({
    totalSteps: 4, // title + 3 outputs grouped + formula + invalidated
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isVisible(0) ? 1 : 0.3,
            scale: isVisible(0) ? 1 : 0.9,
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl lg:text-7xl font-bold text-white">
            Then <span className="text-pink-500">2023</span> happened.
          </h1>
        </motion.div>

        {/* LLM outputs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(1) ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-16"
        >
          {llmOutputs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isVisible(1) ? 1 : 0,
                x: isVisible(1) ? 0 : -20,
              }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="flex items-center gap-6 text-3xl lg:text-4xl font-mono"
            >
              <span className="text-purple-400">{item.input}</span>
              <span className="text-text-secondary">=</span>
              <motion.span
                animate={{
                  color: ['#22d3ee', '#a78bfa', '#ec4899', '#22d3ee'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="text-cyan-400"
              >
                {item.output}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* f(x) = ??? */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible(2) ? 1 : 0,
            scale: isVisible(2) ? 1 : 0.8,
          }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-5xl lg:text-7xl font-mono font-bold"
            animate={
              isVisible(2)
                ? {
                    color: ['#ffffff', '#ec4899', '#ffffff'],
                  }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            f(x) = <span className="text-pink-500">???</span>
          </motion.span>
        </motion.div>

        {/* Invalidated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isVisible(3) ? 1 : 0,
            y: isVisible(3) ? 0 : 30,
          }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-6 px-12 py-6 bg-red-500/10 border-2 border-red-500/50 rounded-2xl">
            <span className="text-4xl lg:text-5xl font-bold text-white">
              My entire career:
            </span>
            <span className="text-5xl lg:text-6xl">❌</span>
            <span className="text-4xl lg:text-5xl font-bold text-red-400">
              Invalidated
            </span>
          </div>
        </motion.div>


      </div>
    </SlideLayout>
  )
}
