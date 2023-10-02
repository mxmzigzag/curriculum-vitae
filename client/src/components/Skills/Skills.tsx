import React from "react";

import { SKILLS } from "./data";

import { SectionHeading } from "../SectionHeading/SectionHeading";
import { SkillCard } from "./Card/SkillCard";

export const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center h-screen py-28">
      <SectionHeading text="Skills" />
      <div className="flex flex-wrap w-full">
        {SKILLS.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            percent={skill.percent}
          />
        ))}
      </div>
    </section>
  );
};
