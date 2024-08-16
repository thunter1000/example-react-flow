interface StageProps<PreviousState, NextState> {
  previousState: PreviousState,
  setNextStage: (stage: string, state: NextState) => void
}