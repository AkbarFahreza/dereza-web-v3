"use client";

import { useEffect } from "react";

const SECTION_IDS = [
  "home",
  "pricelist",
  "term-of-service",
  "portfolio",
  "waiting-list",
  "projects",
  "partners",
];

type Props = {
  onHashChange?: (hash: string) => void;
};

export default function ScrollHashUpdater({ onHashChange }: Props) {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (window.location.hash !== `#${id}`) {
            history.replaceState(null, document.title, `#${id}`);
            if (onHashChange) onHashChange(`#${id}`);
          }
        }
      },
      { threshold: 0.5 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHashChange]);

  return null;
}
