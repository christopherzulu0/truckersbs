import React, { useState } from "react";
import Footer from "@/Components/Footer";
import {
  Container,
  Input,
  Stack,
  Button,
  Box,
  Image,
  FormLabel,
  Select,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormControl,
  ModalFooter,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { functions, auth, httpsCallable } from "@/firebase/clientApp";
import getUserRole from "@/custom/getUserRole";

type Props = {}

const Signup = (props: Props) => {

  const [signInWithEmailAndPassword, _, loading, authError] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("")
  const [location, setLocation] = useState("");
  const [transmission, setTransmission] = useState("");
  const [trailers, setTrailers] = useState("");
  const [drivingExperience, setDrivingExperience] = useState("");
  const [mountainExperience, setMountainExperience] = useState("");
  const [offroadExperience, setOffroadExperience] = useState("");
  const [iceRoadExperience, setIceRoadExperience] = useState("");
  const [cv, setCv] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);



  const onSubmit = async () => {
    try {
      // Call the Firebase Cloud Function for user registration
      const createUserWithRole = httpsCallable(functions, "createUserAndAddUserRole"); // Use the `httpsCallable` function from `functions`

      const response: any = await createUserWithRole({
        email: email,
        password: password,
        role: role,
      });

      // If user Sign Up is succcessful, Log user in with credentials in state.
      if (response?.data?.status && response?.data.status === 200) {


        const loginResponse = await signInWithEmailAndPassword(email, password);
        router.push("/")
        if (loginResponse) {
          console.log("Login Response", loginResponse);
          console.log("user role:", await getUserRole(loginResponse.user))
        }
        else {
          console.log("Error Somewhere");
        }
      }

    } catch (error) {
      // Handle any errors that occur during registration
      console.error("Error registering user:", error);
    }
  };

  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePasswordSubmit = async (e: any) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setPasswordError(false);
      await onSubmit();
    } else {
      setPasswordError(true);
    }
  };

  const handleRoleChange = (event: any) => {
    setRole(event.target.value);
  };

  const handleTransmissionChange = (event: any) => {
    setTransmission(event.target.value);
  };

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

          {/* Name */}
          <FormLabel htmlFor="name" color="black">
            Name
          </FormLabel>
          <Input
            bg="white"
            id="name"
            placeholder="Mark Johnston"
            size="md"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          {/* Email */}
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            bg="white"
            id="email"
            placeholder="example@example.com"
            size="md"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          {/* Location */}
          <FormLabel htmlFor="location" color="black">
            Location
          </FormLabel>
          <Input
            bg="white"
            id="location"
            placeholder="Lake road 123 Street"
            size="md"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />

          {/* Transmission */}
          <FormControl>
            <FormLabel htmlFor="role" color="black">
              Transmission
            </FormLabel>
            <Select
              bg="white"
              id="role"
              placeholder="Select Role"
              size="md"
              value={role}
              onChange={handleTransmissionChange}
              required
            >
              <option value="automatic">Automatic</option>
              <option value="manua">Manual</option>
            </Select>
          </FormControl>

          {/* Trailers */}
          <FormLabel htmlFor="trailers" color="black">
            Trailers
          </FormLabel>
          <Input
            bg="white"
            placeholder="Trailers"
            size="md"
            value={trailers}
            onChange={(event) => setTrailers(event.target.value)}
            required
          />

          {/* Driving Experience */}
          <FormLabel htmlFor="drivingExperience" color="black">
            Driving Experience
          </FormLabel>
          <Input
            bg="white"
            placeholder="Driving Experience"
            size="md"
            value={drivingExperience}
            onChange={(event) => setDrivingExperience(event.target.value)}
            required
          />

          {/* Mountain Experience */}
          <FormLabel htmlFor="mountainExperience" color="black">
            Mountain Experience
          </FormLabel>
          <Input
            bg="white"
            id="mountainExperience"
            placeholder="4"
            size="md"
            value={mountainExperience}
            onChange={(event) => setMountainExperience(event.target.value)}
            required
          />

          {/* Offroad Experience */}
          <FormLabel htmlFor="offroadExperience" color="black">
            Offroad Experience
          </FormLabel>
          <Input
            bg="white"
            id="offroadExperience"
            placeholder="6"
            size="md"
            value={offroadExperience}
            onChange={(event) => setOffroadExperience(event.target.value)}
            required
          />

          {/* Ice Road Experience */}
          <FormLabel htmlFor="iceRoadExperience" color="black">
            Ice Road Experience
          </FormLabel>
          <Input
            bg="white"
            id="iceRoadExperience"
            placeholder="5"
            size="md"
            value={iceRoadExperience}
            onChange={(event) => setIceRoadExperience(event.target.value)}
            required
          />

          {/* CV */}
          <FormLabel htmlFor="cv" color="black">
            CV
          </FormLabel>
          <Input
            bg="white"
            id="cv"
            placeholder="CV"
            size="md"
            value={cv}
            onChange={(event) => setCv(event.target.value)}
            required
          />
          {/* Role */}
          <FormControl>
            <FormLabel htmlFor="role" color="black">
              Role
            </FormLabel>
            <Select
              bg="white"
              id="role"
              placeholder="Select Role"
              size="md"
              value={role}
              onChange={handleRoleChange}
              required
            >
              <option value="18wheeler">18 Wheeler</option>
              <option value="4wheeler">4 Wheeler</option>
              <option value="carrier">Carrier</option>
            </Select>
          </FormControl>
        </Stack>
      </Container>
      <Container maxW="md" mb={10} margin={0} padding={0} flex={1} justifyContent="center" >
        {/* Sign Up Button */}
        <Button ml={10} mt="10" w={"full"} type="submit" colorScheme="blue" color="white" size="lg" onClick={handleSignUpClick}>
          Sign Up
        </Button>
      </Container>
      {/* Password Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Up Account Password</ModalHeader>
          <ModalBody>
            <FormControl isInvalid={passwordError}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>

            <FormControl isInvalid={passwordError}>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                minLength={6}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              {passwordError && <FormErrorMessage>Passwords do not match or less than 6 characters</FormErrorMessage>}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlePasswordSubmit}>
              Submit
            </Button>
            <Button onClick={handleModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </Container>
  )
}

export default Signup;