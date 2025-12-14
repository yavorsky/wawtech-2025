import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function StateMachineControlsSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Header */}
        <div className="mb-12 flex justify-center">
          <FunTitle title="Division of Control" />
        </div>

        <div className="flex gap-16 items-center">
          {/* State Machine */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -50, rotate: isVisible(0) ? -1 : 0 }}
            className="bg-purple-500/10 border-2 border-purple-500/50 p-10 shadow-[6px_6px_0px_0px_rgba(168,85,247,0.4)]"
          >
            <div className="text-2xl text-purple-400 font-bold mb-6">The STATE MACHINE controls:</div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl">📋</span>
                <span className="text-5xl font-black text-white">WHAT</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-5xl">⏰</span>
                <span className="text-5xl font-black text-white">WHEN</span>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible(0) ? 1 : 0, scale: isVisible(0) ? 1 : 0 }}
            className="text-6xl text-slate-500"
          >
            ↔
          </motion.div>

          {/* LLM */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 50, rotate: isVisible(1) ? 1 : 0 }}
            className="bg-cyan-500/10 border-2 border-cyan-500/50 p-10 shadow-[6px_6px_0px_0px_rgba(6,182,212,0.4)]"
          >
            <div className="text-2xl text-cyan-400 font-bold mb-6">The LLM controls:</div>
            <div className="flex items-center gap-4">
              <span className="text-5xl">🧠</span>
              <span className="text-5xl font-black text-white">HOW</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 30 }}
          className="mt-12 flex gap-8"
        >
          <div className="bg-purple-500/20 border-2 border-purple-500/50 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.4)] transform -rotate-1">
            <span className="text-2xl font-bold text-purple-400">Deterministic flow</span>
          </div>
          <div className="text-4xl text-slate-500 flex items-center">+</div>
          <div className="bg-cyan-500/20 border-2 border-cyan-500/50 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)] transform rotate-1">
            <span className="text-2xl font-bold text-cyan-400">Creative execution</span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
