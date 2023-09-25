import React, { type FC } from "react";
import { IInfoPillProps } from "./types";

export const InfoPill: FC<IInfoPillProps> = ({
  customStyles = "",
  children,
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-3 w-[250px] h-[80px] bg-cLightBlack px-5 rounded-full border-2 border-solid border-cGray ${customStyles}`}
    >
      {children}
    </div>
  );
};
