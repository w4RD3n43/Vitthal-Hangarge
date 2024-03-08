import React from "react";
import {ProjectCard} from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
        <div className="h-full w-full flex flex-col gap-10 px-10 md:grid md:grid-cols-3  ">
        <ProjectCard
            src="/portfolio.png"
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            gitUrl="https://github.com/w4RD3n43/browser-extension"
          />
          <ProjectCard
            src="/browser.png"
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            gitUrl="https://github.com/w4RD3n43/browser-extension"
          />

          <ProjectCard
            src="/fotoflix.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            gitUrl="https://github.com/w4RD3n43/image-gallery-webpage"
          />
          <ProjectCard
          src="/todo.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          gitUrl="https://github.com/w4RD3n43/TO-DO-REACT-APP"
        />
        </div>
    </div>
  );
};

export default Projects;