import React from "react";
import Image from "next/image";

import { IProject } from "../utils/interfaces";

import { AiFillGithub } from "react-icons/ai";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-gray-50 my-6 flex flex-col rounded-lg max-w-[375px]">
      <div className="flex justify-center max-w-sm">
        <Image
          loader={() => project.openGraphImageUrl}
          src="project.png"
          alt={project.name}
          height={30}
          width={30}
          layout="responsive"
        />
      </div>

      <div className="flex flex-col h-56 p-2 max-w-[350px]">
        <div className="flex flex-col p-2">
          <div className="flex justify-between">
            <p className="font-bold text-xl text-stroke">{project.name}</p>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="z-2"
            >
              <AiFillGithub className="inline-block" />
            </a>
          </div>
          <p className="my-2 text-blue-200">
            {project.primaryLanguage.name}
          </p>

          <div className="max-w-[350px] overflow-auto">
            <p className="overflow-wrap-normal text-gray-500">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
