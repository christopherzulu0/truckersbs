import React,{ReactElement, useEffect, useState} from 'react'
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

import Footer from "../../Components/Footer"
import CreateArticleForm from '@/Components/Article/ArticleForm/ArticleForm';
import { app, firestore } from '@/firebase/clientApp';
import Link from 'next/link';
import PostLoader from '@/Components/Post/Loader';



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
      <Stack align={'center'} spacing={2}>
        <Flex
          align={'center'}
          justify={'center'}
          objectFit="cover"
          width={'100%'}
          height={'250px'}
          minHeight={'250px'}
          maxHeight={'250px'}
          >
          {image}
        </Flex>
        <Box width={'inherit'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexFlow={'column'}>
          <Heading size="md" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" width="200px" style={{marginTop:"20px"}} textAlign={'center'}>{heading}</Heading>
          <Text  fontSize={'sm'} textAlign={'center'} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" width="200px">
            {description}
          </Text>
          <br/>
          
        </Box>
        <Link href={href}>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'inherit'}>
            View More<FaArrowCircleRight style={{ marginLeft: '5px' }} />
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};



export default function Articles() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  
    fetch("/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  if(loading) {
    return (
      <Container
      >
        <PostLoader />
      </Container>
    );
  }

  
// console.log('articles', articles);




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
 
  <Flex flexWrap="wrap" gridGap={6} justifyContent={'flex-start'} alignItems={'center'} mb={'2'}>
              
        {articles?.map((article: any) => (
  <Cards
    key={article.id}
    heading={article.title}
    image={<Image src={article.imageURL} alt={article.title} width={'100%'} height={250} objectFit={'contain'} />}
    description={article.description}
    href={`/articles/${article.id}`}
  />
))}
        </Flex>
      </Container>
      <Footer />
    </>
  )
}
