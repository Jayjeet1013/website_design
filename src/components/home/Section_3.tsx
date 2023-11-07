import { Box, Center, Container, Divider, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Section_3 = () => {
  return (
<Box py={10}>
<Container maxW={1300} py={20}>
       
<Flex  justifyContent={'space-between'} direction={{base:'column',md:'row'}} gap={16}>
      
<Box>
        <Image src={'/mobile.png'} width={400} height={10} alt='mobile image'/>
</Box>

<Flex direction={'column'} gap={12}>
<Text fontSize={{base:'24px',md:'46px'}} fontWeight={500}>Never Waste Another Lead</Text>
<Flex>
        <Box p={4} alignItems={'center'} alignContent={'center'}>
                <Image src={'/w_01.png'}  alt='img' width={40} height={10}/>
        </Box>
        <Box>      
        <Text fontSize={{base:'18px',md:'24px'}}>Enforced lead updates</Text>
        <Text fontSize={{base:'14px',md:'21px'}} >After every call, sales agents have to update the lead status before moving on to the next lead.</Text>
</Box>
</Flex>


<Flex>
        <Box p={4} alignItems={'center'} alignContent={'center'}>
                <Image  src={'/notifications-icon.png'} alt='img' width={40} height={10}/>
        </Box>
        <Box>      
        <Text fontSize={{base:'18px',md:'24px'}}>Enforced lead updates</Text>
        <Text fontSize={{base:'14px',md:'21px'}} >After every call, sales agents have to update the lead status before moving on to the next lead.</Text>
</Box>
</Flex>
<Flex>
        <Box p={4} alignItems={'center'} alignContent={'center'}>
                <Image src={'/whatsapp.png'} alt='img' width={40} height={10}/>
        </Box>
        <Box>      
        <Text fontSize={{base:'18px',md:'24px'}}>Enforced lead updates</Text>
        <Text fontSize={{base:'14px',md:'21px'}} >After every call, sales agents have to update the lead status before moving on to the next lead.</Text>
</Box>
</Flex>

</Flex>

</Flex>
</Container>
</Box>
  )
}

export default Section_3