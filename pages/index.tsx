import Head from 'next/head'

import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'

import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumit Nalavade - Portfolio</title>
        <meta name="description" content="Sumit Nalavade - Texas A&M Engineering"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />

      <Flex flexDirection={"column"} justifyContent="center" m={"auto"} maxW="container.xl" h="75vh">
        <Heading size="sm" color="brand.headline" mb={4} ml={2}>Hi, my name is</Heading>
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

        <Button color="brand.tertiary" borderColor="brand.tertiary" variant='outline' mr={2} mt={8} w="2xs">
          Check out my work!
        </Button>
      </Flex>
    </>
  )
}
