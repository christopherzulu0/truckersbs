import React from "react";
import {
   Button, 
  Flex,
  Icon, 
  Stack, 
  Text,
  Card, 
  CardHeader, 
  CardBody,
  CardFooter,
  Image,
  Heading,
  Divider,
  ButtonGroup

 } from "@chakra-ui/react";
import {FaVideo,FaCommentAlt,FaTasks } from "react-icons/fa";
import {BiCast } from "react-icons/bi";

const PersonalHome: React.FC = () => {
  return (
    <Flex
      direction="column"
      cursor="pointer"
      position="sticky"
     style={{marginTop:"-46rem"}}
    >
  
      <Flex direction="column" p="12px">
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://th.bing.com/th/id/R.5890e55b8d861f2b0679728c62d505a9?rik=caDIrhayO%2fZ%2f2A&riu=http%3a%2f%2fwww.erieinsurance.com%2f-%2fmedia%2fimages%2fblog%2farticlephotos%2f2019%2fblack_ice_final.ashx&ehk=s6XPZM7GHO5cPP6sy3HNz7KEdr84sXHfknsl1T1jv8k%3d&risl=&pid=ImgRaw&r=0'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Montreal Black Ice</Heading>
      <Text>Canada Express Logistics Limited</Text>
      <Text py='2' display={'flex'} >
       Montreal, Canada
       <span style={{marginLeft:"2rem"}}>
        Fri 08 2022 - 10:00 am
       </span>
      </Text>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
 
</Card>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
