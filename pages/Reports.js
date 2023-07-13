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
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
  TabIndicator,
} from "@chakra-ui/react";

import Link from "next/link";
// custom components

import FormTriggerBtn from "../Components/Modal/FormModal/RoadReports.jsx";
import DriverTriggerReport from "../Components/Modal/FormModal/ReportDriver.js";
import ModalWrapper from "../Components/Modal/ModalWrapper.tsx";
import SearchReports from "../Components/SearchReports.jsx";

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
  const [activeTab, setActiveTab] = useState(0);

  const getAllreports = async () => {
    try {
      setIsLoading(!isLoading);
      const db = getFirestore();
      const allReports = [];
      const tabs = []
      if (activeTab == 0) {
        const querySnapshot = await getDocs(collection(db, "report"));

        querySnapshot.forEach((doc) => {
          allReports.push({ id: doc.id, ...doc.data() });
        });
      } else {
        const querySnapshot = await getDocs(collection(db, "report_drivers"));

        querySnapshot.forEach((doc) => {
          allReports.push({ id: doc.id, ...doc.data() });
        });
      }

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

  useEffect(() => {
    getAllreports();
    setReports([]);
    setIsLoading(!isLoading);

    if (reports.length > 0) {
      setIsLoading(!isLoading);
    }
  }, [activeTab]);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex == 0) {
      console.log(tabIndex);
    }
  };

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
      {/* tabs */}
      <Box>
        <SearchReports />
      </Box>
      <Tabs variant="unstyled" position="relative" onChange={handleTabChange}>
        <TabList justifyContent="center">
          <Tab>Road Reports </Tab>
          <Tab>Reported Drivers</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />

        <TabPanels>
          <TabPanel>
          
            <Wrap
              mx={{ base: "auto", md: "80px" }}
              p={{ base: "0", md: "32px" }}
            >
              {reports.map((report, idx) => {
                console.log(report);
                return (
                  <WrapItem key={idx}>
                    <ReportCard
                      heading={report.caption}
                      imageSrc={report.attachment}
                      date={report.date}
                      time={report.timeNow}
                      location={report.location}
                      href={"#"}
                      id={report.id}
                      description={report.description}
                    />
                  </WrapItem>
                );
              })}
            </Wrap>
          </TabPanel>
          <TabPanel>
            {isLoading && <LoadingWidget />}
            <Wrap
              mx={{ base: "auto", md: "80px" }}
              p={{ base: "0", md: "32px" }}
            >
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
                      id={report.id}
                      description={report.description}
                      companyName={report.companyName}
                    />
                  </WrapItem>
                );
              })}
            </Wrap>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </>
  );
}