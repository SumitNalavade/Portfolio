import React, { useState } from "react";
import Link from "next/link";

import { Flex, Button, IconButton, Icon } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar: React.FC = () => {
    const [display, setDisplay] = useState('none');

    return (
        <Flex m={4} color="brand.stroke">
            <Flex w="100%" align="center">
                <Flex w="100%" justifyContent="space-between" display={['none', 'none', 'flex', 'flex']}>
                    <Flex>
                        <Link href='/'>
                            <Button as='a' variant='ghost' aria-label="Home" my={5} w="100$">Home</Button>
                        </Link>

                        <Link href='/about'>
                            <Button as='a' variant='ghost' aria-label="About" my={5} w="100%">About</Button>
                        </Link>

                        <Link href='/projects'>
                            <Button as='a' variant='ghost' aria-label="Projects" my={5} w="100%">Projects</Button>
                        </Link>
                    </Flex>

                    <Flex>
                        <Button as='a' href="https://github.com/SumitNalavade" target="_blank" variant='ghost' aria-label="GitHub" my={5} w="100%">
                            <Icon boxSize={6} as={AiOutlineGithub} />
                        </Button>

                        <Button as='a' href="https://www.linkedin.com/in/sumit-nalavade/" target="_blank" variant='ghost' aria-label="LinkedIn" my={5} w="100%">
                            <Icon boxSize={6} as={AiFillLinkedin} />
                        </Button>
                    </Flex>
                </Flex>

                <IconButton aria-label="Open Menu" size='lg' icon={<Icon as={AiOutlineMenu} />} display={['flex', 'flex', 'none', 'none']} onClick={() => setDisplay("flex")} />
            </Flex>

            <Flex w="100vw" bgColor="gray.50" zIndex={20} pos="fixed" top="0" left="0" overflow="auto" flexDirection="column" display={display} >
                <Flex>
                    <IconButton m={4} aria-label="Close Menu" size="lg" icon={<Icon as={AiOutlineClose} />} onClick={() => setDisplay("none")} />
                </Flex>

                <Flex direction='column' alignItems='center'>
                    <Link href='/'>
                        <Button as='a' variant='ghost' aria-label="Home" my={2} w="100$">Home</Button>
                    </Link>

                    <Link href='/about'>
                        <Button as='a' variant='ghost' aria-label="Home" my={2} w="100%">About</Button>
                    </Link>

                    <Link href='/projects'>
                        <Button as='a' variant='ghost' aria-label="Home" my={2} w="100%">Projects</Button>
                    </Link>
                </Flex>
            </Flex>

        </Flex>
    )
}

export default Navbar;