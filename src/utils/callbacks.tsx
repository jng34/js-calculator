

const calculate = (input: string, setOutPut: (output: string) => void) => {
  const solution = Function(
    "return " + input
  )();
  setOutPut(solution);
  return solution;
}

export { calculate }