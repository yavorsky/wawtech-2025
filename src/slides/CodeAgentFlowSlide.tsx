import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const scopes = [
  {
    name: 'TEMPLATE_SELECTION',
    color: 'purple',
    gets: 'User request + templates list',
    produces: '{ template: "next-app" }',
    details: {
      context: ['User request', 'Available templates', 'selection.md instructions'],
      tools: ['execute_command()'],
      notIncluded: ['History', 'File contents', 'Code'],
      tokens: '~800',
    },
  },
  {
    name: 'SPEC_GENERATION',
    color: 'blue',
    gets: 'Request + template + design URL',
    produces: '{ phases: ["Add framer-motion", "Create Hero.tsx", ...] }',
    details: {
      context: ['User request', 'Selected template', 'Fetched design inspiration'],
      tools: ['web_scrape()', 'web_search()', 'mcp_discovery()'],
      notIncluded: ['Previous conversations', 'Code files'],
      tokens: '~3,500',
      phaseExample: ['Install framer-motion', 'Use Supabase MCP for auth', 'Create Hero.tsx'],
    },
  },
  {
    name: 'IMPLEMENTING',
    color: 'green',
    gets: 'Spec + implementation history',
    produces: 'Created/edited files',
    details: {
      context: ['Generated spec', 'Implementation history', 'File structure', 'Template usage.md'],
      tools: ['create_file()', 'edit_file()', 'shell_command()', 'web_search()', 'MCP servers'],
      notIncluded: [],
      tokens: 'Full context',
    },
  },
  {
    name: 'REVIEWING',
    color: 'yellow',
    gets: 'No LLM — just scripts',
    produces: 'Pass → next, Fail → retry',
    details: {
      context: ['Template validation scripts only'],
      tools: ['pnpm typecheck', 'pnpm lint', 'pnpm build'],
      notIncluded: ['LLM call — deterministic!'],
      tokens: '0',
    },
  },
  {
    name: 'USER_FEEDBACK',
    color: 'orange',
    gets: 'User message only',
    produces: 'Route to next scope',
    details: {
      context: ['Latest user message'],
      tools: [],
      notIncluded: ['History', 'Files', 'Tools access'],
      tokens: '~200',
    },
  },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/40', text: 'text-purple-400', shadow: 'rgba(168,85,247,0.4)' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/40', text: 'text-blue-400', shadow: 'rgba(59,130,246,0.4)' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/40', text: 'text-green-400', shadow: 'rgba(34,197,94,0.4)' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/40', text: 'text-yellow-400', shadow: 'rgba(234,179,8,0.4)' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/40', text: 'text-orange-400', shadow: 'rgba(249,115,22,0.4)' },
}

type ScopeDetails = {
  context: string[]
  tools: string[]
  notIncluded: string[]
  tokens: string
  phaseExample?: string[]
}

type Scope = {
  name: string
  color: string
  gets: string
  produces: string
  details: ScopeDetails
}

function ScopeModal({ scope, colors }: { scope: Scope; colors: typeof colorClasses[string] }) {
  return (
    <>
      {/* Dark overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/50 pointer-events-none"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed z-50 pointer-events-none inset-0 flex items-center justify-center"
      >
        <div
          className={`bg-slate-900 border-2 ${colors.border} p-6 w-[500px]`}
          style={{ boxShadow: `6px 6px 0px 0px ${colors.shadow}` }}
        >
          <div className={`font-mono font-bold text-xl ${colors.text} mb-4`}>
            {scope.name}
          </div>

          <div className="space-y-4">
            {/* Context */}
            <div className="bg-slate-800/50 p-3">
              <div className="text-xl text-slate-400 mb-2 font-bold">Context:</div>
              <div className="space-y-1">
                {scope.details.context.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xl">
                    <span className="text-green-400">+</span>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-slate-800/50 p-3">
              <div className="text-sm text-slate-400 mb-2 font-bold">Tools:</div>
              {scope.details.tools.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {scope.details.tools.map((tool, i) => (
                    <span key={i} className="px-2 py-1 bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xl font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-slate-500 text-xl">None — pure routing</span>
              )}
            </div>

            {/* Phase Example (only for SPEC_GENERATION) */}
            {scope.details.phaseExample && (
              <div className="bg-slate-800/50 p-3">
                <div className="text-sm text-slate-400 mb-2 font-bold">Phase example:</div>
                <div className="space-y-1 font-mono">
                  {scope.details.phaseExample.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xl">
                      <span className="text-cyan-400">{i + 1}.</span>
                      <span className="text-cyan-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NOT Included */}
            {scope.details.notIncluded.length > 0 && (
              <div className="bg-slate-800/50 p-3">
                <div className="text-sm text-slate-400 mb-2 font-bold">NOT in context:</div>
                <div className="space-y-1">
                  {scope.details.notIncluded.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xl">
                      <span className="text-red-400">-</span>
                      <span className="text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tokens */}
            <div className="flex justify-end">
              <span className={`font-mono text-sm ${colors.text}`}>
                Tokens: {scope.details.tokens}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export function CodeAgentFlowSlide() {
  const { nextSlide } = usePresentationContext()
  const { currentStep, isVisible } = useSteppedReveal({
    totalSteps: scopes.length + 1,
    onComplete: nextSlide,
  })
  const [hoveredScope, setHoveredScope] = useState<number | null>(null)

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <FunTitle title="Code Agent Flow" subtitle="Scopes" />
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[200px_1fr_1fr] gap-4 mb-3 px-2">
          <div className="text-slate-500 font-bold text-2xl">Scope</div>
          <div className="text-slate-500 font-bold text-2xl">What it gets</div>
          <div className="text-slate-500 font-bold text-2xl">What it produces</div>
        </div>

        {/* Table Rows */}
        <div className="flex-1 flex flex-col gap-3">
          {scopes.map((scope, index) => {
            const colors = colorClasses[scope.color]
            const isActive = currentStep >= index

            return (
              <motion.div
                key={scope.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isActive ? 1 : 0.2,
                  x: isActive ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
                className={`grid grid-cols-[200px_1fr_1fr] gap-4 ${colors.bg} border-2 ${colors.border} p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] cursor-pointer`}
                onMouseEnter={() => setHoveredScope(index)}
                onMouseLeave={() => setHoveredScope(null)}
              >
                {/* Scope Name */}
                <div className={`font-mono font-bold text-lg ${colors.text}`}>
                  {scope.name}
                </div>

                {/* What it gets */}
                <div className="text-white text-2xl">
                  {scope.gets}
                </div>

                {/* What it produces */}
                <div className="text-cyan-300 font-mono text-xl">
                  {scope.produces}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(scopes.length) ? 1 : 0, y: isVisible(scopes.length) ? 0 : 20 }}
          className="mt-4 flex gap-6 justify-center"
        >
          <div className="bg-cyan-500/10 border-2 border-cyan-500/40 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)] transform -rotate-1">
            <span className="text-xl font-bold text-cyan-400">Each scope: isolated context</span>
          </div>
          <div className="bg-green-500/10 border-2 border-green-500/40 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)] transform rotate-1">
            <span className="text-xl font-bold text-green-400">Output → feeds next scope</span>
          </div>
        </motion.div>
      </div>

      {/* Hover Modal */}
      <AnimatePresence>
        {hoveredScope !== null && (
          <ScopeModal
            scope={scopes[hoveredScope]}
            colors={colorClasses[scopes[hoveredScope].color]}
          />
        )}
      </AnimatePresence>
    </SlideLayout>
  )
}
