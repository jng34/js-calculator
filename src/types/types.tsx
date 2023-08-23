export interface ScreenProps {
  input: string;
  output: string;
}

export interface ButtonProps {
  handleButtonClick: (arg: any) => void;
}

export type Operations = {
  "+": string;
  "-": string;
  "*": string;
  "/": string;
  "%": string;
}

