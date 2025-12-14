import { motion, AnimatePresence } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'
import { useState } from 'react'

function ToolsModal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] bg-[#1e1e2e] border-2 border-green-500 p-8 shadow-[8px_8px_0px_0px_rgba(34,197,94,0.4)]"
    >
      <div className="text-lg text-text-secondary mb-4">LLM Response Format (Tool Call):</div>
      <pre className="text-xl font-mono overflow-x-auto leading-relaxed">
        <code>
          <span className="text-gray-500">&lt;</span>
          <span className="text-pink-400">function_calls</span>
          <span className="text-gray-500">&gt;</span>
          {'\n'}
          <span className="text-gray-500">  &lt;</span>
          <span className="text-cyan-400">invoke</span>
          <span className="text-purple-400"> name</span>
          <span className="text-gray-500">=</span>
          <span className="text-green-400">"file_edit"</span>
          <span className="text-gray-500">&gt;</span>
          {'\n'}
          <span className="text-gray-500">    &lt;</span>
          <span className="text-yellow-400">parameter</span>
          <span className="text-purple-400"> name</span>
          <span className="text-gray-500">=</span>
          <span className="text-green-400">"file_path"</span>
          <span className="text-gray-500">&gt;</span>
          {'\n'}
          <span className="text-white">      src/components/App.tsx</span>
          {'\n'}
          <span className="text-gray-500">    &lt;/</span>
          <span className="text-yellow-400">parameter</span>
          <span className="text-gray-500">&gt;</span>
          {'\n'}
          <span className="text-gray-500">    &lt;</span>
          <span className="text-yellow-400">parameter</span>
          <span className="text-purple-400"> name</span>
          <span className="text-gray-500">=</span>
          <span className="text-green-400">"content"</span>
          <span className="text-gray-500">&gt;</span>
          {'\n'}
          <span className="text-white">      export function App() {'{'} ... {'}'}</span>
          {'\n'}
          <span className="text-gray-500">    &lt;/</span>
          <span className="text-yellow-400">parameter</span>
          <span className="text-gray-500">&gt;</span>
          {'\n'}
          <span className="text-gray-500">  &lt;/</span>
          <span className="text-cyan-400">invoke</span>
          <span className="text-gray-500">&gt;</span>
          {'\n'}
          <span className="text-gray-500">&lt;/</span>
          <span className="text-pink-400">function_calls</span>
          <span className="text-gray-500">&gt;</span>
        </code>
      </pre>
      <div className="mt-4 text-green-400 text-lg">
        Tools execute in sandbox environment and return results to the loop
      </div>
    </motion.div>
  )
}

function MCPModal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] bg-[#1e1e2e] border-2 border-blue-500 p-8 shadow-[8px_8px_0px_0px_rgba(59,130,246,0.4)]"
    >
      <div className="text-lg text-text-secondary mb-4">MCP Server Request:</div>
      <pre className="text-xl font-mono overflow-x-auto leading-relaxed">
        <code>
          <span className="text-gray-500">{'{'}</span>
          {'\n'}
          <span className="text-purple-400">  "method"</span>
          <span className="text-gray-500">:</span>
          <span className="text-green-400"> "tools/call"</span>
          <span className="text-gray-500">,</span>
          {'\n'}
          <span className="text-purple-400">  "params"</span>
          <span className="text-gray-500">: {'{'}</span>
          {'\n'}
          <span className="text-purple-400">    "name"</span>
          <span className="text-gray-500">:</span>
          <span className="text-green-400"> "slack_send_message"</span>
          <span className="text-gray-500">,</span>
          {'\n'}
          <span className="text-purple-400">    "arguments"</span>
          <span className="text-gray-500">: {'{'}</span>
          {'\n'}
          <span className="text-purple-400">      "channel"</span>
          <span className="text-gray-500">:</span>
          <span className="text-green-400"> "#engineering"</span>
          <span className="text-gray-500">,</span>
          {'\n'}
          <span className="text-purple-400">      "message"</span>
          <span className="text-gray-500">:</span>
          <span className="text-green-400"> "Deploy completed!"</span>
          {'\n'}
          <span className="text-gray-500">    {'}'}</span>
          {'\n'}
          <span className="text-gray-500">  {'}'}</span>
          {'\n'}
          <span className="text-gray-500">{'}'}</span>
        </code>
      </pre>
      <div className="mt-4 text-blue-400 text-lg">
        MCP connects to external services via standardized protocol
      </div>
    </motion.div>
  )
}

function CapabilitiesModal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] bg-[#1e1e2e] border-2 border-yellow-500 p-8 shadow-[8px_8px_0px_0px_rgba(234,179,8,0.4)]"
    >
      <div className="text-lg text-text-secondary mb-4">Capability Structure:</div>

      <div className="flex gap-6 mb-6">
        {/* Capability folder structure */}
        <div className="flex-1 bg-slate-800/50 p-4">
          <div className="text-yellow-400 font-mono text-lg mb-2">capabilities/pdf-analysis/</div>
          <div className="space-y-1 text-base font-mono">
            <div className="text-slate-400 pl-4">├── CAPABILITY.md</div>
            <div className="text-slate-400 pl-4">├── extract-text.py</div>
            <div className="text-slate-400 pl-4">└── ocr-scan.py</div>
          </div>
        </div>

        <div className="flex-1 bg-slate-800/50 p-4">
          <div className="text-yellow-400 font-mono text-lg mb-2">capabilities/presentation/</div>
          <div className="space-y-1 text-base font-mono">
            <div className="text-slate-400 pl-4">├── CAPABILITY.md</div>
            <div className="text-slate-400 pl-4">├── create-pptx.py</div>
            <div className="text-slate-400 pl-4">└── templates/</div>
          </div>
        </div>
      </div>

      {/* Equipped capabilities */}
      <div className="bg-slate-800/50 p-4 mb-4">
        <div className="text-sm text-slate-400 mb-2">Equipped Capabilities (loaded to context):</div>
        <div className="flex flex-wrap gap-2">
          {['pdf-analysis', 'presentation', 'data-viz', 'excel', 'docx'].map((cap) => (
            <span key={cap} className="px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-400 text-sm">
              {cap}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 text-yellow-400 text-lg">
        Folders with prompts + scripts → loaded on demand → expand agent abilities
      </div>
    </motion.div>
  )
}

export function ArchitectureSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 6,
    onComplete: nextSlide,
  })
  const [showToolsModal, setShowToolsModal] = useState(false)
  const [showMCPModal, setShowMCPModal] = useState(false)
  const [showCapabilitiesModal, setShowCapabilitiesModal] = useState(false)

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <FunTitle title="The Architecture" subtitle="How the Agent Loop Works" />
        </div>

        {/* Main Architecture Diagram */}
        <div className="flex-1 w-full max-w-7xl flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">

            {/* User Request - Top */}
            <motion.div
              initial={{ opacity: 0, y: -30, rotate: 0 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, y: isVisible(0) ? 0 : -30, rotate: isVisible(0) ? -1 : 0 }}
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <div className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.5)]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👤</span>
                  <span className="text-2xl font-bold text-white">User Request</span>
                </div>
              </div>
            </motion.div>

            {/* Arrow from User to Agent Loop */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: isVisible(0) ? 1 : 0, scaleY: isVisible(0) ? 1 : 0 }}
              className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center"
              style={{ transformOrigin: 'top' }}
            >
              <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-purple-500" />
              <div className="text-purple-400 text-2xl">▼</div>
            </motion.div>

            {/* Central Agent Loop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, scale: isVisible(1) ? 1 : 0.9, rotate: isVisible(1) ? 0.5 : 0 }}
              className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px]"
            >
              {/* Rotating loop indicator */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-purple-500/40"
              />

              <div className="relative bg-surface/90 border-2 border-purple-500 p-6 shadow-[6px_6px_0px_0px_rgba(168,85,247,0.4)]">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-white">🔄 AGENT LOOP</span>
                </div>

                {/* LLM Brain */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible(2) ? 1 : 0.3 }}
                  className="bg-purple-500/20 border-2 border-purple-500/50 p-4 mb-4"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl">🧠</span>
                    <div>
                      <div className="text-xl font-semibold text-white">LLM Processing</div>
                      <div className="text-sm text-purple-300">System Prompt + History + Request</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decision diamond */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible(2) ? 1 : 0.3 }}
                  className="flex justify-center mb-4"
                >
                  <div className="w-24 h-24 bg-pink-500/20 border-2 border-pink-500 rotate-45 flex items-center justify-center">
                    <span className="-rotate-45 text-lg font-bold text-pink-400">Decision</span>
                  </div>
                </motion.div>

                {/* Output options */}
                <div className="flex justify-around text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible(3) ? 1 : 0.3 }}
                    className="text-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 mx-auto mb-1" />
                    <span className="text-green-400">Tools</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible(3) ? 1 : 0.3 }}
                    className="text-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-500 mx-auto mb-1" />
                    <span className="text-blue-400">MCP</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible(4) ? 1 : 0.3 }}
                    className="text-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mx-auto mb-1" />
                    <span className="text-yellow-400">Context</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible(5) ? 1 : 0.3 }}
                    className="text-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-500 mx-auto mb-1" />
                    <span className="text-cyan-400">Response</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* LEFT: Sandbox Tools */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: 0 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.1, x: isVisible(3) ? 0 : -50, rotate: isVisible(3) ? -1 : 0 }}
              className="absolute left-4 top-20"
              onMouseEnter={() => setShowToolsModal(true)}
              onMouseLeave={() => setShowToolsModal(false)}
            >
              <div className="bg-green-500/10 border-2 border-green-500/50 p-4 w-56 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.4)] cursor-pointer hover:border-green-400 transition-colors">
                <div className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                  <span>🔧</span> Sandbox Tools
                </div>
                <div className="space-y-0">
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>📝</span>
                    <span className="text-text-secondary">file_edit</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>📁</span>
                    <span className="text-text-secondary">file_create</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>💻</span>
                    <span className="text-text-secondary">code_execute</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>🔍</span>
                    <span className="text-text-secondary">web_search</span>
                  </div>
                </div>
                {/* Back to loop indicator */}
                <motion.div
                  className="flex items-center justify-center mt-3 gap-2 text-green-400"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xl">↻</span>
                  <span className="text-sm font-semibold">back to loop</span>
                  <span className="text-xl">→</span>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT: MCP Integrations */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 0 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.1, x: isVisible(3) ? 0 : 50, rotate: isVisible(3) ? 1 : 0 }}
              className="absolute right-4 top-20"
              onMouseEnter={() => setShowMCPModal(true)}
              onMouseLeave={() => setShowMCPModal(false)}
            >
              <div className="bg-blue-500/10 border-2 border-blue-500/50 p-4 w-56 shadow-[4px_4px_0px_0px_rgba(59,130,246,0.4)] cursor-pointer hover:border-blue-400 transition-colors">
                <div className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <span>🔌</span> MCP Server
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>📅</span>
                    <span className="text-text-secondary">Google Calendar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>💬</span>
                    <span className="text-text-secondary">Slack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>📧</span>
                    <span className="text-text-secondary">Gmail</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>📊</span>
                    <span className="text-text-secondary">Salesforce</span>
                  </div>
                </div>
                {/* Back to loop indicator */}
                <motion.div
                  className="flex items-center justify-center mt-3 gap-2 text-blue-400"
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xl">←</span>
                  <span className="text-sm font-semibold">back to loop</span>
                  <span className="text-xl">↻</span>
                </motion.div>
              </div>
            </motion.div>

            {/* BOTTOM LEFT: Context Loading */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={{ opacity: isVisible(4) ? 1 : 0.1, y: isVisible(4) ? 0 : 50, rotate: isVisible(4) ? -1 : 0 }}
              className="absolute left-16 bottom-4"
              onMouseEnter={() => setShowCapabilitiesModal(true)}
              onMouseLeave={() => setShowCapabilitiesModal(false)}
            >
              <div className="bg-yellow-500/10 border-2 border-yellow-500/50 p-4 w-64 shadow-[4px_4px_0px_0px_rgba(234,179,8,0.4)] cursor-pointer hover:border-yellow-400 transition-colors">
                <div className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <span>📚</span> Load Capabilities
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>🎨</span>
                    <span className="text-text-secondary">Presentation Mode</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>📄</span>
                    <span className="text-text-secondary">PDF Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-surface/50 px-3 py-2">
                    <span>📈</span>
                    <span className="text-text-secondary">Data Visualization</span>
                  </div>
                </div>
                {/* Back to loop indicator */}
                <motion.div
                  className="flex items-center justify-center mt-3 gap-2 text-yellow-400"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xl">↻</span>
                  <span className="text-sm font-semibold">expand context</span>
                  <span className="text-xl">↑</span>
                </motion.div>
              </div>
            </motion.div>

            {/* BOTTOM RIGHT: Response to User */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={{ opacity: isVisible(5) ? 1 : 0.1, y: isVisible(5) ? 0 : 50, rotate: isVisible(5) ? 1 : 0 }}
              className="absolute right-16 bottom-4"
            >
              <div className="bg-cyan-500/10 border-2 border-cyan-500/50 p-4 w-64 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)]">
                <div className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <span>💬</span> Final Response
                </div>
                <div className="space-y-2 text-sm text-text-secondary">
                  <div className="bg-surface/50 px-3 py-2">
                    ✅ Task completed
                  </div>
                  <div className="bg-surface/50 px-3 py-2">
                    📋 Summary provided
                  </div>
                  <div className="bg-surface/50 px-3 py-2">
                    ❓ Clarification needed
                  </div>
                </div>
                {/* Response to User indicator */}
                <motion.div
                  className="flex items-center justify-center mt-3 gap-2 text-cyan-400 bg-cyan-500/20 px-3 py-2"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xl">👤</span>
                  <span className="text-sm font-semibold">deliver to user</span>
                  <motion.span
                    className="text-xl"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: -1 }}>
              {/* Left arrow to tools */}
              <motion.path
                d="M 38 35 L 22 35"
                stroke="#22c55e"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="1,1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isVisible(3) ? 1 : 0 }}
              />
              {/* Right arrow to MCP */}
              <motion.path
                d="M 62 35 L 78 35"
                stroke="#3b82f6"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="1,1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isVisible(3) ? 1 : 0 }}
              />
              {/* Bottom left to context */}
              <motion.path
                d="M 42 58 Q 35 68 28 78"
                stroke="#eab308"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="1,1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isVisible(4) ? 1 : 0 }}
              />
              {/* Bottom right to response */}
              <motion.path
                d="M 58 58 Q 65 68 72 78"
                stroke="#06b6d4"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="1,1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isVisible(5) ? 1 : 0 }}
              />
            </svg>
          </div>
        </div>

        {/* Modals */}
        <AnimatePresence>
          {showToolsModal && <ToolsModal />}
        </AnimatePresence>
        <AnimatePresence>
          {showMCPModal && <MCPModal />}
        </AnimatePresence>
        <AnimatePresence>
          {showCapabilitiesModal && <CapabilitiesModal />}
        </AnimatePresence>

      </div>
    </SlideLayout>
  )
}
