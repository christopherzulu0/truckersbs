import { Box, Button, Container, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useSwipeable } from "react-swipeable";

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
            width="422.5px"
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
    );
  };



const archives = () => {
  return (
    <Container
      maxW={"5xl"}
      mt={12}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Box>
        <Text fontSize={'2xl'} fontWeight={'normal'}>Archive</Text>
        <Divider my={4} borderWidth={1} />
      </Box>
      <Container
        maxW={"5xl"}
         mt={12}
         display={"flex"}
         justifyContent={"center"}
         flexDirection={"column"}
      >
      <Button variant="solid" colorScheme="blue" width={'100px'} ml={'2'}>Weather</Button>
      <CardSwiper/>
      </Container>

      <Container
        maxW={"5xl"}
         mt={12}
         display={"flex"}
         justifyContent={"center"}
         flexDirection={"column"}
      >
      <Button variant="solid" colorScheme="blue" width={'100px'} ml={'2'}>Accidents</Button>
      <CardSwiper/>
      </Container>

      <Container
        maxW={"5xl"}
         mt={12}
         display={"flex"}
         justifyContent={"center"}
         flexDirection={"column"}
      >
      <Button variant="solid" colorScheme="blue" width={'100px'} ml={'2'}>General</Button>
      <CardSwiper/>
      </Container>

      
    </Container> 
    
  );
};

export default archives;
