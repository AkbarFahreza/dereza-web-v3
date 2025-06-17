import React from "react";
import { Carattere, Roboto } from "next/font/google";
import Link from "next/link";

const carattere = Carattere({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

function TopNav() {
  return (
    <ul
      className={`${roboto.className} hidden lg:flex absolute top-5 left-1/2 -translate-x-1/2  items-center justify-center gap-8 w-full max-w-3xl text-base`}
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
  );
}

export default TopNav;
