// import Vstack from "next/vstack";
// import Box from "next/box";
// import { Vstack, Box, StackDivider } from "@chakra-ui/react";
// import { Stack, HStack, VStack } from "@chakra-ui/react";

import {
  Flex,
  Spacer,
  Center,
  Text,
  Square,
  Heading,
  Box,
  Stack,
  Image,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";

import Footer from "../Components/Footer";

export default function Report() {
  return (
    <>
      <Flex color="white">
        <Box
          flex="1"
          maxH="505px"
          bgImage="url('/images/bg-reports.png')"
          py="10px"
          pb="60px"
          bgSize="cover"
        >
          <VStack>
            <Heading fontSize="64px" font="Poppins">
              View Road Reports
            </Heading>
            <Text fontSize="36px">
              Make a report or report reckless drivers
            </Text>

            <HStack fontSize="16px">
              <Button h="55px" bg="#6484FB">
                Make a Report{" "}
              </Button>
              <Button h="55px" bg="#6484FB">
                Report Driver
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Flex>{" "}
      <Box></Box>
    </>
  );
}
