import CardModal from "./Modal/CardModal";
import { GrLocation } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import {
  Box,
  Stack,
  Image,
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

import Link from "next/link";

const Card = ({
  heading,
  date,
  time,
  description,
  location,
  imageSrc,
  href,
  target,
  id,
}) => {
  const [timeOfDay, setTimeOfDay] = useState("AM");

  const formattedDate = date.replaceAll("-", "/");

  const timeString = time;
  const dateStr = `2023-07-31T${time}`;

  const [hours, minutes] = time.split(":").map(Number);
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedTime = `${hours % 12 || 12}:${minutes} ${amOrPm}`;

  const town = location;

  return (
    <Box
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      m={{ base: "4", md: "auto" }}
    >
      <Stack align="start" spacing="2">
        <Flex
          w="lg"
          backgroundImage={imageSrc}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            justify={"center"}
            objectFit="contain"
            h="200px"
            align={"center"}
          ></Box>
        </Flex>

        <VStack align={"start"}>
          <Box>
            <Heading
              fontSize="32"
              lineHeight="20px"
              fontWeight="600"
              size="md"
              style={{ marginTop: "35px", textTransform: "capitalize" }}
            >
              <Text>{heading}</Text>
            </Heading>

            <HStack
              fontSize="16px"
              fontWeight="400"
              color="#8CBC8B"
              lineHeight="10"
            >
              <Text color="#8CBC8B">
                <CiLocationOn />
              </Text>
              <Text>{town + " "} :</Text> <Text>{formattedDate + " "}:</Text>
              <Text> {" " + formattedTime}</Text>
            </HStack>

            <br />
          </Box>

          <Button
            // onClick={onOpen}
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
          >
            <Link href={`/ReportDetails/${id}?target=${target}`}>
              <HStack>
                <Text>Read More</Text>
                <AiOutlineArrowRight style={{ marginLeft: "2px" }} />
              </HStack>
            </Link>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Card;
