import Head from 'next/head'
import Image from 'next/image'

import { Box, Button, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react'

import Navbar from '../components/Navbar'

export default function Home() {
  const myLoader = () => {
    return `https://avatars.githubusercontent.com/u/48499839?v=4`
  }

  return (
    <>
      <Head>
        <title>Sumit Nalavade - Portfolio</title>
        <meta name="description" content="Sumit Nalavade - Texas A&M Engineering"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />

      <Flex p={4} justifyContent="space-between" flexWrap={"wrap"} m={"auto"} maxW="container.xl" h="75vh">
        <Flex flexDirection={"column"} justifyContent="center">
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

          <Button color="brand.tertiary" borderColor="brand.tertiary" variant='outline' mr={2} mt={8} w="2xs" _hover={{ bg: '#fffafb' }}>
            Check out my work!
          </Button>
        </Flex>

        <Flex mt={4} flexDirection={"column"} justifyContent="center" w={"sm"}>
          <Image loader={myLoader} src="me.png" alt='Image of myself' height={50} width={50} layout="responsive"  />
        </Flex>
      </Flex>
    </>
  )
}
