import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

const agendaItems = [
  { number: '01', title: 'The Determinism Illusion', description: 'Why traditional engineering assumptions fail' },
  { number: '02', title: 'Embracing Uncertainty', description: 'Probabilistic thinking in system design' },
  { number: '03', title: 'Practical Patterns', description: 'Building resilient non-deterministic systems' },
  { number: '04', title: 'Live Demo', description: 'Interactive examples and workflows' },
]

export function AgendaSlide() {
  return (
    <SlideLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-full"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-6xl font-bold text-white mb-12"
        >
          Agenda
        </motion.h1>

        <div className="flex-1 flex flex-col justify-center gap-6 max-w-4xl">
          {agendaItems.map((item) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              className="flex items-start gap-6 group"
            >
              <span className="text-cyan-500 font-mono text-2xl font-bold min-w-[60px]">
                {item.number}
              </span>
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-text-secondary mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  )
}
