import React from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const ArticleFilter = () => {
  return (
    <Box
    width={{base: '100%', sm: '100%', md: '100%', lg: '100%'}}
    maxW={'full'}
    padding={'2'}
    background={'white'}
    gap={'2'}
    marginTop="180px"
    // marginLeft={{base: '0', sm: '0', md: '20', lg: '28'}}
    height="700px"
    boxShadow={'md'}
    display={'flex'}
    justifyContent={'start'}
    alignItems={'start'}
    flexDirection={'column'}
    >
      <Flex direction="column" mb={4}>
        <FormControl>
          <Flex>
            <Input type="text" placeholder="Search" pr="4.5rem" width={{base:'100%'}} rounded={'full'} />
            <Box position="absolute" right="1rem" top="50%" transform="translateY(-50%)">
              <SearchIcon color="gray.400" />
            </Box>
          </Flex>
        </FormControl>
      </Flex>
      <Flex direction="column" mb={4}>
        <FormControl width={'full'}>
          <FormLabel>Period</FormLabel>
          <Select placeholder="Select year" width="250px">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex direction="column" mb={4}>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select placeholder="Select category" width="250px">
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex direction="column" mb={4}>
        <FormControl>
          <FormLabel>Reads</FormLabel>
          <Select placeholder="Select range" width="250px">
            <option value="0-5000">0-5000</option>
            <option value="5000-10000">5000-10000</option>
            <option value="10000-15000">10000-15000</option>
          </Select>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default ArticleFilter;