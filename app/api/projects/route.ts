import {NextResponse} from "next/server";
import type { NextRequest } from "next/server";

type Projects = {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    sourceLink?: string;
}

type Item = {
    data : Projects[];
}

const items: Item = {
    data: [
        {
            id: 1,
            name: "Vtuber Debut Invitation",
            description: "Auto generate Vtuber debut invitation with custom names",
            image: "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1754468655/image_8_tqex0x.png",
            link: "https://vtuber-debut-inv.netlify.app/",
            sourceLink: "https://github.com/AkbarFahreza/Vtuber-debut-inv"
        }
    ]
};

export async function GET(_request: NextRequest) {
  return NextResponse.json(items);
}