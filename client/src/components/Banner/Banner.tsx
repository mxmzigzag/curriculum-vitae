import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getHashedRoute } from "../Header/assets";
import { EStaticRoutes } from "../Header/types";
import {
  pillMainText,
  pillNumber,
  pillSecondaryText,
  skillsLinkStyles,
} from "./assets";
import { DownloadButton } from "../DownloadButton/DownloadButton";
import { InfoPill } from "../InfoPill/InfoPill";

import { sedgwick } from "@/app/layout";
import MZ from "@/assets/images/mz.png";
import { MyLinks } from "../MyLinks/MyLinks";

export const Banner = () => {
  return (
    <section id="home" className="flex items-center relative h-screen py-28">
      <div className="flex flex-col items-baseline">
        <p className="uppercase font-bold tracking-widest">
          Hello, <span className="text-cGold">my name is</span>
        </p>
        <h1 className="mt-4 text-8xl font-bold tracking-widest uppercase">
          <span className="text-cGold">Max</span> Zahorskyi
        </h1>
        <div className="flex items-center mt-2.5">
          <span className="uppercase font-bold tracking-widest mr-2">I am</span>
          <span className={`${sedgwick.className} text-2xl`}>
            Software Developer
          </span>
        </div>
        <div className="py-10 max-w-2xl">
          <p className="text-lg opacity-70 mb-6">
            From Vinnytsia, Ukraine. I have a high proficiency in software
            development sphere and commercial experience in modern development
            processes.
          </p>
          <MyLinks />
        </div>
        <div className="flex items-center w-full">
          <DownloadButton text="Download CV" filePath="/cv.pdf" />
          <Link
            href={getHashedRoute(EStaticRoutes.skills)}
            className={skillsLinkStyles}
          >
            My skills
          </Link>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/4">
        <Image
          src={MZ}
          alt="MZ"
          className="absolute bottom-0 rounded-full w-full"
        />
        <div className="bg-cGold rounded-full w-[500px] h-[500px]" />
        <div className="flex flex-col absolute bottom-10 left-0 right-0">
          <InfoPill customStyles="-ml-10">
            <span className={pillNumber}>7</span>
            <span className={pillNumber}>+</span>
            <div className="flex flex-col">
              <span className={pillMainText}>years of</span>
              <span className={pillSecondaryText}>experience</span>
            </div>
          </InfoPill>
          <InfoPill customStyles="ml-auto -mr-5 -mt-4">
            <span className={pillNumber}>70</span>
            <div className="flex flex-col">
              <span className={pillMainText}>completed</span>
              <span className={pillSecondaryText}>projects</span>
            </div>
          </InfoPill>
        </div>
      </div>
    </section>
  );
};
