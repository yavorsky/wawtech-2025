import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { SiX, SiGithub } from '@icons-pack/react-simple-icons'

export function ThanksSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Main header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl lg:text-7xl font-bold text-white">
            Get in Touch
          </h1>
        </motion.div>

        {/* Two columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-16 max-w-5xl w-full items-center"
        >
          {/* Left - Links */}
          <div className="space-y-4">
            {/* X / Twitter */}
            <a
              href="https://x.com/yavorsky_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-cyan-500 hover:bg-slate-800 transition-all flex items-center gap-4 block"
            >
              <SiX size={28} className="text-white" />
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
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-purple-500 hover:bg-slate-800 transition-all flex items-center gap-4 block"
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
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-green-500 hover:bg-slate-800 transition-all flex items-center gap-4 block"
            >
              <SiGithub size={28} className="text-white" />
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
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-yellow-500 hover:bg-slate-800 transition-all flex items-center gap-4 block"
            >
              <span className="text-3xl">🚀</span>
              <div>
                <div className="text-lg font-bold text-white">Try Code Agent & Routines</div>
                <div className="text-sm text-slate-400">app.writer.com</div>
              </div>
            </a>

            {/* Slides repo */}
            <a
              href="https://github.com/yavorsky/wawtech-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-5 hover:border-cyan-500 hover:bg-slate-800 transition-all flex items-center gap-4 block"
            >
              <SiGithub size={28} className="text-white" />
              <div>
                <div className="text-lg font-bold text-white">Slides Repo</div>
                <div className="text-sm text-slate-400">github.com/yavorsky/wawtech-2025</div>
              </div>
            </a>
          </div>

          {/* Right - QR Code */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-3xl">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://yavorsky.org`}
                alt="QR Code to yavorsky.org"
                className="w-64 h-64"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-xl text-white font-bold">yavorsky.org</div>
              <div className="text-slate-400">Scan to visit</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
