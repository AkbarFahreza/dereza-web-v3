import { NextResponse } from "next/server";

export async function GET() {
  const TRELLO_API_KEY = process.env.NEXT_PUBLIC_TRELLO_API_KEY;
  const TRELLO_TOKEN = process.env.NEXT_PUBLIC_TRELLO_TOKEN;
  const BOARD_ID = process.env.NEXT_PUBLIC_TRELLO_BOARD_ID;

  if (!TRELLO_API_KEY || !TRELLO_TOKEN || !BOARD_ID) {
    return NextResponse.json(
      { error: "Missing Trello API credentials or board ID" },
      { status: 500 }
    );
  }

  try {
    // Fetch cards
    const cardsUrl = `https://api.trello.com/1/boards/${BOARD_ID}/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
    const cardsRes = await fetch(cardsUrl, { next: { revalidate: 100 } });

    if (!cardsRes.ok) {
      const text = await cardsRes.text();
      return NextResponse.json(
        { error: text || "Trello cards API error" },
        { status: cardsRes.status }
      );
    }

    const cardsContentType = cardsRes.headers.get("content-type");
    if (!cardsContentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid cards response format" },
        { status: 500 }
      );
    }

    const cards = await cardsRes.json();

    // Fetch lists
    const listsUrl = `https://api.trello.com/1/boards/${BOARD_ID}/lists?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
    const listsRes = await fetch(listsUrl, { next: { revalidate: 300 } });

    if (!listsRes.ok) {
      const text = await listsRes.text();
      return NextResponse.json(
        { error: text || "Trello lists API error" },
        { status: listsRes.status }
      );
    }

    const lists = await listsRes.json();
    const listMap: Record<string, string> = Object.fromEntries(
      lists.map((list: any) => [list.id, list.name])
    );

    // Enrich cards with listName
    const enrichedCards = cards.map((card: any) => ({
      ...card,
      listName: listMap[card.idList] || "Unknown",
    }));

    return NextResponse.json(enrichedCards);
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Server error", message: error.message },
      { status: 500 }
    );
  }
}