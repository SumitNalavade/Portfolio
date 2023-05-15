import React from "react";
import { NextPage, GetServerSideProps } from "next";

import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";

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
            <Text py={2}>Some projects I've worked on recently. Visit my GitHub page to see more!</Text>
        </Flex>

        <Flex justifyContent="space-between" flexWrap={"wrap"} m={"auto"} w="100%" >        
            <Flex justifyContent={"space-around"} flexWrap={"wrap"} w="100%">
                { projects.map((project) => {
                    return (
                        <Link href={`/projects/${project.name}`}>
                            <ProjectCard project={project} />
                        </Link>
                    )
                }) }
            </Flex>
        </Flex>

        <Flex w={"100%"} justifyContent={"center"}>
            <Button as={Link} href="https://github.com/SumitNalavade" target={"_blank"} size={"lg"} width={"lg"} color="brand.tertiary" borderColor="brand.tertiary" variant='outline' my={6} _hover={{ bg: '#fffafb' }}>
                See More
            </Button>
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
