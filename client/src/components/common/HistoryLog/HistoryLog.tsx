import React, { type FC } from "react";
import type { IHistoryLogProps } from "./types";
import CalendarIcon from "@/assets/icons/CalendarIcon";

export const HistoryLog: FC<IHistoryLogProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <div key={item.id} className="flex">
          <div className="flex justify-center w-16 relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-cGray">
            <div className="flex items-center justify-center rounded-full bg-cGold w-10 h-10 z-10">
              <CalendarIcon size={20} className="text-cWhite" />
            </div>
          </div>
          <div className="flex flex-col items-start flex-1 pt-2 pb-10 px-2.5">
            <span className="text-cWhite text-xs uppercase leading-none font-bold tracking-widest bg-cLightBlack rounded px-2 py-1.5 mb-4">
              {item.time}
            </span>
            <p className="uppercase font-bold tracking-widest">
              <span className="text-xl">{item.title}</span> - {item.subtitle}
            </p>
            {item.body && (
              <p className="text-sm opacity-80 mt-2.5">{item.body}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
