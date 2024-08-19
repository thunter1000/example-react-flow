import { FormEvent, useState } from "react";
import { STAGE1_NAME, Stage1Result } from "./Stage1";
import StageComponent, { StageProps } from "./StageComponent.d";

interface Stage2Props extends StageProps<void> {
  stage1Result?: Stage1Result // TODO this shouldn't be optional
}

const Stage2 : StageComponent<Stage2Props, void> = ({stage1Result}) => {
  const [remainingConfirmation, setRemainingConfirmation] = useState(stage1Result.text);

  const [current, ...remain] = remainingConfirmation;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRemainingConfirmation(remain)
  }

  return <>
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      <div>{current}</div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </>
}

export default Stage2;