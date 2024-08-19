import { FormEvent } from "react";
import StageComponent, { Result, StageProps } from "./StageComponent.d";

export interface Stage1Result extends Result {
  text: String[]
}

export const STAGE1_NAME = 'stage1'

const Stage1 : StageComponent<StageProps<Stage1Result>, Stage1Result> = ({callback}) => {
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const text = formData.getAll('text[]').map(String)

    callback({ text, complete: true })
  }

  return (
    <form onSubmit={onSubmit}>
      <h1 className="font-light">Stage 1</h1>
      {
        [...Array(5).keys()].map(i => (
          <div key={i} className="mb-2">
            <label htmlFor="text" className="block mb-2 text-sm font-medium">Text input {i + 1}</label>
            <input type="text" className="w-full" name="text[]" id="text" defaultValue={`Text value for field ${i+1}`} autoFocus={i === 0} />
          </div>
        ))
      }
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  )
}

export default Stage1;