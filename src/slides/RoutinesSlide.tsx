import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const steps = [
  { icon: '📦', label: 'Fetch from GitHub', color: 'cyan', description: 'Check supported packages' },
  { icon: '🔍', label: 'Detect new version', color: 'green', description: 'Compare with current' },
  { icon: '🏗️', label: 'Build bundle', color: 'yellow', description: 'Minify & process' },
  { icon: '🧠', label: 'Analyze patterns', color: 'pink', description: 'Find detection signatures' },
  { icon: '🚀', label: 'Open PR', color: 'purple', description: 'Submit for review' },
]

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/40', text: 'text-cyan-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/40', text: 'text-green-400' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/40', text: 'text-yellow-400' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/40', text: 'text-pink-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/40', text: 'text-purple-400' },
}

export function RoutinesSlide() {
  const { nextSlide } = usePresentationContext()
  const { currentStep, isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        {/* Header */}
        <div className="mb-10 flex justify-center">
          <FunTitle title="Routines" subtitle="Scheduled Scopes" />
        </div>

        {/* Trigger */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible(0) ? 1 : 0.3, y: isVisible(0) ? 0 : -20 }}
          className="bg-orange-500/10 border-2 border-orange-500/40 px-8 py-4 mb-8 shadow-[4px_4px_0px_0px_rgba(249,115,22,0.3)]"
        >
          <span className="text-orange-400 font-bold text-xl">CRON: </span>
          <span className="font-mono text-white text-xl">"0 3 * * 1"</span>
          <span className="text-slate-400 ml-4">→ Monday 3am</span>
        </motion.div>

        {/* Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible(1) ? 1 : 0.3 }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          {steps.map((step, index) => {
            const colors = colorClasses[step.color]
            return (
              <div key={step.label} className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isVisible(1) ? 1 : 0.3,
                    scale: isVisible(1) ? 1 : 0.9
                  }}
                  transition={{ delay: index * 0.1 }}
                  className={`${colors.bg} border-2 ${colors.border} px-5 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <div className={`font-bold text-lg ${colors.text}`}>{step.label}</div>
                      <div className="text-lg text-slate-500">{step.description}</div>
                    </div>
                  </div>
                </motion.div>
                {index < steps.length - 1 && (
                  <span className="text-2xl text-slate-500">→</span>
                )}
              </div>
            )
          })}
        </motion.div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
          className="mt-10 flex gap-8"
        >
          <div className="bg-green-500/10 border-2 border-green-500/40 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)] transform -rotate-1">
            <span className="text-2xl font-bold text-green-400">PR Ready for Review</span>
          </div>
          <div className="bg-cyan-500/10 border-2 border-cyan-500/40 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)] transform rotate-1">
            <span className="text-2xl font-bold text-cyan-400">Same scopes, different trigger</span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
