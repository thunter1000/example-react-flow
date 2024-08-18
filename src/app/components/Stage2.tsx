import StageComponent, { StageProps } from "./StageComponent.d";

interface Stage2Props extends StageProps<void> {

}

const Stage2 : StageComponent<Stage2Props, void> = () => {
  return <>Stage 2 Implement</>
}

export default Stage2;