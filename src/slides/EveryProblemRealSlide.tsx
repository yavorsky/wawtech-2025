import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const problems = [
  {
    quote: '"Thank you for bringing this to my attention..."',
    issue: 'Verbose when you need action',
  },
  {
    quote: '"You\'re absolutely right!"',
    issue: 'Agreeable but useless',
  },
  {
    quote: '{..."thrust_reduction_rate": "immediate", "fuel_cutoff": t',
    issue: 'Broken JSON mid-response',
    isCode: true,
  },
  {
    quote: '"I cannot directly control..."',
    issue: 'Sudden disclaimers',
  },
  {
    quote: '"Would you like me to explain each step?"',
    issue: 'Asking questions during emergencies',
  },
]

export function EveryProblemRealSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isActive, isComplete } = useSteppedReveal({
    totalSteps: problems.length + 1, // +1 for the final personal note
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
            But Every Problem Is <span className="text-pink-500">Real</span>
          </h1>
          <p className="text-2xl text-text-secondary">What you just saw:</p>
        </motion.div>

        {/* Problems list */}
        <div className="space-y-5 max-w-5xl w-full mb-10">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.2, x: -30 }}
              animate={{
                opacity: isVisible(index) ? 1 : 0.2,
                x: isVisible(index) ? 0 : -30,
              }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-6 ${
                isActive(index) ? 'text-white' : 'text-text-secondary'
              }`}
            >
              <div className={`flex-1 text-2xl ${problem.isCode ? 'font-mono text-xl text-red-400' : 'text-cyan-400'}`}>
                {problem.quote}
              </div>
              <span className="text-purple-400 text-3xl">→</span>
              <div className="flex-1 text-2xl text-white font-semibold">
                {problem.issue}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isVisible(problems.length) ? 1 : 0,
            y: isVisible(problems.length) ? 0 : 30,
          }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block px-10 py-6 bg-surface border-2 border-cyan-500/50 rounded-2xl">
            <p className="text-3xl lg:text-4xl text-white font-semibold">
              I've hit <span className="text-cyan-400">EVERY</span> one of these building AI agents.
            </p>
          </div>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="absolute bottom-24 text-text-secondary text-xl"
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
