import React, { memo, type FC } from "react";
import type { ISectionHeadingProps } from "./types";

export const SectionHeading: FC<ISectionHeadingProps> = memo(({ text }) => {
  return (
    <div className="flex items-center justify-center relative py-10 mb-16">
      <h2 className="text-4xl font-bold uppercase tracking-widest z-10">
        {text}
      </h2>
      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-50 text-8xl text-cBlack uppercase font-bold whitespace-nowrap drop-shadow-[0_0px_1.2px_rgba(223,178,82,0.9)]">
        {text}
      </span>
    </div>
  );
});

SectionHeading.displayName = "SectionHeading";
