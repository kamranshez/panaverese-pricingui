import { Box, Button, Flex, HStack, space, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Practiceadv() {
  return (
    <>
    {/* <Flex justify='space-around' align="center"> */}
    <HStack spacing="24px">

    <Box bg="green" w="150px" h="120px"> this is box</Box>
    <Box bg="red" w="150px" h="120px"> this is box</Box>
    <Box bg="yellow" w="150px" h="120px"> this is box</Box>
    <Box bg="blue" w="150px" h="120px"> this is box</Box>

    </HStack>

    <Button mt="20px" colorScheme="red" _hover={{"background" : "blue"}} _focus={{"background":"yellow"}}>Button</Button>
    
    {/* </Flex> */}
    </>    
  )
  }
