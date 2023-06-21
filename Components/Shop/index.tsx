import React, { ReactElement } from 'react'
import Footer from "../Footer"
import {
  Flex,
  Text,
  Divider, 
  Button,
  Box,
  CardBody,
  Stack,
  CardFooter,
  Heading,
  ButtonGroup,
  useColorModeValue,
  Container,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Center
}from '@chakra-ui/react';
import Image from "next/image"


interface CardProps {
  type:string;
  time:string;
  heading: string;
  description: string;
  image: ReactElement;
  price: string;
  href: string;
}

const Card = ({ type,time,heading, description, image,price, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={'300px'}
          h={250}
          align={'center'}
          justify={'center'}
          objectFit="contain"
          ml={-10}
          mt={-16}
          >
          {image}
        </Flex>
        <Box mt={2}>
          <Text  mt={-10}  fontSize={'sm'}><span style={{color:"blue"}}>{type}</span> <span style={{marginLeft:"5.5rem"}}>{time}</span> </Text>
          <Heading size="md" mt={2}>{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text><br/>
          <Text>{price}</Text>
          
        </Box>
        {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};


export default function Shop() {

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayTwo />)

  return (
    <>

     {/** Products Section */}
 
     <Box p={4}>
      <Stack 
      spacing={4} 
      as={Container} 
      maxW={'3xl'} 
     
     >
         <Button 
         onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
          colorScheme='messenger'
          mb={1} 
          // style={{width:"150px",marginLeft:"36.5rem",marginTop:"-2.4rem"}}
        
          >
             SELL
        </Button> 
         
        <hr/>
       


      {/**
       Product Add Modal
       */}
       <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl'>
        {overlay}
        <ModalContent 
       
        >
          <center><ModalHeader>Sell A Product</ModalHeader></center>
          <ModalCloseButton />
          <ModalBody>
           
          <FormControl>
          <FormLabel>Category</FormLabel>
          <Select placeholder='Select country'>
            <option>Electronics</option>
            <option>Appliances</option>
          </Select>
        </FormControl>

        <FormControl isRequired mt={3}>
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder='Product Name' />
      </FormControl>


      <FormControl isRequired mt={3}>
      <FormLabel>Price</FormLabel>
      <Input type="number" placeholder='Product Price' />
      </FormControl>

      <FormControl isRequired mt={3}>
      <FormLabel>Product Image</FormLabel>
      <Input type="file" />
      </FormControl>

      <Textarea placeholder='Type product description here' mt={5}/>

          </ModalBody>
          <ModalFooter>
          <Button 
            bgColor='blue.400' 
            width={{ base: '100%', sm: '250px',lg:'full' }}
            ml={{ base: '0', sm: '-8rem' }}
          >
           Publish
          </Button>
        </ModalFooter>

        </ModalContent>
      </Modal>

      </Stack>

      <Container maxW={'5xl'} mt={12}>
      <center>
      <Button colorScheme='messenger' mb={3}>ON DUTY</Button>
     </center>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
              
          <Card
            type={'Electronics'}
            time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
          <Card
           type={'Electronics'}
           time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
           <Card
            type={'Electronics'}
            time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
   
    
        </Flex>
      </Container>
     

      <Container maxW={'5xl'} mt={12}>
      <center>
      <Button colorScheme='messenger' mb={3}>DRIVING</Button>
     </center>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
              
          <Card
            type={'Electronics'}
            time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
          <Card
           type={'Electronics'}
           time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
           <Card
            type={'Electronics'}
            time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
   
    
        </Flex>
      </Container> 
      

      <Container maxW={'5xl'} mt={12}>
      <center>
      <Button colorScheme='messenger' mb={3}>SLEEPER BERTH</Button>
     </center>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
              
          <Card
            type={'Electronics'}
            time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
          <Card
           type={'Electronics'}
           time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
           <Card
            type={'Electronics'}
            time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
   
    
        </Flex>
      </Container> 

      <Container maxW={'5xl'} mt={12}>
      <center>
      <Button colorScheme='messenger' mb={3}>OFF DUTY</Button>
     </center>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
              
          <Card
            type={'Electronics'}
            time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
          <Card
           type={'Electronics'}
           time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
           <Card
            type={'Electronics'}
            time={'2 Hours ago'}
            heading={'Heading'}
            image={<Image src="https://th.bing.com/th/id/R.f3f1fa67ffc87b94e15ecc399f382d08?rik=gDxQdFFR8YX3Fw&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            price={'K900'}
            href={'#'}
          />
   
    
        </Flex>
      </Container> 

    </Box>
     {/** End Of Products Section */}

     <Footer/>
    </>
  )
}
