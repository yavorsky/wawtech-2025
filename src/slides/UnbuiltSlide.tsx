import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function UnbuiltSlide() {
  const { nextSlide } = usePresentationContext()
  const { isComplete } = useSteppedReveal({
    totalSteps: 1,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <a
            href="https://unbuilt.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-green-500/20 border-2 border-purple-500 rounded-3xl p-12 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">🔧</div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                unbuilt.app
              </h1>
              <p className="text-2xl text-slate-400 mb-8">
                Maintain your apps with AI
              </p>
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-purple-500/30 border border-purple-500 rounded-xl group-hover:bg-cyan-500/30 group-hover:border-cyan-500 transition-all">
                <span className="text-xl text-white">Visit</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
