import React from "react";
import { NextPage, GetServerSideProps } from "next";
import axios from "axios";

import ReactMarkdown from "react-markdown";

import ProjectCard from "../../components/ProjectCard";
import useAppStore from "../../hooks/useAppState";
import { IProject } from "../../utils/interfaces";

import Layout from "../../components/Layout";

interface Props {
  project: IProject;
}

const Project: NextPage<Props> = ({ project }) => {
  return (
    <Layout>
      <div className="flex justify-between w-full">
        <div className="w-1/2 mx-2">
          <ProjectCard project={project} />
        </div>

        <div className="w-1/2 mx-2 prose">
          <ReactMarkdown
            children={project.readme}
            skipHtml
          />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { name } = query;

  const project = useAppStore
    .getState()
    .projects.find((project) => project.name === name);

  const readme = (
    await axios.get(
      `https://raw.githubusercontent.com/${project?.nameWithOwner}/${project?.defaultBranchRef.name}/README.md`
    )
  ).data;

  // Pass data to the page via props
  return { props: { project: { ...project, readme } } };
};

export default Project;
