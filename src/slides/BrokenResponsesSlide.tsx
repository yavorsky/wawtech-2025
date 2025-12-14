import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function BrokenResponsesSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <FunTitle title="Broken Responses" subtitle="Problem 2" />
        </div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-2xl text-text-secondary">
            Remember the Airbus broken JSON? That happened in production. <span className="text-red-400 font-bold">Constantly.</span>
          </p>
        </motion.div>

        <div className="flex-1 flex gap-8 items-start">
          {/* Expected format */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: 0 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30, rotate: isVisible(0) ? -1 : 0 }}
            className="flex-1 bg-green-500/10 border-2 border-green-500/50 p-6 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.4)]"
          >
            <div className="text-2xl text-green-400 font-bold mb-4">Expected tool call format:</div>
            <pre className="bg-surface p-5 font-mono text-lg overflow-x-auto">
              <code>
                <span className="text-gray-500">{'{'}</span>{'\n'}
                <span className="text-purple-400">  "tool"</span>: <span className="text-green-400">"create_file"</span>,{'\n'}
                <span className="text-purple-400">  "path"</span>: <span className="text-green-400">"src/app.tsx"</span>,{'\n'}
                <span className="text-purple-400">  "content"</span>: <span className="text-green-400">"import React..."</span>{'\n'}
                <span className="text-gray-500">{'}'}</span>
              </code>
            </pre>
            <div className="mt-4 flex items-center gap-2 text-green-400 text-2xl">
              <span>✓</span>
              <span>Valid JSON, parseable</span>
            </div>
          </motion.div>

          {/* What LLM returned */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : 30, rotate: isVisible(1) ? 1 : 0 }}
            className="flex-1 bg-red-500/10 border-2 border-red-500/50 p-6 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.4)]"
          >
            <div className="text-2xl text-red-400 font-bold mb-4">
              What LLM actually returned (Iteration 94):
            </div>
            <pre className="bg-surface p-5 font-mono text-lg overflow-x-auto">
              <code>
                <span className="text-gray-500">{'{'}</span>{'\n'}
                <span className="text-purple-400">  "tool"</span>: <span className="text-green-400">"create_file"</span>,{'\n'}
                <span className="text-purple-400">  "path"</span>: <span className="text-green-400">"src/app.tsx"</span>,{'\n'}
                <span className="text-purple-400">  "content"</span>: <span className="text-green-400">"import React from 'react';</span>{'\n'}
                <span className="text-green-400">    export default function App() {'{'}</span>{'\n'}
                <span className="text-green-400">      return {'<'}div className=</span>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500 font-bold"
                >
                  █
                </motion.span>
              </code>
            </pre>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 bg-red-500/20 border-2 border-red-500 px-4 py-2 text-red-400 text-lg"
            >
              [Response cut off - context limit reached]
            </motion.div>
          </motion.div>
        </div>

        {/* Error result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(2) ? 1 : 0, y: isVisible(2) ? 0 : 20 }}
          className="mt-6 flex justify-center gap-8"
        >
          <div className="transform -rotate-1 bg-surface border-2 border-red-500 px-8 py-5 flex items-center gap-4 shadow-[6px_6px_0px_0px_rgba(239,68,68,0.4)]">
            <span className="text-5xl">💥</span>
            <div>
              <div className="text-2xl text-red-400 font-bold">Parser error. Agent stops. User frustrated.</div>
              <div className="text-xl text-text-secondary">JSON.parse() throws, entire task fails</div>
            </div>
          </div>
        </motion.div>

        {/* Why */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(3) ? 1 : 0, y: isVisible(3) ? 0 : 20 }}
          className="mt-6 text-center"
        >
          <div className="text-2xl text-text-secondary mb-2">Why?</div>
          <div className="transform rotate-1 inline-flex items-center gap-4 bg-purple-500/10 border-2 border-purple-500/50 px-8 py-5 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.4)]">
            <span className="text-5xl font-black text-purple-400">~1M</span>
            <span className="text-2xl text-white">tokens in context</span>
            <span className="text-4xl">→</span>
            <span className="text-2xl text-red-400 font-bold">LLM hit output limit mid-response</span>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
