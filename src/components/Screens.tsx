import { ScreenProps } from "../types/types";

const Screens = ({ input, output }: ScreenProps) => {
  return (
    <>
      <div id="display">{input}</div>  
      <div id="output-display">{output}</div>  
    </>
  )
}

export default Screens;