import { Box, Center, Container, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Section_2 = () => {
  return (
    <Box pt={24}>
      <Container maxW={1300}>
        <Flex direction={"column"} gap={4}>
          <Text>TRELLO 101</Text>
          <Text fontSize={{ base: "24px", md: "36px" }} fontWeight={600}>
            A productivity powerhouse
          </Text>
          <Text w={{ base: "100%", md: "60%" }} fontSize={"20px"}>
            Simple, flexible, and powerful. All it takes are boards, lists, and
            cards to get a clear view of who doing what and what needs to get
            done. Learn more in our guide for getting started.
          </Text>
        </Flex>
        <Center>
          <Flex p={10} gap={6} direction={{ base: "column", md: "row" }}>
            <Flex direction={"column"} gap={4} pt={10}>
              <Box>
                <Text py={3}>Boards</Text>
                <Text>
                  Trello boards keep tasks organized and work moving forward. In
                  a glance, see everything from “things to do” to “aww yeah, we
                  did it?”
                </Text>
              </Box>
              <Box>
                <Text py={3}>Lists</Text>
                <Text>
                  The different stages of a task. Start as simple as To Do,
                  Doing or Done—or build a workflow custom fit to your team’s
                  needs. There’s no wrong way to Trello.
                </Text>
              </Box>
              <Box>
                <Text py={3}>Cards</Text>
                <Text>
                  Cards represent tasks and ideas and hold all the information
                  to get the job done. As you make progress, move cards across
                  lists to show their status.
                </Text>
              </Box>
            </Flex>
            <Box pt={8}>
              <Image
                src={"/imgsec.png"}
                alt="img sec2"
                width={1800}
                height={10}
              />
            </Box>
          </Flex>
        </Center>

        <Divider />
      </Container>
    </Box>
  );
};

export default Section_2;
