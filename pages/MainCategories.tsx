import React,{ReactElement, ReactNode } from 'react'
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
    AvatarGroup,
    IconButton, 
    useBreakpointValue,
    CardHeader, 
    StackDivider
  } from '@chakra-ui/react';
import Slider from 'react-slick';
import { FaArrowCircleRight,FaRegWindowRestore } from "react-icons/fa";
import Image from "next/image"
import Footer from "../Components/Footer"
import { FaRegStar,FaSlackHash } from "react-icons/fa";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Routes from './Routes';
import Analytics from './Analytics';
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


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
          w={300}
          h={250}
          align={'center'}
          justify={'center'}
          objectFit="contain"
          ml={-10}
          mt={-16}
          >
          {image}
        </Flex>
        <Box >
          <Heading size="md" style={{marginTop:"-35px"}}>{heading}</Heading>
          <Text  fontSize={'sm'}>
            {description}
          </Text><br/>
          
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          View More<FaArrowCircleRight style={{marginLeft:"5px"}}/>
        </Button>
      </Stack>
    </Box>
  );
};


/**Footer */
const Testimonial = ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
  };
  const TestimonialContent = ({ children }: { children: ReactNode }) => {
    return (
      <Stack
        bg={useColorModeValue('white', 'white.300')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.100'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  };

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  };
  
  const TestimonialText = ({ children }: { children: ReactNode }) => {
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('white.600', 'white.400')}
        fontSize={'sm'}>
        {children}
      </Text>
    );
  };
  
  const TestimonialAvatar = ({
    src,
    name,
    title,
  }: {
    src: string;
    name: string;
    title: string;
  }) => {
    return (
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar src={src} alt={name} mb={2} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };

  
export default function MainCategories() {

   // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    {
      image: 'https://www.illusionsbrand.com/blog/wp-content/uploads/2021/03/Build-your-online-store-with-best-ecommerce-scaled.jpg',
      text: 'Buy & Sell'
    },
    {
      image: 'https://theeventchronicle.com/wp-content/uploads/2020/10/Business-Trends.jpg',
      text: 'Shops'
    },
    {
      image: 'https://www.villagetalkies.com/wp-content/uploads/2020/10/Blog-cover-image.png',
      text: 'News'
    }
  ];

  return (
    <>


   

    <Container maxW={'5xl'} mt={8} mb={7}>
      <Center py={6}>
       <Box
      position={'relative'}
      height={'280px'}
      width={'88%'}
      objectFit={'contain'}
      mb={7}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'255px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Text
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="black"
              fontWeight="bold"
              fontSize={{ base: 'xl', md: '4xl' }}
              textAlign="center"
            >
              {card.text}
            </Text>
          </Box>
        ))}
      </Slider>

      <Center py={4}>
     <Flex
     display={'flex'}
     mt={'-10rem'}
    
     >
     <Routes/>
     <Analytics/>
     </Flex>
     </Center>

    </Box>
    </Center>


<Center 
display={'row'}
mt={'-3.5rem'}
py={4}>
    <Card
    width={300}
    bgColor={'blue.400'}
    color={'white'}
    ml={'4.0rem'}
    >
  <CardBody>
      <Box>
        <Text pt='2' fontSize='sm'>
          Trending
        </Text>
      </Box>
  </CardBody>
</Card>
<Card
bgColor={'gray.200'}
ml={'4.0rem'}
mr={'3.6rem'}
>
  <CardBody>
      <Box
       display={'flex'}
       
      >
         <FaSlackHash  />
        <Text 
        mt={-2.5}
        ml={1}
        pt='2' 
        fontSize='sm'>
         Montreal
        </Text>
      </Box>

      
  </CardBody>
</Card>
</Center>



       <Flex flexWrap="wrap" gridGap={6} justify="center">
         <Cards
          
           heading={'View News Feed'}
           image={<Image src="https://i.ytimg.com/vi/gBbmXmGbaSs/maxresdefault.jpg" alt={'Image description'} width={300} height={250}/>}
           description={
             'View the latest news updates'
           }
           href={'#'}
         />
         <Cards
           heading={'News Archive'}
           image={<Image src="https://th.bing.com/th/id/OIP.H7w7ZtSbc1gj2_G1ff2vbAHaD4?pid=ImgDet&rs=1" alt={'Image description'} width={300} height={250} objectFit="contain" />}
           description={
             'View past news article updates'
           }
           href={'#'}
         />
          <Cards
          
           heading={'Videos'}
           image={<Image src="https://th.bing.com/th/id/R.5c6ecba2334840164db7d939571b82e2?rik=Qp6U8kOGR%2bHA3Q&riu=http%3a%2f%2fimage.cdn.ispot.tv%2fad%2fAkUM%2fxfinity-x1-spot-download-race-large-4.jpg&ehk=5rdMEULbWk501eHSAYWLFYkX5Rh5KPWy9p%2fyVXR1q1U%3d&risl=&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
           description={
             'View video feeds from the sites.'
           }
           href={'#'}
         />

         <Cards
          
          heading={'Ask A Question'}
          image={<Image src="https://www.careeraddict.com/uploads/article/58288/illustration-men-job-interview.jpg" alt={'Image description'} width={300} height={250}/>}
          description={
            'Have any query, ask a question now!'
          }
          href={'#'}
        />
        
        <Cards
          
          heading={'Buy & Sell'}
          image={<Image src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/100c3575595261.5c5109e49c946.jpg" alt={'Image description'} width={300} height={250}/>}
          description={
            'Buy & Sell products.'
          }
          href={'#'}
        />
        <Cards
          heading={'Shop'}
          image={<Image src="https://th.bing.com/th/id/R.2ce03f60419f903ad2df5f25c4c513c4?rik=CD5rcKZ8FmXftw&riu=http%3a%2f%2fusa.pingpongx.com%2fus%2fblog%2fcontent%2fimages%2f2020%2f08%2fThumbnail.jpg&ehk=f%2bi2livoyS3yEyiY44h8dNxj51Zmq%2feM6tB5bWripMI%3d&risl=&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250} objectFit="contain" />}
          description={
            'Shop Now'
          }
          href={'#'}
        />
         <Cards
         
          heading={'Review'}
          image={<Image src="https://salientmarketing.com/wp-content/uploads/2013/07/Online-Reviews.png" alt={'Image description'} width={300} height={250}/>}
          description={
            'Make a Review now'
          }
          href={'#'}
        />

        <Cards
         
         heading={'Jobs'}
         image={<Image src="https://www.against-the-grain.com/wp-content/uploads/2016/03/looking-for-a-job-1257233_1280.jpg" alt={'Image description'} width={300} height={250}/>}
         description={
           'View job listings now'
         }
         href={'#'}
       />
   
       </Flex>
     </Container>

     <Box bg={useColorModeValue('gray.100', 'gray.100')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>What Users Say</Heading>
          <Text>Our user reviews rating 5 stars</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
              <AvatarGroup size='md' max={4}>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </AvatarGroup>
                
                </TestimonialHeading>
              <TestimonialText>
              Repurpose analytics with the posibility to come.
              </TestimonialText>
            </TestimonialContent>

          </Testimonial>
          <Testimonial>
            <TestimonialContent>
                
              <TestimonialHeading>
              <Flex display='flex'>
                <FaRegStar color={'yellow'}/>
                <FaRegStar  color={'yellow'}/>
                <FaRegStar  color={'yellow'}/>
                <FaRegStar  color={'yellow'}/>
                <FaRegStar/>
                </Flex>
              </TestimonialHeading>
             
              <TestimonialText>
                5 out of five stars from 123 reviews from our users.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading><FaRegWindowRestore/></TestimonialHeading>
              <TestimonialText>
             Repurpose analytics with the possiblity to come up.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>

      <Footer/>
    </>
  )
}
