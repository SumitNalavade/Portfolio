import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

import useAppStore from "../../hooks/useAppState";
import { getPinnedRepositories } from "../../utils/queries";
import { IProject } from "../../utils/interfaces";

import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

const Projects: NextPage = ({  }) => {
  const { data: projects, error, isLoading } = useSWR("https://api.github.com/graphql", getPinnedRepositories);

  if(isLoading) {
    return (<div>
      <div className="mx-auto p-4 h-screen">
        <div className="rounded p-6 h-full">
          <div className="animate-pulse h-full flex flex-col justify-around">
            {Array.from({ length: 20 }, (_, index) => (
              <div key={index} className="h-4 bg-gray-300 rounded mb-2"></div>
            ))}
          </div>
        </div>
      </div>
    </div>)
  }

  if(projects) {
    useAppStore.setState({ projects }) 
  }

  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-stroke">Featured Projects</h1>
        <p className="py-2">
          Some projects I've worked on recently. Visit my GitHub page to see
          more!
        </p>
      </div>

      <div className="flex justify-between flex-wrap m-auto w-full">
        <div className="flex justify-around flex-wrap w-full">
          {projects.map((project: IProject) => (
            <Link href={`/projects/${project.name}`} key={project.name}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center items-center">
        <a
          href="https://github.com/SumitNalavade"
          target="_blank"
          rel="noopener noreferrer"
          className="border-tertiary border rounded-lg px-6 py-2 my-6 max-w-sm w-full text-center text-tertiary font-bold"
        >
          See More
        </a>
      </div>
    </Layout>
  );
};

export default Projects;
