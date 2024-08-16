'use client'
import Image from "next/image";
import Stage1 from "./components/Stage1";
import { ReactNode, useState } from "react";
import Stage2 from "./components/Stage2";


export default function Home() {
  const [state, setState] = useState<{stage: string, data: {[key:string]: any}}>({
    stage: Stage1.name,
    data: {}
  });

  const setStage = (data: any, stage?: string) => {
    setState({...state, stage: stage ?? state.stage, data: { ...(state.data), [state.stage]: data }})
  }

  const stageProps = {flowState: state, currentState: state.data[state.stage] ?? null, setStage}

  const flowComponent = {
    [Stage1.name]: <Stage1 key="stage1" {...stageProps} />,
    [Stage2.name]: <Stage2 key="stage2" {...stageProps} />,
    'end': <><h1 className="text-2xl mb-2 font-medium">Complete!</h1></>,
    default: <>Error</>
   }[state.stage]

  return (
    <main>
      {flowComponent}
      <div className="prose m-2">
        <hr className="my-9"/>
        <h1>Debug</h1>
        <h2>Stage</h2>
        <p>
          {state.stage}
        </p>

        <h2>State Data:</h2>
        <pre>
        {JSON.stringify(state.data, null, 2)}
        </pre>
      </div>
    </main>
  );
}
