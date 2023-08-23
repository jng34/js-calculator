import { ScreenProps } from "../types/types";

const Screens = ({ input, output }: ScreenProps) => {
  return (
    <>
      <div className="inputScreen">{input}</div>  
      <div className="outputScreen">{output}</div>  
    </>
  )
}

export default Screens;