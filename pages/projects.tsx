import React from "react";
import { NextPage, GetServerSideProps } from "next";

import { getPinnedRepositories } from "../utils/queries";
import { IProject } from "../utils/interfaces";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";

interface Props {
    projects: IProject[]
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <>
        <Navbar />
        
        <Flex p={4} justifyContent="space-between" flexWrap={"wrap"} m={"auto"} w="100%" h="75vh">        
            <Flex justifyContent={"center"} flexWrap={"wrap"}>
                { projects.map((project) => {
                    return (
                        <ProjectCard project={project} />
                    )
                }) }
            </Flex>
        </Flex>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const projects = await getPinnedRepositories();

    // Pass data to the page via props
    return { props: { projects } };
};

export default Projects;
