import { motion } from 'framer-motion'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

export function FlashbackMemeSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 3,
    onComplete: nextSlide,
  })

  return (
    <div className="w-full h-full flex items-center justify-center bg-background relative">
      {/* Background - Vietnam dog meme in B&W */}
      <motion.img
        src={`${import.meta.env.BASE_URL}image-meme-1.jpg`}
        alt="Flashback"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[70%] max-h-[70%] object-contain rounded-2xl grayscale"
      />

      {/* Overlay - Personal image */}
      <motion.img
        src={`${import.meta.env.BASE_URL}image-meme-2.jpg`}
        alt="Me remembering"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible(0) ? 0.7 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute max-w-[70%] max-h-[70%] object-contain rounded-2xl"
      />

      {/* Babel image - top of slide */}
      <motion.img
        src={`${import.meta.env.BASE_URL}babel.png`}
        alt="Babel"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible(1) ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-8 max-w-[50%] max-h-[30%] object-contain"
      />

      {/* Step indicator */}
      {!isComplete && (
        <motion.div
          className="absolute bottom-8 text-text-secondary text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Press <kbd className="px-3 py-1.5 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
        </motion.div>
      )}
    </div>
  )
}
