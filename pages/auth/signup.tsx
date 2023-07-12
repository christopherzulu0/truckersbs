import React from "react";
import Footer from "@/Components/Footer";
import { Container, Input, Stack, Button, Box, Image, FormLabel } from '@chakra-ui/react'




type Props = {}

const Signup = (props: Props) => {
  return (
    <Container maxW="100%" justifyContent="flex-start" p={0} pt="10" position="relative" >
      <Box
        position="absolute"
        mb={10}
        overflow="hidden"
        height="500px"
        width="100%"
      >
        <Image
          src="/images/signupbg-1.svg"
          alt="Truck Image"
          position="absolute"
          p={0}
          left={0}
          top={4}
          zIndex={-1}
        />
        <Image
          src="/images/signupbg.svg"
          alt="Truck Image"
          position="absolute"
          p={0}
          right={0}
          top={4}
          height="520px"
          zIndex={0}
        />
      </Box>
      <Container
        maxW="md"
        margin={0}
        padding={0}
        flex={1}
        justifyContent="center"
        ml={10}
        mt={10}
      >
        <Button bg='white' color="black" size='md' width="100%">
          Sign in with Google
        </Button>
      </Container>
      <Container
        maxW="md"
        padding={0}
        mt="5"
        m={0}
        ml={10}
        zIndex={10}
      >
        <Stack spacing={1}>

          <FormLabel htmlFor="name" color="black">Name</FormLabel>
          <Input bg="white" id="name" placeholder='Mark Johnston' size='md' />

          <FormLabel htmlFor="email">Email</FormLabel>
          <Input bg="white" id="email" placeholder='example@example.com' size='md' />

          <FormLabel htmlFor="location" color="black">Location</FormLabel>
          <Input bg="white" id="location" placeholder='Lake road 123 Street' size='md' />

          <FormLabel htmlFor="transmission" color="black">Transmission</FormLabel>
          <Input bg="white" placeholder='Automatic' size='md' />

          <FormLabel htmlFor="name" color="black">Trailers</FormLabel>
          <Input bg="white" placeholder='Trailers' size='md' />

          <FormLabel htmlFor="name" color="black">Name</FormLabel>
          <Input bg="white" placeholder='Driving Experience' size='md' />

          <FormLabel htmlFor="mtExp" color="black">Mountain Experience</FormLabel>
          <Input bg="white" id="mtExp" placeholder='4' size='md' />

          <FormLabel htmlFor="offExp" color="black">Offroad Experience</FormLabel>
          <Input bg="white" id="offExp" placeholder='6' size='md' />

          <FormLabel htmlFor="iceExp" color="black">Ice Road Experience</FormLabel>
          <Input bg="white" id="iceExp" placeholder='5' size='md' />

          <FormLabel htmlFor="cv" color="black">CV</FormLabel>
          <Input bg="white" id="cv" placeholder='CV' size='md' />
        </Stack>
      </Container>
      <Container maxW="md" mb={10} margin={0} padding={0} flex={1} justifyContent="center" >
        <Button bg='white' color="black" size='md' >
          Sign Up
        </Button>
      </Container>

      <Footer />
    </Container>
  )
}

export default Signup;