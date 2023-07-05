import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Center,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  Select,
  Textarea,
  SimpleGrid,
  Container
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import { reportValues, reportSchema } from "../Components/validationSchema/report"
import { firebase } from "../firebase/clientApp";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'
import AccidentReportTable from "../pages/AccidentReportTable"


export default function Analytics() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const db = getFirestore(firebase);

  const formik = useFormik({
    initialValues: reportValues,
    validationSchema: reportSchema,
    onSubmit: async (values) => {
      try {
        const report = await addDoc(collection(db, "report"), {
          type: values.type,
          traffic: values.traffic,
          route: values.route,
          condition: values.condition,
          attachment: values.attachment,
          description: values.description,
        });
        console.log("values report", report);
        alert(JSON.stringify(values, null, 2));
      } catch (error) {
        console.log("error", error);
      }
    },
  });


  return (
    <>
      <Button
        bgColor={'blue.400'}
        color={'white'}
        ml={1}
        onClick={onOpen}>Analytics</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Analytics
          </ModalBody>
          <HStack spacing={2} justifyContent="space-between">
            <Box flexGrow={1}>
              <FormControl
                isInvalid={
                  !!formik.errors.type && formik.touched.type
                }
              >
                <FormLabel htmlFor="Type">
                  Type
                  <Select
                    name="type"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                  >
                    <option value="Road">Road</option>
                    <option value="Accident">Accident</option>
                    <option value="Rainly">Rainly</option>
                  </Select>
                  <FormErrorMessage>
                    {formik.errors.type}
                  </FormErrorMessage>
                </FormLabel>
              </FormControl>
            </Box>
            <Box flexGrow={1}>
              <FormControl
                isInvalid={
                  !!formik.errors.traffic && formik.touched.traffic
                }
              >
                <FormLabel htmlFor="Traffic">
                  Traffic
                  <Select
                    name="traffic"
                    onChange={formik.handleChange}
                    value={formik.values.traffic}
                  >
                    <option value="10%">10%</option>
                    <option value="20%">20%</option>
                    <option value="40%">40%</option>
                    <option value="60%">60%</option>
                    <option value="80%">80%</option>
                    <option value="100%">100%</option>
                  </Select>
                  <FormErrorMessage>
                    {formik.errors.traffic}
                  </FormErrorMessage>
                </FormLabel>
              </FormControl>
            </Box>
          </HStack>

          <HStack spacing={2} justifyContent="space-between">
            <Box flexGrow={1}>
              <FormControl
                isInvalid={
                  !!formik.errors.route && formik.touched.route
                }
              >
                <FormLabel htmlFor="Route">
                  Route
                  <Select
                    name="route"
                    onChange={formik.handleChange}
                    value={formik.values.route}
                  >
                    <option value="Montreal - Quebec">Montreal - Quebec</option>
                    <option value="Montreal - Ontario">Montreal - Ontario</option>
                    <option value="Quebec - Toronto">Quebec - Toronto</option>
                    <option value="Montreal - Quebec">Montreal - Quebec</option>
                  </Select>
                  <FormErrorMessage>
                    {formik.errors.route}
                  </FormErrorMessage>
                </FormLabel>
              </FormControl>
            </Box>
            <Box flexGrow={1}>
              <FormControl
                isInvalid={
                  !!formik.errors.condition && formik.touched.condition
                }
              >
                <FormLabel htmlFor="Condition">
                  Condition
                  <Select
                    name="condition"
                    onChange={formik.handleChange}
                    value={formik.values.condition}
                  >
                    <option value="Good">Good</option>
                    <option value="Bad">Bad</option>
                    <option value="Better">Better</option>
                  </Select>
                  <FormErrorMessage>
                    {formik.errors.condition}
                  </FormErrorMessage>
                </FormLabel>
              </FormControl>
            </Box>
          </HStack>
          <Box flexGrow={1}>
            <FormControl
              isInvalid={!!formik.errors.attachment && formik.touched.attachment}
            >
              <FormLabel htmlFor="Attachment">
                Attachment
                <Input
                  name="attachment"
                  type="file"

                  onChange={formik.handleChange}
                  value={formik.values.attachment}
                />
                <FormErrorMessage>
                  {formik.errors.attachment}
                </FormErrorMessage>
              </FormLabel>
            </FormControl>
          </Box>
          <Box flexGrow={1}>
            <FormControl
              isInvalid={!!formik.errors.description && formik.touched.description}
            >
              <FormLabel htmlFor="Description">
                Description
                <Textarea name="description" placeholder='Here is a sample placeholder' onChange={formik.handleChange}
                  value={formik.values.description} />
                <FormErrorMessage>
                  {formik.errors.description}
                </FormErrorMessage>
              </FormLabel>
            </FormControl>
          </Box>
          <ModalFooter>
            <Box>
              <Center>
                <ButtonGroup ml={4}>
                  <Button onClick={formik.handleSubmit} colorScheme="blue" type="submit">
                    Report
                  </Button>
                  <Button colorScheme="blue" onClick={onClose} type="submit">
                    Cancel
                  </Button>
                </ButtonGroup>
              </Center>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>





      <SimpleGrid columns={2} spacing={10}>
        <Box bg='tomato' height='80px'>

        </Box>
        <Box bg='' height='80px'>
          <center>
            <Button colorScheme='red' size='lg'>
              Accidents
            </Button>
          </center>
          <AccidentReportTable db={db} />
        </Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
    </>
  )
}
