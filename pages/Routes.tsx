import React,{useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import Map from "../Components/Map/Map"
import Directions from "../Components/Map/Directions"

export default function Routes() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button 
    bgColor={'blue.400'}
    color={'white'}
    onClick={onOpen}> Routes</Button>

    <Modal 
   
    isOpen={isOpen} onClose={onClose}>
      <ModalOverlay 
      />
      <ModalContent
       maxW={'994px'}
       height={'543px'}
       borderRadius={'20px'}
      >

        <ModalCloseButton />
        <ModalBody>
        <Map/>
        <Directions/>
        </ModalBody>

      </ModalContent>
    </Modal>
  </>
  )
}
