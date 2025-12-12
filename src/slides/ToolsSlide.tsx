import { motion, AnimatePresence } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'
import { useState } from 'react'

interface Tool {
  name: string
  desc: string
  icon: string
  params?: { name: string; example: string }[]
}

function ToolCard({ tool, color }: { tool: Tool; color: string }) {
  const [isHovered, setIsHovered] = useState(false)

  const defaultParams = tool.params || [
    { name: 'input', example: '...' }
  ]

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`flex items-center gap-3 bg-surface/50 rounded-xl px-4 py-3 cursor-pointer border border-transparent hover:border-${color}-500/50 transition-colors`}
      >
        <span className="text-2xl">{tool.icon}</span>
        <div className="min-w-0">
          <div className="text-white font-semibold text-lg">{tool.name.replace('Sandbox', '').replace('Tool', '')}</div>
          <div className="text-text-secondary text-sm">{tool.desc}</div>
        </div>
      </motion.div>

      {/* Tooltip showing LLM syntax */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] bg-[#1e1e2e] border-2 border-purple-500 rounded-2xl p-8 shadow-2xl shadow-purple-500/30"
          >
            <div className="text-lg text-text-secondary mb-4">LLM Response Format:</div>
            <pre className="text-2xl font-mono overflow-x-auto leading-relaxed">
              <code>
                <span className="text-gray-500">&lt;</span>
                <span className="text-pink-400">function_calls</span>
                <span className="text-gray-500">&gt;</span>
                {'\n'}
                <span className="text-gray-500">  &lt;</span>
                <span className="text-cyan-400">invoke</span>
                <span className="text-purple-400"> name</span>
                <span className="text-gray-500">=</span>
                <span className="text-green-400">"{tool.name.toLowerCase()}"</span>
                <span className="text-gray-500">&gt;</span>
                {'\n'}
                {defaultParams.map((param, i) => (
                  <span key={i}>
                    <span className="text-gray-500">    &lt;</span>
                    <span className="text-yellow-400">parameter</span>
                    <span className="text-purple-400"> name</span>
                    <span className="text-gray-500">=</span>
                    <span className="text-green-400">"{param.name}"</span>
                    <span className="text-gray-500">&gt;</span>
                    {'\n'}
                    <span className="text-white">      {param.example}</span>
                    {'\n'}
                    <span className="text-gray-500">    &lt;/</span>
                    <span className="text-yellow-400">parameter</span>
                    <span className="text-gray-500">&gt;</span>
                    {'\n'}
                  </span>
                ))}
                <span className="text-gray-500">  &lt;/</span>
                <span className="text-cyan-400">invoke</span>
                <span className="text-gray-500">&gt;</span>
                {'\n'}
                <span className="text-gray-500">&lt;/</span>
                <span className="text-pink-400">function_calls</span>
                <span className="text-gray-500">&gt;</span>
              </code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ToolsSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })

  const sandboxTools: Tool[] = [
    { name: 'SandboxFilesTool', desc: 'Read, write, edit files', icon: '📁', params: [{ name: 'file_path', example: 'src/main.py' }, { name: 'content', example: 'print("hello")' }] },
    { name: 'SandboxShellTool', desc: 'Execute shell commands', icon: '💻', params: [{ name: 'command', example: 'npm install' }] },
    { name: 'BrowserTool', desc: 'Web automation', icon: '🌐', params: [{ name: 'url', example: 'https://example.com' }, { name: 'action', example: 'click_button' }] },
    { name: 'ComputerUseTool', desc: 'GUI control', icon: '🖱️', params: [{ name: 'action', example: 'click' }, { name: 'x', example: '100' }, { name: 'y', example: '200' }] },
    { name: 'SandboxDeployTool', desc: 'Deploy to Cloudflare', icon: '🚀', params: [{ name: 'project', example: 'my-app' }] },
    { name: 'DataAnalysisTool', desc: 'Analyze data files', icon: '📊', params: [{ name: 'file', example: 'data.csv' }, { name: 'query', example: 'sum of sales' }] },
  ]

  const platformTools: Tool[] = [
    { name: 'WebSearchTool', desc: 'Search with citations', icon: '🔍', params: [{ name: 'query', example: 'latest AI news' }] },
    { name: 'ScrapeWebPageTool', desc: 'Extract web content', icon: '📄', params: [{ name: 'url', example: 'https://docs.example.com' }] },
    { name: 'KGTool', desc: 'Knowledge graphs', icon: '🧠', params: [{ name: 'query', example: 'brand guidelines' }] },
    { name: 'QueryDocumentTool', desc: 'Query uploaded docs', icon: '📚', params: [{ name: 'question', example: 'What is the policy?' }] },
    { name: 'MessageTool', desc: 'Ask user questions', icon: '💬', params: [{ name: 'message', example: 'Which option?' }] },
    { name: 'TaskListTool', desc: 'Track tasks', icon: '✅', params: [{ name: 'action', example: 'add' }, { name: 'task', example: 'Review PR' }] },
  ]

  const mcpConnectors = [
    'Slack', 'Gmail', 'Google Calendar', 'Google Drive',
    'Salesforce', 'HubSpot', 'Jira', 'GitHub',
  ]

  const capabilities = [
    { name: 'PDF', desc: 'Extract, generate, OCR', color: 'text-red-400' },
    { name: 'DOCX', desc: 'Word documents', color: 'text-blue-400' },
    { name: 'XLSX', desc: 'Excel & charts', color: 'text-green-400' },
    { name: 'PPTX', desc: 'Presentations', color: 'text-orange-400' },
    { name: 'D3', desc: 'Visualizations', color: 'text-purple-400' },
    { name: 'EDGAR', desc: 'SEC filings', color: 'text-yellow-400' },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-bold text-white text-center mb-8"
        >
          Agent <span className="text-cyan-400">Operations</span>
        </motion.h1>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Left Column - Sandbox & Platform Tools */}
          <div className="space-y-6">
            {/* Sandbox Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔧</span>
                <span className="text-2xl font-bold text-green-400">Sandbox Tools</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {sandboxTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible(0) ? 1 : 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ToolCard tool={tool} color="green" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Platform Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible(1) ? 1 : 0.2, x: isVisible(1) ? 0 : -30 }}
              className="bg-blue-500/10 border border-blue-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚡</span>
                <span className="text-2xl font-bold text-blue-400">Platform Tools</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {platformTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible(1) ? 1 : 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ToolCard tool={tool} color="blue" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - MCP & Capabilities */}
          <div className="space-y-6">
            {/* MCP Connectors */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30 }}
              className="bg-purple-500/10 border border-purple-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔌</span>
                <span className="text-2xl font-bold text-purple-400">MCP Connectors</span>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-lg text-purple-400 ml-auto"
                >
                  dynamic discovery
                </motion.span>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                {mcpConnectors.map((connector, i) => (
                  <motion.div
                    key={connector}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible(2) ? 1 : 0, scale: isVisible(2) ? 1 : 0.8 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-surface/50 border border-purple-500/30 rounded-xl px-4 py-2 text-lg text-purple-300"
                  >
                    {connector}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(2) ? 1 : 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  +300 more
                </span>
              </motion.div>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible(3) ? 1 : 0.2, x: isVisible(3) ? 0 : 30 }}
              className="bg-yellow-500/10 border border-yellow-500/50 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <span className="text-2xl font-bold text-yellow-400">Capabilities</span>
                <span className="text-lg text-yellow-400/60 ml-auto">domain expertise</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible(3) ? 1 : 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-surface/50 rounded-xl px-4 py-3 text-center"
                  >
                    <div className={`text-2xl font-bold ${cap.color}`}>{cap.name}</div>
                    <div className="text-sm text-text-secondary">{cap.desc}</div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(3) ? 1 : 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-center text-lg text-yellow-400/80"
              >
                + Capability Creator for custom workflows
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-xl mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Press <kbd className="px-4 py-2 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}
