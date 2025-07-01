import type { Metadata } from "next";
import { Cantata_One, Carattere, Calistoga } from "next/font/google";
import "./globals.css";

import ClientPortfolioProvider from "@/context/portfolioProvider";
import Portfolio from "@/components/sections/Portfolio";
const cantataOne = Cantata_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cantata-one",
});

const carattere = Carattere({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-carattere",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

export const metadata = {
  title: "DekReza's Page",
  description:
    "Hi I am Reza, I do coding custom YT CHAT CSS for Vtuber/Streamer, open for collaboration projects, take a look at my portfolio here ✨",
  openGraph: {
    title: "DekReza's Portfolio Page",
    description:
      "Hi I am Reza, I do coding custom YT CHAT CSS for Vtuber/Streamer, open for collaboration projects, take a look at my portfolio here ✨",
    url: "https://dereza.my.id/",
    images: [
      {
        url: "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700500680/Group_35_2_wiftx7.png",
        width: 1200,
        height: 630,
        alt: "DekReza's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DekReza's Portfolio Page",
    description:
      "Hi I am Reza, I do coding custom YT CHAT CSS for Vtuber/Streamer, open for collaboration projects, take a look at my portfolio here ✨",
    images: [
      "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700500680/Group_35_2_wiftx7.png",
    ],
  },
};
async function getPortfolios() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.dereza.my.id"
      : "http://localhost:3000";

  const res = await fetch(`/api/portfolios`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch portfolios");
  }

  return res.json();
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const raw = await getPortfolios();
  const portfolio = raw[0].data;
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cantataOne.variable} ${calistoga.variable} ${carattere.variable} ${cantataOne.className} antialiased max-w-screen overflow-x-hidden relative `}
      >
        <ClientPortfolioProvider portfolios={portfolio}>
          {children}
        </ClientPortfolioProvider>
      </body>
    </html>
  );
}
