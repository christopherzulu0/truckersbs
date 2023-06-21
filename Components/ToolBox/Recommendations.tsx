/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
  Select,
  Center
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {AiOutlineHistory } from "react-icons/ai";
import { RiArchiveDrawerFill,RiStarLine } from "react-icons/ri";
type RecommendationsProps = {};

const Recommendations: React.FC<RecommendationsProps> = () => {


  return (
    <Flex
      direction="column"
      bg="#6385FF"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      ml={'-48.5rem'}
      mr={'55rem'}
      height={'800px'}
    >
     
      <Flex 
      direction="column">
        <Center py={4}>
        <Text
        color={'white'}
        >
          Filter
        </Text>
        
        </Center>
        <Stack
        width={200}
        ml={10}
        spacing={3}>
        <Select variant='filled' placeholder='Filled' />
      </Stack><br/>
     
     <Center py={4}>
      <RiArchiveDrawerFill
      fontSize={'50px'}
      color="white"
        />
        <Text 
        color="white"
        mt={'90px'}
        ml={'-3rem'}
        >
          History
        </Text>
        </Center>

        <Center py={4}>
      <AiOutlineHistory
      fontSize={'50px'}
      color="white"
        />
        <Text 
        color="white"
        mt={'90px'}
        ml={'-3rem'}
        >
         Archive
        </Text>
        </Center>


        <Center py={4}>
      <RiStarLine
      fontSize={'50px'}
      color="white"
        />
        <Text 
        color="white"
        mt={'90px'}
        ml={'-3rem'}
        >
         Favorites
        </Text>
        </Center>
    
    </Flex>
    </Flex>
  );
};
export default Recommendations;
