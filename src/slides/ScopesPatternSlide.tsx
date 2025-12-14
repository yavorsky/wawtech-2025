import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function ScopesPatternSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center">
        {/* Header */}
        <div className="mb-8 flex justify-center">
          <FunTitle title="Scope Example" subtitle="Fix Engine" />
        </div>

        {/* Centered Example */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -0.5 }}
          className="bg-cyan-500/10 border-2 border-cyan-500/50 p-8 w-full max-w-3xl shadow-[6px_6px_0px_0px_rgba(6,182,212,0.4)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">✈️</span>
            <span className="text-3xl font-bold text-cyan-400 font-mono">"FixEngine"</span>
          </div>

          <div className="space-y-5">
            {/* Input Context */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.3, x: isVisible(0) ? 0 : -20 }}
              className="bg-slate-800/50 p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
            >
              <div className="text-xl text-slate-400 mb-3 font-bold">Context:</div>
              <div className="pl-4 space-y-2 font-mono text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">├─</span>
                  <span className="text-white">Engine #2 status: <span className="text-red-400 font-bold">FAILED</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">├─</span>
                  <span className="text-white">Current altitude, speed, fuel</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">└─</span>
                  <span className="text-white">Nearest airports list</span>
                </div>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.3, x: isVisible(0) ? 0 : -20 }}
              transition={{ delay: 0.1 }}
              className="bg-pink-500/10 border-2 border-pink-500/30 p-4 shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)]"
            >
              <div className="text-xl text-pink-400 mb-3 font-bold">Tools:</div>
              <div className="pl-4 space-y-2 font-mono text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">├─</span>
                  <span className="text-pink-300">shutdown_engine()</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">├─</span>
                  <span className="text-pink-300">adjust_thrust()</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">├─</span>
                  <span className="text-pink-300">set_diversion_airport()</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">└─</span>
                  <span className="text-pink-300">alert_cabin_crew()</span>
                </div>
              </div>
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.3, x: isVisible(1) ? 0 : -20 }}
              className="bg-green-500/10 border-2 border-green-500/30 p-4 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)]"
            >
              <div className="text-xl text-green-400 mb-3 font-bold">Output:</div>
              <div className="pl-4 font-mono text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">└─</span>
                  <span className="text-green-300">{'{ divertTo: "JFK", altitude: 15000 }'}</span>
                </div>
              </div>
            </motion.div>

            {/* Context Size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible(2) ? 1 : 0, scale: isVisible(2) ? 1 : 0.95 }}
              className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 p-4 text-center shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)]"
            >
              <span className="text-xl text-slate-400">Context Size: </span>
              <span className="text-3xl text-green-400 font-bold font-mono">~800 tokens</span>
              <span className="text-xl text-slate-500 ml-4">(not 100k!)</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
