import React from "react";
import Head from 'next/head'

import { Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
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
                { children }
            </Flex>


        </>
    )
}

export default Layout;