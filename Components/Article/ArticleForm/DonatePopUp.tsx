import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { IoIosClose } from "react-icons/io";

const DonateComponent = () => {
  const [showDonate, setShowDonate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDonate(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  if (!showDonate) {
    return null; // Don't render the component if showDonate is false
  }

  const handleClose = () => {
    setShowDonate(false);
  }

  return (
    <Box
      className="donate-popup"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="rgba(0, 0, 0, 0.8)"
      zIndex={999}
    >
      <Box 
       p={4} 
       background="white" 
       borderRadius="md" 
       maxWidth={'full'} 
       height={'auto'}
       gap={'4'}
       mb={'8'}
       >
        <Box
        display={'flex'}
        justifyContent={'flex-end'} 
        alignItems={'flex-end'}
        cursor={'pointer'}
        mb={'4'}
        >
            <IoIosClose size={25} color='blue' onClick={handleClose}/>
        </Box>
        <Text fontSize="20px" fontWeight="normal" textAlign={'center'} mb={4} width={'80%'} m={'auto'}>
          Please donate to keep this site running. Just 5 dollars
        </Text>
        <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
        mt={'8'}
        >
        <Button colorScheme="blue" mr={2} rounded={'none'} color={'white'} fontWeight={'bold'}>
          Donate
        </Button>
        <Button colorScheme="blue" mr={2} rounded={'none'} color={'white'} fontWeight={'bold'} onClick={handleClose}>
          Cancel
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DonateComponent;