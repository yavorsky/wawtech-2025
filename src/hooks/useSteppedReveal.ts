import { useState, useEffect, useCallback } from 'react'

interface UseSteppedRevealOptions {
  totalSteps: number
  onComplete?: () => void
}

export function useSteppedReveal({ totalSteps, onComplete }: UseSteppedRevealOptions) {
  const [currentStep, setCurrentStep] = useState(0)
  const isComplete = currentStep >= totalSteps

  const advance = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentStep, totalSteps, onComplete])

  const reset = useCallback(() => {
    setCurrentStep(0)
  }, [])

  const isVisible = useCallback((index: number) => {
    return index < currentStep
  }, [currentStep])

  const isActive = useCallback((index: number) => {
    return index === currentStep - 1
  }, [currentStep])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
        // Only handle if we haven't completed all steps
        if (!isComplete) {
          e.preventDefault()
          e.stopPropagation()
          advance()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [advance, isComplete])

  return {
    currentStep,
    isComplete,
    advance,
    reset,
    isVisible,
    isActive,
  }
}
