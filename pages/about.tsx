import React from "react";
import Image from "next/image";

import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";

import Layout from "../components/Layout";

const About: React.FC = () => {
    return (
        <Layout>
            <Flex p={4} justifyContent="space-between" flexWrap={"wrap"} m={"auto"} maxW="container.xl" h="75vh">
        <Flex flexDirection={"column"} justifyContent="center">
          <Heading size="4xl" color="brand.headline">About Me</Heading>

          <Box color="brand.paragraph" mt={8} maxW={"3xl"}>
            <Text my={2}>
              Howdy! My name is Sumit, I'm an engineering student at Texas A&M University with a passion for building things!
            </Text>

            <Text my={2} noOfLines={2}>
              My interest in software development began when I was in high school and was exposed to web development with HTML, CSS and JavaScript.
            </Text>

            <Text my={2} noOfLines={2}>
              Fast forward to today, I've worked on various projects across the stack with technologies including React, React Native, Next.js, Node.js, GraphQL, MongoDB, PostgreSQL and more!
            </Text>

            <Text my={2} noOfLines={2}>
              In addition, I've had the privilege of serving as a project manager and lead developer for the Aggie Coding Club at Texas A&M!
            </Text>

            <Text my={2} noOfLines={2}>
              Feel free to take a look at some of my work here and on my GitHub, and don't be afraid to reach out to me via email or Instagram.
            </Text>
          </Box>

          <Button color="brand.tertiary" borderColor="brand.tertiary" variant='outline' mr={2} mt={8} w="2xs" _hover={{ bg: '#fffafb' }}>
            Check out my work!
          </Button>
        </Flex>

        <Flex my={4} flexDirection={"column"} justifyContent="center" w={"sm"} >
          <Image loader={() => `https://avatars.githubusercontent.com/u/48499839?v=4`} src="me.png" alt='Image of myself' height={50} width={50} layout="responsive"  />
        </Flex>
      </Flex>
        </Layout>
    )
}

export default About;