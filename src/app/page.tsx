'use client'
import { ReactNode, useState } from "react";
import Stage1, { STAGE1_NAME, Stage1Result } from "./components/Stage1";
import { Result, StageProps } from "./components/StageComponent.d";
import Stage2 from "./components/Stage2";

interface State {
  [STAGE1_NAME]?: Stage1Result
}

export default function Home() {
  const [state, setState] = useState<State>({});

  let currentStage = <>Error</>

  // const stageProps: <R extends Result>() => StageProps<R> = (stageName: String) => ({
  //   setStage(result) {
  //       setState({...state, stageName, results: {
  //         ...state.Results,
  //         [stageName]: result
  //       }})
  //   },
  // })

  const stageProps: <R extends Result|void> (stageName: string) => StageProps<R> = (stageName) => ({
    callback(result) {
      setState({
        [stageName]: result
      })
    },
  })

  // switch (state.stageName) {
  //   case Stage1.stageName:
  //     currentStage = <Stage1 {...stageProps<Stage1Result>(STAGE1_NAME)} />
  //     break;
  //   case Stage2.stageName:
  //     currentStage = <Stage2 {...stageProps<void>('TODO implement')} />
  //     break;
  // }

  return (
    <main>
      {!state[STAGE1_NAME]?.complete && <Stage1 {...stageProps<Stage1Result>(STAGE1_NAME)}/> ||
        <Stage2 {...stageProps<void>('TODO implement')}/> }
        <div>
          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
    </main>
  );
}
