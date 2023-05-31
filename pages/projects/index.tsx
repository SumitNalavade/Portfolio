import React from "react";
import { NextPage, GetServerSideProps } from "next";

import useAppStore from "../../hooks/useAppState";
import { getPinnedRepositories } from "../../utils/queries";
import { IProject } from "../../utils/interfaces";

import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

interface Props {
  projects: IProject[];
}

const Projects: NextPage<Props> = ({ projects }) => {
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
          {projects.map((project) => (
            <a href={`/projects/${project.name}`} key={project.name}>
              <ProjectCard project={project} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center items-center">
        <a
          href="https://github.com/SumitNalavade"
          target="_blank"
          rel="noopener noreferrer"
          className="border-tertiary border rounded-lg px-6 py-2 my-6 w-2/5 text-center text-tertiary font-bold"
        >
          See More
        </a>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await getPinnedRepositories();

  useAppStore.setState({ projects });

  // Pass data to the page via props
  return { props: { projects } };
};

export default Projects;
