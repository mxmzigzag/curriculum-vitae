import React from "react";
import { MyLinks } from "../MyLinks/MyLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-around p-6">
      <MyLinks />
      <p className="text-xs font-bold tracking-widest uppercase">
        © 2023 <span className="text-cGold">Max Zahorskyi</span>. ALL RIGHTS
        RESERVED
      </p>
      <p className="text-xs font-bold tracking-widest uppercase">
        Developed by{" "}
        <Link
          href="https://www.linkedin.com/in/max-zahorskyi-11390121b/"
          target="_blank"
          className="text-cGold"
        >
          me &#58;&#41;
        </Link>
      </p>
    </footer>
  );
}
