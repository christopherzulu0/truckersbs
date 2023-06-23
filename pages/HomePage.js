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
  Card,
  CardBody,
  Stack,
  Text,
  ButtonGroup,
  CardFooter,
  Divider,
  Image,
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
            <Heading as="h2" size="2xl" textAlign="start" mt={50}>
              Black Ice Montreal
            </Heading>
            <Center></Center>
            <Center>
              <HStack mt={150}>
                <Button colorScheme="blue">My Route</Button>
                <Button colorScheme="blue">My Loads</Button>
              </HStack>
            </Center>
          </Container>

          <Card maxW="sm" mt={5}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="md"
            />
            <CardBody mt="6" spacing="1">
              <Heading size="md">Living room Sofa</Heading>
              <Text textAlign="center">
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        </center>
      </VStack>
    </div>
  );
};

export default HomePage;
