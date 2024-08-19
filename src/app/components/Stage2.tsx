import { FormEvent, useState } from "react";
import { STAGE1_NAME, Stage1Result } from "./Stage1";
import StageComponent, { Result, StageProps } from "./StageComponent.d";

export const STAGE2_NAME = 'stage2'

interface Stage2Props extends StageProps<Result> {
  stage1Result: Stage1Result
}

const Stage2 : StageComponent<Stage2Props, Result> = ({stage1Result, callback}) => {
  const [remainingConfirmation, setRemainingConfirmation] = useState(stage1Result.text);

  const [current, ...remain] = remainingConfirmation;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (remain.length <= 0)
      callback({complete: true})
    else
      setRemainingConfirmation(remain)
  }

  return <>
    <form onSubmit={onSubmit}>
      <h1 className="font-light">Stage 2</h1>
      <div>Confirm: {current}</div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </>
}

export default Stage2;