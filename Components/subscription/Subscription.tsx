import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Stack,
} from '@chakra-ui/react';

const SubscriptionCard = () => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('monthly');


  const handleCardHolderNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCardHolderName(event.target.value);
  };

  const handleCardNumberChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCvv(event.target.value);
  };

  const handleSubscriptionTypeChange = (value: React.SetStateAction<string>) => {
    setSubscriptionType(value);
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    // You can send the card information and subscription type to the server for processing
    console.log('Subscribed!');
    console.log('Card Number:', cardHolderName);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    console.log('Subscription Type:', subscriptionType);
  };

  return (
    <Box
    width={'100%'}
    m={'auto'}
    >
      <Stack width={'full'} spacing={3}>
      <FormControl id="subscriptionType" pt={'4'}>
          <Box
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          flexDirection={'column'}
          background={'white'}
          p={'2'}
          height={'80px'}
          >
          <FormLabel
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          ml={'4'}
          >Monthly</FormLabel>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'100%'}
          >
           <Box
           display={'flex'}
           justifyContent={'center'}
           alignItems={'center'}
           flexDirection={'column'}
           color={'blue.500'}
           fontWeight={'semibold'}
           fontSize={'10px'}
           ml={'10'}
           >
           CAD $ 0.99/month
           <Box as="span" color={'gray.700'} fontWeight={'normal'}>
               Recurring
            </Box>
           </Box>
           <Box as="span" background={'blue.500'} fontSize="15px" py="1px" px={'2'} rounded="sm" mr={'2'} color="white"fontWeight="normal">
               Selected
            </Box>
          </Box>

          </Box>
        </FormControl>
        <Box 
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
          gap={'2'}
          p={'1'}
          border={'2px solid #8ed9f5'}
        >
        <Image src="/images/masterCard.png" alt="Facebook" boxSize={10} width={'full'} objectFit={'contain'} cursor={'pointer'} />
        <Image src="/images/paypal.png" alt="Facebook" boxSize={10}  width={'full'} objectFit={'contain'} cursor={'pointer'}  />
        <Image src="/images/visa.png" alt="Facebook" boxSize={10} width={'full'}  objectFit={'contain'} cursor={'pointer'} />
        <Image src="/images/googlePay.png" alt="Facebook" boxSize={10} width={'full'} objectFit={'contain'} cursor={'pointer'}  />
        </Box>
        <FormControl id="cardHolderName">
          <FormLabel color={'gray.400'} fontSize={'12px'}>Card Holder Name</FormLabel>
          <Input
            type="text"
            background={'white'}
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            border={'2px solid lightgray'}
          />
        </FormControl>
        <FormControl id="cardNumber">
          <FormLabel color={'gray.400'} fontSize={'12px'}>Card Number</FormLabel>
          <Input
            type="text"
            background={'white'}
            value={cardNumber}
            onChange={handleCardNumberChange}
            border={'2px solid lightgray'}
          />
        </FormControl>

        <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={'2'}
        >
        <FormControl id="expiryDate">
          <FormLabel color={'gray.400'} fontSize={'12px'}>Expiry Date</FormLabel>
          <Input
            type="text"
            value={expiryDate}
            background={'white'}
            onChange={handleExpiryDateChange}
          />
        </FormControl>

        <FormControl id="cvv">
          <FormLabel color={'gray.400'} fontSize={'12px'}>CVV</FormLabel>
          <Input type="text" value={cvv} background={'white'} onChange={handleCvvChange} />
        </FormControl>
        </Box>

        <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
        <Button colorScheme="blue" width="100px" p={'1'} onClick={handleSubscribe}>
          Complete
        </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SubscriptionCard;