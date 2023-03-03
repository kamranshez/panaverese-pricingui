import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      as="section"
      color="#F7FAFC"
      textAlign={{base:"left", md:"left", lg:"center"}}
      bg="#6B46C1"
      pt="50px"
      pb="198px" 
      px="32px"
      pl="10px"
    >
      <Heading fontWeight="700" fontSize="40px">
        Simple pricing for your business
      </Heading>
      <Text fontWeight="500" fontSize="24px" pt="16px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
