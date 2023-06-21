import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup, 
  InputRightElement,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,SearchIcon } from '@chakra-ui/icons';
import Footer from "../Components/Footer"

const Links = ['Filter', 'Shops', 'Categories'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);




export default function CategoryList() {
const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <center>
     <Box bg={useColorModeValue('gray.100', 'gray.100')} px={4} style={{width:"70rem"}} mt={5}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <InputGroup>
        <InputRightElement
          pointerEvents="none"
          color="gray.400"
          children={<SearchIcon mb={2} />}
        />
        <Input
          placeholder="Search for Shops"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>



      <Box p={4}>
      <Flex
        mt={7}
      style={{width:"70rem"}}
      h={'50vh'}
      backgroundImage={
        'url(https://th.bing.com/th/id/R.d75b8672d00e71acbc65f2a9bebfd66d?rik=IGut0V%2fzTrxVzg&pid=ImgRaw&r=0)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
           ACCESSORIES
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              ml={12}
              _hover={{ bg: 'blue.500' }}>
             Shop Now!
            </Button>
           
          </Stack>
        </Stack>
      </VStack>
    </Flex>

    <Flex
  display={['flex']}
  justifyContent={['center']}
  flexDirection={['column', 'row']}
>
  <Flex
    mt={7}
    width={['100%', '77.5%', '57.5%', '37.5%']}
    mx={['0', '0.3rem']}
    h={['40vh', '50vh']}
    backgroundImage={
      'url(https://th.bing.com/th/id/OIP.eUHbtMIWY8F-Z7XCYFuMKwAAAA?pid=ImgDet&rs=1)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}
  >
    <VStack
      w={'full'}
      justify={'center'}
      px={[2, 4, 8]}
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
    >
      <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
        <Text
          color={'white'}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={['2xl', '3xl', '4xl']}
        >
          FOOT WEAR
        </Text>
        <Stack direction={'row'}>
          <Button
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            mt={2}
            _hover={{ bg: 'blue.500' }}
          >
            Shop Now!
          </Button>
        </Stack>
      </Stack>
    </VStack>
  </Flex>

  <Flex
    mt={7}
    width={['100%', '77.5%', '57.5%', '37.5%']}
    mx={['0', '0.3rem']}
    h={['40vh', '50vh']}
    backgroundImage={
      'url(https://th.bing.com/th/id/OIP._0ebgEJ1TLM5Z7t0ggIL0QHaD3?pid=ImgDet&w=946&h=493&rs=1)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}
  >
    <VStack
      w={'full'}
      justify={'center'}
      px={[2, 4, 8]}
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
    >
      <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
        <Text
          color={'white'}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={['2xl', '3xl', '4xl']}
        >
          FUEL
        </Text>
        <Stack direction={'row'}>
          <Button
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            mt={2}
            _hover={{ bg: 'blue.500' }}
          >
            Shop Now!
          </Button>
        </Stack>
      </Stack>
    </VStack>
  </Flex>
</Flex>

     



    <Flex
    mt={8}
    mb={7}
      style={{width:"70rem"}}
      h={'50vh'}
      backgroundImage={
        'url(https://66.media.tumblr.com/ca0763d981ab10b72067c10aafc12f12/tumblr_ode0x2y97K1r5jwlho2_500.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
          CLOTHING
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              ml={12}
              _hover={{ bg: 'blue.500' }}>
             Shop Now!
            </Button>
           
          </Stack>
        </Stack>
      </VStack>
    </Flex>

      </Box>
      </center>
      
      <Footer/>
    </>
  )
}
