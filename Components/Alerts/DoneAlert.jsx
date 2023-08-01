import { AiOutlineArrowRight, AiFillWarning } from "react-icons/ai";
import { useState } from "react";
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

function DoneAlert({ getReports, isAlertOpen, setIsAlertOpen }) {
  // Close the modal
  const closeModal = () => {
    getReports();
    setIsAlertOpen(false);
  };

  return (
    <Modal isOpen={isAlertOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <HStack>
          <ModalHeader>Attention</ModalHeader>
          <AiFillWarning color="red" />
        </HStack>

        <ModalCloseButton />
        <ModalBody>
          <Text>We didn't find any results for your search, try again?</Text>
        </ModalBody>
        <ModalFooter>
          <button onClick={closeModal}>OK</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DoneAlert;
