import React from "react";
import Image from "next/image";
import { NextPage, GetServerSideProps } from "next";
import axios from "axios";

import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Flex,} from "@chakra-ui/react";

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
        <Flex w={"100%"} justifyContent={"space-around"} flexWrap={"wrap"}>
            <Flex maxH={"md"}>
                <ProjectCard project={project} />
            </Flex>

            <Flex my={4} flexDirection={"column"}  w={"md"}>
                <ReactMarkdown components={ChakraUIRenderer()} children={project.readme} skipHtml />;
            </Flex>
      </Flex>
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
