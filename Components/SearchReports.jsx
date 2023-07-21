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
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { format } from "date-fns";

const SearchPage = () => {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [inputType, setInputType] = useState("text");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    // Perform the search based on the selected filters
  };

  const handleInputToggle = () => {
    setInputType(inputType === "text" ? "password" : "text");
  };

  return (
    <>
      <>{/* <Tab>Search</Tab> */}</>

      <HStack
        style={{
          width: "50%",
          border: "1px solid #F5F7FA",
          // backgroundColor: "",
          margin: "2% auto",
          padding: "14px",
          borderRadius: "30px 30px",
        }}
      >
        <>
          {/* <Box p={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Time</FormLabel>
                  <Input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Enter time"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Select date"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Category</FormLabel>
                  <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Select category"
                  >
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                  </Select>
                  </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                  <Button onClick={handleSearch} colorScheme="blue">
                  Search
                  </Button>
                  </GridItem>
                  </Grid>
                </Box> */}

          <InputGroup border="none">
            <FormControl maxW="120px">
              {/* <FormLabel>Date</FormLabel> */}
              <Input
                outline="none"
                border="none"
                type={inputType}
                value={"time"}
                onClick={(e) => handleInputToggle()}
                // onChange={(e) => setDate(e.target.value)}
                placeholder="Select date"
              />
            </FormControl>

            <FormControl maxW="120px">
              {/* <FormLabel>Category</FormLabel> */}
              <Select
                border="none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categories"
              >
                <option value="category1">location 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </Select>
            </FormControl>

            <FormControl maxW="120px">
              {/* <FormLabel>Date</FormLabel> */}
              <Input
                type={inputType}
                value={date}
                border="none"
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
              />
            </FormControl>
            <FormControl maxW="120px" border="none">
              {/* <FormLabel>Category</FormLabel> */}
              <Select
                value={category}
                border="none"
                onChange={(e) => setCategory(e.target.value)}
                placeholder="location"
              >
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </Select>
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
