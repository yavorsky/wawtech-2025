import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

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

export function PresentationProvider({ children, totalSlides }: PresentationProviderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

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
