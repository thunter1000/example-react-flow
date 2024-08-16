'use client'
import Image from "next/image";
import Stage1, { Stage1State } from "./components/Stage1";
import { ReactNode, useState } from "react";
import Stage2 from "./components/old/Stage2";


export default function Home() {
  const [state, setState] = useState<{
    stage1State?: Stage1State,
  }>({
  });

  var flowComponent: ReactNode = <></>;

  if (state.stage1State === undefined) {
    flowComponent = <Stage1 setNextStage={(stage, state) => {
      setState({stage1State: state});
    }} previousState={null}/>;
  } /*else {
    flowComponent = <Stage2 previousState={state.stage1State} setNextStage={(stage, state) => {
      setState({stage2State: state});
    }} />;
  }*/




  return (
    <main>
      {flowComponent}
      <div className="prose m-2">
        <hr className="my-9"/>
        <h1>Debug</h1>

        <h2>State Data:</h2>
        <pre>
        {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </main>
  );
}
