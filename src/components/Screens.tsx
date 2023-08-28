import { ScreenProps } from "../types/types";

const Screens = ({ input, output }: ScreenProps) => {
  return (
    <>
      <div id="output-display">{input}</div>  
      <div id="display">{output}</div>  
    </>
  )
}

export default Screens;