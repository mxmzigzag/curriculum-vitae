import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { SkillCard } from "./Card/SkillCard";
import { SKILLS } from "./data";

export const Skills = () => {
  return (
    <section
      className="flex flex-col items-center h-screen py-28"
      data-id="skills"
    >
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
