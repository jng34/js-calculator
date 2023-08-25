import { useState, MouseEvent, KeyboardEvent, useEffect, useRef } from "react";
import Buttons from "./Buttons";
import Screens from "./Screens";
import { numberKeys, operationKeys } from "../utils/constants";
import { calculate } from "../utils/callbacks";

const Body = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutPut] = useState<string>("");
  const [openCount, setOpenCount] = useState<number>(0);

  // useRef focuses on an input (main div in this case)
  const ref = useRef<null|HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);
  /////

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const key = event.currentTarget.value;
    if (key === "ac") {
      setInput("");
      setOutPut("");
      return;
    }
    if (key === "=") return calculate(input, setOutPut);
    if (key === "backspace") return setInput(input.slice(0, input.length - 1));
    if (operationKeys.has(key)) {
      switch (key) {
        case "×":
          return setInput(input + "*");
        case "÷":
          return setInput(input + "/");
        default:
          return setInput(input + key);
      }
    }
    if (key === "%") {
      const compute = calculate(input + "/100", setOutPut);
      return setInput(compute);
    }
    
    // Configure "()" key
    if (key === "()") {
      const lastKey = input[input.length-1];
      if (lastKey === '%') return;

      if (openCount >= 1 && (numberKeys.has(lastKey) || lastKey === ')')) {
        setOpenCount(openCount - 1);
        setInput(input + ')');
        return
      }

      setOpenCount(openCount + 1);
      setInput(input + '(');
      return
    }

    return setInput(input + key);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;
    if (numberKeys.has(key)) return setInput(input + key);
    if (key === "Backspace") return setInput(input.slice(0, input.length - 1));
    if (key === "Enter") return calculate(input, setOutPut);
    if (operationKeys.has(key)) {
      switch (key) {
        case "×":
          return setInput(input + "*");
        case "÷":
          return setInput(input + "/");
        default:
          return setInput(input + key);
      }
    }
  };


  return (
    <div
      className="calculator"
      ref={ref}
      tabIndex={0}
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <Screens input={input} output={output} />
      <Buttons handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Body;
