import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function SubAgentsSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, currentStep } = useSteppedReveal({
    totalSteps: 5,
    onComplete: nextSlide,
  })

  const showMeme = currentStep === 0

  return (
    <SlideLayout>
      {/* Meme Video - Step 0 */}
      {showMeme && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-20 flex items-center justify-center bg-background"
        >
          <video
            src={`${import.meta.env.BASE_URL}sub-agents.mp4`}
            className="max-w-[70%] max-h-[70%]"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      )}

      <div className="flex flex-col h-full items-center justify-center">
        <motion.div
          className="mb-6"
          animate={{ opacity: showMeme ? 0 : 1 }}
        >
          <FunTitle title="Sub-Agents" subtitle="Fourth Attempt" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showMeme ? 0 : 1, y: showMeme ? 20 : 0 }}
          className="text-center mb-8"
        >
          <span className="text-2xl text-slate-300">Each agent has </span>
          <span className="text-2xl text-cyan-400 font-bold">own purpose</span>
          <span className="text-2xl text-slate-300">, fresh context</span>
        </motion.div>

        {/* Agent flow with purposes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(1) ? 1 : 0.3, y: isVisible(1) ? 0 : 20 }}
          className="flex items-start gap-4"
        >
          <div className="bg-cyan-500/10 border-2 border-cyan-500/40 p-4 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)] transform -rotate-1">
            <div className="text-cyan-400 font-bold text-lg">Agent 1</div>
            <div className="text-slate-400 text-sm mb-2">iter 1-50</div>
            <div className="text-white">Plans & creates structure</div>
          </div>

          <div className="flex flex-col items-center gap-1 pt-6">
            <span className="text-2xl text-slate-500">→</span>
            <span className="text-xs text-slate-500">handoff</span>
          </div>

          <div className="bg-green-500/10 border-2 border-green-500/40 p-4 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)]">
            <div className="text-green-400 font-bold text-lg">Agent 2</div>
            <div className="text-slate-400 text-sm mb-2">iter 51-100</div>
            <div className="text-white">Implements features</div>
          </div>

          <div className="flex flex-col items-center gap-1 pt-6">
            <span className="text-2xl text-slate-500">→</span>
            <span className="text-xs text-slate-500">handoff</span>
          </div>

          <div className="bg-pink-500/10 border-2 border-pink-500/40 p-4 shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)] transform rotate-1">
            <div className="text-pink-400 font-bold text-lg">Agent 3</div>
            <div className="text-slate-400 text-sm mb-2">iter 101-150</div>
            <div className="text-white">Testing & fixes</div>
          </div>
        </motion.div>

        {/* The benefit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
          className="mt-6 bg-green-500/10 border-2 border-green-500/40 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)]"
        >
          <span className="text-lg text-green-400">Each starts fresh: small context </span>
          <span className="text-lg text-green-400 font-bold">~50k tokens max</span>
        </motion.div>

        {/* Real example of coherence loss */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(3) ? 1 : 0, y: isVisible(3) ? 0 : 20 }}
          className="mt-6 bg-slate-800/50 border-2 border-red-500/40 p-5 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.3)]"
        >
          <div className="text-sm text-slate-400 mb-3">But in practice:</div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 border border-cyan-500/40 px-3 py-2">
              <div className="text-cyan-400 font-mono text-sm">Agent 1:</div>
              <div className="text-white text-sm">"Using singleton for DB"</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-slate-500">→</span>
              <span className="text-xs text-yellow-400">handoff: "db.ts exists"</span>
              <span className="text-xs text-red-400">(why? lost!)</span>
            </div>
            <div className="bg-red-500/20 border border-red-500/40 px-3 py-2">
              <div className="text-green-400 font-mono text-sm">Agent 2:</div>
              <div className="text-white text-sm">"Refactoring to connection-per-request"</div>
            </div>
          </div>
          <div className="text-center text-red-400 font-bold">Connection pool exhausted in prod</div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(4) ? 1 : 0, y: isVisible(4) ? 0 : 20 }}
          className="mt-6 bg-orange-500/10 border-2 border-orange-500/40 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(249,115,22,0.3)] transform rotate-1"
        >
          <span className="text-xl text-orange-400 font-bold">Lost coherence → </span>
          <span className="text-xl text-white">reasoning lost at each handoff boundary</span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
