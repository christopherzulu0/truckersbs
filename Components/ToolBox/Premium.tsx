import React from "react";
import { Flex, Icon, Text, Stack,CardHeader, CardBody, CardFooter,Card,Heading,Box,StackDivider } from "@chakra-ui/react";
import { BiTrendingUp,BiMenuAltLeft } from "react-icons/bi";
import {FaRegClock} from "react-icons/fa";
const Premium: React.FC = () => {
  return (
    <Flex
      direction="column"
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor="gray.300"
      bg="gray.100"
    >
      <Flex mb={2} >
        <Icon as={BiTrendingUp} fontSize={26} color="brand.100" mt={2} />
        <Stack spacing={1} fontSize="18pt" pl={2}>
          <Text fontWeight={800}>Trending</Text>
        </Stack>
      </Flex>
   <Stack divider={<StackDivider />} spacing='4'>
     <Box>
       <Heading size='xs' textTransform='uppercase' >
       <Icon as={BiMenuAltLeft} fontSize={16} color="brand.100"  />
       Accident on Highway 16 north bay
       </Heading>
       <Icon as={FaRegClock} fontSize={16} color="brand.100"   mt={3} />
       <Text pt='2' fontSize='sm' ml={7} mt={-8}>
         3 Days, 5 Hours Ago
       </Text>
     </Box>
     <Box>
       <Heading size='xs' textTransform='uppercase'>
       <Icon as={BiMenuAltLeft} fontSize={16} color="brand.100"  />
       San Francisco black ice
       </Heading>
       <Icon as={FaRegClock} fontSize={16} color="brand.100"   mt={3} />
       <Text pt='2' fontSize='sm' ml={7} mt={-8}>
         3 Days, 5 Hours Ago
       </Text>
     </Box>
     <Box>
       <Heading size='xs' textTransform='uppercase' >
       <Icon as={BiMenuAltLeft} fontSize={16} color="brand.100"  />
       Montreal Black Ice
       </Heading>
       <Icon as={FaRegClock} fontSize={16} color="brand.100"   mt={3} />
       <Text pt='2' fontSize='sm' ml={7} mt={-8}>
       3 Days, 5 Hours Ago
       </Text>
     </Box>
   </Stack>
 
      {/* <Button height="30px" bg="brand.100">
        Try Now
      </Button> */}
    </Flex>
  );
};
export default Premium;
