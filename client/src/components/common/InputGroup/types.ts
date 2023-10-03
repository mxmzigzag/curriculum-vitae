import { UseFormRegister } from "react-hook-form";

export interface IInputGroupProps {
  type?: "text" | "textarea";
  label: string;
  register: UseFormRegister<any>;
  name: string;
  error?: string;
  placeholder?: string;
  isHalf?: boolean;
  className?: string;
}
