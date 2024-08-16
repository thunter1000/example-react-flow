'use client'

import { FormEvent, useState } from "react";
import { StageProps } from "./StageProps";
import Stage2 from "./Stage2";



export interface Stage1Props extends StageProps {
}

const Stage1: React.FC<Stage1Props> = ({setNextStage}): JSX.Element =>
{
  const onSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setNextStage(<Stage2 setNextStage={setNextStage} inputs={formData.getAll('text[]').map(s => new String(s))} />);
  }

  const [text, setText] = useState('');


  return (<>
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      {[...Array(5).keys()].map((i) => (
        <div key={i} className="mb-5">
          <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">
            Text Field {i + 1}
          </label>
          <input autoFocus type="text" name="text[]" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example field" required defaultValue={`Field ${i + 1}`} />
        </div>
      ))}
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </>)
}

export default Stage1;