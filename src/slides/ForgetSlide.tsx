import { motion } from 'framer-motion'

export function ForgetSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <motion.img
        src="/forget.jpeg"
        alt="Forget"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[70%] max-h-[70%] object-contain rounded-2xl"
      />
    </div>
  )
}
