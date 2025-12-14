import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function RagRetrievalSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="mb-8">
          <FunTitle title="RAG Retrieval" subtitle="Third Attempt" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-3xl text-slate-300">Vector DB → retrieve </span>
          <span className="text-3xl text-cyan-400 font-bold">only relevant context</span>
        </motion.div>

        {/* Flow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(0) ? 1 : 0.3, y: isVisible(0) ? 0 : 20 }}
          className="bg-slate-800/50 border-2 border-slate-600 p-6 shadow-[6px_6px_0px_0px_rgba(100,116,139,0.3)] transform -rotate-1"
        >
          <div className="flex items-center gap-4 text-lg font-mono">
            <span className="text-white">"Fix auth bug"</span>
            <span className="text-slate-500">→</span>
            <span className="text-green-400">retrieve auth msgs</span>
            <span className="text-slate-500">→</span>
            <span className="text-slate-500 line-through">skip UI msgs</span>
          </div>
        </motion.div>

        {/* Problem: everything connected */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(1) ? 1 : 0, y: isVisible(1) ? 0 : 20 }}
          className="mt-8 bg-slate-800/50 border-2 border-slate-600 p-4 shadow-[4px_4px_0px_0px_rgba(100,116,139,0.3)]"
        >
          <div className="text-sm text-slate-400 mb-3">But context is connected:</div>
          <div className="flex items-center gap-3 text-base font-mono">
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">Auth</span>
            <span className="text-slate-500">→</span>
            <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400">DB</span>
            <span className="text-slate-500">→</span>
            <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/40 text-pink-400">API</span>
            <span className="text-slate-500">→</span>
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-400">Config</span>
            <span className="text-slate-500">→</span>
            <span className="text-slate-500">...</span>
          </div>
          <div className="text-center text-red-400 mt-3">Miss one link = broken understanding</div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
          className="mt-8 bg-orange-500/10 border-2 border-orange-500/40 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(249,115,22,0.3)] transform rotate-1"
        >
          <span className="text-xl text-orange-400 font-bold">Too complex → </span>
          <span className="text-xl text-white">what's "relevant" is unknowable upfront</span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
