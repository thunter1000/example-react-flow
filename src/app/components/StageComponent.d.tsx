type StageComponent<Props extends StageProps<R>, R extends Result | void> = {
} & React.FC<Props>;

export interface StageProps<R extends Result|void> {
  callback: (result?: R) => void,
}

export interface Result {
  complete: Boolean
}


export default StageComponent