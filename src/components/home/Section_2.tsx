import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Section_2 = () => {
  return (
    <Box pt={24}>
      <Container maxW={1300}>
        <Flex direction={"column"}>
          <Text>TRELLO 101</Text>
          <Text>A productivity powerhouse</Text>
          <Text>
            Simple, flexible, and powerful. All it takes are boards, lists, and
            cards to get a clear view of who doing what and what needs to get
            done. Learn more in our guide for getting started.
          </Text>
        </Flex>

        <Flex p={10} direction={{base:'column',md:'row'}}>
          <Flex direction={"column"}>
            <Box width={{base:'90%',md:'60%'}}>
              <Text>Boards</Text>
              <Text>
                Trello boards keep tasks organized and work moving forward. In a
                glance, see everything from “things to do” to “aww yeah, we did
                it?”
              </Text>
            </Box>
            <Box width={{base:'90%',md:'60%'}}>
              <Text>Lists</Text>
              <Text>
                Trello boards keep tasks organized and work moving forward. In a
                glance, see everything from “things to do” to “aww yeah, we did
                it?”
              </Text>
            </Box>
            <Box width={{base:'90%',md:'60%'}}>
              <Text>Cards</Text>
              <Text>
                Trello boards keep tasks organized and work moving forward. In a
                glance, see everything from “things to do” to “aww yeah, we did
                it?”
              </Text>
            </Box>
          </Flex>
          <Box pt={8}>
            <Image src={"/imgsec.png"} alt="img sec2" width={500} height={10} />
          </Box>
        </Flex>
        <Divider/>
      </Container>
    </Box>
  );
};

export default Section_2;
