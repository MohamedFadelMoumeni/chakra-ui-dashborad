import React from "react";
import {MenuButton, Flex, Icon, Text} from "@chakra-ui/react";


const MenuItem = ({title, icon, navSize}) => {
    return (
        <MenuButton
        color="white"
        width="100%"
        p="2"
        _hover={{
            background: "gray.700"
        }}
        borderRadius="10px"
        mb="3"
        >
            <Flex
            width="100%"
            alignItems="center"
            justifyContent={navSize ? "flex-start" : "center"}
            >
                <Icon fontSize="xl" as={icon}/>
                <Text ml="3" display={navSize ? "flex" : "none"}>{title}</Text>

            </Flex>

        </MenuButton>
    )
}

export default MenuItem