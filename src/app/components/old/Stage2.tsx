'use client'
import { FormEvent, useState } from "react"

interface Stage2Props extends StageProps {
}

const Stage2: React.FC<Stage2Props> = ({ flowState, currentState, setStage }): JSX.Element =>
{
  const [text, setText] = useState('');

  if (currentState === null) {
    setStage({data:[]}) // TODO better mechnism to set default state
    return <></>;
  }

  const onSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newState = {...currentState, data: [...currentState.data, text]}

    setText(''); // TODO better mechanism to clear component state

    setStage(newState, newState.data.length >= 3 ? 'end' : Stage2.name);
  }

  

  return (<>
    <form key={currentState.data.length} className="max-w-sm mx-auto" onSubmit={onSubmit}>
      <div className="mb-5">
        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">
          Stage 2: {currentState.data.length + 1} of 3
        </label>
        <input autoFocus type="text" value={text} onChange={e => setText(e.target.value)} id="field" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example field" required />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </>)
}

export default Stage2