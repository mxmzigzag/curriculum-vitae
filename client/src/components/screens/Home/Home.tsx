import React from "react";

import { Banner } from "@/components/Banner/Banner";
import { Services } from "@/components/Services/Services";
import { Skills } from "@/components/Skills/Skills";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Resume } from "@/components/Resume/Resume";
import { Reviews } from "@/components/Reviews/Reviews";
import { Contact } from "@/components/Contact/Contact";

export const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Reviews />
      <Contact />
    </>
  );
};
