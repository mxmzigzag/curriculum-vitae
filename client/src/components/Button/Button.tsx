import React from "react";
import { buttonWrapperStyles, iconStyles } from "./assets";
import DownloadIcon from "@/assets/icons/DownloadIcon";

export const Button = () => {
  return (
    <button className={buttonWrapperStyles}>
      <span>Text</span>
      <div className={iconStyles}>
        <DownloadIcon />
      </div>
    </button>
  );
};
