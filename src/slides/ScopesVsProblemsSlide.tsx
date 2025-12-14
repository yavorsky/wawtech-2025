import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const problems = [
  {
    problem: 'Context explosion',
    solution: 'Focused context per scope',
    result: 'Never exceeds 50k tokens',
  },
  {
    problem: 'Agent forgets goal',
    solution: 'Spec always in context',
    result: '0 forgotten goals',
  },
  {
    problem: 'MCP floods context',
    solution: 'Scopes contain the damage',
    result: 'Isolated, doesn\'t propagate',
  },
  {
    problem: 'LLM controls flow',
    solution: 'State machine controls flow',
    result: '100% predictable',
  },
]

export function ScopesVsProblemsSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: problems.length + 1,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-8 flex justify-center">
          <FunTitle title="Scopes vs Problems" />
        </div>

        {/* Table */}
        <div className="flex-1 max-w-5xl mx-auto w-full">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_40px_1fr_1fr] gap-6 mb-4 pb-3 border-b border-slate-700">
            <div className="text-lg text-red-400 font-bold uppercase tracking-wide">Problem</div>
            <div></div>
            <div className="text-lg text-green-400 font-bold uppercase tracking-wide">Solution</div>
            <div className="text-lg text-cyan-400 font-bold uppercase tracking-wide text-right">Result</div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {problems.map((item, index) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible(index) ? 1 : 0.15, y: isVisible(index) ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-[1fr_40px_1fr_1fr] gap-6 items-center py-4 border-b border-slate-800"
              >
                {/* Problem */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-xl text-white">{item.problem}</span>
                </div>

                {/* Arrow */}
                <div className="text-2xl text-slate-600 text-center">→</div>

                {/* Solution */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xl text-white">{item.solution}</span>
                </div>

                {/* Result */}
                <div className="text-right">
                  <span className="text-lg text-cyan-400 font-mono">{item.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(problems.length) ? 1 : 0, y: isVisible(problems.length) ? 0 : 20 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-4 bg-slate-800/30 border border-slate-700 px-10 py-5">
            <span className="text-2xl text-slate-400">Same problems.</span>
            <span className="text-slate-600">|</span>
            <span className="text-2xl text-cyan-400 font-bold">Structural solutions.</span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
