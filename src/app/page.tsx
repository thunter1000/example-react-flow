'use client'
import Image from "next/image";
import Stage1, { Stage1State } from "./components/Stage1";
import { ReactNode, useState } from "react";
import Stage2 from "./components/old/Stage2";


export default function Home() {
  const [currentStage, setCurrentStage] = useState<ReactNode>(null);

  if (currentStage === null) {
    // Starting point.
    setCurrentStage(<Stage1 setNextStage={(nextStage: ReactNode) => setCurrentStage(nextStage)} />);
  }

  return (
    <main>
      {currentStage || <></>}
    </main>
  );
}
