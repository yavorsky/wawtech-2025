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
      'My background',
      'Then: LLMs',
      "Everything I knew... didn't work?",
    ],
  },
  {
    number: 'II',
    title: 'THE STRUGGLE',
    items: [
      'Building AI agents',
      { text: 'Simple tasks:', status: 'success' },
      { text: 'Complex tasks:', status: 'error' },
    ],
  },
  {
    number: 'III',
    title: 'THE REALIZATION',
    items: [
      'Debugging at 2am',
      'Suddenly remembered something...',
      'What if...?',
    ],
  },
  {
    number: 'IV',
    title: 'THE PATTERN',
    items: [
      'A different way to think about AI agents',
      'When to use it',
      'Takeaways',
    ],
  },
]

const actColors = [
  { border: 'border-cyan-500/50', shadow: 'shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)]', accent: 'text-cyan-400' },
  { border: 'border-purple-500/50', shadow: 'shadow-[4px_4px_0px_0px_rgba(168,85,247,0.4)]', accent: 'text-purple-400' },
  { border: 'border-pink-500/50', shadow: 'shadow-[4px_4px_0px_0px_rgba(236,72,153,0.4)]', accent: 'text-pink-400' },
  { border: 'border-green-500/50', shadow: 'shadow-[4px_4px_0px_0px_rgba(34,197,94,0.4)]', accent: 'text-green-400' },
]

function ActCard({ act, isVisible, isActive, index }: { act: typeof acts[0]; isVisible: boolean; isActive: boolean; index: number }) {
  const colors = actColors[index]
  const rotation = index % 2 === 0 ? -1 : 1

  return (
    <motion.div
      initial={{ opacity: 0.3, scale: 0.95, rotate: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0.3,
        scale: isVisible ? 1 : 0.95,
        rotate: isVisible ? rotation : 0,
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`bg-surface/50 border-2 ${colors.border} p-5 ${colors.shadow}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`${colors.accent} font-mono text-xl font-bold`}>
          ACT {act.number}
        </span>
        <h3 className="text-2xl font-bold text-white">{act.title}</h3>
      </div>
      <ul className="space-y-2">
        {act.items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-text-secondary text-xl">
            <span className={`${colors.accent} text-2xl`}>•</span>
            {typeof item === 'string' ? (
              <span>{item}</span>
            ) : (
              <span className="flex items-center gap-3">
                {item.text}
                {item.status === 'success' && (
                  <span className="text-green-400 font-bold">✓ worked</span>
                )}
                {item.status === 'error' && (
                  <span className="text-red-400 font-bold">✗ failed</span>
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
        className="flex flex-col h-full items-center"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
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
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: isComplete ? 1 : 0.5, rotate: isComplete ? -1 : 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-surface/50 border-2 border-white/20 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
        >
          <p className="text-text-secondary text-center text-xl">
            A personal story about learning to build systems that think back.
          </p>
        </motion.div>

      </motion.div>
    </SlideLayout>
  )
}
