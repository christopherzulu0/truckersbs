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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  Input,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { data } from "./CardData";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Footer from "../Components/Footer";
import { dataCard } from "./CardData";
import Map from "@/Components/Map/Map";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Map</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Map />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div>
        <VStack>
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
              <HStack mt={100}>
                <Button onClick={onOpen} colorScheme="blue">
                  My Route
                </Button>
                <Button colorScheme="blue">My Loads</Button>
              </HStack>
            </Center>
          </Container>
        </VStack>
        <VStack>
          <Container
            mt={50}
            maxW="container.xxl"
            h="300px"
            color="white"
            w="1308px"
          >
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              {data.map((card) => (
                <GridItem w="300px" h="10" key={card.id}>
                  <Card maxW="sm" mt={5}>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="md"
                    />
                    <CardBody mt="6" spacing="1">
                      <Heading size="md">{card.artical} </Heading>
                      <Text textAlign="center">{card.description}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button variant="ghost" colorScheme="blue">
                        view
                        <ArrowForwardIcon />
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </VStack>
        <br />
        <VStack>
          <Container
            mt={100}
            maxW="container.xxl"
            h="300px"
            color="white"
            w="1308px"
          >
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              {dataCard.map((card) => (
                <GridItem w="300px" h="10" key={card.id}>
                  <Card maxW="sm" mt={5}>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="md"
                    />
                    <CardBody mt="6" spacing="1">
                      <Heading size="md">{card.artical} </Heading>
                      <Text textAlign="center">{card.description}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button variant="ghost" colorScheme="blue">
                        view
                        <ArrowForwardIcon />
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </VStack>
        <br />
        <VStack>
          <Container
            mt={100}
            maxW="container.xxl"
            h="300px"
            color="white"
            w="1308px"
          >
            <Footer />
          </Container>
        </VStack>
      </div>
    </>
  );
};

export default HomePage;
