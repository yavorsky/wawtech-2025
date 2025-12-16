import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const features = [
  {
    icon: '🧠',
    title: 'Advanced Language Models',
    subtitle: 'Turbo(fan) LLM Edition',
  },
  {
    icon: '⚡',
    title: 'Real-time Decision Support',
    subtitle: '"I think we should land... maybe... let me think..."',
  },
  {
    icon: '🗣️',
    title: 'Natural Language Interfaces',
    subtitle: '"Hey Airbus LLM, avoid that mountain!" ... -"You are absolutely right!"',
  },
  {
    icon: '🔌',
    title: 'Air Traffic Control via MCP',
    subtitle: 'Model Context Protocol at 30,000 feet',
  },
  {
    icon: '💾',
    title: 'Session History Storage',
    subtitle: 'Engine-powered hard drives (literally)',
  },
]

export function AirbusJokeSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isActive, isComplete } = useSteppedReveal({
    totalSteps: features.length,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            All major flight systems now include:
          </h1>
          <p className="text-2xl text-text-secondary italic">
            * Based on absolutely no research whatsoever
          </p>
        </motion.div>

        {/* Features list */}
        <div className="space-y-6 max-w-5xl w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.2, x: -40 }}
              animate={{
                opacity: isVisible(index) ? 1 : 0.2,
                x: isVisible(index) ? 0 : -40,
              }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-6 p-6 rounded-2xl border-2 transition-colors ${
                isActive(index)
                  ? 'bg-cyan-500/10 border-cyan-500/50'
                  : isVisible(index)
                  ? 'bg-surface/50 border-purple-500/30'
                  : 'bg-surface/20 border-white/10'
              }`}
            >
              <span className="text-5xl">{feature.icon}</span>
              <div>
                <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                <p className="text-2xl text-cyan-400 mt-1">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
