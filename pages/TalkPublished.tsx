import React from 'react'
import {
    Container,
    Heading,
    Stack,
    Text,
    Center,
    Box,
    Card,
    CardBody,
    Table,
      Thead,
      Tbody,
      Tfoot,
      Tr,
      Th,
      Td,
      TableCaption,
      TableContainer,
      Button,
      FormControl,
      FormLabel,
      Input,
      Image
        } from '@chakra-ui/react'
    import { TfiMoreAlt,TfiPlus,TfiCommentAlt} from "react-icons/tfi";
    import { BsFillShareFill,BsFillCameraVideoFill} from "react-icons/bs";
    import { Editor } from '@tinymce/tinymce-react';
    import Footer from "../Components/Footer"
    
export default function TalkPublished() {
  return (
    <>
     <Box mx={{ base: "1rem", md: "auto" }} maxW={{ md: "60rem" }} mt={10} mb={7}>
  <Center>
    <Card mt={10} width={{ base: "auto", md: "60rem" }} mb={7}>
      <CardBody>
        <Text fontWeight="bold" mb={5} justifyContent="left" alignContent="left">
          ToolBox Talk
        </Text>

        <Text fontWeight="bold" mb={2} ml={{ md: "50rem" }}>
          Admin
        </Text>

        <Text fontWeight="light" ml={{ md: "35rem" }}>
          Created Sat, 23 March 2023, 2:00 PM(GMT+2)
        </Text>

        <Image
          src="https://dodofinance.com/wp-content/uploads/2021/03/Thirteen-of-the-25-people-in-a-car-died-in-1280x720.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          width={{ base: "100%", md: "650px" }}
          height={{ base: "auto", md: "350px" }}
          ml={{ md: "8rem" }}
          mb={{ base: "2rem", md: "3rem" }}
        />

        <FormControl>
          <FormLabel>Date & Duration: 25/0/2023</FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel>ToolTopic Box: Accident on Highway 16 north bay</FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel>Topic Summary: Take Caution</FormLabel>
        </FormControl>

        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr bgColor="blackAlpha.400">
                <Th>Discussion Topic</Th>
                <Th>Action To Be Taken</Th>
                <Th>By</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Accident on Highway 16 north bay</Td>
                <Td>Take Caution on the road</Td>
                <Td>All Drivers</Td>
              </Tr>
            </Tbody>
          </Table>

          <Button size="lg" mt={5} bgColor="blue.500">
            <TfiPlus />
          </Button>
        </TableContainer>
        <TableContainer mt={10} mb={20}>
  <Text justifyContent="left" alignContent="left" fontWeight="bold">
    Address To
  </Text>
  <Table size='sm'>
    <Thead>
      <Tr bgColor={'blackAlpha.400'}>
        <Th>Name</Th>
        <Th>Company</Th>
        <Th>Signature</Th>
        <Th>Date</Th>
        <Th>Time</Th>
        <Th>Location</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Zayne Malik</Td>
        <Td>Canada Express Logistics</Td>
        <Td>hsgs+ndsd</Td>
        <Td>25/03/2023</Td>
        <Td>2:00 Pm</Td>
        <Td>Montreal</Td>
      </Tr>
      <Tr>
        <Td>Lone Wolf</Td>
        <Td>Canada Express Logistics</Td>
        <Td>sos+sjs</Td>
        <Td>25/03/2023</Td>
        <Td>2:00 Pm</Td>
        <Td>Montreal</Td>
      </Tr>
    </Tbody>
  </Table>

  <Button size={'lg'} mt={5} bgColor={'blue.500'}>
    <TfiPlus />
  </Button>
</TableContainer>

<Text justifyContent={'left'} fontWeight={'bold'}>
  Body(Description)
</Text>

<Card>
  <Text mb={5}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum ultricies aliquet magna amet, quam gravida ullamcorper sit. Eros vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum ultricies aliquet magna amet, quam gravida ullamcorper sit. Eros vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum ultricies aliquet magna amet, quam gravida ullamcorper sit.
  </Text>

  <Image
    src='https://i.dailymail.co.uk/i/pix/2012/05/07/article-0-12F5B6FF000005DC-16_634x398.jpg'
    alt='Green double couch with wooden legs'
    borderRadius='lg'
    width={650}
    height={350}
    mx={'auto'}
    my={5}
  />

  <Center>
    <Box display={'flex'} my={5}>
      <span style={{ marginRight: '0.1rem' }}>
        <TfiCommentAlt />
      </span>
      3
      <span style={{ marginRight: '1rem', marginLeft: '1rem' }}>
        <BsFillShareFill />
      </span>
      <BsFillCameraVideoFill />
    </Box>
  </Center>
</Card>

</CardBody>
       </Card>
    </Center>
 </Box>
    <Footer/>
    </>
  )
}
