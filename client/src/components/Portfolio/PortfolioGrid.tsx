import React, { type FC } from "react";
import type { IPortfolioGridProps } from "./types";

export const PortfolioGrid: FC<IPortfolioGridProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-10">
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
