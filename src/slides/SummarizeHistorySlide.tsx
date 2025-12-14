import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function SummarizeHistorySlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="mb-8">
          <FunTitle title="Summarize History" subtitle="Second Attempt" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-3xl text-slate-300">When nearing limit → </span>
          <span className="text-3xl text-cyan-400 font-bold">ask LLM to summarize</span>
        </motion.div>

        {/* Token savings visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(0) ? 1 : 0.3, y: isVisible(0) ? 0 : 20 }}
          className="bg-slate-800/50 border-2 border-slate-600 p-6 w-[500px] shadow-[6px_6px_0px_0px_rgba(100,116,139,0.3)] transform -rotate-1"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-lg text-slate-400 w-24">Before:</span>
              <div className="flex-1 h-6 bg-black/30">
                <div className="h-full w-[90%] bg-red-500/70" />
              </div>
              <span className="text-red-400 font-mono">600k</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg text-slate-400 w-24">After:</span>
              <div className="flex-1 h-6 bg-black/30">
                <motion.div
                  initial={{ width: '90%' }}
                  animate={{ width: isVisible(0) ? '8%' : '90%' }}
                  transition={{ duration: 1 }}
                  className="h-full bg-green-500/70"
                />
              </div>
              <span className="text-green-400 font-mono">50k</span>
            </div>
          </div>
        </motion.div>

        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(1) ? 1 : 0, y: isVisible(1) ? 0 : 20 }}
          className="mt-8 flex gap-4"
        >
          <div className="bg-red-500/10 border-2 border-red-500/40 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.3)]">
            <span className="text-lg text-red-400">Lost critical details</span>
          </div>
          <div className="bg-red-500/10 border-2 border-red-500/40 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.3)]">
            <span className="text-lg text-red-400">Agent repeated work</span>
          </div>
          <div className="bg-red-500/10 border-2 border-red-500/40 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.3)]">
            <span className="text-lg text-red-400">Summary keeps growing</span>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
          className="mt-8 bg-orange-500/10 border-2 border-orange-500/40 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(249,115,22,0.3)] transform rotate-1"
        >
          <span className="text-xl text-orange-400 font-bold">Too lossy → </span>
          <span className="text-xl text-white">can't compress reasoning without losing it</span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
