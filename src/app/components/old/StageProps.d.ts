interface StageProps {
  flowState: { stage: string, data: {[key:string]: any} },
  currentState: any,
  setStage: (stageData: any, stage?: string) => void
}