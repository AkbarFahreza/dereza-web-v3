"use client";
import React, { createContext, useContext } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  sourceLink?: string;
};

const ProjectContext = createContext<Project[]>([]);
export const useProjects = () => useContext(ProjectContext);

export default function ClientProjectProvider({
  children,
  Projects,
}: {
  children: React.ReactNode;
  Projects: Project[];
}) {
  return (
    <ProjectContext.Provider value={Projects}>
      {children}
    </ProjectContext.Provider>
  );
}
