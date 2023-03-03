import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkMarkicon from "./icons/checkMarkicon";

export default function Pricing() {
  return (
    <>
      <Box
        maxWidth={"990px"}
        mx={{base:"20px",lg:"auto"}}
        // ml={{base:"20px",lg:"auto"}}
        // mr={{base:"20px",lg:"auto"}}
        mt={"-115px"}
        borderRadius="16px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
       // mx="20px"
       
      >
        <Flex direction={{base:"column" , md:"column", lg:"row"}}>
          <Box bg="#c9c2d5" p="60px" textAlign="center">
            <Text fontSize="24px" fontWeight="800">
              Premium Pro
            </Text>
            <Heading as="h3" fontSize="60px" fontWeight="800">
              $329
            </Heading>
            <Text fontSize="18px" fontWeight="500">
              billed just once
            </Text>
            <Button w={{base:"150px", md:"150px", lg:"280px"}} mt="25px" colorScheme={"purple"}>
              Get Started
            </Button>
          </Box>
          <Box pt="50px" pl="50px" bg={"#FFFFFF"}>
            <Text mb={"25px"} pr="48px">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack mb={"15px"}>
              <Icon as={checkMarkicon}></Icon>
              <Text> International calling and messaging API </Text>
            </HStack>
            <HStack mb={"15px"}>
              <Icon as={checkMarkicon}></Icon>
              <Text> Additional phone numbers </Text>
            </HStack>
            <HStack mb={"15px"}>
              <Icon as={checkMarkicon}></Icon>
              <Text> Automated messages via Zapier </Text>
            </HStack>
            <HStack mb={"15px"}>
              <Icon as={checkMarkicon}></Icon>
              <Text>24/7 support and consulting </Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
