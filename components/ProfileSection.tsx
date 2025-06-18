"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type TrelloCard = {
  id: string;
  name: string;
  listName: string;
  [key: string]: any;
};

function ProfileSection() {
  const [cards, setCards] = useState<TrelloCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/trello");
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to fetch Trello cards");
        }
        const data = await res.json();
        // Only keep cards from the Waitlist board
        setCards(data.filter((card: TrelloCard) => card.listName === "Status"));
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  if (loading) return <div>Loading Waitlist cards...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  console.log(cards);
  return (
    <div className="flex flex-col jsutify-center align-bottom">
      <Image
        className="mx-auto rotate-5"
        src="/profile-picture.png"
        width={210}
        height={234}
        alt="profile picture"
      />
      <div className="flex flex-row items-center gap-0.5 align-middle mx-auto  mt-6">
        <p>Status : {cards[0]?.name}</p>
        <span
          className={`${
            cards[0]?.name === "Open"
              ? "bg-[#45EA69]"
              : cards[0]?.name === "Closed"
              ? "bg-[#EA4548]"
              : "bg-[#FFD700]"
          } h-2 p-[5px] w-2 bg-[#45EA69] translate-x-[15px] rounded-full`}
        ></span>
        <span
          className={`${
            cards[0]?.name === "Open"
              ? "bg-[#45EA69]"
              : cards[0]?.name === "Closed"
              ? "bg-[#EA4548]"
              : "bg-[#FFD700]"
          } h-2 p-2 w-2 rounded-full animate-ping`}
        ></span>
      </div>
      <p className="text-center text-sm text-ghost mt-4">
        Bring your stream to life with personalized YouTube chat overlays and
        Trakteer goal widgets — beautifully designed and custom-coded just for
        you.
      </p>
      <div className="flex flex-row gap-x-4 justify-center mt-5">
        <Image src="/x-icon.svg" width={19} height={17} alt="twitter icon" />
        <Image src="/kofi-icon.svg" width={25} height={16} alt="ko-fi icon" />
        <Image
          src="/trakteer-icon.svg"
          width={16}
          height={27}
          alt="trakteer icon"
        />
      </div>
    </div>
  );
}

export default ProfileSection;
