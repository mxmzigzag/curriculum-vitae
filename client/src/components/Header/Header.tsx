"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getActiveSection, getHashedRoute } from "./assets";

import LogoIcon from "@/assets/icons/LogoIcon";
import { EStaticRoutes } from "./types";

const NAV_ITEMS = [
  { id: 0, title: "Home", link: getHashedRoute(EStaticRoutes.home) },
  { id: 1, title: "Services", link: getHashedRoute(EStaticRoutes.services) },
  { id: 2, title: "Skills", link: getHashedRoute(EStaticRoutes.skills) },
  { id: 3, title: "Portfolio", link: getHashedRoute(EStaticRoutes.portfolio) },
  { id: 4, title: "Resume", link: getHashedRoute(EStaticRoutes.resume) },
  { id: 5, title: "Reviews", link: getHashedRoute(EStaticRoutes.reviews) },
  { id: 6, title: "Contact", link: getHashedRoute(EStaticRoutes.contact) },
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
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 z-10 bg-gradient-to-b from-cBlack to-transparent to-90%">
      <Link href={getHashedRoute(EStaticRoutes.home)}>
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
