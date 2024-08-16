'use client'

import { StageProps } from "./StageProps"

export interface Stage2Props extends StageProps {
  inputs: String[]
}

const Stage2: React.FC<Stage2Props> = ({setNextStage, inputs}): JSX.Element =>
{
  const [current, ...remaining] = inputs;

  const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (remaining.length <= 0) {
      setNextStage(<>Complete</>);
    } else {
      setNextStage(<Stage2 setNextStage={setNextStage} inputs={remaining} />);
    }
  }


  return (<>
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      <h1 className="text-2xl font-bold text-center mb-5">Confirm</h1>
      <p className="mb-2">
        {current}
      </p>
      <button autoFocus type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Confirm
      </button>
    </form>
  </>)
}

export default Stage2;