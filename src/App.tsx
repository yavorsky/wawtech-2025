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
import { DidntHappenSlide } from '@/slides/DidntHappenSlide'
import { EveryProblemRealSlide } from '@/slides/EveryProblemRealSlide'
import { PersonalStorySlide } from '@/slides/PersonalStorySlide'
import { WriterAgentSlide } from '@/slides/WriterAgentSlide'
import { WriterDemoSlide } from '@/slides/WriterDemoSlide'
import { ArchitectureSlide } from '@/slides/ArchitectureSlide'
import { ToolsSlide } from '@/slides/ToolsSlide'
import { SingleAgentSlide } from '@/slides/SingleAgentSlide'
import { ItWorksGreatSlide } from '@/slides/ItWorksGreatSlide'
import { UsersWantedCodeSlide } from '@/slides/UsersWantedCodeSlide'
import { TokenUsageSlide } from '@/slides/TokenUsageSlide'
import { OutputInconsistencySlide } from '@/slides/OutputInconsistencySlide'

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
      <DidntHappenSlide />
      <EveryProblemRealSlide />
      <PersonalStorySlide />
      <WriterAgentSlide />
      <WriterDemoSlide />
      <ArchitectureSlide />
      <ToolsSlide />
      <SingleAgentSlide />
      <ItWorksGreatSlide />
      <UsersWantedCodeSlide />
      <TokenUsageSlide />
      <OutputInconsistencySlide />
    </Presentation>
  )
}

export default App
