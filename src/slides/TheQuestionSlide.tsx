import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function TheQuestionSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Setup */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl text-slate-400 text-center mb-8"
        >
          After all attempts, I realized:
        </motion.div>

        {/* Realizations - all at once */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(0) ? 1 : 0.3, y: isVisible(0) ? 0 : 20 }}
          className="flex gap-4 mb-10"
        >
          <div className="bg-slate-800/50 border-2 border-slate-600 p-5 shadow-[4px_4px_0px_0px_rgba(100,116,139,0.3)] transform -rotate-1">
            <span className="text-2xl text-white font-mono">Agent has </span>
            <span className="text-2xl text-cyan-400 font-bold font-mono">STATE</span>
          </div>
          <div className="bg-slate-800/50 border-2 border-slate-600 p-5 shadow-[4px_4px_0px_0px_rgba(100,116,139,0.3)]">
            <span className="text-2xl text-white font-mono">Knows the </span>
            <span className="text-2xl text-green-400 font-bold font-mono">PHASE</span>
          </div>
          <div className="bg-slate-800/50 border-2 border-slate-600 p-5 shadow-[4px_4px_0px_0px_rgba(100,116,139,0.3)] transform rotate-1">
            <span className="text-2xl text-white font-mono">Knows the </span>
            <span className="text-2xl text-green-400 font-bold font-mono">FILES</span>
          </div>
        </motion.div>

        {/* But... */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible(1) ? 1 : 0, scale: isVisible(1) ? 1 : 0.95 }}
          className="bg-red-500/10 border-2 border-red-500/40 px-8 py-5 mb-10 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.3)]"
        >
          <span className="text-3xl text-white font-mono">But the </span>
          <span className="text-3xl text-red-400 font-bold font-mono">LLM doesn't see it</span>
          <span className="text-3xl text-white font-mono">.</span>
        </motion.div>

        {/* The key question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
          className="flex gap-6"
        >
          <div className="bg-cyan-500/10 border-2 border-cyan-500/50 px-8 py-6 shadow-[6px_6px_0px_0px_rgba(6,182,212,0.4)] transform -rotate-1">
            <span className="text-3xl text-white font-mono">What if </span>
            <span className="text-3xl text-cyan-400 font-bold font-mono">STATE</span>
            <span className="text-3xl text-white font-mono"> controlled the flow?</span>
          </div>
          <div className="bg-purple-500/10 border-2 border-purple-500/50 px-8 py-6 shadow-[6px_6px_0px_0px_rgba(168,85,247,0.4)] transform rotate-1">
            <span className="text-3xl text-white font-mono">Not the </span>
            <span className="text-3xl text-purple-400 font-bold font-mono">LLM</span>
            <span className="text-3xl text-white font-mono">?</span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
