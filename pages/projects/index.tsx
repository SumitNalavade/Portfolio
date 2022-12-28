import React from "react";
import Link from "next/link";
import { NextPage, GetServerSideProps } from "next";

import client, { GET_PINNED_REPOSITORIES } from "../../utils/apollo-client";
import { IProject } from "../../utils/interfaces";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

import { Flex } from "@chakra-ui/react";

interface Props {
  projects: IProject[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <Layout>
      <Flex
        justifyContent="space-between"
        flexWrap={"wrap"}
        m={"auto"}
        w="100%"
      >
        <Flex justifyContent={"space-around"} flexWrap={"wrap"}>
          {projects.map((project) => {
            return (
              <Link href={`/projects/${project.name}`}>
                <ProjectCard project={project} />
              </Link>
            )
          })}
        </Flex>
      </Flex>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await client.query({
    query: GET_PINNED_REPOSITORIES,
    variables: { username: "SumitNalavade" }
  })

  const projects = data.user.pinnedItems.edges.map((elm: any) => ({
    ...elm.node,
    imageUrl: `https://opengraph.githubassets.com/1/SumitNalavade/${elm.node.name}`,
    readmeUrl: `https://raw.githubusercontent.com/SumitNalavade/${elm.node.name}/${elm.node.defaultBranchRef.name}/README.md`
  }))

  // Pass data to the page via props
  return { props: { projects } };
};

export default Projects;
