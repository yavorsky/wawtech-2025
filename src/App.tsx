import { Presentation } from '@/components/Presentation'
import { TitleSlide } from '@/slides/TitleSlide'
import { JourneySlide } from '@/slides/JourneySlide'
import { AboutSlide } from '@/slides/AboutSlide'
import { DeterminismSlide } from '@/slides/DeterminismSlide'
import { LLMChaosSlide } from '@/slides/LLMChaosSlide'
import { FlyingSlide } from '@/slides/FlyingSlide'
import { AfraidMemeSlide } from '@/slides/AfraidMemeSlide'
import { AutopilotSlide } from '@/slides/AutopilotSlide'
import { AirbusJokeSlide } from '@/slides/AirbusJokeSlide'
import { AirbusFullSlide } from '@/slides/AirbusFullSlide'
import { EngineFailureSlide } from '@/slides/EngineFailureSlide'

function App() {
  return (
    <Presentation>
      <TitleSlide />
      <JourneySlide />
      <AboutSlide />
      <DeterminismSlide />
      <LLMChaosSlide />
      <FlyingSlide />
      <AfraidMemeSlide />
      <AutopilotSlide />
      <AirbusJokeSlide />
      <AirbusFullSlide />
      <EngineFailureSlide />
    </Presentation>
  )
}

export default App
