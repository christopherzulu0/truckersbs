import React from "react";
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import {FaVideo,FaCommentAlt,FaTasks } from "react-icons/fa";
import {BiCast } from "react-icons/bi";
const PersonalHome: React.FC = () => {
  return (
    <Flex
      direction="column"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
      bg="gray.100"
    >
  
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Icon as={BiCast} fontSize={50} color="brand.100" mr={2} />
          <Text fontWeight={800}>Stats</Text>
        </Flex>
        <Stack spacing={3} ml={5} mt={3}>
          <Text fontSize="9pt">
          <Icon as={FaVideo} fontSize={18} color="brand.100" mr={2} mt={-5} />
           Videos 400
          </Text>

          <Text fontSize="9pt">
          <Icon as={FaTasks} fontSize={18} color="brand.100" mr={2} />
           Topics 400
          </Text>

          <Text fontSize="9pt" >
          <Icon as={FaCommentAlt} fontSize={18} color="brand.100" mr={2} />
           Replies 400
          </Text>
          {/* <Button height="30px">Create Post</Button>
          <Button  bg="brand.100" height="30px">
            Create Community
          </Button> */}
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
