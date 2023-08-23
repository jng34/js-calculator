export interface ScreenProps {
  input: string;
  output: string;
}

export interface ButtonProps {
  handleButtonPress: (arg: any) => void;
}

export type Operations = {
  "+": string;
  "-": string;
  "*": string;
  "/": string;
  "%": string;
}

