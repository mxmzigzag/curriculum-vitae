"use client";

import LogoIcon from "@/assets/icons/LogoIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NAV_ITEMS = [
  { id: 0, title: "Home", link: "" },
  { id: 1, title: "Services", link: "#services" },
  { id: 2, title: "Skills", link: "#skills" },
  { id: 3, title: "Portfolio", link: "#portfolio" },
  { id: 4, title: "Resume", link: "#resume" },
  { id: 5, title: "Reviews", link: "#reviews" },
  { id: 6, title: "Contact", link: "#contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-6">
      <Link href={NAV_ITEMS[0].link}>
        <LogoIcon className="text-cGold" />
      </Link>
      <nav className="flex gap-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            className="uppercase font-bold tracking-widest hover:text-cGold transition-all"
            href={`/${item.link}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
