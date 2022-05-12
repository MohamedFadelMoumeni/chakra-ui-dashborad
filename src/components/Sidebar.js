import React, {useState} from "react";
import {Flex, Icon, Divider, Avatar, Heading, IconButton, Menu, MenuButton, Text} from "@chakra-ui/react";
import {AiOutlineMenu} from "react-icons/ai";
import {FaHome, FaUsers} from "react-icons/fa";
import {BiWallet} from "react-icons/bi";
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
import {FiSettings}from "react-icons/fi"
import MenuItem from "./MenuItem";



const Sidebar = () => {
    const [open, setOpen] = useState(false)
    return (
        <Flex
        transition="all 1s"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
        alignSelf="stretch"
        width={["100%", `auto`]}
        background="black"
        position={["static", "fixed"]}
        top="0"
        bottom="0"
        zIndex="2"
        p="1"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        
        
        >
            <Flex
            width="100%"
            flexDir="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            p={2}
            >
                <IconButton
                m='0'
                p={0}
                >
                    <AiOutlineMenu  color="black"/>
                </IconButton>

            </Flex>
            <Flex
            width="100%"
            flexDir="column"
            alignItems="flex-start"
            flexGrow='1'
            p={2}
            display={["none", "flex"]}
            >
              <Menu placement="right" display={["none", "flex"]}>
                  <MenuItem icon={FaHome} title="Dashboard" navSize={open}/>
                  <MenuItem icon={BiWallet} title="Statistics" navSize={open}/>
                  <MenuItem icon={FaUsers} title="Users" navSize={open}/>
                  <MenuItem icon={MdOutlineProductionQuantityLimits} title="Product" navSize={open}/>
                  <MenuItem icon={FiSettings} title="Parameter" navSize={open}/>
              </Menu>

            </Flex>
            <Flex
            flexDir="column"
            w="100%"
            mb="1"
            p={2}
            >
                <Divider display={open ? ['none', "flex"] : "none"}/>
                <Flex
                display={["none", "flex"]}
                flexDir="column"
                alignItems="center"
                mt="4"
                >
                    <Avatar size="md" />
                    <Heading  display={open ? "flex" : "none"} as="h5" fontSize={["sm", "md", "lg"]} mt="2" color="white">Mohamed Fadel</Heading>
                </Flex>

            </Flex>

        </Flex>

    )
}

export default Sidebar;