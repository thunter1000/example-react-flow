'use client'
import { useState } from "react";
import Stage1, { STAGE1_NAME, Stage1Result } from "./components/Stage1";
import { Result, StageProps } from "./components/StageComponent.d";
import Stage2, { STAGE2_NAME } from "./components/Stage2";

interface State {
  [STAGE1_NAME]?: Stage1Result,
  [STAGE2_NAME]?: Result
}

export default function Home() {
  const [state, setState] = useState<State>({
  });

  const setStageState: <R extends Result> (stage: string, result: R) => void = (stage, result) => {
    setState({
      ...state,
      [stage]: result
    })
  }

  const generateStageProps: <R extends Result> (stage: string) => StageProps<R> = (stage) => {
    return {
      callback: (result) => setStageState(stage, result)
    }
  }

  return (
    <main className="prose mx-auto my-5">
      { (state[STAGE1_NAME]?.complete !== true && <Stage1 {...generateStageProps<Stage1Result>(STAGE1_NAME)}/>) ||
        (state[STAGE2_NAME]?.complete !== true && <Stage2 stage1Result={state[STAGE1_NAME]!} {...generateStageProps(STAGE2_NAME)}/>) ||
        <>
          <h1 className="font-light">Finished!</h1>
        </>
      }
        <div className="mt-10">
          <h1>State</h1>
          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
    </main>
  );
}
