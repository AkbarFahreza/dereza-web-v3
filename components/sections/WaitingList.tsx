"use client";

import React, { useEffect, useState } from "react";

type TrelloCard = {
  id: string;
  name: string;
  listName: string;
};

const ALLOWED_LISTS = ["On Coding", "On Design", "Waitlist"];

export default function WaitingList() {
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
        setCards(
          data.filter((card: TrelloCard) =>
            ALLOWED_LISTS.includes(card.listName)
          )
        );
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  if (loading) return <div>Loading Trello cards...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  // Group cards by listName
  const grouped: Record<string, TrelloCard[]> = {};
  cards.forEach((card) => {
    if (!grouped[card.listName]) grouped[card.listName] = [];
    grouped[card.listName].push(card);
  });

  return (
    <div>
      <div>
        <p className="relative text-6xl font-carattere text-main before:content-[''] before:absolute before:right-0 before:bottom-1/2 before:-translate-y-1/2 md:before:w-2/5 before:w-1/5 before:h-[2px] before:bg-white">
          Waiting List
        </p>
      </div>
      <div className="mb-6 mt-6">
        {Object.entries(grouped).map(([listName, cards]) => (
          <div key={listName} className="mb-8">
            <h1 className="mb-4 text-2xl text-main">{listName}</h1>
            {cards
              .filter((card) => card.name !== listName)
              .map((card) => (
                <p key={card.id} className="font-semibold ml-6 mb-2 text-sm">
                  {card.name.match(/^(.*?-\d{2})/)?.[1]}
                </p>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
