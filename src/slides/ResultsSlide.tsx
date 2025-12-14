import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const scopeMetrics = [
  { name: 'TEMPLATE_SELECTION', tokens: '~800', time: '25s', calls: '1', color: 'purple' },
  { name: 'SPEC_GENERATION', tokens: '~3,500', time: '15s', calls: '1-2', color: 'blue' },
  { name: 'IMPLEMENTING', tokens: '~45,000', time: '3-4min', calls: '50-200', color: 'green' },
  { name: 'REVIEWING', tokens: '0', time: '10s', calls: '0', color: 'yellow' },
  { name: 'USER_FEEDBACK', tokens: '~200', time: '2s', calls: '1', color: 'orange' },
]

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/40', text: 'text-purple-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/40', text: 'text-blue-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/40', text: 'text-green-400' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/40', text: 'text-yellow-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/40', text: 'text-orange-400' },
}

export function ResultsSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <FunTitle title="Real Results" subtitle="Production Metrics" />
        </div>

        <div className="flex-1 flex gap-8">
          {/* Left - Scope breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.3, x: isVisible(0) ? 0 : -20 }}
            className="flex-1 bg-slate-800/30 border-2 border-slate-600 p-6 shadow-[6px_6px_0px_0px_rgba(100,116,139,0.3)]"
          >
            <div className="text-xl text-slate-400 font-bold mb-5">Per-Scope Metrics</div>

            {/* Table header */}
            <div className="grid grid-cols-[1fr_100px_100px_100px] gap-3 mb-4 px-3 text-base text-slate-500 font-bold">
              <div>Scope</div>
              <div className="text-right">Tokens</div>
              <div className="text-right">Time</div>
              <div className="text-right">LLM Calls</div>
            </div>

            {/* Scope rows */}
            <div className="space-y-3">
              {scopeMetrics.map((scope, index) => {
                const colors = colorClasses[scope.color]
                return (
                  <motion.div
                    key={scope.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isVisible(0) ? 1 : 0.3, x: isVisible(0) ? 0 : -10 }}
                    transition={{ delay: index * 0.05 }}
                    className={`grid grid-cols-[1fr_100px_100px_100px] gap-3 ${colors.bg} border ${colors.border} p-3`}
                  >
                    <div className={`font-mono font-bold text-base ${colors.text}`}>{scope.name}</div>
                    <div className="text-right text-white font-mono text-base">{scope.tokens}</div>
                    <div className="text-right text-cyan-300 font-mono text-base">{scope.time}</div>
                    <div className="text-right text-slate-300 font-mono text-base">{scope.calls}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Total */}
            <div className="mt-5 pt-5 border-t-2 border-slate-600">
              <div className="grid grid-cols-[1fr_100px_100px_100px] gap-3 px-3">
                <div className="text-lg text-white font-bold">TOTAL</div>
                <div className="text-right text-green-400 font-mono font-bold text-lg">~50k</div>
                <div className="text-right text-cyan-400 font-mono font-bold text-lg">~5min</div>
                <div className="text-right text-slate-300 font-mono font-bold text-lg">~55</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Key metrics */}
          <div className="w-[360px] flex flex-col gap-4">
            {/* Iterations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(1) ? 1 : 0, y: isVisible(1) ? 0 : 20 }}
              className="bg-green-500/10 border-2 border-green-500/40 p-5 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)] transform rotate-1"
            >
              <div className="text-base text-slate-400 mb-2">Implementing iterations</div>
              <div className="text-5xl font-black text-green-400 font-mono">50-200</div>
              <div className="text-sm text-slate-500 mt-2">per full app generation</div>
            </motion.div>

            {/* Context explosions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(1) ? 1 : 0, y: isVisible(1) ? 0 : 20 }}
              transition={{ delay: 0.1 }}
              className="bg-cyan-500/10 border-2 border-cyan-500/40 p-5 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)] transform -rotate-1"
            >
              <div className="text-base text-slate-400 mb-2">Context explosions</div>
              <div className="text-5xl font-black text-cyan-400 font-mono">0</div>
              <div className="text-sm text-slate-500 mt-2">scopes reset context each phase</div>
            </motion.div>

            {/* Goal forgotten */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
              className="bg-purple-500/10 border-2 border-purple-500/40 p-5 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)] transform rotate-1"
            >
              <div className="text-base text-slate-400 mb-2">Times agent forgot goal</div>
              <div className="text-5xl font-black text-purple-400 font-mono">0</div>
              <div className="text-sm text-slate-500 mt-2">spec always in implementing context</div>
            </motion.div>

            {/* Self-healed errors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
              transition={{ delay: 0.1 }}
              className="bg-yellow-500/10 border-2 border-yellow-500/40 p-5 shadow-[4px_4px_0px_0px_rgba(234,179,8,0.3)] transform -rotate-1"
            >
              <div className="text-base text-slate-400 mb-2">Self-healed build errors</div>
              <div className="text-5xl font-black text-yellow-400 font-mono">95%</div>
              <div className="text-sm text-slate-500 mt-2">REVIEWING → IMPLEMENTING loop</div>
            </motion.div>
          </div>
        </div>

        {/* Bottom comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(3) ? 1 : 0, y: isVisible(3) ? 0 : 20 }}
          className="mt-5 flex gap-6 justify-center"
        >
          <div className="bg-red-500/10 border-2 border-red-500/40 px-8 py-5 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.3)] transform -rotate-1">
            <div className="text-base text-slate-400 mb-1">Without Scopes</div>
            <div className="text-2xl text-red-400 font-bold">Context limit @ iteration ~30</div>
          </div>
          <div className="text-4xl text-slate-500 flex items-center">→</div>
          <div className="bg-green-500/10 border-2 border-green-500/40 px-8 py-5 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)] transform rotate-1">
            <div className="text-base text-slate-400 mb-1">With Scopes</div>
            <div className="text-2xl text-green-400 font-bold">200+ iterations, consistent quality</div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
