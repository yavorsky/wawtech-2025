import { useEffect, type ReactElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PresentationProvider, usePresentationContext } from '@/context/PresentationContext'
import { SlideProgress } from './SlideProgress'

interface SlideProps {
  children: ReactElement | ReactElement[]
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.95,
  }),
}

const slideTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
}

function SlidesContainer({ children }: SlideProps) {
  const { currentSlide, nextSlide, prevSlide, direction } = usePresentationContext()
  const childArray = Array.isArray(children) ? children : [children]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div className="relative w-full h-full overflow-hidden bg-background">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0"
        >
          {childArray[currentSlide]}
        </motion.div>
      </AnimatePresence>
      <SlideProgress />
    </div>
  )
}

export function Presentation({ children }: SlideProps) {
  const childArray = Array.isArray(children) ? children : [children]
  const totalSlides = childArray.length

  return (
    <PresentationProvider totalSlides={totalSlides}>
      <SlidesContainer>{childArray}</SlidesContainer>
    </PresentationProvider>
  )
}
