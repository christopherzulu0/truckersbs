// pages/cancel.js
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { FiAlertTriangle } from "react-icons/fi";
import Link from "next/link";

export default function Cancel() {
  return (
    <Box maxW="md" mx="auto" mt={8} p={4} textAlign="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={4}
      >
        <FiAlertTriangle size={48} color="red" />
        <Heading as="h1" size="xl" mb={4}>
          Payment Cancelled
        </Heading>
      </Box>
      <Text fontSize="lg">
        Your payment was cancelled. If you have any questions or need further assistance, please contact our support team.
      </Text>
      <Link href="/articles" passHref>
        <Button mt={4} colorScheme="blue">
          Back to Articles
        </Button>
      </Link>
    </Box>
  );
}