import { AiOutlineArrowRight } from "react-icons/ai";

import {
  useDisclosure,
  VStack,
  Stack,
  HStack,
  Flex,
  Image,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Heading,
} from "@chakra-ui/react";

function CardModal({ imageSrc, heading, description, time, location }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        variant={"link"}
        colorScheme={"blue"}
        size={"sm"}
      >
        Read More
        <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Stack align="start" spacing="2">
                <HStack
                  fontSize="16px"
                  fontWeight="400"
                  color="#5F6D7E"
                  lineHeight="10"
                >
                  <Text>{location}:</Text>
                  <Text>{time}:</Text>
                </HStack>
                <Flex align={"center"} justify={"center"} objectFit="contain">
                  <Image
                    src={imageSrc}
                    alt={"Image description"}
                    width={"lg"}
                  />
                </Flex>
                <Box>
                  <Heading
                    fontSize="32"
                    lineHeight="30px"
                    fontWeight="600"
                    size="md"
                    style={{ marginTop: "35px" }}
                  ></Heading>

                  <br />
                </Box>
              </Stack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardModal;
