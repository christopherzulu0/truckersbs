import Footer from '@/Components/Footer';
import { Box, Container, Divider, Flex, Image, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import DonateComponent, { ModalPopup } from '@/Components/Article/ArticleForm/DonatePopUp';
import { useState } from 'react';
import SubscriptionCard from '@/Components/subscription/Subscription';


const articles = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      image: 'https://plus.unsplash.com/premium_photo-1672976833398-db9d54eec057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, est sed hendrerit consectetur, nulla tellus ultrices purus, nec cursus erat turpis at nulla. Cras nec metus malesuada, venenatis ex eget, gravida justo. Integer vitae sem eu odio malesuada varius. Suspendisse a sollicitudin libero. Nulla mattis metus vel dolor dignissim malesuada. Donec fringilla ullamcorper justo, ut sodales nisl tristique et. Aenean sit amet tempor nulla, id bibendum dui. Nam porttitor placerat arcu eget dignissim. Etiam bibendum faucibus mi at ultrices. Morbi venenatis ante ac lectus egestas lobortis.',
    },
    {
      id: 2,
      title: 'Lorem Ipsum 2',
      image: 'https://plus.unsplash.com/premium_photo-1672976833398-db9d54eec057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, est sed hendrerit consectetur, nulla tellus ultrices purus, nec cursus erat turpis at nulla. Cras nec metus malesuada, venenatis ex eget, gravida justo. Integer vitae sem eu odio malesuada varius. Suspendisse a sollicitudin libero. Nulla mattis metus vel dolor dignissim malesuada. Donec fringilla ullamcorper justo, ut sodales nisl tristique et. Aenean sit amet tempor nulla, id bibendum dui. Nam porttitor placerat arcu eget dignissim. Etiam bibendum faucibus mi at ultrices. Morbi venenatis ante ac lectus egestas lobortis.',
    },
    {
      id: 3,
      title: 'Lorem Ipsum 3',
      image: 'https://plus.unsplash.com/premium_photo-1672976833398-db9d54eec057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, est sed hendrerit consectetur, nulla tellus ultrices purus, nec cursus erat turpis at nulla. Cras nec metus malesuada, venenatis ex eget, gravida justo. Integer vitae sem eu odio malesuada varius. Suspendisse a sollicitudin libero. Nulla mattis metus vel dolor dignissim malesuada. Donec fringilla ullamcorper justo, ut sodales nisl tristique et. Aenean sit amet tempor nulla, id bibendum dui. Nam porttitor placerat arcu eget dignissim. Etiam bibendum faucibus mi at ultrices. Morbi venenatis ante ac lectus egestas lobortis.',
    },
    {
      id: 4,
      title: 'Lorem Ipsum 4',
      image: 'https://plus.unsplash.com/premium_photo-1672976833398-db9d54eec057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, est sed hendrerit consectetur, nulla tellus ultrices purus, nec cursus erat turpis at nulla. Cras nec metus malesuada, venenatis ex eget, gravida justo. Integer vitae sem eu odio malesuada varius. Suspendisse a sollicitudin libero. Nulla mattis metus vel dolor dignissim malesuada. Donec fringilla ullamcorper justo, ut sodales nisl tristique et. Aenean sit amet tempor nulla, id bibendum dui. Nam porttitor placerat arcu eget dignissim. Etiam bibendum faucibus mi at ultrices. Morbi venenatis ante ac lectus egestas lobortis.',
    },
    {
      id: 5,
      title: 'Lorem Ipsum 5',
      image: 'https://plus.unsplash.com/premium_photo-1672976833398-db9d54eec057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, est sed hendrerit consectetur, nulla tellus ultrices purus, nec cursus erat turpis at nulla. Cras nec metus malesuada, venenatis ex eget, gravida justo. Integer vitae sem eu odio malesuada varius. Suspendisse a sollicitudin libero. Nulla mattis metus vel dolor dignissim malesuada. Donec fringilla ullamcorper justo, ut sodales nisl tristique et. Aenean sit amet tempor nulla, id bibendum dui. Nam porttitor placerat arcu eget dignissim. Etiam bibendum faucibus mi at ultrices. Morbi venenatis ante ac lectus egestas lobortis.',
    },
  ];

  const SocialMediaLinks = () => {
    return (
      <Box display="flex" flexDirection="column" shadow={'sm'} gap={'8'} p={'2'} mb={'2'}>
        <Flex alignItems="center" mb={2}>
          <Link href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/whatsapp.png" alt="WhatsApp" boxSize={10} mr={2} transform="rotate(-90deg)"/>
          </Link>
        </Flex>
        <Flex alignItems="center" mb={2}>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/in.png" alt="LinkedIn"  boxSize={10} mr={2} transform="rotate(-90deg)"/>
          </Link>
        </Flex>
        <Flex alignItems="center" mb={2}>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/insta.png" alt="Instagram" boxSize={10} mr={2}  transform="rotate(-90deg)"/>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/fb.png" alt="Facebook" boxSize={10} mr={2} transform="rotate(-90deg)" />
          </Link>
        </Flex>
      </Box>
    );
  };
  
function ArticleDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [showSubscription, setShowSubscription] = useState(false);

  // Find the article based on the ID
  const article = articles.find((article) => article.id === parseInt(id as string, 10));

  if (!article) {
    return <Text>Article not found.</Text>;
  }

  const onClose = () => {
    setShowSubscription(false);
  }

  console.log('showSubscription', showSubscription);
  

  return (
    <>
    
    <Container
        maxW={'6xl'}
        mt={8}
        display={"flex"}
        flexDirection={"column"}
        gap={'4'}
        justifyContent={"center"}
  >
      <Box>
        <Text fontSize={'2xl'} fontWeight={'normal'}>Post</Text>
      </Box>
      <Divider />
      <Box 
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      mt={'4'}
      mb={4}
      maxW={'full'}
      >
     <Box
     display={'flex'}
     justifyContent={'flex-start'}
     alignItems={'flex-start'}
     ml={'20'}
     mb={'4'}
     width={'100%'}
     >
        <Text fontSize={'2xl'}   fontWeight={'bold'}>{article.title}</Text>
      </Box>
      <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'10'}
      width={'100%'}
      >
      <Image src={article.image} alt={article.title}  boxSize={700} maxH="400px"  objectFit={'cover'} mb={4} maxW={{base:'100%', sm:'100%', md:'100%', lg:'100%'}} />
      <Box>
        <SocialMediaLinks />
      </Box>
      </Box>
      <Box
      width={'80%'}
      >
      <Text mt={4} fontSize="20px">{article.content}</Text>
      </Box>
      </Box>
    </Container>
            {
              showSubscription && (<ModalPopup isOpen={showSubscription} onClose={onClose}>
                <SubscriptionCard />
              </ModalPopup>)
              }
    <DonateComponent setShowSubscription={setShowSubscription}/>
    <Footer/>
    </>
  );
}

export default ArticleDetailsPage;
