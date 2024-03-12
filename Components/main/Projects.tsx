import React from "react";
import {ProjectCard} from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
        My Projects
      </h1>
        <div className="h-full w-full flex flex-col gap-10 px-10 md:grid md:grid-cols-3  ">
          <ProjectCard
            src="/download.png"
            title="Modern Next.js Portfolio"
            description="Explore my portfolio showcasing dynamic and interactive web experiences crafted with Next.js for seamless navigation, Three.js for stunning 3D visualizations, Framer Motion for smooth animations, and React Three Fiber for immersive 3D elements."
            gitUrl="https://github.com/w4RD3n43/Vitthal-Hangarge"
          />
          <ProjectCard
            src="/movie-app.png"
            title=" MERN stack Movie App"
            description="Build your movie collection with our app, leveraging MongoDB for storage, GraphQL for efficient data management, Apollo Client for seamless client-server communication, all powered by the flexibility and speed of ReactJS."
            gitUrl="https://github.com/w4RD3n43/Movie-app"
          />
          <ProjectCard
            src="/browser.png"
            title="Browser Extension"
            description="Enhance your browsing experience with our React-powered browser extension. Utilizing reducers and hooks, along with local storage, the extension memorizes user input, ensuring a seamless and personalized browsing experience"
            gitUrl="https://github.com/w4RD3n43/browser-extension"
          />
          <ProjectCard
            src="/fotoflix.png"
            title="Fotoflix"
            description="Explore a stunning image gallery with a search feature, powered by the Unsplash API. Using React for the frontend, easily manage and favorite photos with state management, creating a personalized collection of your favorite images"
            gitUrl="https://github.com/w4RD3n43/image-gallery-webpage"
          />
          <ProjectCard
            src="/todo.png"
            title="TO-DO"
            description="Stay organized with our TODO app! Manage your tasks effortlessly with a user-friendly interface built using React, ensuring a smooth and efficient task management experience."
            gitUrl="https://github.com/w4RD3n43/TO-DO-REACT-APP"
          />
        </div>
    </div>
  );
};

export default Projects;