import { motion } from 'framer-motion'
import { SlideLayout } from '@/components/SlideLayout'
import { useSteppedReveal } from '@/hooks/useSteppedReveal'
import { usePresentationContext } from '@/context/PresentationContext'

function UglyStockApp() {
  return (
    <div
      style={{
        fontFamily: 'Times New Roman, serif',
        backgroundColor: '#c0c0c0',
        border: '3px outset #ffffff',
        padding: '8px',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: 'linear-gradient(to right, #000080, #1084d0)',
          color: 'white',
          padding: '4px 8px',
          fontWeight: 'bold',
          fontSize: '14px',
          marginBottom: '8px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>Stock Viewer - Microsoft Internet Explorer</span>
        <span>_ □ ✕</span>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: 'white', padding: '12px', border: '2px inset #808080' }}>
        <h1 style={{ color: '#000080', fontSize: '18px', margin: '0 0 12px 0', textDecoration: 'underline' }}>
          Stock Price Dashboard
        </h1>

        {/* Table */}
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#000080', color: 'white' }}>
              <th style={{ border: '1px solid black', padding: '4px' }}>Symbol</th>
              <th style={{ border: '1px solid black', padding: '4px' }}>Price</th>
              <th style={{ border: '1px solid black', padding: '4px' }}>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '4px' }}>AAPL</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>$175.43</td>
              <td style={{ border: '1px solid black', padding: '4px', color: 'green' }}>+2.31</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <td style={{ border: '1px solid black', padding: '4px' }}>NVDA</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>$456.78</td>
              <td style={{ border: '1px solid black', padding: '4px', color: 'red' }}>-5.12</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '4px' }}>TSLA</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>$234.56</td>
              <td style={{ border: '1px solid black', padding: '4px', color: 'green' }}>+1.89</td>
            </tr>
          </tbody>
        </table>

        {/* Ugly chart placeholder */}
        <div style={{ marginTop: '12px', border: '1px solid black', padding: '8px', backgroundColor: '#ffffcc' }}>
          <div style={{ fontSize: '12px', color: '#000080', marginBottom: '8px' }}>Chart:</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '60px' }}>
            <div style={{ width: '30px', height: '40px', backgroundColor: '#000080' }} />
            <div style={{ width: '30px', height: '55px', backgroundColor: '#008000' }} />
            <div style={{ width: '30px', height: '35px', backgroundColor: '#800000' }} />
            <div style={{ width: '30px', height: '45px', backgroundColor: '#000080' }} />
            <div style={{ width: '30px', height: '30px', backgroundColor: '#008000' }} />
          </div>
        </div>

        {/* Counter */}
        <div style={{ marginTop: '12px', fontSize: '12px', color: '#808080' }}>
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt=""
            style={{ width: '16px', height: '16px', marginRight: '4px' }}
          />
          Visitor counter: 00000127
        </div>

        {/* Marquee effect */}
        <div
          style={{
            marginTop: '8px',
            backgroundColor: '#ffff00',
            padding: '4px',
            fontSize: '12px',
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{ x: [300, -400] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            *** BREAKING NEWS: Stock prices updated every 5 minutes! ***
          </motion.div>
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          marginTop: '8px',
          backgroundColor: '#c0c0c0',
          border: '1px inset #808080',
          padding: '2px 8px',
          fontSize: '12px',
        }}
      >
        Done
      </div>
    </div>
  )
}

export function UsersWantedCodeSlide() {
  const { nextSlide } = usePresentationContext()
  const { isVisible, isComplete } = useSteppedReveal({
    totalSteps: 2,
    onComplete: nextSlide,
  })

  return (
    <SlideLayout>
      <div className="flex flex-col h-full items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-2">
            But users wanted to <span className="text-pink-400">generate code</span>
          </h1>
          <p className="text-3xl text-text-secondary">
            Create amazing apps. It was a different beast.
          </p>
        </motion.div>

        {/* Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={{ opacity: isVisible(0) ? 1 : 0.2, y: isVisible(0) ? 0 : 20, rotate: isVisible(0) ? -1 : 0 }}
          className="w-full max-w-5xl mb-8"
        >
          <div className="bg-surface border-2 border-cyan-500/50 p-6 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)]">
            <div className="text-xl text-cyan-400 mb-2 font-bold">User prompt:</div>
            <p className="text-2xl text-white font-mono">
              "Generate a stunning web app with dashboard showing AAPL, NVDA, TSLA stocks live price and the chart. Use real live data from public APIs"
            </p>
          </div>
        </motion.div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{
            opacity: isVisible(1) ? 1 : 0,
            scale: isVisible(1) ? 1 : 0.9,
            rotate: isVisible(1) ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-2xl text-text-secondary mb-4">Result:</div>
          <div className="shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]">
            <UglyStockApp />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible(1) ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 transform -rotate-1 bg-red-500/20 border-2 border-red-500 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.4)]"
          >
            <span className="text-3xl text-red-400 font-bold">Not exactly "stunning"...</span>
          </motion.div>
        </motion.div>

        {/* Step indicator */}
        {!isComplete && (
          <motion.div
            className="text-text-secondary text-xl mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Press <kbd className="px-4 py-2 bg-surface rounded text-cyan-400 font-mono mx-2">Space</kbd> to continue
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}
