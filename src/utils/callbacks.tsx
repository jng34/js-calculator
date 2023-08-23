const calculate = (input: string, setOutPut: (output: string) => void) => {
  const solution = Function(
    "return " + input
  )();
  setOutPut(solution)
}

export { calculate }