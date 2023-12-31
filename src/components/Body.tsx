import { useState, MouseEvent, KeyboardEvent, useEffect, useRef } from "react";
import { numberKeys, operationKeys } from "../utils/constants";
import { calculate } from "../utils/callbacks";
import Buttons from "./Buttons";
import Screens from "./Screens";

const Body = () => {
  const [input, setInput] = useState<string>("0");
  const [output, setOutPut] = useState<string>("");
  const [openCount, setOpenCount] = useState<number>(0);
  const [invalid, setInvalid] = useState<boolean>(false);

  // useRef focuses on an input (main div in this case)
  const ref = useRef<null|HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, [output]);


  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const key = event.currentTarget.value;
    let newInput = input;
    const lastKey = newInput[newInput.length-1];
    setInvalid(false);
    setOutPut('');

    if (key === '.') {
      if (newInput === '0') return setInput(newInput + key);
      if (operationKeys.has(lastKey)) return setInput(newInput + "0.");
    }

    if (newInput === '0') newInput = '';

    if (key === "clear") {
      setInput("0");
      setOpenCount(0);
      setOutPut("");
      return;
    }
    if (key === "equals") return calculate(newInput, setOutPut, setInvalid);
    if (key === "backspace") return setInput(newInput.slice(0, newInput.length - 1));
    if (operationKeys.has(lastKey) && operationKeys.has(key)) {
      if (lastKey === '-' && key === '-') {
        return setInput(newInput + key);
      } else {
        return setInput(newInput.slice(0, newInput.length-1) + key);
      }
      
    }
    if (key === "%") {
      const compute = calculate(newInput + "/100", setOutPut, setInvalid);
      return setInput(compute);
    }
    
    // Configure "()" key
    if (key === "()") {
      if (lastKey === '%') return;
      console.log(openCount)
      if (openCount >= 1 && (numberKeys.has(lastKey) || lastKey === ')')) {
        setOpenCount(openCount - 1);
        setInput(newInput + ')');
        return
      }
      setOpenCount(openCount + 1);
      setInput(newInput + '(');
      return
    }

    return setInput(newInput + key);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;
    let newInput = input;
    const lastKey = newInput[newInput.length-1];
    setInvalid(false);
    setOutPut('');

    if (key === '.') {
      if (newInput === '0') return setInput(newInput + key);
      if (operationKeys.has(lastKey)) return setInput(newInput + "0.");
    }

    if (newInput === '0') newInput = '';

    if (numberKeys.has(key)) return setInput(newInput + key);
    if (operationKeys.has(key)) {
      switch (key) {
        case "×":
          return setInput(newInput + "*");
        case "÷":
          return setInput(newInput + "/");
        default:
          return setInput(newInput + key);
      }
    }

    if (key === "(") {
      if (lastKey === '%') return;
      if (openCount >= 1 && (numberKeys.has(lastKey) || lastKey === ')')) {
        setOpenCount(openCount - 1);
        setInput(newInput + ')');
        return
      }
      setOpenCount(openCount + 1);
      setInput(newInput + '(');
      return
    }

    if (key === "Backspace") return setInput(newInput.slice(0, newInput.length - 1));
    if (key === "Enter") return calculate(newInput, setOutPut, setInvalid);
  };


  return (
    <div
      className="calculator"
      ref={ref}
      tabIndex={0}
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <Screens input={input} output={output} invalid={invalid}/>
      <Buttons handleButtonClick={handleButtonClick} />
    </div>
  );
};


export default Body;
