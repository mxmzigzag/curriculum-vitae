export enum EButtonType {
  button = "button",
  reset = "reset",
  submit = "submit",
}

export interface IButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => any;
  type?: EButtonType;
}
