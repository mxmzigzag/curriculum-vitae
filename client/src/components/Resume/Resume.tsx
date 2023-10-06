import React from "react";

import { RESUME_EDU, RESUME_EXP } from "./data";

import { SectionHeading } from "../SectionHeading/SectionHeading";
import { HistoryLog } from "../common/HistoryLog/HistoryLog";

export const Resume = () => {
  return (
    <section id="resume" className="flex flex-col items-center h-screen py-28">
      <SectionHeading text="Resume" />
      <div className="flex gap-10 w-full">
        <div className="w-1/2">
          <HistoryLog data={RESUME_EXP} />
        </div>
        <div className="w-1/2">
          <HistoryLog data={RESUME_EDU} />
        </div>
      </div>
    </section>
  );
};
