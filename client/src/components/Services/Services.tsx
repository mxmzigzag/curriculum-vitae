import React from "react";

import { SERVICES } from "./data";

import { SectionHeading } from "../SectionHeading/SectionHeading";
import { ServiceCard } from "./Card/ServiceCard";

export const Services = () => {
  return (
    <section className="flex flex-col items-center h-screen py-16">
      <SectionHeading text="Services" />
      <div className="flex justify-between gap-10 w-full">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};
