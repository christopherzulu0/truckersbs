import { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrDocumentUpload } from "react-icons/gr";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

// custom components

import FormTriggerBtn from "../Components/Modal/FormModal/RoadReports.jsx";
import DriverTriggerReport from "../Components/Modal/FormModal/ReportDriver.js"
import ModalWrapper from "../Components/Modal/ModalWrapper.tsx";

import Footer from "../Components/Footer";

function CardModal({ imageSrc, heading, description, time, location }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        variant={"link"}
        colorScheme={"blue"}
        size={"sm"}
      >
        Read More
        <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
            // maxW={{ base: "full", md: "275px" }}
            // w={"lg"}
            // borderWidth="1px"
            // borderRadius="10px"
            // overflow="hidden"
            // // pt={"64px"}
            // m="32px"
            // // mx="auto">
            >
              <Stack align="start" spacing="2">
                <HStack
                  fontSize="16px"
                  fontWeight="400"
                  color="#5F6D7E"
                  lineHeight="10"
                >
                  <Text>{location}:</Text>
                  <Text>{time}:</Text>
                  {/* <Text>{timeStamp.date}</Text> */}
                </HStack>
                <Flex align={"center"} justify={"center"} objectFit="contain">
                  <Image
                    src={imageSrc}
                    alt={"Image description"}
                    width={"lg"}
                  />
                </Flex>
                <Box>
                  <Heading
                    fontSize="32"
                    lineHeight="30px"
                    fontWeight="600"
                    size="md"
                    style={{ marginTop: "35px" }}
                  ></Heading>

                  <br />
                </Box>
              </Stack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const Card = ({ heading, time, description, location, imageSrc, href }) => {
  return (
    // <>
    <Box
      // maxW={{ base: "full", md: "275px" }}
      w={"lg"}
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      // pt={"64px"}
      m="32px"
      // mx="auto"
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
            {/* {heading} */}
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
            {/* <Text>{timeStamp.date}</Text> */}
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
    // </>
  );
};

export default function Report() {
  const [reports, setReports] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");

  // console.log(reports[0].time.timeNow);

  const getAllreports = async (limit) => {
    try {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "report"));

      const reports = [];
      querySnapshot.forEach((doc) => {
        reports.push({ id: doc.id, ...doc.data() });
      });

      setReports(reports);
      console.log("All reports:", reports);
    } catch (error) {
      console.error("Error retrieving reports:", error);
    }
  };
  useEffect(() => {
    getAllreports(3);
  }, []);

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
              <FormTriggerBtn getReports={getAllreports}>
                Make a Report
              </FormTriggerBtn>{" "}
              <DriverTriggerReport h="55px" bg="#6484FB">
                Report Driver
              </DriverTriggerReport>
            </HStack>
          </VStack>
        </Box>
      </Flex>{" "}
      <Wrap mx="80px" p="32px">
        {reports.map((report) => (
          <WrapItem>
            <Card
              heading={report.caption}
              imageSrc={report.attachment}
              date={report.date}
              time={report.timeNow}
              location={report.location}
              href={"#"}
              description={report.description}
            />
          </WrapItem>
        ))}
      </Wrap>
      <Footer />
    </>
  );
}
