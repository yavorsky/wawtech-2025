import { motion, AnimatePresence } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { FunTitle } from '@/components/FunTitle'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'
import { SiWix, SiNetflix, SiBabel, SiGithub } from '@icons-pack/react-simple-icons'

const sections = [
  {
    id: 'day',
    icon: '☀️',
    title: 'DURING THE DAY',
    image: 'day.jpeg',
    content: [
      {
        period: '2016-2022',
        company: 'WIX.COM',
        brandIcon: SiWix,
        brandColor: '#0C6EFC',
        items: [
          'Dev Experience Team Lead (6 years)',
          'Built CLI used by 2,400 developers',
          'Scaled developer tools from 0 to prod',
        ],
      },
      {
        period: '2022-2024',
        company: 'NETFLIX',
        brandIcon: SiNetflix,
        brandColor: '#E50914',
        items: [
          'Senior Software Engineer (2 years)',
          'Entertainment systems at scale',
        ],
      },
      {
        period: '2024-now',
        company: 'WRITER.COM',
        items: [
          'Senior Staff Engineer (1 year)',
          'Built Action AI (almost from scratch)',
          'Solo architect, production AI agents',
        ],
      },
    ],
  },
  {
    id: 'night',
    icon: '🌙',
    title: 'DURING THE NIGHT',
    image: 'night.jpeg',
    content: [
      {
        company: 'BABEL.JS',
        brandIcon: SiBabel,
        brandColor: '#F9DC3E',
        subtitle: 'Core Team Member',
        items: [
          'The JavaScript compiler',
          "everyone uses (but doesn't know it)",
        ],
      },
      {
        company: 'UNBUILT.APP',
        brandIcon: SiGithub,
        brandColor: '#ffffff',
        subtitle: 'Creator',
        items: [
          'Fastest web stack analyzer',
          '(Open source, github.com/yavorsky)',
        ],
      },
    ],
  },
  {
    id: 'life',
    icon: '❤️',
    title: 'DURING THE LIFE',
    image: 'life.png',
    hobbies: [
      'Play tennis',
      'Cycling',
      'Snowboarding',
      'Sommelier',
      'Cooking',
      'Enjoying life with my Girlfriend Daria and my Dog Lavanda',
    ],
  },
]

const contentVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
}

const imageVariants = {
  enter: { opacity: 0, scale: 1.1 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

function SectionContent({ section }: { section: typeof sections[0] }) {
  if (section.id === 'life') {
    return (
      <div className="space-y-5">
        {section.hobbies?.map((hobby, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="flex items-center gap-5 text-3xl text-text-secondary"
          >
            <span className="text-purple-400 text-4xl">•</span>
            <span>{hobby}</span>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-10">
      {section.content?.map((item, i) => {
        const BrandIcon = item.brandIcon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.15 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-5">
              {item.period && (
                <span className="text-cyan-500 font-mono text-2xl">{item.period}</span>
              )}
              {BrandIcon && (
                <BrandIcon size={28} color={item.brandColor} />
              )}
              <span className="text-white font-bold text-3xl">{item.company}</span>
              {item.subtitle && (
                <span className="text-text-secondary text-2xl">— {item.subtitle}</span>
              )}
            </div>
            <div className="ml-8 border-l-3 border-purple-500/30 pl-8 space-y-3">
              {item.items.map((text, j) => (
                <div key={j} className="text-text-secondary text-2xl flex items-center gap-4">
                  <span className="text-purple-400">├─</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export function AboutSlide() {
  const { nextSlide } = usePresentationContext()
  const { currentStep, isComplete } = useSteppedReveal({
    totalSteps: sections.length,
    onComplete: nextSlide,
  })

  const activeIndex = Math.max(0, Math.min(currentStep - 1, sections.length - 1))
  const activeSection = sections[currentStep === 0 ? 0 : activeIndex]
  const showContent = currentStep > 0

  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-10 flex justify-center">
          <FunTitle title="Artem Yavorskyi" subtitle="(Art)" />
        </div>

        {/* Tab indicators */}
        <div className="flex justify-center gap-6 mb-10">
          {sections.map((section, index) => {
            const isActive = showContent && activeIndex === index
            const isRevealed = currentStep > index
            const rotation = index === 0 ? -1 : index === 1 ? 1 : -0.5
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0.4, rotate: 0 }}
                animate={{
                  opacity: isRevealed ? 1 : 0.4,
                  scale: isActive ? 1.05 : 1,
                  rotate: isRevealed ? rotation : 0,
                }}
                className={`flex items-center gap-3 px-8 py-4 border-2 transition-colors ${
                  isActive
                    ? 'border-cyan-500 bg-cyan-500/10 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)]'
                    : isRevealed
                    ? 'border-purple-500/50 bg-purple-500/10 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)]'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <span className="text-3xl">{section.icon}</span>
                <span className={`text-2xl font-bold ${isActive ? 'text-cyan-400' : 'text-white'}`}>
                  {section.title}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Main content area */}
        <div className="flex-1 flex gap-16 items-center justify-center">
          {/* Image */}
          <div className="w-2/5 flex justify-center">
            <AnimatePresence mode="wait">
              {showContent && (
                <motion.div
                  key={activeSection.id}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative transform -rotate-1"
                >
                  <div className="w-[420px] h-[420px] overflow-hidden border-4 border-purple-500/50 shadow-[8px_8px_0px_0px_rgba(168,85,247,0.4)]">
                    <img
                      src={`${import.meta.env.BASE_URL}${activeSection.image}`}
                      alt={activeSection.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-background px-6 py-3 text-3xl font-bold shadow-[4px_4px_0px_0px_rgba(6,182,212,0.5)]">
                    {activeSection.icon}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="w-3/5 max-w-3xl">
            <AnimatePresence mode="wait">
              {showContent && (
                <motion.div
                  key={activeSection.id}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <SectionContent section={activeSection} />
                </motion.div>
              )}
            </AnimatePresence>

            {!showContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-text-secondary text-3xl"
              >
                Press <kbd className="px-4 py-2 bg-surface text-cyan-400 font-mono mx-2 border-2 border-cyan-500/50 shadow-[2px_2px_0px_0px_rgba(6,182,212,0.4)]">Space</kbd> to start
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </SlideLayout>
  )
}
