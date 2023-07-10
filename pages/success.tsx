// pages/success.js
import { Box, Heading, Text, Link as ChakraLink, Button } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function Success() {
  return (
    <Box maxW="md" mx="auto" mt={8} p={4} textAlign="center">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"4"}
      >
        <FiCheckCircle size={48} color="green" />
        <Heading as="h1" size="xl" mb={4}>
          Payment Successful
        </Heading>
      </Box>
      <Text fontSize="lg">
        Thank you for your donation! Your payment was successfully processed.
      </Text>
      <Link href="/articles" passHref color="teal.500">
        <Button  mt={4} colorScheme="blue">
          Back to Articles
        </Button>
      </Link>
    </Box>
  );
}
