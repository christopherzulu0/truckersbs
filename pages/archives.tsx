import ArticleFilter from "@/Components/Article/ArticleForm/ArticleFilter";
import Footer from "@/Components/Footer";
import { Box, Button, Container, Divider, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useSwipeable } from "react-swipeable";
import { GoClock } from "react-icons/go";
import ReusableModal from "@/Components/Article/ArticleForm/ModalReusable";

const PaginationBox = () => {
  const [activeNumber, setActiveNumber] = useState(1);

  const handleNext = () => {
    setActiveNumber((prevNumber) => prevNumber + 1);
  };

  const handleNumberClick = (number: any) => {
    setActiveNumber(number);
  };

  const renderNumbers = () => {
    const numbers: any = [activeNumber, activeNumber + 1];

    if (activeNumber > 1) {
      numbers.unshift('...');
      numbers.unshift(activeNumber - 1);
    }

    if (activeNumber < 4) {
      numbers.push(activeNumber + 2);
      numbers.push('...');
      numbers.push(5);
    }

    return numbers.map((number: any, index: React.Key | null | undefined) => (
      <Box display="inline-block" padding="8px" key={index}>
        {number === '...' ? (
          <Button isDisabled>{number}</Button>
        ) : (
          <Button
            bg={activeNumber === number ? 'blue.500' : 'transparent'}
            color={activeNumber === number ? 'white' : 'black'}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </Button>
        )}
      </Box>
    ));
  };

  return (
    <Box mt={10}>
      {activeNumber > 1 && (
        <Box display="inline-block" padding="8px">
          <Button onClick={() => handleNumberClick(activeNumber - 1)}>Previous</Button>
        </Box>
      )}
      {renderNumbers()}
      <Button onClick={handleNext}>Next</Button>
    </Box>
  );
};


const CardSwiper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
      { id: 1, image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', title: "Card 1" , description:"This is a description"},
      { id: 2, image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', title: "Card 2", description:"This is a description"},
      { id: 3, image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', title: "Card 3", description:"This is a description" },
      { id: 4, image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', title: "Card 4", description:"This is a description"},
      { id: 5, image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', title: "Card 5", description:"This is a description" },
      { id: 6 ,image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', title: "Card 6", description:"This is a description" },
    ];


  
    const handleSwipe = (direction: string) => {
      if (direction === "left" && currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (direction === "right" && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => handleSwipe("left"),
      onSwipedRight: () => handleSwipe("right"),
    });
  
    const visibleCards = cards.slice(currentIndex, currentIndex + 2);
  
    return (
      <>
      <Box display="flex" mt={'10'} width={'100%'} justifyContent="start" alignItems="center" {...swipeHandlers}>
        {/* <Button
          disabled={currentIndex === 0}
          onClick={() => handleSwipe("right")}
          variant="unstyled"
          color={'blue.500'}
          colorScheme="blue"
        >
          <BiLeftArrowAlt size={24} />
        </Button> */}
        <Box display={'flex'}>
          {visibleCards.map((card) => (
            <Box
            key={card.id}
            width={{base: '100%', sm: '100%', md: '100%', lg: '100%'}}
            height="412px"
            bg="white"
            border={'1px solid #E2E8F0'}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            m={2}
            borderRadius="md"
          >
            <Image src={card.image} alt={card.title} style={{ width: "100%", height: "auto" }} />
            <Box p={2} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >  
            <Heading as="h2" fontSize="xl" mt={4}>
              {card.title}
            </Heading>
            <Text>{card.description}</Text>
            <Flex alignItems="center" mt={4}>
              <Button rightIcon={<BiRightArrowAlt size={24}/>} color={'blue.500'} variant={'unstyled'} fontWeight={'normal'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                View 
              </Button>
            </Flex>
            </Box>
          </Box>
          ))}
        </Box>
        {/* <Button
          disabled={currentIndex === cards.length - 2}
          onClick={() => handleSwipe("left")}
          variant="unstyled"
          colorScheme="blue"
          color={'blue.500'}
        >
          <BiRightArrowAlt size={24}/>
        </Button> */}
      </Box>
      </>
    );
  };



const archives = () => {

  const [isOpen, setIsOpen] = useState(false);
  const justifyContent = useBreakpointValue({
    base: "flex-start", // Default value for small screens
    sm: "space-between", // Justify content between for small screens
    md: "flex-start", // Justify content start for medium screens
    lg: "flex-start", // Justify content start for large screens
  });

  const display = useBreakpointValue({
    base: "flex", // Default value for small screens
    sm: "flex", // Display flex for small screens
    md: "flex", // Hide the icon for medium screens
    lg: "flex", // Display flex for large screens
  });

  const openModal =()=> {
    setIsOpen(true);
  }
  return (
    <>

  <Container
        maxW={"5xl"}
        mt={12}
        display={"flex"}
        flexDirection={"column"}
        gap={'4'}
        justifyContent={"center"}
  >
      <Box width={'full'}>
        <Text fontSize={'2xl'} fontWeight={'normal'}>Archive</Text>
        <Divider my={4} borderWidth={1} />

      </Box>
   <Box 
        width={ { base:'100%', sm:'100%', md:'100%', lg:'100%'} }
        mt={4}
        display={"flex"}
        justifyContent={"between"}
        gap={'2'}
  >
    <Box
      width={ { base:'100%', sm:'100%', md:'100%', lg:'70%'} }
      mt={12}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Container
        width={ { base:'100%', sm:'100%', md:'100%', lg:'100%'} }
         mt={12}
         display={"flex"}
         justifyContent={"center"}
         flexDirection={"column"}
      >
      <Box
      display={display}
      justifyContent={{base:'space-between', sm:'space-between', md:'flex-start', lg:'flex-start'}}
      alignItems="end"
      flexDirection="row"
    >
      <Button  display={{base:'flex', sm:'flex', md:'flex', lg:'flex'}} variant="solid" colorScheme="blue" width="100px" ml={2}>
        Weather
      </Button>
      <Box display={{sm:'flex', md:'none', lg:'none'}} ml={2} justifyContent={'end'} alignItems={'center'} color={'blue.500'}>
        <GoClock size={25} onClick={openModal}/>
      </Box>
    </Box>
      <CardSwiper/>
      </Container>

    

      <Container
        width={ { base:'100%', sm:'100%', md:'100%', lg:'100%'} }
         mt={12}
         display={"flex"}
         justifyContent={"center"}
         flexDirection={"column"}
      >
      <Button variant="solid" colorScheme="blue" width={'100px'} ml={'2'}>Accidents</Button>
      <CardSwiper/>
      </Container>

      <Container
        width={ { base:'100%', sm:'100%', md:'100%', lg:'100%'} }
         mt={12}
         display={"flex"}
         justifyContent={"center"}
         flexDirection={"column"}
      >
      <Button variant="solid" colorScheme="blue" width={'100px'} ml={'2'}>General</Button>
      <CardSwiper/>
      </Container>

     <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <PaginationBox/>
     </Box>
    </Box>
    <Box 
       display={{ base:'none', sm:'none', md:'flex', lg:'flex'}} 
    > 
    <ArticleFilter/>
    </Box>
 </Box>


    </Container>
       <ReusableModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ArticleFilter />
      </ReusableModal>

    <Footer />
    </>
    
  );
};

export default archives;
