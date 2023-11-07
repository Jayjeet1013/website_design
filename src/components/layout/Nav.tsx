import {
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  flexbox,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Nav = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const menuWidth = expanded ? "800px" : "auto";

  return (
    <Box bg={"skyblue"} pb={10}>
      <Container maxW={1300} textColor={"white"}>
        <Box pt={8}>
          <Flex gap={8} justifyContent={"space-between"}>
            <Box>
              <Image src="./esalink.svg" width={200} height={100} alt="image" />
            </Box>

            <Flex gap={6} display={{ base: "none", md: "flex" }}>
              <Text>ELECTRONIC INVOICING 2024</Text>
              <Text>Expertise</Text>
              <Text>Solutions</Text>
              <Text>Services</Text>
              <Menu>
                <MenuButton
                  onClick={toggleExpansion}
                  transition="all 0.2s"
                  _hover={{ bg: "white.400" }}
                >
                  <Flex align="center">
                    Blog
                    <BiChevronDown />
                  </Flex>
                </MenuButton>
                <MenuList
                  textColor="black"
                  width={menuWidth}
                  maxW="100%"
                  overflowX="auto"
                >
                  <MenuItem py={10}>
                    New File 1 : Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Minus dolorem blanditiis ullam excepturi
                    eligendi quis alias temporibus ut eveniet? Exercitationem,
                    repudiandae inventore commodi autem placeat quam natus
                    beatae officiis voluptas.
                  </MenuItem>
                  <MenuItem py={10}>
                    New File 2 : Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Soluta dolores non saepe et, nisi ipsam.
                    Similique dicta tempora maiores quas, quibusdam,
                    perspiciatis, ad ullam quidem veritatis ex voluptas possimus
                    distinctio.
                  </MenuItem>
                  <MenuItem py={10}>
                    New File 2 : Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Soluta dolores non saepe et, nisi ipsam.
                    Similique dicta tempora maiores quas, quibusdam,
                    perspiciatis, ad ullam quidem veritatis ex voluptas possimus
                    distinctio.
                  </MenuItem>
                  <MenuItem py={10}>
                    New File 2 : Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Soluta dolores non saepe et, nisi ipsam.
                    Similique dicta tempora maiores quas, quibusdam,
                    perspiciatis, ad ullam quidem veritatis ex voluptas possimus
                    distinctio.
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <Flex gap={4} display={{ base: "none", md: "flex" }}>
              <Text>TMA CONNECTION</Text>
              <Text>GET A DEMO</Text>
              <Box  display={'flex'}  >
                    FR
                    <BiChevronDown />
                  </Box>
            </Flex>
          </Flex>
        </Box>

        <Flex
          justifyContent={"space-between"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex direction={"column"} gap={4}>
            <Box w={40} pt={16}>
              {" "}
              <Image
                src="/iso.jpg"
                alt="globe image"
                width={600}
                height={1}
              />{" "}
            </Box>
            <Text
              fontSize={{ base: "32px", md: "65px" }}
              fontWeight={600}
              width={"90%"}
            >
              Dematerialization at the service of your business
            </Text>

            <Text fontSize={{ base: "20px", md: "30px" }}>
              Esalink supports you in the digitalization of your B2B flows
            </Text>

            <Flex gap={10}>
              <Text fontSize={{ base: "14px", md: "20px" }}>
                Find your EDI solution
              </Text>
              <Text fontSize={{ base: "14px", md: "20px" }}>
                Switch to electronic invoicing
              </Text>
            </Flex>

<Flex gap={16}>   <Flex gap={16} py={20}  direction={{ base: "column", md: "row" }}>
            <Image
             src={"/generix-white.webp"}
            
              alt="globe image"
              width={100}
              height={100}
            />    <Image
            src="/cleo-white.webp"
            alt="globe image"
            width={100}
            height={20}
          />    <Image
          src={"/HUBTIMIZE-white.webp"}
          alt="globe image"
          width={100}
          height={200}
        />
        
            </Flex>
            <Flex gap={16} py={20}  direction={{ base: "column", md: "row" }}>
            <Image
          src={"/ibm-white.webp"}
          alt="globe image"
          width={100}
          height={200}
        />
         <Image
          src={"/gs1-white.webp"}
          alt="globe image"
          width={100}
          height={200}
        />
         <Image
          src={"/fne-white.webp"}
          alt="globe image"
          width={100}
          height={200}
        />
            </Flex></Flex>
         

          </Flex>
          <Box display={{ base: "none", md: "flex" }}>
            <Image
              src={"./globe.svg"}
              alt="globe image"
              width={600}
              height={200}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
