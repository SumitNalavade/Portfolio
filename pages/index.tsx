import React from "react";
import Image from 'next/image'

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

import Layout from '../components/Layout'
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
  const { width, height } = useWindowSize();

  return (
    <Layout>
      <Flex p={4} justifyContent="space-between" flexWrap={"wrap"} m={"auto"} maxW="container.xl" h="75vh">
        <Flex flexDirection={"column"} justifyContent="center">
          <Heading size="sm" color="brand.headline" mb={2} ml={2}>Hi, my name is</Heading>
          <Heading size="4xl" color="brand.headline">Sumit Nalavade.</Heading>

          <Box color="brand.paragraph" mt={8} maxW={"3xl"}>
            <Text my={2}>
              I'm an engineering student at Texas A&M University '26 !
            </Text>

            <Text my={2} noOfLines={2}>
              My interests include software design and development, machine learning and artificial intelligence.
            </Text>

            <Text my={2} noOfLines={2}>
              Currently, I'm focused on earning my bachelors degree in Computer Engineering on the Computer Science track.
            </Text>
          </Box>

          <Button color="brand.tertiary" borderColor="brand.tertiary" variant='outline' mr={2} mt={8} w="2xs" _hover={{ bg: '#fffafb' }}>
            Check out my work!
          </Button>
        </Flex>

        <Flex my={4} flexDirection={"column"} justifyContent="center" w={"sm"} order={ width < 1183 ? "-1" : "1" } >
          <Image loader={() => `https://avatars.githubusercontent.com/u/48499839?v=4`} src="me.png" alt='Image of myself' height={50} width={50} layout="responsive"  />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Home;
