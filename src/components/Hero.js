
import React from "react";
import Sidebar from "./Sidebar";
import {Flex} from "@chakra-ui/react"
import Content from "./Content";
const Hero = () => {
    return (
        <Flex
        flexDir={
            ["column", "row"]
        }
        alignItems="center"
        height="100vh"
        width="100%"
        >
            <Sidebar />
            <Content />

        </Flex>
    )
}

export default Hero;