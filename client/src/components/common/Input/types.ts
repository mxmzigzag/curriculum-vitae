import { UseFormRegister } from "react-hook-form";

export interface IInputProps {
  type?: "text" | "textarea";
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  className?: string;
}
