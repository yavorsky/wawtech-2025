import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FunTitle } from '@/components/FunTitle'
import { usePresentationContext } from '@/context/PresentationContext'

export function ContextExplosionSlide() {
  const { nextSlide } = usePresentationContext()
  const [iteration, setIteration] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const MAX_ITERATIONS = 120
  const CONTEXT_LIMIT = 1000000 // 1M tokens
  const SPEED = 80 // ms per tick

  const userInput = "Build a dashboard with live stock data, charts, and export to PDF"

  const allEvents = [
    { iter: 1, type: 'system', text: 'System prompt loaded (18k tokens)' },
    { iter: 1, type: 'info', text: 'Tool definitions registered (8k tokens)' },
    { iter: 2, type: 'user', text: `User: "${userInput}"` },
    { iter: 3, type: 'assistant', text: 'Assistant: "I\'ll create a stock dashboard. Let me start by setting up the project..."' },
    { iter: 5, type: 'tool', text: 'create_file("package.json") → 2k tokens' },
    { iter: 7, type: 'tool', text: 'execute("npm init -y && npm install...") → 4k tokens' },
    { iter: 10, type: 'tool', text: 'create_file("src/App.tsx") → 3k tokens' },
    { iter: 12, type: 'assistant', text: 'Assistant: "Setting up the chart components..."' },
    { iter: 15, type: 'tool', text: 'create_file("src/components/Chart.tsx") → 5k tokens' },
    { iter: 18, type: 'tool', text: 'web_search("Yahoo Finance API docs") → 12k tokens' },
    { iter: 22, type: 'tool', text: 'scrape_url("finance.yahoo.com/docs") → 18k tokens' },
    { iter: 25, type: 'assistant', text: 'Assistant: "Implementing the API integration..."' },
    { iter: 28, type: 'tool', text: 'create_file("src/api/stocks.ts") → 4k tokens' },
    { iter: 32, type: 'tool', text: 'execute("npm run dev") → error output 3k tokens' },
    { iter: 35, type: 'tool', text: 'read_file("src/App.tsx") → 3k tokens in context again' },
    { iter: 38, type: 'tool', text: 'edit_file("src/App.tsx") → diff + new content 6k tokens' },
    { iter: 42, type: 'assistant', text: 'Assistant: "Fixed the import error. Now adding more components..."' },
    { iter: 45, type: 'tool', text: 'create_file("src/components/StockCard.tsx") → 4k tokens' },
    { iter: 48, type: 'tool', text: 'create_file("src/components/Dashboard.tsx") → 6k tokens' },
    { iter: 52, type: 'tool', text: 'web_search("recharts documentation") → 15k tokens' },
    { iter: 55, type: 'mcp', text: 'MCP: discovery() → available connectors 3k tokens' },
    { iter: 58, type: 'mcp', text: 'MCP: fetch_stock_data(["AAPL","NVDA","TSLA"]) → 25k tokens' },
    { iter: 62, type: 'tool', text: 'edit_file("src/components/Chart.tsx") → 8k tokens' },
    { iter: 65, type: 'warning', text: '⚠️ Context usage: 60% - Performance may degrade' },
    { iter: 68, type: 'tool', text: 'execute("npm run build") → error logs 5k tokens' },
    { iter: 72, type: 'tool', text: 'read_file("src/components/Dashboard.tsx") → 6k tokens again' },
    { iter: 75, type: 'assistant', text: 'Assistant: "I see a TypeScript error. Let me fix it..."' },
    { iter: 78, type: 'tool', text: 'edit_file("src/components/Dashboard.tsx") → 9k tokens' },
    { iter: 82, type: 'tool', text: 'create_file("src/utils/formatters.ts") → 3k tokens' },
    { iter: 85, type: 'tool', text: 'web_search("pdf generation react") → 14k tokens' },
    { iter: 88, type: 'warning', text: '⚠️ Context usage: 80% - Critical threshold' },
    { iter: 92, type: 'tool', text: 'create_file("src/components/ExportPDF.tsx") → 5k tokens' },
    { iter: 95, type: 'tool', text: 'execute("npm run lint") → warnings 4k tokens' },
    { iter: 98, type: 'tool', text: 'edit_file("src/App.tsx") → fixing lint issues 7k tokens' },
    { iter: 102, type: 'error', text: '🔴 Context usage: 95% - Evicting old messages' },
    { iter: 105, type: 'tool', text: 'read_file("src/api/stocks.ts") → wait, what was the API format?' },
    { iter: 108, type: 'error', text: '🔴 Lost track of original styling conventions' },
    { iter: 112, type: 'assistant', text: 'Assistant: "Let me check what we were building again..."' },
    { iter: 115, type: 'error', text: '💥 Context overflow - Response truncated' },
    { iter: 118, type: 'error', text: '💥 JSON parse error - Agent stopped' },
    { iter: 120, type: 'error', text: '❌ Task failed. User must restart.' },
  ]

  const calculateState = (iter: number) => {
    const systemPrompt = 18000
    const toolDefs = 8000
    const userTokens = Math.min(iter * 500, 60000)
    const assistantTokens = Math.min(iter * 4000, 480000) // History grows fast

    let toolOutputs = 0
    if (iter > 5) toolOutputs += Math.min((iter - 5) * 1000, 100000) // Less tools

    let webTokens = 0
    if (iter > 18) webTokens += 15000
    if (iter > 52) webTokens += 20000
    if (iter > 85) webTokens += 15000 // Much less web (50k total)

    let mcpTokens = 0
    if (iter > 40) mcpTokens += 50000
    if (iter > 58) mcpTokens += 100000
    if (iter > 80) mcpTokens += 120000
    if (iter > 100) mcpTokens += 130000 // More MCP (400k total)

    const totalTokens = systemPrompt + toolDefs + userTokens + assistantTokens + toolOutputs + webTokens + mcpTokens
    const usagePercent = Math.min((totalTokens / CONTEXT_LIMIT) * 100, 100)
    const isOverflow = totalTokens > CONTEXT_LIMIT

    let status = { label: 'Optimal', color: 'bg-green-500', textColor: 'text-green-400' }
    if (usagePercent > 40) status = { label: 'Moderate', color: 'bg-blue-500', textColor: 'text-blue-400' }
    if (usagePercent > 60) status = { label: 'High Load', color: 'bg-yellow-500', textColor: 'text-yellow-400' }
    if (usagePercent > 80) status = { label: 'Critical', color: 'bg-orange-500', textColor: 'text-orange-400' }
    if (usagePercent > 95) status = { label: 'Overflow', color: 'bg-red-500', textColor: 'text-red-400' }

    return {
      systemPrompt, toolDefs, userTokens, assistantTokens, toolOutputs, webTokens, mcpTokens,
      totalTokens, usagePercent, isOverflow, status
    }
  }

  const currentState = calculateState(iteration)
  const currentLogs = hasStarted ? allEvents.filter(e => e.iter <= iteration) : []

  // Auto-scroll to bottom to show latest logs
  useEffect(() => {
    if (scrollRef.current && hasStarted) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [currentLogs.length, hasStarted])

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isPlaying && iteration < MAX_ITERATIONS) {
      interval = setInterval(() => {
        setIteration(prev => (prev >= MAX_ITERATIONS ? prev : prev + 1))
      }, SPEED)
    } else if (iteration >= MAX_ITERATIONS) {
      setIsPlaying(false)
      setIsComplete(true)
    }
    return () => clearInterval(interval)
  }, [isPlaying, iteration])

  const handleStart = () => {
    setIteration(1)
    setHasStarted(true)
    setIsPlaying(true)
    setIsComplete(false)
  }

  const handleNextSlide = () => {
    nextSlide()
  }

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault()
        e.stopPropagation()
        if (!hasStarted) {
          handleStart()
        } else if (isComplete) {
          handleNextSlide()
        } else if (isPlaying) {
          setIsPlaying(false)
        } else {
          setIsPlaying(true)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [hasStarted, isComplete, isPlaying])

  return (
    <div className="w-full h-full bg-background flex flex-col p-8 lg:p-12 overflow-y-auto">
      {/* Header */}
      <div className="mb-6 flex justify-center">
        <FunTitle title="Context Explosion" subtitle="Problem 3" />
      </div>

      <div className="flex-1 flex gap-8">
        {/* Left - Activity Log */}
        <div className="flex-1 flex flex-col">
          {/* Status Bar */}
          <div className={`mb-4 p-5 border-2 ${currentState.status.color.replace('bg-', 'border-')} bg-surface transform -rotate-[0.5deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-2xl font-bold ${currentState.status.textColor}`}>
                {currentState.status.label}
              </span>
              <span className="text-xl text-white font-mono">
                Iteration: {iteration}/{MAX_ITERATIONS}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-surface/50 h-5 overflow-hidden border-2 border-white/20">
                <motion.div
                  className={`h-full ${currentState.status.color}`}
                  animate={{ width: `${currentState.usagePercent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-lg text-white font-mono w-32 text-right">
                {(currentState.totalTokens / 1000).toFixed(0)}k / 1M
              </span>
            </div>
          </div>

          {/* User Prompt */}
          <div className="transform rotate-[0.5deg] bg-cyan-500/10 border-2 border-cyan-500/50 p-4 mb-4 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)]">
            <div className="text-base text-cyan-400 mb-1 font-bold">User Prompt:</div>
            <div className="text-lg text-white font-mono">"{userInput}"</div>
          </div>

          {/* Activity Log */}
          <div className="h-[550px] bg-surface border-2 border-white/20 flex flex-col transform -rotate-[0.3deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center shrink-0">
              <span className="text-xl text-text-secondary font-bold">Agent Activity</span>
              {isPlaying && (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400 text-lg"
                >
                  Processing...
                </motion.span>
              )}
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {!hasStarted && (
                <div className="h-full flex items-center justify-center text-text-secondary text-2xl">
                  Press Space to start simulation
                </div>
              )}

              {currentLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`text-base p-4 border-l-4 ${
                    log.type === 'system' ? 'border-gray-500 bg-gray-500/10 text-gray-300' :
                    log.type === 'info' ? 'border-gray-500 bg-gray-500/10 text-gray-300' :
                    log.type === 'user' ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300' :
                    log.type === 'assistant' ? 'border-purple-500 bg-purple-500/10 text-purple-300' :
                    log.type === 'tool' ? 'border-green-500 bg-green-500/10 text-green-300 font-mono' :
                    log.type === 'mcp' ? 'border-pink-500 bg-pink-500/10 text-pink-300 font-mono' :
                    log.type === 'warning' ? 'border-yellow-500 bg-yellow-500/10 text-yellow-300 font-bold' :
                    'border-red-500 bg-red-500/10 text-red-300 font-bold'
                  }`}
                >
                  <div className="flex justify-between text-sm opacity-60 mb-1">
                    <span className="uppercase font-bold">{log.type}</span>
                    <span>iter {log.iter}</span>
                  </div>
                  <div className="text-lg">{log.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Visual Stack */}
        <div className="w-80 bg-surface border-2 border-white/20 p-6 flex flex-col transform rotate-[0.5deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
          <div className="text-3xl text-white font-bold text-center mb-4">Context Window</div>

          <div className="flex-1 relative border border-white/10 rounded-lg bg-black/20">
            {/* Limit line at top */}
            <div className="absolute top-0 left-0 right-0 border-t-2 border-dashed border-red-500 z-10">
              <span className="absolute top-1 right-1 text-sm text-red-400 font-bold">
                1M limit
              </span>
            </div>

            {/* Each segment positioned absolutely from bottom */}
            {/* System - always at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-slate-600 border-t border-white/20 flex items-center justify-center transition-all duration-300"
              style={{ height: `${(currentState.systemPrompt / CONTEXT_LIMIT) * 100}%` }}
            >
              <span className="text-sm text-white font-bold">System</span>
            </div>

            {/* Tool Defs - above system */}
            <div
              className="absolute left-0 right-0 bg-slate-500 border-t border-white/20 flex items-center justify-center transition-all duration-300"
              style={{
                bottom: `${(currentState.systemPrompt / CONTEXT_LIMIT) * 100}%`,
                height: `${(currentState.toolDefs / CONTEXT_LIMIT) * 100}%`
              }}
            >
              <span className="text-sm text-white font-bold">Tools Def</span>
            </div>

            {/* User - above tool defs */}
            {currentState.userTokens > 0 && (
              <div
                className="absolute left-0 right-0 bg-cyan-600 border-t border-white/20 flex items-center justify-center transition-all duration-300"
                style={{
                  bottom: `${((currentState.systemPrompt + currentState.toolDefs) / CONTEXT_LIMIT) * 100}%`,
                  height: `${(currentState.userTokens / CONTEXT_LIMIT) * 100}%`
                }}
              >
                {(currentState.userTokens / CONTEXT_LIMIT) > 0.02 && (
                  <span className="text-sm text-white font-bold">User</span>
                )}
              </div>
            )}

            {/* Assistant/History - above user */}
            {currentState.assistantTokens > 0 && (
              <div
                className="absolute left-0 right-0 bg-purple-600 border-t border-white/20 flex items-center justify-center transition-all duration-300"
                style={{
                  bottom: `${((currentState.systemPrompt + currentState.toolDefs + currentState.userTokens) / CONTEXT_LIMIT) * 100}%`,
                  height: `${(currentState.assistantTokens / CONTEXT_LIMIT) * 100}%`
                }}
              >
                {(currentState.assistantTokens / CONTEXT_LIMIT) > 0.02 && (
                  <span className="text-sm text-white font-bold">History</span>
                )}
              </div>
            )}

            {/* Tool Outputs */}
            {currentState.toolOutputs > 0 && (
              <div
                className="absolute left-0 right-0 bg-green-600 border-t border-white/20 flex items-center justify-center transition-all duration-300"
                style={{
                  bottom: `${((currentState.systemPrompt + currentState.toolDefs + currentState.userTokens + currentState.assistantTokens) / CONTEXT_LIMIT) * 100}%`,
                  height: `${(currentState.toolOutputs / CONTEXT_LIMIT) * 100}%`
                }}
              >
                {(currentState.toolOutputs / CONTEXT_LIMIT) > 0.05 && (
                  <span className="text-sm text-white font-bold">Tools</span>
                )}
              </div>
            )}

            {/* Web */}
            {currentState.webTokens > 0 && (
              <div
                className="absolute left-0 right-0 bg-amber-600 border-t border-white/20 flex items-center justify-center transition-all duration-300"
                style={{
                  bottom: `${((currentState.systemPrompt + currentState.toolDefs + currentState.userTokens + currentState.assistantTokens + currentState.toolOutputs) / CONTEXT_LIMIT) * 100}%`,
                  height: `${(currentState.webTokens / CONTEXT_LIMIT) * 100}%`
                }}
              >
                {(currentState.webTokens / CONTEXT_LIMIT) > 0.05 && (
                  <span className="text-sm text-white font-bold">Web</span>
                )}
              </div>
            )}

            {/* MCP */}
            {currentState.mcpTokens > 0 && (
              <div
                className="absolute left-0 right-0 bg-pink-600 border-t border-white/20 flex items-center justify-center transition-all duration-300"
                style={{
                  bottom: `${((currentState.systemPrompt + currentState.toolDefs + currentState.userTokens + currentState.assistantTokens + currentState.toolOutputs + currentState.webTokens) / CONTEXT_LIMIT) * 100}%`,
                  height: `${(currentState.mcpTokens / CONTEXT_LIMIT) * 100}%`
                }}
              >
                {(currentState.mcpTokens / CONTEXT_LIMIT) > 0.05 && (
                  <span className="text-sm text-white font-bold">MCP</span>
                )}
              </div>
            )}

            {/* Overflow indicator */}
            {currentState.isOverflow && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg animate-pulse">
                  OVERFLOW!
                </div>
              </motion.div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-600" />
              <span className="text-text-secondary">System</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-600" />
              <span className="text-text-secondary">User</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-600" />
              <span className="text-text-secondary">History</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600" />
              <span className="text-text-secondary">Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-600" />
              <span className="text-text-secondary">Web</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-600" />
              <span className="text-text-secondary">MCP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom instruction */}
      <motion.div
        className="text-text-secondary text-xl mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {!hasStarted ? (
          <>Press <kbd className="px-4 py-2 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to start simulation</>
        ) : isComplete ? (
          <>Press <kbd className="px-4 py-2 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue</>
        ) : (
          <>Press <kbd className="px-4 py-2 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to {isPlaying ? 'pause' : 'resume'}</>
        )}
      </motion.div>
    </div>
  )
}
