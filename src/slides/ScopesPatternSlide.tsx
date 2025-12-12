import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function ScopesPatternSlide() {
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
          className="text-center mb-6"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            The <span className="text-cyan-400">Scopes</span> Pattern
          </h1>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Left - What is a Scope */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
            className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-6"
          >
            <div className="text-2xl font-bold text-purple-400 mb-6">A SCOPE is:</div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl">•</span>
                <span className="text-xl text-white">One <span className="text-cyan-400 font-bold">focused</span> phase of work</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl">•</span>
                <span className="text-xl text-white">Gets <span className="text-green-400 font-bold">ONLY</span> the context it needs</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl">•</span>
                <span className="text-xl text-white">Gets <span className="text-green-400 font-bold">ONLY</span> tools it needs</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl">•</span>
                <span className="text-xl text-white">Gets <span className="text-green-400 font-bold">ONLY</span> capabilities it needs</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl">•</span>
                <span className="text-xl text-white">Gets <span className="text-green-400 font-bold">ONLY</span> history it needs</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl">•</span>
                <span className="text-xl text-white">LLM operates <span className="text-yellow-400 font-bold">WITHIN</span> that scope</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl">•</span>
                <span className="text-xl text-white">Returns <span className="text-cyan-400 font-bold">structured</span> output</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Example */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 30 }}
            className="bg-cyan-500/10 border border-cyan-500/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl text-slate-400">SCOPE:</span>
              <span className="text-2xl font-bold text-cyan-400 font-mono">"EngineFailureResponse"</span>
              <span className="text-2xl">✈️</span>
            </div>

            <div className="space-y-4">
              {/* Input Context */}
              <div className="bg-slate-800/50 rounded-xl p-3">
                <div className="text-base text-slate-400 mb-2">Context:</div>
                <div className="pl-3 space-y-1 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">├─</span>
                    <span className="text-white">Engine #2 status: <span className="text-red-400">FAILED</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">├─</span>
                    <span className="text-white">Current altitude, speed, fuel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">└─</span>
                    <span className="text-white">Nearest airports list</span>
                  </div>
                </div>
              </div>

              {/* History */}
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-3">
                <div className="text-base text-purple-400 mb-2">History:</div>
                <div className="pl-3 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">└─</span>
                    <span className="text-white">Last <span className="text-purple-300">10 messages</span> related to engine</span>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-3">
                <div className="text-base text-pink-400 mb-2">Tools:</div>
                <div className="pl-3 space-y-1 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">├─</span>
                    <span className="text-pink-300">shutdown_engine()</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">├─</span>
                    <span className="text-pink-300">adjust_thrust()</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">├─</span>
                    <span className="text-pink-300">set_diversion_airport()</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">└─</span>
                    <span className="text-pink-300">alert_cabin_crew()</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3">
                <div className="text-base text-green-400 mb-2">Output:</div>
                <div className="pl-3 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">└─</span>
                    <span className="text-green-300">{'{ divertTo: "JFK", altitude: 15000 }'}</span>
                  </div>
                </div>
              </div>

              {/* Context Size */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(2) ? 1 : 0 }}
                className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl p-3 text-center"
              >
                <span className="text-base text-slate-400">Context Size: </span>
                <span className="text-xl text-green-400 font-bold font-mono">~800 tokens</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(3) ? 1 : 0, y: isVisible(3) ? 0 : 20 }}
          className="mt-6 grid grid-cols-2 gap-6"
        >
          {/* NOT */}
          <div className="bg-red-500/10 border border-red-500/50 rounded-2xl p-5 flex items-center gap-4">
            <span className="text-4xl text-red-400">✗</span>
            <div>
              <div className="text-sm text-red-400 font-bold mb-1">NOT</div>
              <div className="text-xl text-white">"Here's <span className="text-red-400 font-mono">100k tokens</span>, figure it out"</div>
            </div>
          </div>

          {/* YES */}
          <div className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5 flex items-center gap-4">
            <span className="text-4xl text-green-400">✓</span>
            <div>
              <div className="text-sm text-green-400 font-bold mb-1">YES</div>
              <div className="text-xl text-white">"Here's <span className="text-green-400 font-bold">exactly what you need</span> for THIS step"</div>
            </div>
          </div>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-lg mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Press <kbd className="px-3 py-1.5 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}
