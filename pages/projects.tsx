import React from "react";
import { NextPage, GetServerSideProps } from "next";

import { getPinnedRepositories } from "../utils/queries";
import { IProject } from "../utils/interfaces";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";

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
                        <ProjectCard project={project} />
                    )
                }) }
            </Flex>
        </Flex>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const projects = await getPinnedRepositories();

    // Pass data to the page via props
    return { props: { projects } };
};

export default Projects;
