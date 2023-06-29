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
  Textarea
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import { reportValues, reportSchema } from "../Components/validationSchema/report"


export default function Analytics() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const formik = useFormik({
    initialValues: reportValues,
    validationSchema: reportSchema,
    onSubmit: async (values) => {
      try {
        // const directions = await addDoc(collection(db, "directions"), {
        //   from: values.from,
        //   destination: values.destination,
        //   startTime: values.startTime,
        //   firstStop: values.firstStop,
        // });
        // console.log("values directions", directions);
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
                    <option value="option1">Road</option>
                    <option value="option2">Accident</option>
                    <option value="option3">Rainly</option>
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
                    <option value="option1">10%</option>
                    <option value="option1">20%</option>
                    <option value="option1">40%</option>
                    <option value="option2">60%</option>
                    <option value="option3">80%</option>
                    <option value="option3">100%</option>
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
                    <option value="option1">Montreal - Quebec</option>
                    <option value="option2">Montreal - Ontario</option>
                    <option value="option3">Quebec - Toronto</option>
                    <option value="option3">Montreal - Quebec</option>
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
                    <option value="option1">Good</option>
                    <option value="option2">Bad</option>
                    <option value="option3">Better</option>
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
    </>
  )
}
