import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const principles = [
  {
    number: '1',
    title: 'Constrain the LLM',
    color: 'purple',
    points: [
      'State machine controls WHAT and WHEN',
      'LLM only decides HOW',
      'Scope-specific tools prevent going off-track',
    ],
  },
  {
    number: '2',
    title: 'Minimize Context',
    color: 'cyan',
    points: [
      'Each scope gets only what it needs',
      'No accumulated history between scopes',
      'Fresh context = focused execution',
    ],
  },
  {
    number: '3',
    title: 'Skip LLM When Possible',
    color: 'green',
    points: [
      'Validation → run scripts, not prompts',
      'Routing → pure functions, not inference',
      'Save tokens for creative work',
    ],
  },
  {
    number: '4',
    title: 'Design for Recovery',
    color: 'orange',
    points: [
      'Errors stay in scope, don\'t propagate',
      'Retry with error context → self-healing',
      'Bounded blast radius',
    ],
  },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/40', text: 'text-purple-400', shadow: 'shadow-[5px_5px_0px_0px_rgba(168,85,247,0.3)]' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/40', text: 'text-cyan-400', shadow: 'shadow-[5px_5px_0px_0px_rgba(6,182,212,0.3)]' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/40', text: 'text-green-400', shadow: 'shadow-[5px_5px_0px_0px_rgba(34,197,94,0.3)]' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/40', text: 'text-orange-400', shadow: 'shadow-[5px_5px_0px_0px_rgba(249,115,22,0.3)]' },
}

export function PrinciplesSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Principles for Building <span className="text-cyan-400">AI Agents</span>
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {principles.map((principle, index) => {
            const colors = colorClasses[principle.color]
            const rotations = [-0.5, 0.5, 0.5, -0.5]

            return (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={{
                  opacity: isVisible(index) ? 1 : 0.2,
                  y: isVisible(index) ? 0 : 20,
                  rotate: isVisible(index) ? rotations[index] : 0,
                }}
                className={`${colors.bg} border-2 ${colors.border} p-6 ${colors.shadow}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-5xl font-black ${colors.text}`}>{principle.number}</span>
                  <span className="text-2xl text-white font-bold">{principle.title}</span>
                </div>
                <div className="space-y-2">
                  {principle.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`${colors.text} mt-1`}>→</span>
                      <span className="text-slate-300 text-lg">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SlideLayout>
  )
}
