import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

const conversation = [
  {
    role: 'pilot',
    message: 'Engine 2 is failing!!! Please help!!',
  },
  {
    role: 'llm',
    message: "I appreciate you bringing this to my attention! Engine failures can indeed be concerning during flight operations. Let me provide you with some context about jet engines...",
  },
  {
    role: 'pilot',
    message: 'STOP! Just execute the emergency procedure NOW!',
  },
  {
    role: 'llm',
    message: `You're absolutely right! Let me help you with that.

Based on the Airbus A320 manual, here are the steps:
1. Verify engine failure
2. Secure the failed engine
3. Adjust thrust on remaining engine
4. Declare emergency
5. Plan for single-engine landing

Would you like me to elaborate on any of these steps?`,
  },
  {
    role: 'pilot',
    message: "Don't TELL me the steps, DO THEM!",
  },
  {
    role: 'llm',
    message: `{
  "thought": "The pilot wants me to execute the procedure",
  "tool_calls": [
    {
      "name": "adjust_thrust",
      "engine": "left_engine",
      "throttle_percent": 85`,
    isCode: true,
  },
  {
    role: 'llm',
    message: 'Compacting conversation...',
    isSystem: true,
  },
  {
    role: 'llm',
    message: 'Hello! How can I help you today? I see you are having some troubles.',
  },
  {
    role: 'pilot',
    message: 'Ok, nevermind... is the water cold in the Atlantic Ocean now?',
  },
]

function StreamingText({ text, isCode }: { text: string; isCode?: boolean }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setIsComplete(false)
    let index = 0
    const speed = isCode ? 15 : 20

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, isCode])

  return (
    <span className={isCode ? 'font-mono text-sm' : ''}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">▊</span>}
    </span>
  )
}

function ChatMessage({
  role,
  message,
  isCode,
  isSystem,
  isNew
}: {
  role: string
  message: string
  isCode?: boolean
  isSystem?: boolean
  isNew: boolean
}) {
  const isPilot = role === 'pilot'

  if (isSystem) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex justify-center my-4"
      >
        <div className="px-6 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full">
          <span className="text-yellow-400 text-lg">⚠️ {isNew ? <StreamingText text={message} /> : message}</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isPilot ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-6 py-4 ${
          isPilot
            ? 'bg-cyan-700 text-white'
            : isCode
            ? 'bg-surface border border-purple-500/50 text-green-400'
            : 'bg-surface border border-purple-500/30 text-white'
        }`}
      >
        <div className="text-xs text-white/60 mb-2 font-semibold uppercase tracking-wider">
          {isPilot ? '👨‍✈️ Pilot' : '🤖 Airbus LLM'}
        </div>
        <div className={`text-xl leading-relaxed whitespace-pre-wrap ${isCode ? 'font-mono text-base text-green-400' : ''}`}>
          {isNew ? <StreamingText text={message} isCode={isCode} /> : message}
        </div>
      </div>
    </motion.div>
  )
}

export function EngineFailureSlide() {
  const { nextSlide } = usePresentationContext()
  const { currentStep, isComplete } = useSteppedReveal({
    totalSteps: conversation.length + 1, // +1 for initial state with no messages
    onComplete: nextSlide,
  })

  const visibleMessages = conversation.slice(0, Math.max(0, currentStep - 1))
  const showChat = currentStep > 0
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visibleMessages.length])

  return (
    <div className="w-full h-full flex items-center justify-center bg-background overflow-hidden relative">
      {/* Shaking background image */}
      <motion.img
        src="/airbus-engine-failure.png"
        alt="Engine Failure"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, -5, 5, -8, 8, -5, 5, -3, 3, 0],
          y: [0, 3, -3, 5, -5, 3, -3, 2, -2, 0],
          rotate: [0, -0.5, 0.5, -1, 1, -0.5, 0.5, -0.3, 0.3, 0],
        }}
        transition={{
          opacity: { duration: 0.3 },
          x: { duration: 0.5, repeat: Infinity, repeatType: 'loop' },
          y: { duration: 0.4, repeat: Infinity, repeatType: 'loop' },
          rotate: { duration: 0.6, repeat: Infinity, repeatType: 'loop' },
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay when chat is visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showChat ? 0.85 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black"
      />

      {/* Chat container */}
      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 w-[90%] max-w-4xl h-[80vh] bg-background/95 backdrop-blur-md rounded-3xl border-2 border-purple-500/30 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="px-8 py-5 border-b border-purple-500/30 flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
            <h2 className="text-2xl font-bold text-white">Airbus LLM Chat</h2>
            <span className="text-text-secondary text-lg ml-auto">Emergency Mode Active</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {visibleMessages.map((msg, index) => (
              <ChatMessage
                key={index}
                role={msg.role}
                message={msg.message}
                isCode={msg.isCode}
                isSystem={msg.isSystem}
                isNew={index === visibleMessages.length - 1}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar (decorative) */}
          <div className="px-6 py-4 border-t border-purple-500/30">
            <div className="flex items-center gap-4 px-6 py-4 bg-surface rounded-2xl border border-white/10">
              <span className="text-text-secondary text-lg">Type your emergency...</span>
              <div className="ml-auto px-4 py-2 bg-cyan-500 rounded-xl text-white font-semibold">
                Send
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Step indicator */}
      {!isComplete && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white text-xl bg-black/50 px-6 py-3 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Press <kbd className="px-3 py-1 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
        </motion.div>
      )}
    </div>
  )
}
