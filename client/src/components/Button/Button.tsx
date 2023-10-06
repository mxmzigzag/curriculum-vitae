import React, { memo, type FC } from "react";

import {
  activeButtonWrapperStyles,
  disabledButtonWrapperStyles,
  iconStyles,
} from "./assets";
import { EButtonType, IButtonProps } from "./types";

export const Button: FC<IButtonProps> = memo(
  ({ text, icon, onClick, type = EButtonType.button, disabled = false }) => {
    return (
      <button
        type={type}
        className={
          disabled ? disabledButtonWrapperStyles : activeButtonWrapperStyles
        }
        onClick={onClick}
        disabled={disabled}
      >
        <span>{text}</span>
        <div className={iconStyles}>{icon}</div>
      </button>
    );
  }
);

Button.displayName = "Button";
