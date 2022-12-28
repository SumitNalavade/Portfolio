import React from "react";
import Image from 'next/image'

import { IProject } from "../utils/interfaces";

import { Text, Card, Button, CardBody, CardFooter, CardHeader, Flex, Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

interface Props {
    project: IProject
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <Flex bg="gray.50" my={6} flexDirection="column" borderRadius={"lg"}>
            <Flex justifyContent={"center"} w={"sm"} >
                <Image loader={() => project.imageUrl} src="project.png" alt={project.name} height={30} width={30} layout="responsive"  />
            </Flex>

            <Flex flexDirection="column" w={"sm"} h={"3xs"} p={4}>
                <Flex w={"100%"} justifyContent={"space-between"} alignItems="center" >
                    <Text color="brand.headline" fontWeight={"bold"} fontSize="xl">{ project.name }</Text>

                    <a href={ project.url } target="_blank">
                        <Icon as={AiFillGithub} />
                    </a>
                </Flex>

                <Text my={2} color="brand.secondary">{ project.primaryLanguage.name }</Text>

                <Text color="brand.paragraph" w={"xs"}>{ project.description }</Text>
            </Flex>
        </Flex>
    );
};

export default ProjectCard;