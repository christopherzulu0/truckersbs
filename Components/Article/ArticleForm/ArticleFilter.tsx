import React from 'react';
import { parse } from "date-fns";
import { Box, Button, Flex, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Article } from '@/pages/archives';
import { useState } from "react";
import { firestore } from '@/firebase/clientApp';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

interface ArticleFilterProps {
   articles: Article[];
    setArticles: React.Dispatch<React.SetStateAction<Article[]>>
}


const ArticleFilter = ({ articles, setArticles }: ArticleFilterProps) => {
  const [searchText, setSearchText] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedReads, setSelectedReads] = useState("");

  const handleFilter = async () => {
    let filteredArticles: any = [];
  
    try {
      const firestore = getFirestore();
      const articlesCollection = collection(firestore, "articles");
      let articlesQuery = query(articlesCollection);


    if (searchText) {
      const searchQuery = searchText.toLowerCase();
      articlesQuery = query(
        articlesCollection,
        where("title", ">=", searchQuery),
        where("title", "<=", searchQuery + "\uf8ff")
      );
    }
  
      if (selectedYear) {
        const startOfYear = new Date(parseInt(selectedYear), 0, 1);
        const endOfYear = new Date(parseInt(selectedYear), 11, 31, 23, 59, 59);
  
        articlesQuery = query(
          articlesCollection,
          where("createdAt", ">=", startOfYear),
          where("createdAt", "<=", endOfYear)
        );
      }
  
      if (selectedCategory) {
        articlesQuery = query(articlesCollection, where("category", "==", selectedCategory));
      }
  
      if (selectedReads) {
        const [minReads, maxReads] = selectedReads.split("-");
        articlesQuery = query(articlesCollection, where("reads", ">=", parseInt(minReads)), where("reads", "<=", parseInt(maxReads)));
      }
  
      const querySnapshot = await getDocs(articlesQuery);
      querySnapshot.forEach((doc) => {
        filteredArticles.push(doc.data());
      });
    } catch (error) {
      console.error("Error retrieving and filtering articles from Firebase:", error);
    }
  
    setArticles(filteredArticles);
  };  

  const handleReset = () => {
    setSearchText("");
    setSelectedYear("");
    setSelectedCategory("");
    setSelectedReads("");
    setArticles(articles); // Reset to the original list of articles
  };

  console.log('articles ::::', articles);
  

  return (
    <>
    <Box
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      maxW={"full"}
      padding={"2"}
      background={"white"}
      gap={"2"}
      marginTop="180px"
      // marginLeft={{base: '0', sm: '0', md: '20', lg: '28'}}
      height="700px"
      boxShadow={"md"}
      display={"flex"}
      justifyContent={"start"}
      alignItems={"start"}
      flexDirection={"column"}
    >
      <Flex direction="column" mb={4}>
        <FormControl>
          <Flex>
            <Input
              type="text"
              placeholder="Search"
              pr="4.5rem"
              width={{ base: "100%" }}
              rounded="full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Box position="absolute" right="1rem" top="50%" transform="translateY(-50%)">
              <SearchIcon color="gray.400" />
            </Box>
          </Flex>
        </FormControl>
      </Flex>
      <Flex direction="column" mb={4}>
        <FormControl width={"full"}>
          <FormLabel>Period</FormLabel>
          <Select
            placeholder="Select year"
            width="250px"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex direction="column" mb={4}>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select category"
            width="250px"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="Health">Health</option>
            <option value="Weather">Weather</option>
            <option value="Accidents">Accidents</option>
            <option value="General">General</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex direction="column" mb={4}>
        <FormControl>
          <FormLabel>Reads</FormLabel>
          <Select
            placeholder="Select range"
            width="250px"
            value={selectedReads}
            onChange={(e) => setSelectedReads(e.target.value)}
          >
            <option value="">All</option>
            <option value="0-5000">0-5000</option>
            <option value="5000-10000">5000-10000</option>
            <option value="10000-15000">10000-15000</option>
          </Select>
        </FormControl>
      </Flex>
      <Button onClick={handleFilter}>Filter</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Box>
    </>
  );
};

export default ArticleFilter;