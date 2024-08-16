# Example React Flow.

## [LIVE PREVIEW](https://thunter1000.github.io/example-react-flow/)


# Starting point.

[./src/app/page.tsx](src/app/page.tsx)
```tsx
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
```

Using React Hooks to store the current react node.

# Example Single Step Stage
[./src/app/components/Stage1.tsx](src/app/components/Stage1.tsx)
```tsx
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
```

Once the form is submitted the 'currentStage' react hook is replace. This allows type checking for the next stage through the React properties.

# Example Multi Step Page

This stage will loop until all elements in an array have been processed (confirmed).

[./src/app/components/Stage2.tsx](./src/app/components/Stage2.tsx)
```tsx
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
```

Using the `setNextStage` to use the same React component, but updating the properties to advance to the next item in the array.