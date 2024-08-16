'use client'
import { FormEvent, useState } from "react"
import Stage2 from "./Stage2";

interface Stage1Props extends StageProps {
}

const Stage1: React.FC<Stage1Props> = ({flowState, currentState, setStage }): JSX.Element =>
{
  const [text, setText] = useState('');

  const onSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStage({...currentState, text}, Stage2.name);
  }

  

  return (<>
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      <div className="mb-5">
        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">
          Stage 1
        </label>
        <input autoFocus type="text" value={text} onChange={e => setText(e.target.value)} id="field" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example field" required />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </>)
}

export default Stage1