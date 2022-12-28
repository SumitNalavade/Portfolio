import React, { useEffect } from "react";
import Link from "next/link";
import { NextPage, GetServerSideProps } from "next";

import { Flex } from "@chakra-ui/react";

import useAppStore from "../../hooks/useAppState";
import { getPinnedRepositories } from "../../utils/queries";
import { IProject } from "../../utils/interfaces";

import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";


interface Props {
    projects: IProject[]
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <Layout>
        <Flex justifyContent="space-between" flexWrap={"wrap"} m={"auto"} w="100%" >        
            <Flex justifyContent={"space-around"} flexWrap={"wrap"}>
                { projects.map((project) => {
                    return (
                        <Link href={`/projects/${project.name}`}>
                            <ProjectCard project={project} />
                        </Link>
                    )
                }) }
            </Flex>
        </Flex>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const projects = await getPinnedRepositories();

    useAppStore.setState({ projects })

    // Pass data to the page via props
    return { props: { projects } };
};

export default Projects;
