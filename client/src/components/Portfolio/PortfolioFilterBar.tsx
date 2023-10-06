import React, { type FC } from "react";
import type { IPortfolioFilterBarProps } from "./types";

const FILTER_KEYS = ["frontend", "backend", "mobile"];

const filterBtnStyles =
  "text-sm uppercase font-bold tracking-widest hover:text-cGold transition-all";
const filterBtnActiveStyles = "text-cGold";

export const PortfolioFilterBar: FC<IPortfolioFilterBarProps> = ({
  filterKey,
  setFilterKey,
}) => {
  return (
    <div className="flex items-center justify-center gap-10 mb-10">
      <button
        className={`${filterBtnStyles} ${!filterKey && filterBtnActiveStyles}`}
        onClick={() => setFilterKey("")}
      >
        All
      </button>
      {FILTER_KEYS.map((key) => (
        <button
          key={key}
          className={`${filterBtnStyles} ${
            key === filterKey && filterBtnActiveStyles
          }`}
          onClick={() => setFilterKey(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
