import React, { type FC } from "react";

import { buttonWrapperStyles, iconStyles } from "./assets";
import { EButtonType, IButtonProps } from "./types";

export const Button: FC<IButtonProps> = ({
  text,
  icon,
  onClick,
  type = EButtonType.button,
}) => {
  return (
    <button type={type} className={buttonWrapperStyles} onClick={onClick}>
      <span>{text}</span>
      <div className={iconStyles}>{icon}</div>
    </button>
  );
};
