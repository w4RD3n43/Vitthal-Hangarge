import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  gitUrl: string;
}

export const ProjectCard = ({ src, title, description, gitUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a href={gitUrl} className="cursor-pointer z-[100]">
            <img src="/gitwhite.png" alt="github" className="w-10 mt-5 "/>
        </a>
      </div>
    </div>
  );
};

