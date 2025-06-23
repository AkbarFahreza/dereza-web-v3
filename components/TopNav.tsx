"use client";
import React, { useState, useEffect } from "react";
import { Carattere, Roboto } from "next/font/google";
import Link from "next/link";
import LeftMenu from "./LeftMenu";

const carattere = Carattere({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); // adjust threshold as needed
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 py-2 md:py-3 flex flex-col w-full items-center justify-center  z-20 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-main/10 backdrop-brightness-[0.3]" : ""
      }`}
    >
      <ul
        className={`${roboto.className}  hidden md:flex flex-row items-center gap-8 w-full max-w-3xl text-base justify-center`}
      >
        <li>
          <Link href="#">Portfolio</Link>
        </li>
        <li>
          <Link href="#" className="text-[#EAD145]">
            Featuring
          </Link>
        </li>
        <li
          className={`${carattere.className} text-4xl bg-gradient-to-br from-main to-secondary text-transparent bg-clip-text`}
        >
          <Link href="#">Dereza</Link>
        </li>
        <li>
          <Link href="#">TOS</Link>
        </li>
        <li>
          <Link href="#">Pricelist</Link>
        </li>
      </ul>
      <div className="flex flex-col relative w-full ">
        <div className={`md:hidden flex flex-row justify-between px-6 `}>
          <Link
            href="#"
            className={`${carattere.className} text-4xl bg-gradient-to-br from-main to-secondary text-transparent bg-clip-text`}
          >
            Dereza
          </Link>

          <button className=" focus:outline-none" onClick={toggleMenu}>
            <div
              className={`block w-7 h-[4px] transition-transform duration-300 transform rounded-lg ${
                isOpen ? "rotate-45 translate-y-2 bg-white " : "bg-white"
              }`}
            ></div>
            <div
              className={`block w-7 h-[4px] my-1 transition-opacity duration-300 rounded-lg ${
                isOpen ? "opacity-0" : "bg-white"
              }`}
            ></div>
            <div
              className={`block w-7 h-[4px] transition-transform duration-300 transform rounded-lg ${
                isOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-white"
              }`}
            ></div>
          </button>
        </div>
        <div
          className={`absolute md:hidden -top-10 left-0 px-6 pt-6 w-full origin-top-left min-h-[120vh]  flex flex-col items-start justify-start transition-all duration-500 transform -z-50 ${
            isOpen
              ? "translate-y-0 opacity-100 bg-main/10 backdrop-brightness-[0.3] backdrop-blur-md"
              : "-translate-y-[200vh] opacity-0"
          }`}
        >
          <div className="mt-24">{isOpen && <LeftMenu fn={toggleMenu} />}</div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
