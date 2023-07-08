import { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

import { GrDocumentUpload } from "react-icons/gr";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ReportCard from "../Components/ReportCard";
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
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";

// custom components

import FormTriggerBtn from "../Components/Modal/FormModal/RoadReports.jsx";
import DriverTriggerReport from "../Components/Modal/FormModal/ReportDriver.js";
import ModalWrapper from "../Components/Modal/ModalWrapper.tsx";

import Footer from "../Components/Footer";

// create a loading indicator

export const LoadingWidget = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" />
    </Box>
  );
};

// main component
export default function Report() {
  const [reports, setReports] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllreports = async (limit) => {
    try {
      setIsLoading(!isLoading);
      console.log(reports.length);
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "report"));

      const allReports = [];
      querySnapshot.forEach((doc) => {
        allReports.push({ id: doc.id, ...doc.data() });
      });

      setReports(allReports);
      if (allReports.length == 0) {
        setIsLoading(false);
      }
      console.log("All reports:", allReports, "isLoading:", isLoading);
    } catch (error) {
      console.error("Error retrieving reports:", error);
    }
  };
  useEffect(() => {
    getAllreports();
  }, []);

  useEffect(() => {
    console.log("All reports:", reports.length);
    if (reports.length > 0) {
      setIsLoading(!isLoading);
    }
  }, [reports]);

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
            <Heading fontSize={{ base: "34", md: "64" }} font="Poppins">
              View Road Reports
            </Heading>
            <Text fontSize={{ base: "18", md: "lg" }}>
              Make a report or report reckless drivers
            </Text>

            <HStack fontSize={{ base: "12", md: "16" }}>
              <FormTriggerBtn getReports={getAllreports}>
                Make a Report
              </FormTriggerBtn>{" "}
              <DriverTriggerReport
                h={{ base: "40px", md: "55px" }}
                bg="#6484FB"
              >
                Report Driver
              </DriverTriggerReport>
            </HStack>
          </VStack>
        </Box>
      </Flex>{" "}
      {isLoading && <LoadingWidget />}
      <Wrap mx={{ base: "auto", md: "80px" }} p={{ base: "0", md: "32px" }}>
        {reports.map((report, idx) => {
          return (
            <WrapItem key={idx}>
              <ReportCard
                heading={report.caption}
                imageSrc={report.attachment}
                date={report.date}
                time={report.timeNow}
                location={report.location}
                href={"#"}
                description={report.description}
              />
            </WrapItem>
          );
        })}
      </Wrap>
      <Footer />
    </>
  );
}
