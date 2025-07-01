"use client";

import { useState } from "react";
import { usePortfolios } from "../../../context/portfolioProvider";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type Option = {
  label: string;
  value: string;
};

// 🔽 Dropdown Component
export function CommissionType({
  selected,
  setSelected,
  options,
}: {
  selected: Option | null;
  setSelected: (option: Option) => void;
  options: Option[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-fit">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full  py-2 flex flex-row text-xs md:text-base gap-x-4 cursor-pointer text-secondary"
      >
        {selected ? selected.label : "Select Category"}
        <Image
          src="/arrow.svg"
          width={15}
          height={21}
          alt="arrow down"
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
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
                className="text-xs md:text-base px-4 py-2 cursor-pointer hover:text-secondary transition-all duration-300"
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

// 🔼 Main Component
export default function PortfolioList() {
  const portfolios = usePortfolios();

  const categories = [...new Set(portfolios.map((item) => item.category))];
  const options: Option[] = categories.map((cat) => ({
    label: cat,
    value: cat,
  }));

  const [selected, setSelected] = useState<Option | null>(options[0] || null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = portfolios.filter((p) => p.category === selected?.value);
  const visiblePortfolios = filtered.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div>
      <div className="flex justify-between mt-6 items-center">
        <p className="text-sm md:text-2xl">Portfolios : {portfolios.length}</p>
        <CommissionType
          selected={selected}
          setSelected={(opt) => {
            setSelected(opt);
            setVisibleCount(6); // reset on change
          }}
          options={options}
        />
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
        {visiblePortfolios.map((item) => (
          <Link
            href={item.sourceLink}
            key={item.id}
            className="hover:scale-[1.02] transition relative"
          >
            <img src={item.image} alt={item.name} className="w-full h-auto" />
            <p className="mt-2 font-semibold text-xs md:text-sm absolute bottom-0 left-0 px-3 pb-2 pt-20 text-main bg-gradient-to-t from-black to-transparent w-full">
              {item.name}
            </p>
            {/* <a
              href={item.sourceLink}
              target="_blank"
              className="text-blue-500 underline text-sm"
            >
              Source
            </a> */}
          </Link>
        ))}
      </div>
      {/* 
      {visiblePortfolios.length < filtered.length && ( */}
      <div className="flex justify-center mt-6">
        <Link
          href="https://x.com/Revernry/media"
          className=" text-secondary py-2 rounded hover:text-secondary/80 transition-all duration-300 text-sm md:text-base "
        >
          See More
        </Link>
      </div>
      {/* )} */}
    </div>
  );
}
