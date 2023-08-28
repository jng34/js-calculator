export interface ScreenProps {
  input: string;
  output: string;
  invalid: boolean;
}

export interface ButtonProps {
  handleButtonClick: (arg: any) => void;
}
