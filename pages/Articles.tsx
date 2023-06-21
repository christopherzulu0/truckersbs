import React,{ReactElement} from 'react'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Container,
    CardBody,
    CardFooter,
    Button,
    Flex,
    Card,
    Image
  
  } from '@chakra-ui/react';
import { FaArrowCircleRight } from "react-icons/fa";

import Footer from "../Components/Footer"

interface CardProps {
  heading: string;
  description: string;
  image: ReactElement;
  href: string;
}

const Cards = ({heading, description, image,href }: CardProps) => {
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
          align={'center'}
          justify={'center'}
          objectFit="contain"
         
          >
          {image}
        </Flex>
        <Box >
          <Heading size="md" style={{marginTop:"-35px"}}>{heading}</Heading>
          <Text  fontSize={'sm'}>
            {description}
          </Text>
          <br/>
          
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          View More<FaArrowCircleRight style={{marginLeft:"5px"}}/>
        </Button>
      </Stack>
    </Box>
  );
};



export default function Articles() {
  return (
    <>
      
      <Heading textAlign={{ base: 'center', md: 'center' }} mx={{ base: 'auto', md: '0' }} mb={{ base: 4, md: 6 }}>Featured</Heading>
     <Center py={6}>
  <Card
    overflow='hidden'
    variant='outline'
    flexDirection={{ base: 'column', sm: 'row' }}
    justifyContent={{ base: 'center', sm: 'space-between' }}
    alignItems={{ base: 'center', sm: 'stretch' }}
    width={{ base: '100%', sm: '90%', md: '80%', lg: '60%' }}
  >
    <Image
      objectFit='cover'
      height={{ base: '200px', sm: '170px', md: '350px', lg: '350px' }}
      width={{ base: '100%', sm: '320px', md: '300px', lg: '350px' }}
      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
      alt='Caffe Latte'
    />

    <Stack
      flexGrow={{ base: 0, sm: 1 }}
      justifyContent='space-between'
      p={{ base: '4', sm: '6', md: '8' }}
    >
      <CardBody>
        <Heading size={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}>
          Black Ice In Montreal
        </Heading>

        <Text py={{ base: '2', sm: '4' }}>
          Take caution on Montreal roads...
        </Text>
      </CardBody>

      <CardFooter alignSelf={{ base: 'center', sm: 'flex-end' }}>
        <Button variant='solid' colorScheme='blue'>
          View More<FaArrowCircleRight ml={{ base: '2', sm: '5' }} />
        </Button>
      </CardFooter>
    </Stack>
  </Card>
</Center>
<br/>

  <Container maxW={'5xl'} mt={12}>
     
      <Heading ml={20} mb={5}>Latest Articles</Heading>
 
        <Flex flexWrap="wrap" gridGap={6} justify="center">
              
          <Cards
           
            heading={'Sun Fransico Scorcing  Sun'}
            image={<Image src="https://th.bing.com/th/id/R.bbfd7a4454e000bfc9e814c907bcdf79?rik=XWlwHD%2bcnyU%2bJg&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250} objectFit="contain"/>}
            description={
              'Scorcing  Sun in fransico'
            }
            href={'#'}
          />
          <Cards
            heading={'Home deco startup opens'}
            image={<Image src="https://th.bing.com/th/id/OIP.s-QXJYVYyZPl9J8fM8iqQwHaD8?w=312&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt={'Image description'} width={300} height={250} objectFit="contain" />}
            description={
              'Capi Deco Start up opens'
            }
            href={'#'}
          />
           <Cards
           
            heading={'Why is it colder on the North Pole'}
            image={<Image src="https://th.bing.com/th/id/R.b270779631af86f839fb23ae6c1beae7?rik=VrsuBI%2fvJi0ilg&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250} objectFit="contain"/>}
            description={
              'Why it gets colder on the north pole...'
            }
            href={'#'}
          />
   
    
        </Flex>
      </Container>

      <Container maxW={'5xl'} mt={12} mb={7}>
 
        <Flex flexWrap="wrap" gridGap={6} justify="center">
              
          <Cards
           
           heading={'Sun Fransico Scorcing  Sun'}
           image={<Image src="https://th.bing.com/th/id/R.bbfd7a4454e000bfc9e814c907bcdf79?rik=XWlwHD%2bcnyU%2bJg&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250} objectFit="contain"/>}
           description={
             'Scorcing  Sun in fransico'
           }
           href={'#'}
         />
         <Cards
           heading={'Home deco startup opens'}
           image={<Image src="https://th.bing.com/th/id/OIP.s-QXJYVYyZPl9J8fM8iqQwHaD8?w=312&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt={'Image description'} width={300} height={250} objectFit="contain" />}
           description={
             'Capi Deco Start up opens'
           }
           href={'#'}
         />
          <Cards
          
           heading={'Why is it colder on the North Pole'}
           image={<Image src="https://th.bing.com/th/id/R.b270779631af86f839fb23ae6c1beae7?rik=VrsuBI%2fvJi0ilg&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250} objectFit="contain"/>}
           description={
             'Why it gets colder on the north pole...'
           }
            href={'#'}
          />
    
        </Flex>
      </Container>

      <Footer />
    </>
  )
}
