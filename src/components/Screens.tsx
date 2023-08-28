import { ScreenProps } from "../types/types";

const Screens = ({ input, output, invalid }: ScreenProps) => {
  return (
    <>
      <div id={invalid ? "invalid-input" : "display"}>{input}</div>  
      <div id={invalid ? "invalid-output" : "output-display"}>{output}</div>  
    </>
  )
}

export default Screens;