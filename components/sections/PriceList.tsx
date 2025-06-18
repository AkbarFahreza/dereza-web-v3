"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import YoutubeChatCSS from "./commissions/YoutubeChatCSS";
import TrakteerGoal from "./commissions/TrakteerGoal";

type Option = {
  label: string;
  value: string;
};

const defaultOption: Option = { label: "Youtube Livechat CSS", value: "YTLC" };

export default function PriceList() {
  const [selected, setSelected] = useState<Option | null>(defaultOption);

  return (
    <div>
      <div className="">
        <p className="relative text-6xl font-carattere text-main before:content-[''] before:absolute before:left-64 before:bottom-1/2 before:-translate-y-1/2 md:before:w-2/5 before:w-1/5 before:h-[2px] before:bg-white">
          Commissions
        </p>
      </div>
      <div className="flex flex-row justify-between mt-6 items-center">
        <p className=" text-base md:text-2xl">Price list</p>
        <CommissionType selected={selected} setSelected={setSelected} />
      </div>

      <div className="mt-5">
        {selected?.value === "YTLC" && <YoutubeChatCSS />}
        {selected?.value === "TTG" && <TrakteerGoal />}
      </div>
    </div>
  );
}

type CommissionTypeProps = {
  selected: Option | null;
  setSelected: (option: Option) => void;
};

export function CommissionType({ selected, setSelected }: CommissionTypeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options: Option[] = [
    { label: "Youtube Livechat CSS", value: "YTLC" },
    { label: "Trakteer Goal", value: "TTG" },
  ];

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-fit">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full md:px-4 py-2 flex flex-row text-sm md:text-base gap-x-4 cursor-pointer text-secondary selection:none"
      >
        {selected ? selected.label : "Youtube Livechat CSS"}
        <Image
          src="/arrow.svg"
          width={15}
          height={21}
          alt="arrow down"
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-[#1E1E2E] z-10 mt-1 w-max border right-5 rounded-md shadow-lg"
          >
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className="text-sm md:text-base px-4 py-2 cursor-pointer hover:text-secondary duration-300 transition-all"
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
