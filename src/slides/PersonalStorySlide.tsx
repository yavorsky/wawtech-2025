import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function PersonalStorySlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3, // old way, new way, comparison
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-bold text-white text-center mb-16"
        >
          Personal Story
        </motion.h1>

        {/* Two columns */}
        <div className="flex gap-12 w-full max-w-6xl">
          {/* Old way */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: isVisible(0) ? 1 : 0.2,
              x: isVisible(0) ? 0 : -50,
            }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <p className="text-2xl text-text-secondary mb-6 text-center">
              For 10 years, this was engineering:
            </p>
            <div className="bg-surface border border-purple-500/30 rounded-2xl p-6 mb-8">
              <pre className="text-xl lg:text-2xl font-mono text-cyan-400">
                <span className="text-purple-400">const</span> output = babel.transform(code, options);
              </pre>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(2) ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 text-2xl">
                <span className="text-green-400 text-3xl">✓</span>
                <span className="text-white font-semibold">Reliable</span>
              </div>
              <div className="flex items-center gap-4 text-2xl">
                <span className="text-green-400 text-3xl">✓</span>
                <span className="text-white font-semibold">Debuggable</span>
              </div>
              <div className="flex items-center gap-4 text-2xl">
                <span className="text-green-400 text-3xl">✓</span>
                <span className="text-white font-semibold">Testable</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isVisible(1) ? 1 : 0,
                scale: isVisible(1) ? 1 : 0,
              }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="w-1 h-32 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0 }}
              className="text-4xl my-4"
            >
              →
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isVisible(1) ? 1 : 0,
                scale: isVisible(1) ? 1 : 0,
              }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="w-1 h-32 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
            />
          </div>

          {/* New way */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: isVisible(1) ? 1 : 0.2,
              x: isVisible(1) ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <p className="text-2xl text-text-secondary mb-6 text-center">
              Then this happened:
            </p>
            <div className="bg-surface border border-pink-500/30 rounded-2xl p-6 mb-8">
              <pre className="text-xl lg:text-2xl font-mono text-pink-400">
                <span className="text-purple-400">const</span> response = <span className="text-cyan-400">await</span> llm.chat(prompt, text);
              </pre>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(2) ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 text-2xl">
                <span className="text-red-400 text-3xl">?</span>
                <span className="text-white font-semibold">Unpredictable</span>
              </div>
              <div className="flex items-center gap-4 text-2xl">
                <span className="text-red-400 text-3xl">?</span>
                <span className="text-white font-semibold">Mysterious</span>
              </div>
              <div className="flex items-center gap-4 text-2xl">
                <span className="text-red-400 text-3xl">?</span>
                <span className="text-white font-semibold">Probabilistic</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
