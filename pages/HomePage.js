import {
  Center,
  Grid,
  GridItem,
  Container,
  VStack,
  Box,
  HStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Map from "../Components/Map/Map";
// body {
//     background-image: url("./images/forest.jpg");

//     height: 100%;
//     width: 100%;

//     background-position: center;
//     background-size: cover;
// }
const HomePage = () => {
  return (
    <div>
      <VStack>
        <center>
          <Container
          mt={50}
            maxW="container.xxl"
            h="300px"
            color="white"
            w="1308px"
            backgroundImage={
              "url(https://th.bing.com/th/id/OIP._0ebgEJ1TLM5Z7t0ggIL0QHaD3?pid=ImgDet&w=946&h=493&rs=1)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          >
            <Heading as="h2" size="2xl" textAlign="start" mt={50} >
              Black Ice Montreal
            </Heading>
            <Center>
            

            </Center>
            <Center>
              <HStack mt={150}>
                <Button colorScheme="blue">My Route</Button>
                <Button colorScheme="blue">My Loads</Button>
              </HStack>
            </Center>
          </Container>

          
        </center>
      </VStack>
    </div>
  );
};

export default HomePage;
