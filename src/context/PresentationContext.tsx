import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'

const STORAGE_KEY = 'wawtech-current-slide'

interface PresentationContextType {
  currentSlide: number
  totalSlides: number
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (index: number) => void
  direction: 1 | -1
}

const PresentationContext = createContext<PresentationContextType | null>(null)

export function usePresentationContext() {
  const context = useContext(PresentationContext)
  if (!context) {
    throw new Error('usePresentationContext must be used within PresentationProvider')
  }
  return context
}

interface PresentationProviderProps {
  children: ReactNode
  totalSlides: number
}

function getInitialSlide(totalSlides: number): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = parseInt(saved, 10)
      if (!isNaN(parsed) && parsed >= 0 && parsed < totalSlides) {
        return parsed
      }
    }
  } catch {
    // localStorage not available
  }
  return 0
}

export function PresentationProvider({ children, totalSlides }: PresentationProviderProps) {
  const [currentSlide, setCurrentSlide] = useState(() => getInitialSlide(totalSlides))
  const [direction, setDirection] = useState<1 | -1>(1)

  // Save current slide to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, currentSlide.toString())
    } catch {
      // localStorage not available
    }
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)))
  }, [currentSlide, totalSlides])

  return (
    <PresentationContext.Provider
      value={{
        currentSlide,
        totalSlides,
        nextSlide,
        prevSlide,
        goToSlide,
        direction,
      }}
    >
      {children}
    </PresentationContext.Provider>
  )
}
