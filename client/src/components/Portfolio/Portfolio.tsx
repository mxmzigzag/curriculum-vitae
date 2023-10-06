"use client";

import React, { useMemo, useState } from "react";

import { SectionHeading } from "../SectionHeading/SectionHeading";
import { PortfolioFilterBar } from "./PortfolioFilterBar";
import { PortfolioGrid } from "./PortfolioGrid";

export const Portfolio = () => {
  const [filterKey, setFilterKey] = useState<string>("");

  const dataFromAPI: any[] = [];

  const filteredData = useMemo(
    () => dataFromAPI.filter((item) => item.category === filterKey),
    [filterKey, dataFromAPI]
  );

  return (
    <section
      id="portfolio"
      className="flex flex-col items-center h-screen py-28"
    >
      <SectionHeading text="Portfolio" />
      <PortfolioFilterBar filterKey={filterKey} setFilterKey={setFilterKey} />
      <PortfolioGrid data={filteredData} />
    </section>
  );
};
