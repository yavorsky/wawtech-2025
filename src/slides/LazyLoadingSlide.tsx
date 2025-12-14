import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function LazyLoadingSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible } = useSteppedReveal({
    totalSteps: 2,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="mb-8">
          <FunTitle title="Lazy Loading" subtitle="First Attempt" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-3xl text-slate-300">Load context </span>
          <span className="text-3xl text-cyan-400 font-bold">only when needed</span>
        </motion.div>

        {/* Code example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(0) ? 1 : 0.3, y: isVisible(0) ? 0 : 20 }}
          className="bg-slate-800/50 border-2 border-slate-600 p-6 shadow-[6px_6px_0px_0px_rgba(100,116,139,0.3)] transform -rotate-1"
        >
          <div className="font-mono text-xl leading-relaxed">
            <span className="text-pink-400">const</span>{' '}
            <span className="text-cyan-400">Dashboard</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-yellow-400">lazy</span>
            <span className="text-white">(() =&gt; </span>
            <span className="text-yellow-400">import</span>
            <span className="text-white">(</span>
            <span className="text-green-400">'./Dashboard'</span>
            <span className="text-white">))</span>
          </div>
        </motion.div>

        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible(1) ? 1 : 0, y: isVisible(1) ? 0 : 20 }}
          className="mt-10 bg-red-500/10 border-2 border-red-500/40 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.3)] transform rotate-1"
        >
          <span className="text-xl text-red-400 font-bold">Problem: </span>
          <span className="text-xl text-white">Once loaded, context stays forever. Can't unload.</span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
