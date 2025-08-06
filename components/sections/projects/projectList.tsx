"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("/api/projects", {
          cache: "no-store", // or you can use next: { revalidate: 60 } if needed
        });
        const data = await res.json();
        setProjects(data.data ?? []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading && <p className="text-white">Loading...</p>}
        {!loading &&
          projects.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="hover:scale-[1.02] transition relative rounded-lg overflow-hidden"
            >
              <img src={item.image} alt={item.name} className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 px-3 pb-2 pt-24 text-main bg-gradient-to-t from-black to-transparent w-full">
                <p className="mt-2 font-semibold text-sm md:text-md text-main">
                  {item.name}
                </p>
                <p className="mt-1 font-light text-[10px] md:text-sm text-white">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link
          href="https://x.com/Revernry/media"
          className="text-secondary py-2 rounded hover:text-secondary/80 transition-all duration-300 text-sm md:text-base"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
