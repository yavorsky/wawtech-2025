import { motion } from 'framer-motion'

export function AirbusFullSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <motion.img
        src="/airbus-full.png"
        alt="Airbus"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
