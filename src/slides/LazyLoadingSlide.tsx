import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function LazyLoadingSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 2,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-2xl text-cyan-400 font-bold mb-4">FIRST ATTEMPT</div>
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6">
            Lazy loading
          </h1>
          <h1 className="text-6xl lg:text-8xl font-bold text-white">
            for your <span className="text-cyan-400">context</span>
          </h1>
        </motion.div>

        {/* Step 2: Code example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible(0) ? 1 : 0, y: isVisible(0) ? 0 : 30 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="text-2xl text-slate-400 mb-6 text-center">
            Like lazy loading in your app!
          </div>

          <div className="bg-slate-800/60 border border-slate-600 rounded-2xl p-8 max-w-2xl">
            <div className="font-mono text-xl lg:text-2xl leading-relaxed">
              <div className="mb-4">
                <span className="text-pink-400">const</span>{' '}
                <span className="text-cyan-400">Dashboard</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-yellow-400">lazy</span>
                <span className="text-white">(</span>
              </div>

              <div className="pl-6 mb-4">
                <span className="text-white">() </span>
                <span className="text-pink-400">=&gt;</span>{' '}
                <span className="text-yellow-400">import</span>
                <span className="text-white">(</span>
                <span className="text-green-400">'./Dashboard'</span>
                <span className="text-white">)</span>
              </div>

              <div>
                <span className="text-white">)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="absolute bottom-8 text-text-secondary text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Press <kbd className="px-3 py-1 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}
