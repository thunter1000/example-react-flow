'use client'
import { FormEvent, useState } from "react"

interface Stage1Props {
  title: string,
  submitCallback: (fieldData: string) => void
}
const Stage: React.FC<Stage1Props> = ({title, submitCallback}): JSX.Element =>
{
  const [text, setText] = useState('');

  const onSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitCallback(text)
  }

  

  return (<>
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      <div className="mb-5">
        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">
          {title ?? 'Undefined'}
        </label>
        <input type="text" value={text} onChange={e => setText(e.target.value)} id="field" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example field" required />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </>)
}

export default Stage