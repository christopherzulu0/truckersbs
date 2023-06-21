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
    import { TfiMoreAlt,TfiPlus} from "react-icons/tfi";
import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Footer from "../Components/Footer"
export default function TalkPost() {
  return (
   <>
   <Center>
    <Card mt={10} width={'60rem'} mb={7}>
   <CardBody >


    <Text
    fontWeight={'bold'}
    mb={5}
    justifyContent={'left'}
    alignContent={'left'}
    >
        ToolBox Talk
    </Text>
   <Image
      src='https://dodofinance.com/wp-content/uploads/2021/03/Thirteen-of-the-25-people-in-a-car-died-in-1280x720.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      width={650}
      height={350}
      mx={'auto'}
      my={5}
    />

<FormControl>
            <FormLabel>Date & Duration</FormLabel>
            <Input type="date" width={"100%"} />
          </FormControl>

          <FormControl mt={2}>
            <FormLabel>ToolTopic Box</FormLabel>
            <Input type="email" width={"100%"} />
          </FormControl>

          <FormControl mt={2} mb={5}>
            <FormLabel>Topic Summary</FormLabel>
            <Input type="email" width={"100%"} />
          </FormControl>

   <TableContainer>
  <Table size='sm' >
    <Thead>
      <Tr
      bgColor={'blackAlpha.400'}
      >
        <th><TfiMoreAlt/></th>
        <Th>Discussion Topic</Th>
        <Th>Action To Be Taken</Th>
        <Th >By</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr >
        <td><TfiMoreAlt/></td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
      </Tr>
    </Tbody>
  </Table>

  <Button 
size={'lg'}
mt={5}
bgColor={'blue.500'}
>
   <TfiPlus
   />
</Button>

</TableContainer>


<TableContainer mt={10} mb={20}>
    <Text
    justifyContent={'left'}
    alignContent={'left'}
    fontWeight={'bold'}
    >
        Address To
    </Text>
  <Table size='sm' >
    <Thead>
      <Tr  bgColor={'blackAlpha.400'}>
        <th><TfiMoreAlt/></th>
        <Th>Name</Th>
        <Th>Company</Th>
        <Th>Signature</Th>
        <Th>Date</Th>
        <Th>Time</Th>
        <Th >Location</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <td><TfiMoreAlt/></td>
        <Td>Zayne Malik</Td>
        <Td>Canada Express Logistics</Td>
        <Td>hsgs+ndsd</Td>
        <Td>25/03/2023</Td>
        <Td>2:00 Pm</Td>
        <Td>Montreal</Td>
      </Tr>
      <Tr>
        <td><TfiMoreAlt/></td>
        <Td>Lone Wolf</Td>
        <Td>Canada Express Logistics</Td>
        <Td>sos+sjs</Td>
        <Td>25/03/2023</Td>
        <Td>2:00 Pm</Td>
        <Td>Montreal</Td>
      </Tr>
    </Tbody>
  </Table>

  <Button 
size={'lg'}
mt={5}
bgColor={'blue.500'}
>
   <TfiPlus
   />
</Button>

</TableContainer>

<Text
justifyContent={'left'}
fontWeight={'bold'}
>
    Body(Description)
</Text>
<Editor

    onInit={(evt, editor) => editor.current = editor}
    
    initialValue="<p>This is the initial content of the editor.</p>"
    init={{
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | ' +
      'bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat | help',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }}
    // ref={description}
  />
 
 <Center >
    <Button
    mt={5}
    size={'lg'}
    bgColor={'blue.300'}
    >
        Publish
    </Button>
 </Center>
  </CardBody>
 
    </Card>
   </Center>

   <Footer/>
   </>
  )
}
