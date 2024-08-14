'use client'
import Image from "next/image";
import Stage1 from "./components/stage1";
import { ReactNode, useState } from "react";


export default function Home() {
  const [state, setState] = useState<{stage: string, data:any}>({
    stage: 'stage1',
    data: {}
  });

  const flowComponent = {
    'stage1': <Stage1 key="stage1" submitCallback={(fieldData: string) => {setState({...state, stage: 'stage2', data: { ...state.data, stage1: fieldData }})}} />,
    'stage2': <Stage1 key="stage2" submitCallback={(fieldData: string) => {setState({...state, stage: 'stage3', data: { ...state.data, stage2: fieldData }})}} />,
    'stage3': <>{JSON.stringify(state.data)}</>,
    default: <>Error</>
   }[state.stage]

  return (
    <main>
      {flowComponent}
    </main>
  );
}
