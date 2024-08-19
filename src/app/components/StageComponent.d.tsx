type StageComponent<Props extends StageProps<R>, R extends Result> = {
} & React.FC<Props>;

export interface StageProps<R extends Result> {
  callback: (result: R) => void,
}

export interface Result {
  complete: Boolean
}


export default StageComponent