import { Box, Button, Center, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import {BiLogoTiktok} from 'react-icons/bi'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillRedditCircle} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiChevronDown} from 'react-icons/bi'


const Footer = () => {
  return (
    <Box>
      <Flex
        textColor={"white"}
        py={20}
        gap={6}
        direction={"column"}
        bg={"blue"}
        alignItems="center"
        justifyContent="center"
      >
        <Text>Deliver your best work with monday.com</Text>
        <Text>No credit card needed ✦ Unlimited time on Free plan</Text>
        <Box>
          <Button>
            Get Started <BsArrowRightShort />
          </Button>
        </Box>
      </Flex>
      <Container maxW={1300} py={16}>
        <Flex justifyContent={"space-between"} gap={4} flexDirection={{ base: "column", md: "row" }} >
                
          <Flex direction={"column"} gap={3} >
            <Box>
              <Image
                src={"/monday-logo.png"}
                alt="monday logo"
                width={100}
                height={10}
              />
            </Box>
            <Text>Pricing</Text>
            <Text>Contact Us</Text>
            <Text>Templates</Text>
            <Text>SMB</Text>
            <Text>Enterprise</Text>
            <Text>Nonprofits</Text>
            <Text>App marketplace</Text>
            <Text>24/7 support</Text>
          </Flex>
          <Flex direction={"column"} gap={3}>
            <Text fontWeight={700}>Features</Text>
            <Text>Docs</Text>
            <Text>Integrations</Text>
            <Text>Automations</Text>
            <Text>Files</Text>
            <Text>Dashboards</Text>
            <Text>Kanban</Text>
            <Text>Gannt</Text>
          </Flex>
          <Flex direction={"column"} gap={3}>
            <Text  fontWeight={700}>Monday Products</Text>
            <Text>monday work management</Text>
            <Text>monday sales CRM</Text>
            <Text>monday dev</Text>

            <Text>More by monday.com</Text>
            <Text>WorkCanas</Text>
            <Text>WorkForms</Text>
          </Flex>
          <Flex direction={"column"} gap={3}>
            <Text  fontWeight={700}>Usecases</Text>
            <Text>Marketing</Text>
            <Text>Project Management</Text>
            <Text>Sales</Text>
            <Text>Developers</Text>
            <Text>HR</Text>
            <Text>IT</Text>
            <Text>Operations</Text>
            <Text>Constructions</Text>
          </Flex>
          <Flex direction={"column"} gap={3}>
            <Text  fontWeight={700}>Company</Text>
            <Text>About Us</Text>
            <Text>Careers </Text>
            <Text>monday-U</Text>
            <Text>Press</Text>
            <Text>Customer Stories</Text>
            <Text>Become a partner</Text>
            <Text>Sustainability & ESG</Text>
            <Text>Affiliates</Text>
            <Text>Digital Lift</Text>
            <Text>Investor relations</Text>
          </Flex>
          <Flex direction={"column"} gap={3}>
            <Text  fontWeight={700}>Resources</Text>
            <Text>Help Center</Text>
            <Text>Community</Text>
            <Text>Blog</Text>
            <Text>What's new</Text>
            <Text>Monday Spaces</Text>
            <Text>Webinars</Text>
            <Text>Startup</Text>
            <Text>Global Events</Text>
            <Text>App Development</Text>
            <Text>Find a Partner</Text>
            <Text>Compare</Text>
          </Flex>
        </Flex>

<Divider borderColor={'black'} py={4}/>

<Flex justifyContent={'space-between'} pt={12} direction={{base:'column',md:'row'}}>
        <Flex gap={16}>
                <Flex>  <Text>English </Text><BiChevronDown/> </Flex>   
              
        <Flex gap={2}>
       <AiFillRedditCircle style={{ fontSize: '24px' }}/>
       <BiLogoLinkedin style={{ fontSize: '24px' }}/>
       <BiLogoFacebookCircle style={{ fontSize: '24px' }}/>
       <AiFillYoutube style={{ fontSize: '24px' }}/>
       <RiTwitterXFill style={{ fontSize: '24px' }}/>
       <AiOutlineInstagram style={{ fontSize: '24px' }}/>
       <BiLogoTiktok style={{ fontSize: '24px' }}/>
       
        </Flex>
        </Flex>
     
<Flex pt={4}>
        <Box >
                <Image src={'/googleplay.png'} width={170} height={10} alt="google play"/>
        </Box>
        <Box>
                <Image src={'/appstore.jpg'} width={150} height={10} alt="app play"/>
        </Box>
</Flex>
</Flex>
      </Container>
    </Box>
  );
};

export default Footer;
