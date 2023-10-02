import React, { FC } from "react";

import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import Link from "next/link";

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

export const MyLinks: FC = () => {
  return (
    <div className="flex items-center gap-4">
      {MY_LINKS.map((link) => (
        <Link
          key={link.id}
          href={link.link}
          target="_blank"
          className="hover:text-cGold transition-all"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};
