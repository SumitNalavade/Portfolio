import React from "react";
import { NextPage, GetServerSideProps } from "next";

import { Button, Flex, Heading, Link } from "@chakra-ui/react";

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
        <Flex flexDirection={"column"}>
            <Heading size="3xl" color="brand.headline">Featured Projects</Heading>
        </Flex>

        <Flex justifyContent="space-between" flexWrap={"wrap"} m={"auto"} w="100%" >        
            <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
                { projects.map((project) => {
                    return (
                        <Link href={`/projects/${project.name}`}>
                            <ProjectCard project={project} />
                        </Link>
                    )
                }) }
            </Flex>
        </Flex>

        <Button color="brand.tertiary" borderColor="brand.tertiary" variant='outline' my={6} _hover={{ bg: '#fffafb' }}>
                <Link href="https://github.com/SumitNalavade" target={"_blank"}>See More</Link>
        </Button>
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
