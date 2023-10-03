import React, { type FC } from "react";

interface IErrorTextProps {
  text: string;
}

export const ErrorText: FC<IErrorTextProps> = ({ text }) => {
  return <p className="text-sm text-cRed opacity-80 px-5 mt-1.5">{text}</p>;
};
