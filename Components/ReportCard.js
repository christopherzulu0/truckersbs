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

  const timer = new Date(`2000-01-01T${timeString}`);
  const formattedTime = timer.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  const town = location.split(/[,]/)[1].split(/[\d]/)[0];
  return (
    <Box
      w={{ md: "100" }}
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      m={{ base: "4", md: "auto" }}
    >
      <Stack align="start" spacing="2">
        <Flex align={"center"} justify={"center"} objectFit="contain">
          <Image src={imageSrc} alt={"Image description"} width={"sm"} />
        </Flex>
        <Box>
          <Heading
            fontSize="32"
            lineHeight="20px"
            fontWeight="600"
            size="md"
            style={{ marginTop: "35px" }}
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
              <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
            </HStack>
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default Card;
