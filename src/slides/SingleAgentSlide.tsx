import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function SingleAgentSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 5,
    onComplete: nextSlide,
  })
  const [showMeme, setShowMeme] = useState(false)

  const rejectedAgents = [
    { name: 'Planning Agent' },
    { name: 'Coding Agent' },
    { name: 'Review Agent' },
    { name: 'Deploy Agent' },
  ]

  const problems = [
    { problem: 'Who owns the context?', detail: 'Each agent has partial view', meme: null },
    { problem: 'Who handles errors?', detail: 'Blame shifting between agents', meme: null },
    { problem: 'Who talks to user?', detail: 'Confusing multi-voice UX', meme: 'split-james-mcavoy.webp' },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <FunTitle
            title="Why Single Agent?"
            subtitle="Decision rationale"
            variant="neutral"
          />
        </div>

        <div className="flex-1 w-full max-w-6xl mx-auto flex gap-8">
          {/* Left side - What we could have built */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.3, x: isVisible(0) ? 0 : -20 }}
            className="flex-1"
          >
            <p className="text-lg text-slate-400 mb-4">
              We could have built specialist agents:
            </p>

            <div className="space-y-3">
              {rejectedAgents.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isVisible(0) ? 1 : 0,
                    x: isVisible(0) ? 0 : -10
                  }}
                  transition={{ delay: index * 0.05 }}
                  className="relative"
                >
                  <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-600 px-5 py-3">
                    <div className="w-2 h-2 bg-slate-500" />
                    <span className="text-xl text-slate-400">{agent.name}</span>
                  </div>
                  {/* Strike through */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isVisible(1) ? 1 : 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500/70"
                  />
                </motion.div>
              ))}
            </div>

            {/* Big NO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isVisible(1) ? 1 : 0,
                scale: isVisible(1) ? 1 : 0.9
              }}
              className="mt-6 text-center"
            >
              <span className="text-5xl font-black text-red-500">NO.</span>
            </motion.div>
          </motion.div>

          {/* Center divider */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: isVisible(2) ? 0.5 : 0,
              scaleY: isVisible(2) ? 1 : 0
            }}
            style={{ transformOrigin: 'top' }}
            className="w-0.5 bg-slate-600"
          />

          {/* Right side - Why not */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.3, x: isVisible(2) ? 0 : 20 }}
            className="flex-1"
          >
            <p className="text-lg text-slate-400 mb-4">Why?</p>

            <div className="space-y-3 mb-6">
              {problems.map((item, index) => (
                <motion.div
                  key={item.problem}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: isVisible(2) ? 1 : 0,
                    x: isVisible(2) ? 0 : 10
                  }}
                  transition={{ delay: index * 0.08 }}
                  className={`bg-red-500/10 border-2 border-red-500/40 px-5 py-3 ${item.meme ? 'cursor-pointer hover:border-red-500/70 transition-colors' : ''}`}
                  onMouseEnter={() => item.meme && setShowMeme(true)}
                  onMouseLeave={() => item.meme && setShowMeme(false)}
                >
                  <div className="text-lg text-red-400 font-bold">{item.problem}</div>
                  <div className="text-base text-slate-400">
                    {item.detail}
                    {item.meme && <span className="text-slate-500 ml-2">(hover)</span>}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What we wanted */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isVisible(3) ? 1 : 0,
                y: isVisible(3) ? 0 : 10
              }}
              className="mt-6"
            >
              <p className="text-lg text-slate-400 mb-3">Wanted:</p>
              <div className="bg-cyan-500/10 border-2 border-cyan-500/40 px-5 py-4 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)] transform -rotate-1">
                <span className="text-xl text-cyan-400 font-bold">
                  ONE agent that handles everything.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible(4) ? 1 : 0,
            y: isVisible(4) ? 0 : 20
          }}
          className="mt-6 flex items-center justify-center gap-5"
        >
          <div className="bg-purple-500/10 border-2 border-purple-500/40 px-5 py-3 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)] transform -rotate-1">
            <span className="text-xl text-white font-bold">One conversation.</span>
          </div>
          <div className="bg-purple-500/10 border-2 border-purple-500/40 px-5 py-3 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)]">
            <span className="text-xl text-white font-bold">One context.</span>
          </div>
          <div className="bg-purple-500/10 border-2 border-purple-500/40 px-5 py-3 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)] transform rotate-1">
            <span className="text-xl text-white font-bold">One agent.</span>
          </div>
        </motion.div>

        {/* Meme Modal */}
        <AnimatePresence>
          {showMeme && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <div className="absolute inset-0 bg-black/70" />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative z-10"
              >
                <img
                  src={`${import.meta.env.BASE_URL}split-james-mcavoy.webp`}
                  alt="Split - Multiple personalities"
                  className="max-w-[500px] max-h-[400px] object-contain border-2 border-white/20 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]"
                />
                <div className="mt-3 text-center text-slate-400 text-lg">
                  "Which personality am I talking to today?"
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideLayout>
  )
}
