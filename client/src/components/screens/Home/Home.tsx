import React from "react";

import { Banner } from "@/components/Banner/Banner";
import { Services } from "@/components/Services/Services";
import { Skills } from "@/components/Skills/Skills";

export const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Services />
      <Skills />
    </>
  );
};
