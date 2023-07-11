import React, { useState, useEffect } from "react";
import { LoadingWidget } from "../pages/Reports";

import { getFirestore, collection, getDocs } from "firebase/firestore";

import {
  Wrap,
  WrapItem,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import ReportCard from "../Components/ReportCard";
import { FaArrowCircleRight } from "react-icons/fa";

function DriverReports() {
  const [reports, setReports] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllreports = async (limit) => {
    try {
      setIsLoading(!isLoading);
      console.log(reports.length);
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "report_drivers"));

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
                companyName={report.companyName}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
}

export default DriverReports;
