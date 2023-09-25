import React from "react";
import Image from "next/image";
import Link from "next/link";

import MZ from "@/assets/images/mz.png";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import { DownloadButton } from "../DownloadButton/DownloadButton";
import { InfoPill } from "../InfoPill/InfoPill";
import { pillMainText, pillNumber, pillSecondaryText } from "./assets";

const MY_LINKS = [
  {
    id: "github",
    icon: <GithubIcon size={32} />,
    link: "https://github.com/mxmzigzag",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon size={32} />,
    link: "https://www.linkedin.com/in/max-zahorskyi-11390121b/",
  },
];

export const Banner = () => {
  return (
    <section className="flex items-center relative h-screen">
      <div className="flex flex-col items-baseline">
        <p className="uppercase font-bold tracking-widest">
          Hello, <span className="text-cGold">my name is</span>
        </p>
        <h1 className="mt-4 text-8xl font-bold tracking-widest uppercase">
          <span className="text-cGold">Max</span> Zahorskyi
        </h1>
        <div className="flex items-center mt-2.5">
          <span className="uppercase font-bold tracking-widest">I am</span>
          <span className="text-2xl italic ml-2 tracking-widest">
            Software Developer
          </span>
        </div>
        <div className="py-10 max-w-2xl">
          <p className="text-lg opacity-70">
            From Vinnytsia, Ukraine. I have a high proficiency in software
            development sphere and commercial experience in modern development
            processes.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {MY_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="hover:text-cGold transition-all"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <DownloadButton text="Download CV" filePath="/cv.pdf" />
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
