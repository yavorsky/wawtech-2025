import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

const acts = [
  {
    number: 'I',
    title: 'THE COLLISION',
    items: [
      '10 years building deterministic systems',
      'Then: LLMs',
      "Everything I knew... didn't work?",
    ],
  },
  {
    number: 'II',
    title: 'THE STRUGGLE',
    items: [
      'Built Action AI at Writer',
      { text: 'Simple tasks:', status: 'success' },
      { text: 'Complex tasks:', status: 'error' },
      'Every fix made it worse',
    ],
  },
  {
    number: 'III',
    title: 'THE REALIZATION',
    items: [
      'Debugging at 2am',
      'Suddenly remembered something',
      'What if...?',
      'Live demo: Does it actually work?',
    ],
  },
  {
    number: 'IV',
    title: 'THE PATTERN',
    items: [
      'Turns out: It generalizes',
      'Not just code generation',
      'A different way to think about AI',
      'What this means for all of us',
    ],
  },
]

function ActCard({ act, isVisible, isActive }: { act: typeof acts[0]; isVisible: boolean; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0.3, scale: 0.95 }}
      animate={{
        opacity: isVisible ? 1 : 0.3,
        scale: isVisible ? 1 : 0.95,
        borderColor: isActive ? 'rgba(6, 182, 212, 0.6)' : isVisible ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.1)',
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-surface/50 border-2 rounded-xl p-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-cyan-500 font-mono text-xl font-bold">
          ACT {act.number}
        </span>
        <h3 className="text-2xl font-semibold text-white">{act.title}</h3>
      </div>
      <ul className="space-y-3">
        {act.items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-text-secondary text-xl">
            <span className="text-purple-400 text-2xl">•</span>
            {typeof item === 'string' ? (
              <span>{item}</span>
            ) : (
              <span className="flex items-center gap-3">
                {item.text}
                {item.status === 'success' && (
                  <span className="text-green-400">✓ worked</span>
                )}
                {item.status === 'error' && (
                  <span className="text-red-400">✗ failed</span>
                )}
              </span>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function JourneySlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isActive, isComplete } = useSteppedReveal({
    totalSteps: acts.length,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-full items-center justify-center"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10 text-center">
          <p className="text-cyan-500 font-mono text-xl mb-3 tracking-wider">
            WHAT WE'LL COVER
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold text-white">
            Today's Journey
          </h1>
        </motion.div>

        {/* Acts Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-6xl w-full">
          {acts.map((act, index) => (
            <ActCard
              key={act.number}
              act={act}
              isVisible={isVisible(index)}
              isActive={isActive(index)}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isComplete ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-text-secondary text-center italic text-2xl"
        >
          A personal story about learning to build systems that think back.
        </motion.p>

        {/* Step indicator */}
        <motion.div
          className="absolute bottom-24 text-text-secondary text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {!isComplete && (
            <span>
              Press <kbd className="px-3 py-1 bg-surface rounded text-cyan-400 font-mono mx-1">Space</kbd> to reveal next
            </span>
          )}
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
