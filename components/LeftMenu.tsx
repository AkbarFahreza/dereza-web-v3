"use client";

import ScrollHashUpdater from "@/utils/ScrollHashupdater";
import React, { useEffect, useState, useCallback } from "react";

const MenuList = [
  { id: 1, name: "Pricelist", href: "#pricelist" },
  { id: 2, name: "Term of service", href: "#term-of-service" },
  { id: 3, name: "Portfolio", href: "#portfolio" },
  { id: 4, name: "Waiting list", href: "#waiting-list" },
  { id: 5, name: "Projects", href: "#projects" },
  { id: 6, name: "Featuring", href: "#featuring" },
];

function LeftMenu() {
  const [activeHash, setActiveHash] = useState<string>("");

  // Callback for ScrollHashUpdater
  const handleHashChange = useCallback((hash: string) => {
    setActiveHash(hash);
  }, []);

  // Also update on manual hash change (e.g., clicking menu)
  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-4">
        <ScrollHashUpdater onHashChange={handleHashChange} />
        {MenuList.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`gap-y-4 transition-all duration-300 min-h-[30px] max-h-[30px] ease-in-out inline-block
                 align-baseline
              ${
                activeHash === item.href
                  ? "text-main font-carratere text-2xl translate-x-1/5 relative before:content-[''] before:absolute before:-left-2/5 before:-bottom-[5px] before:w-3/5 before:h-[2px] before:bg-white before:transition-all before:duration-1000 before:ease-in-out"
                  : "text-base before:w-0"
              }
            `}
          >
            {item.name}
          </a>
        ))}
      </div>

      <p className="text-[12px] text-ghost">
        Please read all the informations properly, if you have something you
        don’t understand, feel free to contact me
      </p>
    </div>
  );
}

export default LeftMenu;
