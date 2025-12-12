import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function SingleAgentSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 5,
    onComplete: nextSlide,
  })

  const rejectedAgents = [
    { name: 'Planning Agent', icon: '📋' },
    { name: 'Coding Agent', icon: '💻' },
    { name: 'Review Agent', icon: '🔍' },
    { name: 'Deploy Agent', icon: '🚀' },
  ]

  const problems = [
    { text: 'Coordination overhead', icon: '🔄' },
    { text: 'Handoff complexity', icon: '🤝' },
    { text: 'User confusion', icon: '😵' },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-bold text-white text-center mb-4"
        >
          Why <span className="text-cyan-400">Single Agent</span>?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-text-secondary mb-12"
        >
          Decision rationale
        </motion.p>

        <div className="flex-1 w-full max-w-6xl flex gap-12">
          {/* Left side - What we could have built */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="flex-1"
          >
            <p className="text-xl text-text-secondary mb-6">
              We could have built specialist agents:
            </p>

            <div className="space-y-4">
              {rejectedAgents.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isVisible(0) ? 1 : 0,
                    x: isVisible(0) ? 0 : -20
                  }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 bg-surface/50 border border-gray-600 rounded-xl px-6 py-4">
                    <span className="text-3xl">{agent.icon}</span>
                    <span className="text-2xl text-gray-400">{agent.name}</span>
                  </div>
                  {/* Strike through */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isVisible(1) ? 1 : 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute top-1/2 left-0 right-0 h-1 bg-red-500/70 rounded"
                  />
                </motion.div>
              ))}
            </div>

            {/* Big NO */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isVisible(1) ? 1 : 0,
                scale: isVisible(1) ? 1 : 0
              }}
              transition={{ type: 'spring', damping: 10 }}
              className="mt-8 text-center"
            >
              <span className="text-6xl font-black text-red-500">NO.</span>
            </motion.div>
          </motion.div>

          {/* Center divider */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: isVisible(2) ? 1 : 0,
              scaleY: isVisible(2) ? 1 : 0
            }}
            style={{ transformOrigin: 'top' }}
            className="w-1 bg-gradient-to-b from-red-500 via-purple-500 to-cyan-500 rounded-full"
          />

          {/* Right side - Why not */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
            className="flex-1"
          >
            <p className="text-xl text-text-secondary mb-6">
              Why?
            </p>

            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: isVisible(2) ? 1 : 0,
                    x: isVisible(2) ? 0 : 20
                  }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-center gap-4 bg-red-500/10 border border-red-500/30 rounded-xl px-6 py-4"
                >
                  <span className="text-3xl">{problem.icon}</span>
                  <span className="text-2xl text-red-400">{problem.text}</span>
                </motion.div>
              ))}
            </div>

            {/* What we wanted */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible(3) ? 1 : 0,
                y: isVisible(3) ? 0 : 20
              }}
              className="mt-8"
            >
              <p className="text-xl text-text-secondary mb-4">Wanted:</p>
              <div className="bg-cyan-500/10 border-2 border-cyan-500 rounded-2xl px-6 py-4">
                <span className="text-2xl text-cyan-400 font-semibold">
                  ONE agent that handles everything.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isVisible(4) ? 1 : 0,
            y: isVisible(4) ? 0 : 30
          }}
          className="mt-8 flex items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3 bg-surface border border-purple-500/50 rounded-xl px-6 py-3">
            <span className="text-3xl">💬</span>
            <span className="text-2xl text-white font-semibold">One conversation.</span>
          </div>
          <div className="flex items-center gap-3 bg-surface border border-purple-500/50 rounded-xl px-6 py-3">
            <span className="text-3xl">🧠</span>
            <span className="text-2xl text-white font-semibold">One context.</span>
          </div>
          <div className="flex items-center gap-3 bg-surface border border-purple-500/50 rounded-xl px-6 py-3">
            <span className="text-3xl">🤖</span>
            <span className="text-2xl text-white font-semibold">One agent.</span>
          </div>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-xl mt-6"
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
