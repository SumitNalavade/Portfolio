import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { NextPage } from "next";

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

import Layout from '../components/Layout'
import useWindowSize from "../hooks/useWindowSize";

const Home: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
   <h1>Nfdfsdfdfsfd</h1>
  )
}

export default Home;
