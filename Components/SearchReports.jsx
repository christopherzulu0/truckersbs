import {
  Box,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputRightElement,
  IconButton,
  Select,
  Tab,
  TabList,
  TabPanel,
  InputGroup,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import {
  doc,
  getDoc,
  getFirestore,
  query,
  collection,
  limit,
  onSnapshot,
  getDocs,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchPage = ({
  setRoadReports,
  setDriverReports,
  setIsAlertOpen,
  activeTab,
}) => {
  let db = getFirestore();
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [inputType, setInputType] = useState("text");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    console.log(activeTab);
    // Perform the search based on the selected filters
    fetchReports();
  };

  const fetchReports = async () => {
    try {
      const reprtRef = collection(db, "report");
      const q = query(reprtRef, where("caption", "==", searchTerm));

      const reportDriverRef = collection(db, "report_drivers");

      const q1 = query(reportDriverRef, where("caption", "==", searchTerm));
      let tempArray = [];

      if (activeTab === 0) {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          tempArray.push({ id: doc.id, ...doc.data() });
          setRoadReports(tempArray);
          console.log(doc.data());
        });
      } else {
        const querySnapshot = await getDocs(q1);
        querySnapshot.forEach((doc) => {
          tempArray.push({ id: doc.id, ...doc.data() });
          setDriverReports(tempArray);
          console.log(doc.data());
        });
      }

      setSearchTerm("");

      if (tempArray.length == 0) {
        setIsAlertOpen(true);
      }
      console.log(tempArray);
    } catch (error) {
      console.error("Error fetching related posts:", error);
    }
  };

  return (
    <>
      <HStack
        style={{
          width: "50%",
          border: "1px solid #F5F7FA",

          margin: "2% auto",
          padding: "14px",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "30px 30px",
        }}
      >
        <>
          <InputGroup border="none">
            <FormControl maxW="120px">
              <Input
                outline="none"
                border="none"
                type={inputType}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="time"
              />
            </FormControl>

            <FormControl maxW="120px">
              <Input
                type={inputType}
                value={title}
                border="none"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </FormControl>

            <FormControl maxW="120px">
              <Input
                type={inputType}
                value={date}
                border="none"
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
              />
            </FormControl>
            <FormControl maxW="120px" border="none">
              <Input
                type={inputType}
                value={location}
                border="none"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="location"
              />
            </FormControl>
            <Input
              type="text"
              placeholder="Search keyword."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<AiOutlineSearch color="black" />}
                onClick={handleSearch}
                colorScheme="transparent"
              />
            </InputRightElement>
          </InputGroup>
        </>
      </HStack>
    </>
  );
};

export default SearchPage;
