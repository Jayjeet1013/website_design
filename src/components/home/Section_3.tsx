import { Box, Center, Container, Divider, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Section_3 = () => {
  return (
<Box py={10}>
<Container maxW={1300}>
        
<Flex justifyContent={'space-between'} direction={{base:'column',md:'row'}} gap={10}>
        <Center>
<Box>
        <Image src={'/mobile.png'} width={200} height={10} alt='mobile image'/>
</Box>
</Center>
<Flex direction={'column'}>
<Text>Never Waste Another Lead</Text>
<Box>
        <Text>Enforced lead updates</Text>
        <Text>After every call, sales agents have to update the lead status before moving on to the next lead.</Text>
</Box>
<Box>
        <Text>Mobile notifications for all your follow ups</Text>
        <Text>Easily add follow up reminders for your leads to ensure you do lose any deals.</Text>
</Box>
<Box>
        <Text>Conversation history for every lead</Text>
        <Text>View history of calls, WhatsApp messages, and notes for every lead.</Text>
</Box>
</Flex>
</Flex>
</Container>
</Box>
  )
}

export default Section_3