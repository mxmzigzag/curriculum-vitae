"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getActiveSection } from "./assets";

import LogoIcon from "@/assets/icons/LogoIcon";

const NAV_ITEMS = [
  { id: 0, title: "Home", link: "#home" },
  { id: 1, title: "Services", link: "#services" },
  { id: 2, title: "Skills", link: "#skills" },
  { id: 3, title: "Portfolio", link: "#portfolio" },
  { id: 4, title: "Resume", link: "#resume" },
  { id: 5, title: "Reviews", link: "#reviews" },
  { id: 6, title: "Contact", link: "#contact" },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    getActiveSection(sections, setActiveItem);

    const hanldeScroll = () => getActiveSection(sections, setActiveItem);
    window.addEventListener("scroll", hanldeScroll);
    return () => window.removeEventListener("scroll", hanldeScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 z-10">
      <Link href={NAV_ITEMS[0].link}>
        <LogoIcon className="text-cGold" />
      </Link>
      <nav className="flex gap-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            className={`uppercase font-bold tracking-widest hover:text-cGold transition-all ${
              activeItem === item.link.slice(1) ? "text-cGold" : "text-cWhite"
            }`}
            href={`/${item.link}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
