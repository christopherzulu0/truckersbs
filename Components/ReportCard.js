import CardModal from "./Modal/CardModal";

import {
  Box,
  Stack,
  Image,
  Flex,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";

const Card = ({ heading, time, description, location, imageSrc, href }) => {
  return (
    <Box
      w={{ md: "lg" }}
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      m={{ base: "4", md: "auto" }}
    >
      <Stack align="start" spacing="2">
        <Flex align={"center"} justify={"center"} objectFit="contain">
          <Image src={imageSrc} alt={"Image description"} width={"lg"} />
        </Flex>
        <Box>
          <Heading
            fontSize="32"
            lineHeight="30px"
            fontWeight="600"
            size="md"
            style={{ marginTop: "35px" }}
          >
            <Text>{heading}</Text>
          </Heading>

          <HStack
            fontSize="16px"
            fontWeight="400"
            color="#5F6D7E"
            lineHeight="10"
          >
            <Text>{location}:</Text>
            <Text>{time}:</Text>
          </HStack>

          <br />
        </Box>

        <CardModal
          imageSrc={imageSrc}
          heading={heading}
          description={description}
          time={time}
          location={location}
        ></CardModal>
      </Stack>
    </Box>
  );
};

export default Card;
