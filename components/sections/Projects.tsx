import React from "react";
import ProjectList from "./projects/projectList";

function Projects() {
  return (
    <div>
      <div>
        <p className="relative text-6xl font-carattere text-main before:content-[''] before:absolute before:right-0 before:bottom-1/2 before:-translate-y-1/2 md:before:w-2/5 before:w-1/5 before:h-[2px] before:bg-white">
          Projects
        </p>
      </div>
      <ProjectList />
    </div>
  );
}

export default Projects;
