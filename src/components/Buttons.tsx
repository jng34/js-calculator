import { ButtonProps } from "../types/types"

const Buttons = ({ handleButtonClick }: ButtonProps) => {
  return (
    <div tabIndex={0}>
      <button id="allClear" value={"ac"} onClick={(e) => handleButtonClick(e)}>AC</button>
      <button id="parentheses" value={"()"} onClick={(e) => handleButtonClick(e)}>()</button>
      <button id="percentage" value={"%"} onClick={(e) => handleButtonClick(e)}>%</button>
      <button id="divide" value={"÷"} onClick={(e) => handleButtonClick(e)}>÷</button>

      <button id="seven" value={7} onClick={(e) => handleButtonClick(e)}>7</button>
      <button id="eight" value={8} onClick={(e) => handleButtonClick(e)}>8</button>
      <button id="nine" value={9} onClick={(e) => handleButtonClick(e)}>9</button>
      <button id="multiply" value={"×"} onClick={(e) => handleButtonClick(e)}>x</button>

      <button id="four" value={4} onClick={(e) => handleButtonClick(e)}>4</button>
      <button id="five" value={5} onClick={(e) => handleButtonClick(e)}>5</button>
      <button id="six" value={6} onClick={(e) => handleButtonClick(e)}>6</button>
      <button id="subtract" value={"-"} onClick={(e) => handleButtonClick(e)}>-</button>

      <button id="one" value={1} onClick={(e) => handleButtonClick(e)}>1</button>
      <button id="two" value={2} onClick={(e) => handleButtonClick(e)}>2</button>
      <button id="three" value={3} onClick={(e) => handleButtonClick(e)}>3</button>
      <button id="add" value={"+"} onClick={(e) => handleButtonClick(e)}>+</button>

      <button id="zero" value={0} onClick={(e) => handleButtonClick(e)}>0</button>
      <button id="decimal" value={"."} onClick={(e) => handleButtonClick(e)}>.</button>
      <button id="backspace" value={"backspace"} onClick={(e) => handleButtonClick(e)}>DEL</button>
      <button id="equals" value={"="} onClick={(e) => handleButtonClick(e)}>=</button>
    </div>
  )
}

export default Buttons