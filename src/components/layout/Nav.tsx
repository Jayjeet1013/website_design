import { Box, Container, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {BiChevronDown} from 'react-icons/bi'


const Nav = () => {
  return (
    <Box bg={'skyblue'} pb={10}>
      <Container maxW={1300} textColor={'white'}>
        <Box pt={4} >
          <Flex gap={8} justifyContent={'space-between'} >
            <Box >
           <Image src='./esalink.svg' width={200} height={100} alt="image"/>
            </Box>

            <Flex gap={3}   display={{ base: "none", md: "flex" }}>
              <Text>FACTURATION ÉLECTRONIQUE 2024</Text>
              <Text>Expertise</Text>
              <Text>Solutions</Text>
              <Text>Services</Text>
              <Menu>
  <MenuButton
  
    transition='all 0.2s'
 
 
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
 
  >
  <Flex align="center">
        BLog
    
          <BiChevronDown />
   
      </Flex>
  </MenuButton>
  <MenuList>
    <MenuItem>New File</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuDivider />
    <MenuItem>Open...</MenuItem>
    <MenuItem>Save File</MenuItem>
  </MenuList>
</Menu>
          
            </Flex>

            <Flex gap={3}   display={{ base: "none", md: "flex" }}>
              <Text>CONNEXION TMA</Text>
              <Text>OBTENIR UNE DÉMO</Text>
              <Text>FR</Text>
            </Flex>
          </Flex>
        </Box>

        <Flex justifyContent={'space-between'} direction={{base:'column',md:'row'}}>
      <Flex direction={'column'} gap={4}>
        <Box w={40} py={6} >  <Image src="/iso.jpg" alt="globe image" width={600} height={1} /> </Box>
    <Text fontSize={{base:'32px',md:'65px'}} width={'90%'}>La dématérialisation    au service de votre business
</Text>

<Text fontSize={20}>
Esalink vous accompagne dans la digitalisation de vos flux B2B
</Text>

<Flex gap={4}> 
        <Text>Trouver votre solution EDI</Text>
        <Text>
        Passer à la facturation électronique

        </Text>
</Flex>

      </Flex>
        <Box display={{base:'none',md:'flex'}}>
  <Image src={'./globe.svg'} alt="globe image" width={600} height={200} />
        </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
