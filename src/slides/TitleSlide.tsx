import { motion } from 'framer-motion'
import { Slide } from '@/components/Slide'

function ConcentricCircles() {
  const circles = Array.from({ length: 25 }, (_, i) => ({
    radius: 50 + i * 40,
    delay: i * 0.05,
  }))

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Center point offset to bottom-left like in reference */}
      <g transform="translate(500, 750)">
        {circles.map((circle, index) => {
          // Create color transition from cyan to purple
          const hue = 180 + (index / circles.length) * 100 // cyan (180) to purple (280)
          const saturation = 70 + (index / circles.length) * 20
          const lightness = 50 + (index / circles.length) * 10

          return (
            <motion.ellipse
              key={index}
              cx={0}
              cy={0}
              rx={circle.radius * 1.8}
              ry={circle.radius}
              fill="none"
              stroke={`hsl(${hue}, ${saturation}%, ${lightness}%)`}
              strokeWidth={2}
              strokeOpacity={0.6 - index * 0.015}
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: circle.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformOrigin: 'center',
              }}
            />
          )
        })}
      </g>

      {/* Decorative line breaks on circles */}
      <g transform="translate(500, 750)">
        {[3, 7, 12, 18].map((circleIndex) => {
          const radius = 50 + circleIndex * 40
          return (
            <motion.line
              key={`break-${circleIndex}`}
              x1={-radius * 1.8 - 20}
              y1={0}
              x2={-radius * 1.8 - 60}
              y2={0}
              stroke="#22d3ee"
              strokeWidth={3}
              strokeLinecap="round"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8 + circleIndex * 0.1,
                ease: 'easeOut',
              }}
            />
          )
        })}
      </g>
    </svg>
  )
}

export function TitleSlide() {
  return (
    <Slide>
      {/* Animated background circles */}
      <ConcentricCircles />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-12">
        {/* Logo/Brand */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -30, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: -1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-[#6EE7B7] px-6 py-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <img
              src={`${import.meta.env.BASE_URL}image23.png`}
              alt="WAWTECH by DOU"
              className="h-12 w-auto"
            />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="bg-background/90 backdrop-blur-sm px-12 py-6 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center leading-tight">
            Engineering in the Age of{' '}
            <span className="text-cyan-400">Uncertainty</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="bg-pink-500 px-12 py-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
            Building Systems Without Determinism
          </h2>
        </motion.div>
      </div>

      {/* Keyboard hint */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-text-secondary text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Press <kbd className="px-3 py-2 bg-surface rounded text-cyan-400 font-mono text-base mx-1">→</kbd> or <kbd className="px-3 py-2 bg-surface rounded text-cyan-400 font-mono text-base mx-1">Space</kbd> to continue
      </motion.div>
    </Slide>
  )
}
