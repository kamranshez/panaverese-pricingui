import { Text, Icon, Box, VStack, HStack, Flex } from "@chakra-ui/react";
import React from "react";
import moneyBackicon from "./icons/moneyBackicon";
import monthlySubicon from "./icons/monthlySubicon";
import noFeeicon from "./icons/noFeeicon";

export default function Features() {
  return (
    <>
      <Box pt={"50px"} m="auto" maxWidth={"800px"}>
        <Flex direction={{base:"column",lg:"row"}} px="50px">
          <HStack mb="20px">
            <Icon as={moneyBackicon}> </Icon>
            <Text>30 days money back Guarantee</Text>
          </HStack>

          <HStack mb="20px" >
            <Icon as={noFeeicon}> </Icon>
            <Text>No setup fees 100% hassle-free</Text>
          </HStack >

          <HStack mb="20px">
            <Icon as={monthlySubicon}> </Icon>
            <Text>No monthly subscription Pay once and for all</Text>
          </HStack>
         
        </Flex>
      </Box>
    </>
  );
}
