'use client'
import Stage1 from "./components/Stage1";
import { ReactNode, useState } from "react";


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
