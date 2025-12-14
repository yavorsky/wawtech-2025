import { motion } from 'framer-motion'

export function WriterDemoSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <motion.video
        src={`${import.meta.env.BASE_URL}demo-wi.mp4`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-contain"
        controls
        autoPlay
      />
    </div>
  )
}
