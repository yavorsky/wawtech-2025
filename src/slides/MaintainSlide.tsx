import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function MaintainSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 2,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            But a good developer should not only
          </h1>
          <h1 className="text-5xl lg:text-6xl font-bold text-green-400">
            create applications...
          </h1>
        </motion.div>

        {/* Second part */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible(0) ? 1 : 0, scale: isVisible(0) ? 1 : 0.9 }}
          className="text-center"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            ...but also
          </h1>
          <h1 className="text-6xl lg:text-7xl font-bold text-cyan-400">
            maintain them!
          </h1>
        </motion.div>

        {/* Visual hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(1) ? 1 : 0, y: isVisible(1) ? 0 : 20 }}
          className="mt-16 flex items-center gap-8"
        >
          <div className="text-center">
            <div className="text-6xl mb-3">🏗️</div>
            <div className="text-xl text-slate-400">Build</div>
          </div>
          <div className="text-4xl text-slate-500">+</div>
          <div className="text-center">
            <div className="text-6xl mb-3">🔧</div>
            <div className="text-xl text-slate-400">Maintain</div>
          </div>
          <div className="text-4xl text-slate-500">=</div>
          <div className="text-center">
            <div className="text-6xl mb-3">⭐</div>
            <div className="text-xl text-yellow-400 font-bold">Good Developer</div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
