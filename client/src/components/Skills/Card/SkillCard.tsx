import React, { type FC } from "react";
import { ISkillCard } from "./types";

export const SkillCard: FC<ISkillCard> = ({ title, description, percent }) => {
  return (
    <div className="flex flex-col w-1/4 p-5">
      <div className="flex flex-col p-5 mb-6">
        <div className="flex items-center justify-between w-full mb-5">
          <p className="text-xl font-bold">{title}</p>
          <span className="text-lg font-bold">
            {percent}
            <span className="text-cGold ml-1.5">%</span>
          </span>
        </div>
        <p className="text-cWhite text-justify opacity-80">{description}</p>
      </div>
      <div className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:right-0 before:h-[2px] before:bg-cLightBlack">
        <span
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cLightBlack border-2 border-solid border-cGold"
          style={{
            left: `${percent - 5}%`,
          }}
        />
      </div>
    </div>
  );
};
