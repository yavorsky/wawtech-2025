import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'
import { useRef, useEffect } from 'react'

export function OutputInconsistencySlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })
  const videoRef = useRef<HTMLVideoElement>(null)

  // Start video when step 2 becomes visible
  useEffect(() => {
    if (isVisible(2) && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    } else if (!isVisible(2) && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isVisible])

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <FunTitle title="Output Inconsistency" subtitle="Problem 1" />
        </div>

        <div className="flex-1 flex gap-8">
          {/* Left side - Code examples */}
          <div className="flex-1 flex flex-col">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl text-text-secondary mb-6"
            >
              The LLM's outputs became <span className="text-red-400 font-bold">INCONSISTENT</span>:
            </motion.p>

            {/* Iteration 10 */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: 0 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30, rotate: isVisible(0) ? -1 : 0 }}
              className="bg-green-500/10 border-2 border-green-500/50 p-5 mb-4 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.4)]"
            >
              <div className="text-2xl text-green-400 font-bold mb-3">Iteration 12:</div>
              <div className="bg-surface p-4 font-mono">
                <div className="text-xl text-cyan-400 mb-2">
                  create_file(<span className="text-green-400">"src/components/StockChart.tsx"</span>)
                </div>
                <div className="text-text-secondary space-y-2 text-base">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>React Query for data fetching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Tailwind + shadcn/ui components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Recharts for visualization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Error boundaries, loading states</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Follows project conventions</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Iteration 80 */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30, rotate: isVisible(1) ? 1 : 0 }}
              className="bg-red-500/10 border-2 border-red-500/50 p-5 mb-4 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.4)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl text-red-400 font-bold">Iteration 47:</span>
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-yellow-400 font-bold text-base"
                >
                  OVERWRITES WORKING FILE!
                </motion.span>
              </div>
              <div className="bg-surface p-4 font-mono">
                <div className="text-xl text-cyan-400 mb-2">
                  create_file(<span className="text-green-400">"src/components/StockChart.tsx"</span>)
                </div>
                <div className="text-text-secondary space-y-2 text-base">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>Switches to fetch() with .then()</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>Inline styles, ignores Tailwind</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>Chart.js instead of Recharts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>Hardcoded API keys in component</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>Breaks existing imports</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <span className="text-2xl text-white">
                Same file. Different style. <span className="text-red-400 font-bold">Contradictory.</span>
              </span>
            </motion.div>
          </div>

          {/* Right side - Rock meme video */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30, rotate: isVisible(2) ? -1 : 0 }}
            className="flex-1 flex flex-col"
          >
            <div className="text-xl text-text-secondary mb-3 text-center">
              Same prompt, different results:
            </div>
            <div className="flex-1 bg-surface overflow-hidden border-2 border-purple-500/50 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.4)]">
              <video
                ref={videoRef}
                src={`${import.meta.env.BASE_URL}rock.mp4`}
                className="w-full h-full object-contain"
                loop
                muted
                playsInline
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(2) ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-xl text-text-secondary mt-3 italic"
            >
              "Create the exact replica, don't change a thing" × 101
            </motion.p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
