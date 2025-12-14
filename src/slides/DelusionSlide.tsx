import { motion } from 'framer-motion'

export function DelusionSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-background p-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl lg:text-5xl font-bold text-white mb-8"
      >
        The "<span className="text-red-400">Lost in the Middle</span>" Problem
      </motion.h1>

      <motion.img
        src={`${import.meta.env.BASE_URL}delusion.png`}
        alt="Lost in the Middle"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-[65%] max-h-[65%] object-contain rounded-2xl"
      />
    </div>
  )
}
