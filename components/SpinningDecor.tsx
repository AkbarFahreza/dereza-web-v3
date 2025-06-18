"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SpinningDecor() {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      setRotation((prev) => prev + delta * 0.1); // Positive for down, negative for up
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[200vh] fixed top-5 -left-44 items-center opacity-30 justify-center">
      <div
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 1s linear",
        }}
      >
        <Image
          src="/spinning-decor.svg"
          width={480}
          height={479}
          alt="spinning decor"
        />
      </div>
    </div>
  );
}
