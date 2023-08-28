import { evaluate } from "mathjs";

const calculate = (
  input: string,
  setOutPut: (output: string) => void,
  setInvalid: (invalid: boolean) => void
) => {
  try {
    const solution = evaluate(input);
    setOutPut(solution);
    setInvalid(false);
    return solution;
  } catch (error) {
    setInvalid(true);
    setOutPut("invalid operation");
  }
};

export { calculate };
