import React, { type FC } from "react";

import type { IInputGroupProps } from "./types";

import { Input } from "../Input/Input";
import { ErrorText } from "../Input/ErrorText";

export const InputGroup: FC<IInputGroupProps> = ({
  type = "text",
  label,
  name,
  placeholder,
  error,
  isHalf = false,
  register,
  className = "",
}) => {
  return (
    <div className={`flex flex-col px-2.5 ${isHalf ? "w-1/2" : "w-full"}`}>
      <label className="text-xs uppercase font-bold tracking-widest px-5 mb-4">
        {label}
      </label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        register={register}
        className={className}
      />
      {error && <ErrorText text={error} />}
    </div>
  );
};
