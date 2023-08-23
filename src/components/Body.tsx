import { useState } from "react";
import Buttons from "./Buttons";
import Screens from "./Screens";
import { numberKeys, operationKeys } from "../utils/constants";
import { calculate } from "../utils/callbacks";

const Body = () => {
  const [input, setInput] = useState('');
  const [output, setOutPut] = useState('')
;
  const handleButtonPress = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const key = event.currentTarget.value;
    if (key === 'ac') {
      setInput('')
      setOutPut('')
    };
    if (key === '=') calculate(input, setOutPut);
    if (numberKeys.has(key)) setInput(input + key);
    if (operationKeys.has(key)) {
      switch (key) {
        case "×":
          setInput(input + "*");
          break
        case "÷":
          setInput(input + "/");
          break
        default:
          setInput(input + key);
      }
    }
    if (key === '%') {
      setInput(input + '/100');
      calculate(input, setOutPut);
    }
    // Configure "()" key
  }

  return (
    <div className="calculator">
      <Screens 
        input={input}
        output={output}
      />
      <Buttons 
        handleButtonPress={handleButtonPress}
      />
    </div>
  )
}

export default Body