import React, { type FC } from "react";
import type { ISectionHeadingProps } from "./types";

export const SectionHeading: FC<ISectionHeadingProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center relative py-10 mb-14">
      <h2 className="text-4xl font-bold uppercase tracking-widest z-10">
        {text}
      </h2>
      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-50 text-8xl text-cBlack uppercase font-bold drop-shadow-[0_0px_1.2px_rgba(223,178,82,0.9)]">
        {text}
      </span>
    </div>
  );
};
