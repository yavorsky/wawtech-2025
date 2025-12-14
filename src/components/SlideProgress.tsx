import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentationContext } from '@/context/PresentationContext'

export function SlideProgress() {
  const { currentSlide, totalSlides, goToSlide } = usePresentationContext()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-2 left-2 z-50">
      <div className="flex items-center gap-3 px-4 py-2 bg-surface/80 backdrop-blur-sm rounded-full border border-white/10">
        {/* Previous button */}
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="text-white/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-1"
        >
          ←
        </button>

        {/* Slide selector */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <span className="text-sm text-white font-mono">
              {currentSlide + 1} / {totalSlides}
            </span>
            <span className="text-white/50 text-xs">{isOpen ? '▲' : '▼'}</span>
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-surface/95 backdrop-blur-sm border border-white/10 rounded-xl p-2 max-h-80 overflow-y-auto min-w-[200px]"
              >
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        goToSlide(index)
                        setIsOpen(false)
                      }}
                      className={`
                        w-10 h-10 rounded-lg text-sm font-mono transition-all
                        ${index === currentSlide
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                        }
                      `}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Next button */}
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === totalSlides - 1}
          className="text-white/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-1"
        >
          →
        </button>

        {/* Progress bar */}
        <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-500"
            initial={false}
            animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </div>
  )
}
