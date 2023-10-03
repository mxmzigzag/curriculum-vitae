import React from "react";
import type { SquaredIconProps } from "./types";

function SubmitIcon({ size = 24, className = "" }: SquaredIconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 14l11 -11" />
      <path
        d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
        fill="transparent"
      />
    </svg>
  );
}

export default SubmitIcon;
