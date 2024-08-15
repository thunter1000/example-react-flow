'use client'
import Image from "next/image";
import Stage from "./components/stage";
import { ReactNode, useState } from "react";


export default function Home() {
  const [state, setState] = useState<{stage: string, data:any}>({
    stage: 'stage1',
    data: {}
  });

  const changeStage = (stage: string, data: any) => {
    setState({...state, stage, data: { ...(state.data), [state.stage]: data }})
  }

  const flowComponent = {
    'stage1': <Stage key="stage1" title="Stage 1" submitCallback={(fieldData: string) => changeStage('stage2', fieldData)} />,
    'stage2': <Stage key="stage2" title="Stage 2" submitCallback={(fieldData: string) => changeStage('stage3', fieldData)} />,
    'stage3': <>{JSON.stringify(state.data)}</>,
    default: <>Error</>
   }[state.stage]

  return (
    <main>
      {flowComponent}
    </main>
  );
}
