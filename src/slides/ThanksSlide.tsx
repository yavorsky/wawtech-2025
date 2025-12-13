import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'

export function ThanksSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Main thanks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4">
            Thanks!
          </h1>
          <p className="text-2xl text-slate-400">
            Questions?
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-6 max-w-4xl w-full"
        >
          {/* X / Twitter */}
          <a
            href="https://x.com/yavorsky_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-cyan-500 hover:bg-slate-800 transition-all flex items-center gap-4"
          >
            <span className="text-3xl">𝕏</span>
            <div>
              <div className="text-lg font-bold text-white">@yavorsky_</div>
              <div className="text-sm text-slate-400">x.com/yavorsky_</div>
            </div>
          </a>

          {/* Website */}
          <a
            href="https://yavorsky.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-purple-500 hover:bg-slate-800 transition-all flex items-center gap-4"
          >
            <span className="text-3xl">🌐</span>
            <div>
              <div className="text-lg font-bold text-white">Website</div>
              <div className="text-sm text-slate-400">yavorsky.org</div>
            </div>
          </a>

          {/* Unbuilt GitHub */}
          <a
            href="https://github.com/yavorsky/unbuilt.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-green-500 hover:bg-slate-800 transition-all flex items-center gap-4"
          >
            <span className="text-3xl">🔧</span>
            <div>
              <div className="text-lg font-bold text-white">Unbuilt</div>
              <div className="text-sm text-slate-400">github.com/yavorsky/unbuilt.app</div>
            </div>
          </a>

          {/* Writer App */}
          <a
            href="https://app.writer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-yellow-500 hover:bg-slate-800 transition-all flex items-center gap-4"
          >
            <span className="text-3xl">🚀</span>
            <div>
              <div className="text-lg font-bold text-white">Try Code Agent & Routines</div>
              <div className="text-sm text-slate-400">app.writer.com</div>
            </div>
          </a>
        </motion.div>

        {/* Slides repo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="https://github.com/yavorsky/wawtech-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/20 border border-cyan-500 rounded-xl hover:bg-cyan-500/30 transition-all"
          >
            <span className="text-2xl">📑</span>
            <div>
              <div className="text-lg font-bold text-cyan-400">Slides Repo</div>
              <div className="text-sm text-slate-400">github.com/yavorsky/wawtech-2025</div>
            </div>
          </a>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
