import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function CodeAgentDemoSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 2,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Header */}
        <div className="mb-10">
          <FunTitle title="Live Demo" subtitle="Code Agent in Action" />
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(0) ? 1 : 0.3, y: isVisible(0) ? 0 : 20 }}
          className="mb-8"
        >
          <a
            href="https://app.writer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500/10 border-2 border-cyan-500/40 px-10 py-6 shadow-[6px_6px_0px_0px_rgba(6,182,212,0.3)] transform -rotate-1 hover:rotate-0 transition-transform duration-300 block"
          >
            <div className="text-4xl font-bold text-cyan-400 font-mono">
              app.writer.com
            </div>
          </a>
        </motion.div>

        {/* What to show */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(1) ? 1 : 0, y: isVisible(1) ? 0 : 20 }}
          className="flex gap-5"
        >
          <div className="bg-slate-800/50 border border-slate-600 px-5 py-3">
            <span className="text-lg text-slate-300">Scopes in action</span>
          </div>
          <div className="bg-slate-800/50 border border-slate-600 px-5 py-3">
            <span className="text-lg text-slate-300">Context management</span>
          </div>
          <div className="bg-slate-800/50 border border-slate-600 px-5 py-3">
            <span className="text-lg text-slate-300">State machine flow</span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
