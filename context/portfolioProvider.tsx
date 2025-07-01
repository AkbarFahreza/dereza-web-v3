"use client";
import React, { createContext, useContext } from "react";

type Portfolio = {
  id: number;
  name: string;
  image: string;
  sourceLink: string;
  category: string;
  Datecreated: string;
};

const PortfolioContext = createContext<Portfolio[]>([]);
export const usePortfolios = () => useContext(PortfolioContext);

export default function ClientPortfolioProvider({
  children,
  portfolios,
}: {
  children: React.ReactNode;
  portfolios: Portfolio[];
}) {
  return (
    <PortfolioContext.Provider value={portfolios}>
      {children}
    </PortfolioContext.Provider>
  );
}
