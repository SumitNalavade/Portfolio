import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";

import ReactMarkdown from "react-markdown";

import ProjectCard from "../../components/ProjectCard";
import useAppStore from "../../hooks/useAppState";

import Layout from "../../components/Layout";

const Project: NextPage = ({}) => {
  const router = useRouter();
  const { name: projectName } = router.query;

  const {
    data: project,
    error,
    isLoading,
  } = useSWR(projectName ? "fetchProject" : null, async () => {
    const project = useAppStore
      .getState()
      .projects.find((project) => project.name === projectName);

    const readme = (
      await axios.get(
        `https://raw.githubusercontent.com/${project?.nameWithOwner}/${project?.defaultBranchRef.name}/README.md`
      )
    ).data;

    return { ...project, readme };
  });

  if (!project) {
    return (
      <div className="min-h-screen ">
        <div className="mx-auto p-4">
          <div className="rounded p-6">
            <div className="animate-pulse">
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className="h-4 bg-gray-300 rounded mb-2"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex w-full">
        <div className="w-1/2 mx-2">
          {/* @ts-ignore */}
          <ProjectCard project={project} />
        </div>

        <div className="w-1/2 mx-2 prose">
          <ReactMarkdown children={project?.readme} skipHtml />
        </div>
      </div>
    </Layout>
  );
};

export default Project;
