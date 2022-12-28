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
            <Flex justifyContent={"center"} w={"100%"} maxW={"sm"}>
                <Image loader={() => project.imageUrl} src="me.png" alt='Image of myself' height={30} width={30} layout="responsive"  />
            </Flex>

            <Flex flexDirection="column" w={"100%"} p={4}>
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