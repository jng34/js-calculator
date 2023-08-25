import { evaluate } from "mathjs";

const calculate = (input: string, setOutPut: (output: string) => void) => {
  const solution = evaluate(input);
  setOutPut(solution);
  return solution;
}

export { calculate }