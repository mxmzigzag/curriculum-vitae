import React, { type FC } from "react";

import type { IInputProps } from "./types";
import { baseInputStyles } from "./assets";

export const Input: FC<IInputProps> = ({
  type = "text",
  name,
  placeholder,
  register,
  className = "",
}) => {
  if (type === "textarea") {
    return (
      <textarea
        {...register(name)}
        id={name}
        name={name}
        rows={5}
        placeholder={placeholder}
        className={`${baseInputStyles} h-auto py-2.5 capitalize ${className}`}
      />
    );
  }
  return (
    <input
      {...register(name)}
      id={name}
      name={name}
      placeholder={placeholder}
      className={`${baseInputStyles} ${className}`}
    />
  );
};
