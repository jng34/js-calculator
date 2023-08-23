import { ButtonProps } from "../types/types"

const Buttons = ({ handleButtonPress }: ButtonProps) => {
  return (
    <div>
      <button id="allClear" value={"ac"} onClick={(e) => handleButtonPress(e)}>AC</button>
      <button id="parentheses" value={"()"} onClick={(e) => handleButtonPress(e)}>( )</button>
      <button id="percentage" value={"%"} onClick={(e) => handleButtonPress(e)}>%</button>
      <button id="divide" value={"÷"} onClick={(e) => handleButtonPress(e)}>÷</button>

      <button id="seven" value={7} onClick={(e) => handleButtonPress(e)}>7</button>
      <button id="eight" value={8} onClick={(e) => handleButtonPress(e)}>8</button>
      <button id="nine" value={9} onClick={(e) => handleButtonPress(e)}>9</button>
      <button id="multiply" value={"×"} onClick={(e) => handleButtonPress(e)}>x</button>

      <button id="four" value={4} onClick={(e) => handleButtonPress(e)}>4</button>
      <button id="five" value={5} onClick={(e) => handleButtonPress(e)}>5</button>
      <button id="six" value={6} onClick={(e) => handleButtonPress(e)}>6</button>
      <button id="subtract" value={"-"} onClick={(e) => handleButtonPress(e)}>-</button>

      <button id="one" value={1} onClick={(e) => handleButtonPress(e)}>1</button>
      <button id="two" value={2} onClick={(e) => handleButtonPress(e)}>2</button>
      <button id="three" value={3} onClick={(e) => handleButtonPress(e)}>3</button>
      <button id="add" value={"+"} onClick={(e) => handleButtonPress(e)}>+</button>

      <button id="posNeg" value={"posNeg"} onClick={(e) => handleButtonPress(e)}>+/-</button>
      <button id="zero" value={0} onClick={(e) => handleButtonPress(e)}>0</button>
      <button id="decimal" value={"."} onClick={(e) => handleButtonPress(e)}>.</button>
      <button id="equals" value={"="} onClick={(e) => handleButtonPress(e)}>=</button>
    </div>
  )
}

export default Buttons