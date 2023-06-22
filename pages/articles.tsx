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
import CreateArticleForm from '@/Components/Article/ArticleForm/ArticleForm';

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
  const [isOpen, setIsOpen] = React.useState(false);




  const onClose = () => {
    setIsOpen(false);
  }
  return (
    <>
    <Container maxW={'5xl'} mt={12} display={'flex'} justifyContent={'flex-start'} flexDirection={'column'}>
      <Text fontSize={'sm'} fontWeight={'bold'} onClick={() => setIsOpen(true)}>Articles</Text>
      <CreateArticleForm isOpen={isOpen} onClose={onClose}/>
      <Heading  textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }}  mb={{ base: 4, md: 6 }} ml={{base:'0', sm:'0', md: '16', lg:'16' }} >Featured</Heading>
     <Center>
  <Card
    overflow='hidden'
    variant='outline'
    marginLeft={{ base: '0', sm: '0', md: '0', lg: '-20' }}
    flexDirection={{ base:'column', sm: 'column', md:'row', lg:'row'}}
    justifyContent={{ base: 'center', sm: 'space-between'}}
    alignItems={{ base: 'center', sm: 'stretch' }}
    width={{ base: '100%', sm: '90%', md: '80%', lg: '80%' }}
  >
    <Image
      objectFit='cover'
      height={{ base: '200px', sm: '170px', md: '350px', lg: '350px' }}
      width={{ base: '100%', sm: '100%', md: '350px', lg: '350px' }}
      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
      alt='Caffe Latte'
    />

    <Stack
      flexGrow={{ base: 0, sm: 1 }}
      justifyContent='space-between'
      p={{ base: '4', sm: '6', md: '8' }}
    >
      <CardBody>
        <Heading 
        size={{ base: 'md', sm: 'lg', md: 'xl', lg: 'xl' }}
        // textAlign={{ base: 'center', sm: 'center' }}
        >
          Black Ice In Montreal
        </Heading>

        <Text py={{ base: '2', sm: '4' }}>
          Take caution on Montreal roads...
        </Text>
      </CardBody>

      <CardFooter display={'flex'} justifyContent={{ base: 'center'}}>
        <Button variant='solid' colorScheme='blue'>
          View More<FaArrowCircleRight style={{marginLeft: '5px', margin: 'auto'}} />
        </Button>
      </CardFooter>
    </Stack>
  </Card>
</Center>
</Container>
<br/>

  <Container maxW={'5xl'} mt={12}>
     
      <Heading
       ml={{base:'0', sm:'0', md: '20', lg:'20' }} mb={5}
       textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }}
      >
        Latest Articles
        </Heading>
 
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
