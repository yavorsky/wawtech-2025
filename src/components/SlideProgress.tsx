import { motion } from 'framer-motion'
import { usePresentationContext } from '@/context/PresentationContext'
import { cn } from '@/lib/utils'

export function SlideProgress() {
  const { currentSlide, totalSlides, goToSlide } = usePresentationContext()

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm rounded-full border border-white/10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'relative w-2 h-2 rounded-full transition-all duration-300',
              'hover:scale-125 focus:outline-none focus:ring-2 focus:ring-cyan-500/50',
              index === currentSlide
                ? 'bg-cyan-500'
                : 'bg-white/30 hover:bg-white/50'
            )}
          >
            {index === currentSlide && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-cyan-500 rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
        <span className="ml-2 text-xs text-text-secondary font-mono">
          {currentSlide + 1}/{totalSlides}
        </span>
      </div>
    </div>
  )
}
