import React,{useState} from 'react'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    IconButton,
    VStack,
    HStack,
    Image,
    useDisclosure,
    Center,
    CardBody,
    Card
  } from '@chakra-ui/react';
  import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
  import Footer from "../Components/Footer"
  import { AddIcon,ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
  import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
  import {RiStarFill } from "react-icons/ri";
  
export default function Talk() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const comments = [
    // Array of comments
    'Great platform I always trust your insights,whenever am on the road. I can not recommend any other better platform',
    'You’re a great team player and you constantly help others meet their customer requests.',
    'You have no problem building rapport with everyone you come in contact work.',
    'You’re really good at obtaining first-hand customer information and using this information to improve our products and services.',
    'You’re really good at following up with the client so as to ensure that they are never left in the dark. Keep it up!',
  ];

  // Function to handle decreasing the comment index
  const decreaseComment = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to handle increasing the comment index
  const increaseComment = () => {
    if (currentIndex < comments.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  

      
  return (
    <>
    <Container maxW={'5xl'} mt={-20}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
         Welcome To {' '}
          <Text as={'span'} color={'orange.400'}>
            The ToolBox
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
         We are here for you 24/7/365 Days, while you are behind your wheel.
         Choose your account type below to proceed!
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        
      </Stack>
    </Container>

    <Center py={4}>
  <Box p={4} borderWidth={2} borderRadius="md" w={{base: '90%', md: '40%'}}>
    <Flex justifyContent="center" alignItems="left" direction={{base: 'column', md: 'row'}} mb={4}>
      <Card maxW={{base: '100%', md: '50%'}} maxH={'175px'} ml={{base: 0, md: '-5rem'}}
      >
        <CardBody maxW={{base: '100%', md: '50%'}}>
          <Flex align={'flex'}>
            <RiStarFill color="yellow" />
            <RiStarFill color="yellow" />
            <RiStarFill color="yellow" />
            <RiStarFill color="yellow" />
            <RiStarFill color="yellow" />
          </Flex>
          <Text fontSize="md" style={{ width: "16rem" }}>
            {comments[currentIndex]}
          </Text>
          <Text mt={4} color={"blackAlpha.700"}>
            Mark Cuban
          </Text>
        </CardBody>
      </Card>
      <Stack ml={{base: 0, md: '1rem'}} mt={{base: '1rem', md: 0}}>
        <Box boxSize={{base: '100%', md: '200px'}}>
          <Image
            style={{ width: "100%" }}
          
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
      </Stack>
    </Flex>

    <Flex
      ml={{base: 0, md: '-28rem'}}
      mt={{base: '-1.9rem', md: 0}}
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        bgColor={"#6385FF"}
        icon={<ChevronLeftIcon />}
        onClick={decreaseComment}
        aria-label="Previous Comment"
        size="lg"
        variant="outline"
        mr={4}
      />
      <IconButton
        bgColor={"#6385FF"}
        icon={<ChevronRightIcon />}
        onClick={increaseComment}
        aria-label="Next Comment"
        size="lg"
        variant="outline"
      />
    </Flex>
  </Box>
</Center>

    <Container maxW={'5xl'} mt={-20}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
          lineHeight={'100%'}
          >
         Frequently Asked Questions
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}  style={{marginTop:"1rem"}}>
         We are here for you 24/7/365 Days, while you are behind your wheel.
         Choose your account type below to proceed!
        </Text>
      </Stack>
    </Container>

   
 <Container maxW={'5xl'} mt={-20}>
  <Flex direction="row" justify="space-between">
    {/* AccordionItem 1 on the left */}
    <Flex direction="column" width="50%">
      <Accordion allowToggle>
        <AccordionItem mb={5}>
          {/* Accordion Button */}
          <h2>
            <AccordionButton justifyContent="flex-start"> {/* Align button to the left */}
              <Box as="span" flex='1' textAlign='left'>
               How long is the free trail?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/* Accordion Panel */}
          <AccordionPanel pb={4}>
            Content for AccordionItem 1 - Left
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb={5}>
          {/* Accordion Button */}
          <h2>
            <AccordionButton justifyContent="flex-start"> {/* Align button to the left */}
              <Box as="span" flex='1' textAlign='left'>
                What are toolbox talks?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/* Accordion Panel */}
          <AccordionPanel pb={4}>
           Who can use the platform?
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb={5}>
          {/* Accordion Button */}
          <h2>
            <AccordionButton justifyContent="flex-start"> {/* Align button to the left */}
              <Box as="span" flex='1' textAlign='left'>
                Ask on this topic
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/* Accordion Panel */}
          <AccordionPanel pb={4}>
            Content for AccordionItem 1 - Left
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>

    {/* AccordionItem 2 on the right */}
    <Flex direction="column" width="50%" ml={3}>
      <Accordion allowToggle>
        <AccordionItem mb={5}>
          {/* Accordion Button */}
          <h2>
            <AccordionButton justifyContent="flex-end"> {/* Align button to the right */}
              <Box as="span" flex='1' textAlign='left'>
              Ask on this topic
              </Box>
              <AddIcon />
            </AccordionButton>
          </h2>
          {/* Accordion Panel */}
          <AccordionPanel pb={4}>
            Content for AccordionItem 2 - Right
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb={5}>
          {/* Accordion Button */}
          <h2>
            <AccordionButton justifyContent="flex-end"> {/* Align button to the right */}
              <Box as="span" flex='1' textAlign='left'>
              Ask on this topic
              </Box>
              <AddIcon />
            </AccordionButton>
          </h2>
          {/* Accordion Panel */}
          <AccordionPanel pb={4}>
            Content for AccordionItem 2 - Right
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb={5}>
          {/* Accordion Button */}
          <h2>
            <AccordionButton justifyContent="flex-end"> {/* Align button to the right */}
              <Box as="span" flex='1' textAlign='left'>
              Ask on this topic
              </Box>
              <AddIcon />
            </AccordionButton>
          </h2>
          {/* Accordion Panel */}
          <AccordionPanel pb={4}>
            Content for AccordionItem 2 - Right
          </AccordionPanel>
        </AccordionItem>
        
      </Accordion>
    </Flex>
  </Flex>

    </Container>
    

    <Footer/>
    </>
  )
}
