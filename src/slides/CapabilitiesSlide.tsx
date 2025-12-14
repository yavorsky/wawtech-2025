import { motion, AnimatePresence } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'
import { useState } from 'react'

function SelectionModal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] bg-[#1e1e2e] border-2 border-green-500 p-6 shadow-[8px_8px_0px_0px_rgba(34,197,94,0.4)] pointer-events-none"
    >
      <div className="text-lg text-green-400 font-bold mb-3">selection.md (included in system prompt)</div>
      <pre className="bg-slate-900 p-4 text-sm font-mono overflow-x-auto leading-relaxed">
        <code className="text-slate-300">
{`# Available Capabilities

## typescript
Type checking and compilation for TypeScript projects.
Use when: User mentions TS errors, type issues, or tsconfig.

## docker
Build and manage Docker containers.
Use when: User needs containerization, Dockerfile, or deployment.

## react-test
Testing utilities for React components.
Use when: User wants to test React components or hooks.

## eslint
Code linting and style enforcement.
Use when: User mentions linting, code style, or eslint config.`}
        </code>
      </pre>
      <div className="mt-3 text-sm text-slate-400">
        ~100 tokens per capability → Agent decides which to load
      </div>
    </motion.div>
  )
}

function TypescriptCapModal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] bg-[#1e1e2e] border-2 border-cyan-500 p-6 shadow-[8px_8px_0px_0px_rgba(6,182,212,0.4)] pointer-events-none"
    >
      <div className="text-xl text-cyan-400 font-bold mb-3">capabilities/typescript/</div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-base text-slate-400 mb-2">CAPABILITY.md</div>
          <pre className="bg-slate-900 p-4 text-base font-mono overflow-x-auto leading-relaxed h-[240px]">
            <code className="text-slate-300">
{`# TypeScript Capability

Run type checking on the project.

## Usage
Execute type-check.ts to validate
TypeScript files in the project.

## When to use
- User reports type errors
- Before deployment
- After major refactoring`}
            </code>
          </pre>
        </div>

        <div>
          <div className="text-base text-slate-400 mb-2">type-check.ts</div>
          <pre className="bg-slate-900 p-4 text-base font-mono overflow-x-auto leading-relaxed h-[240px]">
            <code className="text-slate-300">
{`import { exec } from 'child_process';

const result = exec('npx tsc --noEmit');

result.stdout.on('data', (data) => {
  console.log(data);
});

result.stderr.on('data', (data) => {
  console.error('Error:', data);
});`}
            </code>
          </pre>
        </div>
      </div>

      <div className="mt-3 text-base text-cyan-400">
        Scripts execute in sandbox → only output returned to agent
      </div>
    </motion.div>
  )
}

function DockerCapModal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] bg-[#1e1e2e] border-2 border-cyan-500 p-6 shadow-[8px_8px_0px_0px_rgba(6,182,212,0.4)] pointer-events-none"
    >
      <div className="text-xl text-cyan-400 font-bold mb-3">capabilities/docker/</div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-base text-slate-400 mb-2">CAPABILITY.md</div>
          <pre className="bg-slate-900 p-4 text-base font-mono overflow-x-auto leading-relaxed h-[280px]">
            <code className="text-slate-300">
{`# Docker Capability

Build and run Docker containers.

## Usage
Execute build.sh to create a
Docker image from Dockerfile.

## When to use
- User needs containerization
- Deployment preparation
- Testing in isolated env`}
            </code>
          </pre>
        </div>

        <div>
          <div className="text-base text-slate-400 mb-2">build.sh</div>
          <pre className="bg-slate-900 p-4 text-base font-mono overflow-x-auto leading-relaxed h-[280px]">
            <code className="text-slate-300">
{`#!/bin/bash

IMAGE_NAME=\${1:-"app"}
TAG=\${2:-"latest"}

echo "Building $IMAGE_NAME:$TAG"

docker build -t $IMAGE_NAME:$TAG .

if [ $? -eq 0 ]; then
  echo "Build successful!"
  docker images | grep $IMAGE_NAME
else
  echo "Build failed!"
  exit 1
fi`}
            </code>
          </pre>
        </div>
      </div>

      <div className="mt-3 text-base text-cyan-400">
        Scripts execute in sandbox → only output returned to agent
      </div>
    </motion.div>
  )
}

export function CapabilitiesSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 4,
    onComplete: nextSlide,
  })
  const [showSelectionModal, setShowSelectionModal] = useState(false)
  const [showTypescriptModal, setShowTypescriptModal] = useState(false)
  const [showDockerModal, setShowDockerModal] = useState(false)

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-4 flex justify-center">
          <FunTitle title="Capabilities" subtitle="First Attempt" />
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/30 p-6 mb-5 transform -rotate-[0.3deg] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)]"
        >
          <div className="flex items-center justify-center gap-8">
            {/* Agent Configuration */}
            <div
              className="transform -rotate-1 bg-slate-700/50 border-2 border-slate-600 p-5 min-w-[340px] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] cursor-pointer hover:border-green-500/50 transition-colors"
              onMouseEnter={() => setShowSelectionModal(true)}
              onMouseLeave={() => setShowSelectionModal(false)}
            >
              <div className="text-xl text-slate-400 mb-3 font-bold">Agent Configuration</div>
              <div className="bg-slate-800 p-3 mb-4 text-xl text-slate-300 text-center">
                Core system prompt
              </div>
              <div className="text-lg text-slate-400 mb-3">Equipped Capabilities</div>
              <div className="flex flex-wrap gap-2">
                {['typescript', 'react-test', 'docker', 'eslint', '...'].map((cap) => (
                  <span key={cap} className="px-3 py-1.5 bg-green-500/20 border-2 border-green-500/40 text-lg text-green-400">
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-slate-400 text-lg">use sandbox</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-5xl text-cyan-400"
              >
                →
              </motion.div>
            </div>

            {/* Sandbox */}
            <div className="transform rotate-1 bg-cyan-500/10 border-2 border-cyan-500/40 p-5 min-w-[400px] shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)]">
              <div className="text-xl text-cyan-400 mb-3 font-bold">Sandbox</div>
              <div className="flex gap-3 mb-4">
                {['Bash', 'Python', 'Node.js'].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-slate-700 text-lg text-white">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="text-lg text-slate-400 mb-3">File System</div>
              <div className="grid grid-cols-2 gap-3 text-lg font-mono">
                <div
                  className="bg-cyan-500/10 p-3 cursor-pointer hover:bg-cyan-500/20 transition-colors"
                  onMouseEnter={() => setShowTypescriptModal(true)}
                  onMouseLeave={() => setShowTypescriptModal(false)}
                >
                  <div className="text-cyan-400">capabilities/typescript/</div>
                  <div className="text-slate-500 pl-3 text-base">- CAPABILITY.md</div>
                  <div className="text-slate-500 pl-3 text-base">- type-check.ts</div>
                </div>
                <div
                  className="bg-cyan-500/10 p-3 cursor-pointer hover:bg-cyan-500/20 transition-colors"
                  onMouseEnter={() => setShowDockerModal(true)}
                  onMouseLeave={() => setShowDockerModal(false)}
                >
                  <div className="text-cyan-400">capabilities/docker/</div>
                  <div className="text-slate-500 pl-3 text-base">- CAPABILITY.md</div>
                  <div className="text-slate-500 pl-3 text-base">- build.sh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Annotation */}
          <div className="flex justify-center mt-4">
            <div className="transform rotate-1 bg-green-500/20 border-2 border-green-500/40 px-5 py-3 text-lg text-green-400 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)]">
              Capability contents live in sandbox file system
            </div>
          </div>
        </motion.div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Left - The Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: 0 }}
            animate={{ opacity: isVisible(0) ? 1 : 0.2, x: isVisible(0) ? 0 : -30, rotate: isVisible(0) ? -1 : 0 }}
            className="bg-purple-500/10 border-2 border-purple-500/50 p-6 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.4)]"
          >
            <div className="text-2xl font-bold text-purple-400 mb-5">THE CONCEPT</div>

            <div className="space-y-5">
              <div className="flex gap-3">
                <span className="text-3xl">📁</span>
                <p className="text-xl text-white">
                  <span className="text-purple-400">Folders</span> with prompts + scripts
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-3xl">📋</span>
                <p className="text-xl text-white">
                  Initially: <span className="text-cyan-400">~100 tokens</span> metadata
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-3xl">⚡</span>
                <p className="text-xl text-white">
                  On demand: load to <span className="text-green-400">sandbox</span>
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-3xl">🔧</span>
                <p className="text-xl text-white">
                  Scripts → <span className="text-cyan-400">output only</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle - Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: isVisible(1) ? 1 : 0.2, y: isVisible(1) ? 0 : 30, rotate: isVisible(1) ? 1 : 0 }}
            className="bg-green-500/10 border-2 border-green-500/50 p-6 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.4)]"
          >
            <div className="text-2xl font-bold text-green-400 mb-5">BENEFITS</div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-3xl">✓</span>
                <span className="text-xl text-white">Reduced initial context</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-3xl">✓</span>
                <span className="text-xl text-white">Progressive disclosure</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-3xl">✓</span>
                <span className="text-xl text-white">Composable capabilities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-3xl">✓</span>
                <span className="text-xl text-white">No code in context</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Problems */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            animate={{ opacity: isVisible(2) ? 1 : 0.2, x: isVisible(2) ? 0 : 30, rotate: isVisible(2) ? -1 : 0 }}
            className="bg-red-500/10 border-2 border-red-500/50 p-6 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.4)]"
          >
            <div className="text-2xl font-bold text-red-400 mb-5">BUT...</div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-3xl">✗</span>
                <span className="text-xl text-white">Context still grows</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-3xl">✗</span>
                <span className="text-xl text-white">Can't unload context</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-3xl">✗</span>
                <span className="text-xl text-white">Loaded caps stay forever</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible(3) ? 1 : 0 }}
                className="flex items-start gap-3"
              >
                <span className="text-red-400 text-3xl">✗</span>
                <span className="text-xl text-red-400 font-bold">Same problem @ iter 100</span>
              </motion.div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible(3) ? 1 : 0 }}
              className="mt-5 bg-surface p-4"
            >
              <div className="flex items-center justify-between text-lg font-mono">
                <span className="text-text-secondary">1</span>
                <div className="flex-1 mx-3 h-4 bg-black/30 overflow-hidden">
                  <motion.div
                    initial={{ width: '10%' }}
                    animate={{ width: isVisible(3) ? '95%' : '10%' }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                  />
                </div>
                <span className="text-text-secondary">100</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Modals */}
        <AnimatePresence>
          {showSelectionModal && <SelectionModal />}
        </AnimatePresence>
        <AnimatePresence>
          {showTypescriptModal && <TypescriptCapModal />}
        </AnimatePresence>
        <AnimatePresence>
          {showDockerModal && <DockerCapModal />}
        </AnimatePresence>
      </div>
    </SlideLayout>
  )
}
