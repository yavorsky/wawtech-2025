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
      <div className="flex flex-col h-full items-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold text-white text-center mb-6"
        >
          Personal Story
        </motion.h1>

        {/* Vertical layout */}
        <div className="flex flex-col items-center w-full max-w-4xl gap-4">
          {/* Old way */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{
              opacity: isVisible(0) ? 1 : 0.2,
              y: isVisible(0) ? 0 : -30,
            }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <p className="text-xl text-text-secondary mb-3 text-center">
              For 10 years, this was engineering:
            </p>
            <div className="bg-surface border border-purple-500/30 rounded-2xl p-5">
              <pre className="text-lg lg:text-xl font-mono text-cyan-400 mb-4">
                <span className="text-purple-400">const</span> output = babel.transform(code, options);
              </pre>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(2) ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white font-semibold">Reliable</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white font-semibold">Debuggable</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white font-semibold">Testable</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: isVisible(1) ? 1 : 0,
              scaleY: isVisible(1) ? 1 : 0,
            }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="flex flex-col items-center"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
            <span className="text-3xl my-2 rotate-90">→</span>
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
          </motion.div>

          {/* New way */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isVisible(1) ? 1 : 0.2,
              y: isVisible(1) ? 0 : 30,
            }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <p className="text-xl text-text-secondary mb-3 text-center">
              Then this happened:
            </p>
            <div className="bg-surface border border-pink-500/30 rounded-2xl p-5">
              <pre className="text-lg lg:text-xl font-mono text-pink-400 mb-4">
                <span className="text-purple-400">const</span> response = <span className="text-cyan-400">await</span> llm.chat(prompt, text);
              </pre>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(2) ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-red-400 text-xl">?</span>
                  <span className="text-white font-semibold">Unpredictable</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-red-400 text-xl">?</span>
                  <span className="text-white font-semibold">Mysterious</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-red-400 text-xl">?</span>
                  <span className="text-white font-semibold">Probabilistic</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
