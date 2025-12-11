# Presentation: Engineering in the Age of Uncertainty

## Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with custom theme
- **Animation**: Framer Motion
- **Charts**: Recharts (installed, not yet used)
- **Icons**: Lucide React (installed, not yet used)

## Color Theme
- **Background**: `#0a0a1a` (dark navy)
- **Surface**: `#1a1a2e` (slightly lighter)
- **Cyan accent**: `#22d3ee` / `#06b6d4` (primary highlight)
- **Purple accent**: `#a78bfa` / `#8b5cf6` (secondary)
- **Pink accent**: `#ec4899` (emphasis)
- **Text**: White primary, `#94a3b8` secondary

## Project Structure
```
src/
├── components/
│   ├── Presentation.tsx    # Main presentation wrapper with navigation
│   ├── Slide.tsx           # Base slide component
│   ├── SlideLayout.tsx     # Layout with purple arc background
│   └── SlideProgress.tsx   # Bottom navigation dots
├── context/
│   └── PresentationContext.tsx  # Slide state management
├── hooks/
│   └── useSteppedReveal.ts      # Step-by-step reveal hook
├── slides/
│   ├── TitleSlide.tsx           # Opening slide with animated circles
│   ├── JourneySlide.tsx         # 4 acts overview
│   ├── AboutSlide.tsx           # Speaker bio (day/night/life tabs)
│   ├── DeterminismSlide.tsx     # Babel/Wix/Netflix/unbuilt examples
│   ├── LLMChaosSlide.tsx        # "Then 2023 happened" - LLM chaos
│   ├── FlyingSlide.tsx          # "Who's afraid of flying?"
│   ├── AfraidMemeSlide.tsx      # Leslie Nielsen gif
│   ├── AutopilotSlide.tsx       # Autopilot gif + Airbus LLM reveal
│   ├── AirbusJokeSlide.tsx      # Fake LLM features list
│   ├── AirbusFullSlide.tsx      # Full airbus image
│   └── EngineFailureSlide.tsx   # Shaking cabin + chat simulation
└── lib/
    └── utils.ts            # cn() utility for classnames
```

## Key Patterns

### 1. useSteppedReveal Hook
Used for step-by-step content reveal on Space/Enter/Arrow press:
```tsx
const { currentStep, isVisible, isActive, isComplete } = useSteppedReveal({
  totalSteps: 5,
  onComplete: nextSlide,  // Auto-advance when done
})

// isVisible(index) - true if step has been revealed
// isActive(index) - true if it's the most recent step
// isComplete - true when all steps done
```

### 2. SlideLayout Component
Standard layout with purple arc background decoration. Use for content slides:
```tsx
<SlideLayout>
  {/* Your content */}
</SlideLayout>
```

### 3. Full Image Slides
For memes/images without layout:
```tsx
<div className="w-full h-full flex items-center justify-center bg-background">
  <motion.img src="/image.png" className="h-[70vh] w-auto" />
</div>
```

### 4. Streaming Text Effect
For LLM-like typing animation:
```tsx
function StreamingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('')
  // Interval-based character reveal
}
```

## Current Slides (in order)

1. **TitleSlide** - Animated concentric circles, main title
2. **JourneySlide** - 4 acts with step reveal
3. **AboutSlide** - Speaker bio with day/night/life tabs
4. **DeterminismSlide** - Code examples showing determinism
5. **LLMChaosSlide** - "Then 2023 happened" chaos
6. **FlyingSlide** - "Who's afraid of flying?" intro
7. **AfraidMemeSlide** - Leslie Nielsen gif
8. **AutopilotSlide** - Autopilot gif + Airbus LLM banner
9. **AirbusJokeSlide** - Fake LLM features
10. **AirbusFullSlide** - Static airbus image
11. **EngineFailureSlide** - Shaking cabin + chat simulation

## Public Assets Used
- `/day.jpeg` - Speaker photo (day)
- `/night.jpeg` - Speaker photo (night)
- `/life.png` - Speaker photo (life)
- `/afraid-of-flying.gif` - Leslie Nielsen meme
- `/autopilot.gif` - Autopilot movie scene
- `/airbus-full.png` - Airbus cockpit
- `/airbus-engine-failure.png` - Cabin during turbulence

## Design Guidelines
- **Text sizes**: Large for conference screens (6xl-8xl for titles, 2xl-3xl for content)
- **Animations**: Smooth spring transitions, staggered reveals
- **Step reveal**: Use `useSteppedReveal` for sequential content
- **Navigation**: Space/Enter/→ to advance, ←/Backspace to go back
- **No build on every change**: User will report if something breaks

## Presentation Theme
Story arc about transitioning from deterministic systems to non-deterministic LLM-based systems. Uses humor (airplane/LLM metaphor) to illustrate the challenges of working with unpredictable AI outputs.
